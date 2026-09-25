"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const KEY = "mascot-hidden";
const NAME = "mini witty";

// Hidden/shown lives in localStorage; `fallback` covers browsers where storage throws.
let fallback = false;
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
function isHidden() {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return fallback;
  }
}
function remember(hidden: boolean) {
  fallback = hidden;
  try {
    if (hidden) localStorage.setItem(KEY, "1");
    else localStorage.removeItem(KEY);
  } catch {}
  listeners.forEach((l) => l());
}

// Minimal shapes of the three.js objects the viewer exposes; only what's used here.
type Vec3 = { x: number; y: number; z: number; clone(): Vec3; copy(v: Vec3): Vec3; sub(v: Vec3): Vec3; add(v: Vec3): Vec3 };
type Spherical = { radius: number; phi: number; theta: number; setFromVector3(v: Vec3): Spherical };
type Stage = HTMLElement & {
  ready: Promise<{ THREE: { Spherical: new () => Spherical; Vector3: new () => Vec3 & { setFromSpherical(s: Spherical): Vec3 } } }>;
  _camera?: { position: Vec3 };
  _scene?: { children: { isSprite?: boolean; visible: boolean; material: { opacity: number } }[] };
  _controls?: {
    enabled: boolean;
    enableZoom: boolean;
    enablePan: boolean;
    maxPolarAngle: number;
    target: Vec3;
    update(): void;
    addEventListener(type: "start" | "end", fn: () => void): void;
  };
  shadowRoot: ShadowRoot | null;
};

// After the visitor lets go, swing the camera back to the front so mini witty
// doesn't stay facing away. Interpolates around the orbit (not straight through the model).
async function springHome(stage: Stage) {
  const { THREE } = await stage.ready;
  const cam = stage._camera!, c = stage._controls!;
  const home = new THREE.Spherical().setFromVector3(cam.position.clone().sub(c.target));
  let timer: ReturnType<typeof setTimeout>;
  let frame = 0;
  c.addEventListener("start", () => {
    clearTimeout(timer);
    cancelAnimationFrame(frame);
  });
  c.addEventListener("end", () => {
    timer = setTimeout(() => {
      const from = new THREE.Spherical().setFromVector3(cam.position.clone().sub(c.target));
      // shortest way round
      const dTheta = ((home.theta - from.theta + 3 * Math.PI) % (2 * Math.PI)) - Math.PI;
      const t0 = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - t0) / 900);
        const e = 1 - (1 - k) ** 3;
        const s = new THREE.Spherical();
        s.radius = from.radius + (home.radius - from.radius) * e;
        s.phi = from.phi + (home.phi - from.phi) * e;
        s.theta = from.theta + dTheta * e;
        cam.position.copy(new THREE.Vector3().setFromSpherical(s).add(c.target));
        c.update();
        if (k < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, 1500);
  });
}

// mascot.html turns orbit controls off once its scene is built (and removes the
// viewer toolbar at the same moment). Wait for that, then switch rotate back on
// from out here so mascot.html itself stays untouched. Same-origin iframe, so
// contentDocument is readable.
// The iframe's load event fires before three.js has downloaded and the scene is
// built, so `onReady` (not onLoad) is what reveals the mascot; otherwise the
// viewer's own "Drag to orbit / Download" UI flashes on screen first.
function hookStage(iframe: HTMLIFrameElement, onReady: () => void, onWave: () => void) {
  const started = performance.now();
  const tick = () => {
    const stage = iframe.contentDocument?.querySelector("three-d-stage") as Stage | null;
    const c = stage?._controls;
    if (stage && c && !stage.shadowRoot?.querySelector(".toolbar")) {
      c.enabled = true;
      c.enableZoom = false; // keep the mouse wheel for scrolling the page
      c.enablePan = false;
      c.maxPolarAngle = Math.PI / 2; // don't let it flip under the floor
      stage.style.cursor = "grab";
      springHome(stage);
      onReady();

      // The built-in "Hi!" bubble is the only sprite in the scene. Make it
      // invisible (its scale/visibility still animate each loop) and use its
      // appearance as the cue to show our own HTML bubble with custom text.
      const bubble = stage._scene?.children.find((o) => o.isSprite);
      if (bubble) {
        bubble.material.opacity = 0;
        let was = false;
        const poll = setInterval(() => {
          if (!iframe.isConnected) return clearInterval(poll);
          if (bubble.visible && !was) onWave();
          was = bubble.visible;
        }, 100);
      }
      return;
    }
    if (performance.now() - started < 30000) setTimeout(tick, 100);
  };
  tick();
}

export default function FloatingMascot() {
  // null on the server/hydration pass, so neither the mascot nor the restore button flashes on load.
  const hidden = useSyncExternalStore(subscribe, isHidden, () => null);
  // Drop-in starts only once the 3D scene has loaded, otherwise it'd fall in empty.
  const [ready, setReady] = useState(false);
  // Where the visitor dragged it to (top-left corner, px). null = default corner.
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  // Speech bubble text; null = hidden.
  const [say, setSay] = useState<string | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const sayTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // ponytail: on resize just go back to the corner instead of re-clamping.
    const reset = () => setPos(null);
    window.addEventListener("resize", reset);
    const timers = sayTimers.current;
    return () => {
      window.removeEventListener("resize", reset);
      timers.forEach(clearTimeout);
    };
  }, []);

  // Each wave (every 8s loop): "Hi!", then 1s later "I am mini witty", then hide.
  const onWave = () => {
    sayTimers.current.forEach(clearTimeout);
    setSay("Hi!");
    sayTimers.current = [
      setTimeout(() => setSay(`I am ${NAME}`), 1000),
      setTimeout(() => setSay(null), 3500),
    ];
  };

  const moveTo = (x: number, y: number) => {
    const box = boxRef.current!.getBoundingClientRect();
    setPos({
      x: Math.min(Math.max(0, x), window.innerWidth - box.width),
      y: Math.min(Math.max(0, y), window.innerHeight - box.height),
    });
  };

  if (hidden === null) return null;

  if (hidden) {
    return (
      <button
        type="button"
        className="mascot-restore"
        aria-label={`Show ${NAME}`}
        title={`Show ${NAME}`}
        onClick={() => {
          setReady(false);
          remember(false);
        }}
      >
        ☁️
      </button>
    );
  }

  return (
    <div
      ref={boxRef}
      className={`mascot-float${ready ? " is-ready" : ""}`}
      style={pos ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" } : undefined}
    >
      <iframe
        src="/mascot/mascot.html"
        title={NAME}
        onLoad={(e) => hookStage(e.currentTarget, () => setReady(true), onWave)}
        tabIndex={-1}
        aria-hidden="true"
      />
      {say && (
        <span key={say} className="mascot-say" aria-hidden="true">
          {say}
        </span>
      )}
      {/* Invisible strip across the top: drag here to move (dragging the cloud spins it). */}
      <button
        type="button"
        className="mascot-grip"
        aria-label={`Move ${NAME} (drag, or use arrow keys)`}
        onPointerDown={(e) => {
          const box = boxRef.current!.getBoundingClientRect();
          drag.current = { dx: e.clientX - box.left, dy: e.clientY - box.top };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (drag.current) moveTo(e.clientX - drag.current.dx, e.clientY - drag.current.dy);
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}
        onKeyDown={(e) => {
          const step = { ArrowLeft: [-20, 0], ArrowRight: [20, 0], ArrowUp: [0, -20], ArrowDown: [0, 20] }[e.key];
          if (!step) return;
          e.preventDefault();
          const box = boxRef.current!.getBoundingClientRect();
          moveTo(box.left + step[0], box.top + step[1]);
        }}
      />
      <button
        type="button"
        className="mascot-close"
        aria-label={`Hide ${NAME}`}
        onClick={() => remember(true)}
      >
        ×
      </button>
    </div>
  );
}
