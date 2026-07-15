"use client";

import { useState } from "react";
import { testimonials } from "@/lib/site-config";

export default function Testimonials() {
  const [slide, setSlide] = useState(0);
  const maxSlide = testimonials.length - 1;

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
        <div className="flex gap-3">
          <button
            onClick={() => setSlide((s) => Math.max(0, s - 1))}
            aria-label="Previous"
            className="arrow-btn flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-black/35 bg-transparent text-lg text-[var(--ink)] transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
            aria-label="Next"
            className="arrow-btn flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-black/35 bg-transparent text-lg text-[var(--ink)] transition-colors"
          >
            →
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(calc(${-slide} * (min(420px, 85vw) + 24px)))`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name + t.role}
              className="flex flex-[0_0_min(420px,85vw)] flex-col gap-6 rounded-[20px] border border-black/25 p-[34px]"
            >
              <span className="font-anton text-4xl leading-none text-[var(--accent)]">
                &quot;
              </span>
              <p className="m-0 flex-1 text-[15px] leading-[1.65] text-black/80">
                {t.quote}
              </p>
              <div>
                <p className="m-0 text-sm font-bold">{t.name}</p>
                <p className="mt-0.5 mb-0 text-[13px] text-black/55">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
