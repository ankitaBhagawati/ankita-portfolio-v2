"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-config";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <section
      id="faq"
      className="section-pad mx-auto max-w-[900px] scroll-mt-20 px-6 pt-[110px] md:px-12"
    >
      <span className="inline-block rounded-full border border-black/30 px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
        FAQ
      </span>
      <h2 className="section-hl my-6 mt-6 mb-10 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
        Everything you
        <br />
        need to know
      </h2>
      <div className="border-t border-black/20">
        {faqs.map((f, i) => {
          const open = openFaq === i;
          return (
            <div key={f.q} className="border-b border-black/20">
              <button
                onClick={() => setOpenFaq((s) => (s === i ? -1 : i))}
                className="flex w-full cursor-pointer items-center justify-between gap-5 border-none bg-transparent py-6 text-left font-archivo"
              >
                <span className="text-[17px] font-semibold text-[var(--ink)]">
                  {f.q}
                </span>
                <span
                  className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full border border-black/30 transition-transform duration-300"
                  style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1C1310"
                    strokeWidth="2.2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </button>
              {open && (
                <p className="m-0 pr-[60px] pb-6 text-[14.5px] leading-[1.65] text-black/70">
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
