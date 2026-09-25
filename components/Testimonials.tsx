"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LinkedInIcon } from "@/components/SocialIcons";
import { testimonials } from "@/lib/site-config";

const N = testimonials.length;
// Time to read a card: ~4 words/sec plus a beat, never under 6s.
const dwellMs = (i: number) =>
  Math.max(6000, testimonials[i % N].quote.split(/\s+/).length * 250 + 2000);
// After a touch/scroll/click, stay put this long before auto-advancing again.
const IDLE_AFTER_INTERACT_MS = 10000;

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

function initials(name: string) {
  const words = name.split(" ");
  return words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0][0];
}

function stepOf(el: HTMLElement) {
  const [a, b] = [el.children[0], el.children[1]] as HTMLElement[];
  return a && b ? b.offsetLeft - a.offsetLeft : el.clientWidth;
}

// The list is rendered twice. Once scrolling reaches the second copy, jump
// back by one copy's width with no animation: it looks identical, so the
// carousel loops forever instead of rewinding to the start.
export default function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const hovering = useRef(false);
  const onScreen = useRef(false);
  const [scrollable, setScrollable] = useState(true);
  const [active, setActive] = useState(0);

  const indexNow = (el: HTMLElement) => Math.round(el.scrollLeft / stepOf(el));

  // Silently move from the second copy back into the first.
  const wrap = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const step = stepOf(el);
    if (el.scrollLeft >= N * step - 2) el.scrollTo({ left: el.scrollLeft - N * step, behavior: "instant" });
    setActive(indexNow(el) % N);
  }, []);

  const goTo = useCallback((i: number) => {
    const el = scroller.current;
    if (el) el.scrollTo({ left: i * stepOf(el), behavior: "smooth" });
  }, []);

  const next = useCallback(() => {
    const el = scroller.current;
    if (el) goTo(indexNow(el) + 1);
  }, [goTo]);

  const prev = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    // At the first card, hop to its twin in the second copy so "back" also loops.
    if (indexNow(el) === 0) el.scrollTo({ left: N * stepOf(el), behavior: "instant" });
    goTo(indexNow(el) - 1);
  }, [goTo]);

  // Autoplay clock: a card advances once it has been on screen, un-hovered and
  // untouched for its reading time. Any pause restarts that card's clock.
  const shownAt = useRef(0);
  const pausedUntil = useRef(0);
  const interacted = useCallback(() => {
    pausedUntil.current = performance.now() + IDLE_AFTER_INTERACT_MS;
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (onScreen.current = e.isIntersecting), { threshold: 0.5 });
    io.observe(el);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = window.setInterval(() => {
      const now = performance.now();
      if (reduced || hovering.current || !onScreen.current || now < pausedUntil.current) {
        shownAt.current = now;
      } else if (now - shownAt.current >= dwellMs(indexNow(el))) {
        next();
        shownAt.current = now + 600; // count the next card's time from when it lands
      }
    }, 500);

    let settle: number | undefined;
    const onScroll = () => {
      window.clearTimeout(settle);
      settle = window.setTimeout(wrap, 120); // after smooth scroll / snap finishes
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    const check = () => setScrollable(N * stepOf(el) > el.clientWidth + 2);
    check();
    window.addEventListener("resize", check);
    return () => {
      io.disconnect();
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", check);
      window.clearInterval(timer.current);
      window.clearTimeout(settle);
    };
  }, [next, wrap]);

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
          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => {
                prev();
                interacted();
              }}
              aria-label="Previous"
              className="arrow-btn flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-black/35 bg-transparent text-lg text-[var(--ink)] transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => {
                next();
                interacted();
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
        onPointerDown={interacted}
        onWheel={interacted}
        onTouchStart={interacted}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") hovering.current = true;
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") hovering.current = false;
        }}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            aria-hidden={i >= N || undefined}
            inert={i >= N || undefined}
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
                  initials(t.name)
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
      {scrollable && (
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name + t.role}
              type="button"
              aria-label={`Testimonial ${i + 1} of ${N}`}
              aria-current={i === active || undefined}
              onClick={() => {
                goTo(i);
                interacted();
              }}
              className={`h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-300 ${
                i === active ? "w-6 bg-[var(--accent)]" : "w-2 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
