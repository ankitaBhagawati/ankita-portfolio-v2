"use client";

import { useState } from "react";
import Image from "next/image";
import { brand, nav, social } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(237,234,226,0.92)] backdrop-blur-[8px]">
      <div className="flex items-center justify-between gap-6 px-6 py-[18px] md:px-12">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <Image
            src="/icon-oxblood-rounded.svg"
            alt={brand.name}
            width={34}
            height={34}
            className="rounded-[8px]"
          />
          <span className="leading-tight">
            <span className="block font-anton text-lg tracking-[0.5px] text-[var(--ink)] uppercase">
              {brand.name}
            </span>
          </span>
        </a>

        <nav className="nav-links hidden items-center gap-5 text-[13px] font-medium tracking-[0.3px] lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[var(--ink)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3.5 lg:flex">
          <a
            href={`mailto:${social.email}`}
            aria-label="Email"
            className="icon-btn flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/25 text-[var(--ink)] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="2.5" y="5" width="19" height="14" rx="2"></rect>
              <path d="M3 6.5 12 13l9-6.5"></path>
            </svg>
          </a>
          <a
            href="#contact"
            className="cta-btn rounded-[10px] bg-[var(--accent)] px-[22px] py-[11px] text-[13px] font-semibold tracking-[0.3px] text-[var(--cream)] transition-colors"
          >
            Contact Me
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="flex h-10 w-10 flex-none cursor-pointer flex-col items-center justify-center gap-[5px] border-none bg-transparent lg:hidden"
        >
          <span
            className={`h-[2px] w-[22px] bg-[var(--ink)] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-[22px] bg-[var(--ink)] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-[22px] bg-[var(--ink)] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/10 bg-[var(--cream)] px-6 py-4 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-link py-3 text-[15px] font-medium text-[var(--ink)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="cta-btn mt-2 rounded-[10px] bg-[var(--accent)] px-[22px] py-[13px] text-center text-[14px] font-semibold tracking-[0.3px] text-[var(--cream)] transition-colors"
          >
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
}
