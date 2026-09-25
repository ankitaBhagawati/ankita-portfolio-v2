"use client";

import Script from "next/script";
import { useEffect } from "react";

// Public IDs (they're visible in any page's source anyway).
// Only the live Vercel deployment loads them, so local dev and preview links
// don't count as visitors. Vercel sets NEXT_PUBLIC_VERCEL_ENV automatically.
const LIVE = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
const GA_ID = LIVE ? "G-H14T3EY2XR" : undefined;
const CLARITY_ID = LIVE ? "ynuf625ijn" : undefined;

type Params = Record<string, string | number>;
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function track(name: string, params: Params) {
  window.gtag?.("event", name, params);
  window.clarity?.("event", name);
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID && !CLARITY_ID) return;

    // Time on each section: counts while ≥50% of a section[id] is on screen.
    const since = new Map<string, number>();
    const flush = (id: string) => {
      const start = since.get(id);
      if (start === undefined) return;
      since.delete(id);
      const seconds = Math.round((performance.now() - start) / 1000);
      if (seconds >= 1) track("section_time", { section_id: id, seconds });
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          if (e.isIntersecting) since.set(id, performance.now());
          else flush(id);
        }
      },
      { threshold: 0.5 },
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    const flushAll = () => {
      if (document.visibilityState === "hidden") [...since.keys()].forEach(flush);
    };
    document.addEventListener("visibilitychange", flushAll);

    // Every link/button click, with the section it was in.
    const onClick = (ev: MouseEvent) => {
      const el = (ev.target as Element).closest("a,button");
      if (!el) return;
      track("ui_click", {
        label: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 80),
        href: el.getAttribute("href") ?? "",
        section: el.closest("section[id]")?.id ?? "none",
      });
    };
    document.addEventListener("click", onClick, true);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", flushAll);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}
    </>
  );
}
