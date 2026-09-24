"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LinkedInIcon } from "@/components/SocialIcons";
import { testimonials } from "@/lib/site-config";

const AUTOPLAY_MS = 2000;

function AuthorLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: React.ReactNode;
}) {
  return href ? (
    <a href={href} target="_blank" rel="noopener" className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}

function stepOf(el: HTMLElement) {
  const [a, b] = [el.children[0], el.children[1]] as HTMLElement[];
  return a && b ? b.offsetLeft - a.offsetLeft : el.clientWidth;
}

export default function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const hovering = useRef(false);
  const [scrollable, setScrollable] = useState(true);

  const next = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: stepOf(el), behavior: "smooth" });
  }, []);

  const prev = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    if (el.scrollLeft <= 2) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: -stepOf(el), behavior: "smooth" });
  }, []);

  // Restarts the countdown, so any manual scroll or click delays the next auto-advance.
  const start = useCallback(() => {
    window.clearInterval(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = window.setInterval(() => {
      if (!hovering.current) next();
    }, AUTOPLAY_MS);
  }, [next]);

  useEffect(() => {
    start();
    return () => window.clearInterval(timer.current);
  }, [start]);

  useEffect(() => {
    const check = () => {
      const el = scroller.current;
      if (el) setScrollable(el.scrollWidth > el.clientWidth + 2);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="testimonials"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px] md:px-12"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <span className="inline-block rounded-full border border-black/30 px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
            Testimonials
          </span>
          <h2 className="section-hl mt-6 mb-0 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
            What do people say?
          </h2>
        </div>
        {scrollable && (
          <div className="flex gap-3">
            <button
              onClick={() => {
                prev();
                start();
              }}
              aria-label="Previous"
              className="arrow-btn flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-black/35 bg-transparent text-lg text-[var(--ink)] transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => {
                next();
                start();
              }}
              aria-label="Next"
              className="arrow-btn flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-black/35 bg-transparent text-lg text-[var(--ink)] transition-colors"
            >
              →
            </button>
          </div>
        )}
      </div>
      <div
        ref={scroller}
        onPointerDown={start}
        onWheel={start}
        onTouchStart={start}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") hovering.current = true;
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") {
            hovering.current = false;
            start();
          }
        }}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <div
            key={t.name + t.role}
            className="flex flex-[1_0_min(420px,85vw)] snap-start flex-col gap-6 rounded-[20px] border border-black/25 p-6 md:p-[34px]"
          >
            <span className="font-anton text-3xl leading-none text-[var(--accent)] md:text-4xl">
              &quot;
            </span>
            <p className="m-0 flex-1 text-[14px] leading-[1.65] text-black/80 md:text-[15px]">
              {t.quote}
            </p>
            <AuthorLink
              href={t.linkedin}
              className="group flex items-center gap-3"
            >
              <span className="relative flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] font-anton text-sm tracking-[0.5px] text-[var(--cream)]">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                ) : (
                  t.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")
                )}
              </span>
              <span>
                <span
                  className={`flex items-center gap-1.5 text-sm font-bold text-[var(--ink)] ${t.linkedin ? "group-hover:underline" : ""}`}
                >
                  {t.name}
                  <LinkedInIcon
                    className={`h-3.5 w-3.5 ${t.linkedin ? "text-[#0A66C2]" : "text-black/30"}`}
                  />
                </span>
                <span className="mt-0.5 block text-[13px] text-black/55">
                  {t.role}
                </span>
              </span>
            </AuthorLink>
          </div>
        ))}
      </div>
    </section>
  );
}
