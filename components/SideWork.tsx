"use client";

import { useLayoutEffect, useRef, useState } from "react";
import ContactPanel from "@/components/ContactPanel";
import { sideWork } from "@/lib/site-config";

const sideIcons: Record<string, React.ReactNode> = {
  freelance: <path d="M8 7 3 12l5 5M16 7l5 5-5 5" />,
  consult: (
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  ),
  mentor: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

const face =
  "flex flex-col rounded-[20px] bg-[var(--accent)] p-6 text-[var(--cream)] md:p-8";
const tile =
  "flex items-start gap-4 rounded-2xl border border-[rgba(237,234,226,0.2)] bg-[rgba(237,234,226,0.07)] p-4 md:flex-col md:gap-3 md:p-5";
const iconCircle =
  "flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--cream)] text-[var(--accent)]";
const flipLink =
  "cursor-pointer border-none bg-transparent p-0 font-archivo text-sm text-[rgba(237,234,226,0.75)] underline-offset-4 transition-colors hover:text-[var(--cream)] hover:underline";

export default function SideWork() {
  const [flipped, setFlipped] = useState(false);
  const [heights, setHeights] = useState<{ front: number; back: number } | null>(
    null,
  );
  const frontFace = useRef<HTMLDivElement>(null);
  const backFace = useRef<HTMLDivElement>(null);
  const frontBody = useRef<HTMLDivElement>(null);
  const backBody = useRef<HTMLDivElement>(null);

  // The two sides differ a lot in height (tiles vs. form), so the card is sized
  // to whichever side is showing instead of always matching the taller one.
  useLayoutEffect(() => {
    const height = (face: HTMLDivElement | null, body: HTMLDivElement | null) => {
      if (!face || !body) return 0;
      const cs = getComputedStyle(face);
      return body.offsetHeight + parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    };
    const measure = () =>
      setHeights({
        front: height(frontFace.current, frontBody.current),
        back: height(backFace.current, backBody.current),
      });
    measure();
    const ro = new ResizeObserver(measure);
    if (frontBody.current) ro.observe(frontBody.current);
    if (backBody.current) ro.observe(backBody.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className={`flip-card mb-10 transition-[height] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${flipped ? "is-flipped" : ""}`}
      style={heights ? { height: flipped ? heights.back : heights.front } : undefined}
    >
      <div className="flip-card-inner relative">
        <div
          ref={frontFace}
          inert={flipped}
          className={`flip-card-front ${face}`}
        >
          <div ref={frontBody}>
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="m-0 font-anton text-2xl font-normal tracking-[0.5px] md:text-3xl">
                {sideWork.title}
              </h3>
              <button
                type="button"
                onClick={() => setFlipped(true)}
                className={flipLink}
              >
                Connect with me →
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
              {sideWork.items.map((it) => (
                <div key={it.key} className={tile}>
                  <div className={iconCircle}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      {sideIcons[it.key]}
                    </svg>
                  </div>
                  <div>
                    <p className="m-0 font-anton text-lg leading-[1.2] tracking-[0.3px]">
                      {it.title}
                    </p>
                    <p className="m-0 mt-1 text-sm leading-[1.5] text-[rgba(237,234,226,0.75)]">
                      {it.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={backFace}
          inert={!flipped}
          className={`flip-card-back absolute inset-x-0 top-0 ${face}`}
        >
          <div ref={backBody}>
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="m-0 font-anton text-2xl font-normal tracking-[0.5px] md:text-3xl">
                Let&apos;s Connect
              </h3>
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className={flipLink}
              >
                ← Back
              </button>
            </div>
            <ContactPanel idPrefix="flip" brandIcons showTitle={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
