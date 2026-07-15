import { nav, social } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 border-b border-black/10 bg-[rgba(237,234,226,0.92)] px-6 py-[22px] backdrop-blur-[8px] md:px-12">
      <a
        href="#top"
        className="font-anton text-xl tracking-[0.5px] text-[var(--ink)] uppercase transition-colors hover:text-[var(--accent-hover)]"
      >
        Ankita B.
      </a>
      <nav className="nav-links hidden items-center gap-7 text-[13px] font-medium tracking-[0.3px] md:flex">
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
      <div className="flex items-center gap-3.5">
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
          className="cta-btn rounded-full bg-[var(--accent)] px-[22px] py-[11px] text-[13px] font-semibold tracking-[0.3px] text-[var(--cream)] transition-colors"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
