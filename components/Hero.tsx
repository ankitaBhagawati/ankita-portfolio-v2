import Image from "next/image";
import heroPhoto from "@/assets/images/hero-placeholder.webp";
import { brand, stats } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-pad mx-auto max-w-[1280px] px-6 pt-8 md:px-12"
    >
      <h1 className="big-hl m-0 font-anton uppercase leading-[0.95] tracking-[-1px] text-[var(--ink)]">
        Build fast.
        <br />
        Build right.
        <br />
        <span className="text-[var(--accent)]">Build smart.</span>
      </h1>

      <div className="hero-grid mt-14 grid grid-cols-[auto_1fr] items-end gap-12">
        <div className="relative w-[min(260px,70vw)]">
          <div className="aspect-square w-full rounded-full border border-black/20 p-2.5">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-black/5">
              <Image
                src={heroPhoto}
                alt="Ankita Bhagawati"
                fill
                sizes="260px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="pb-3">
          <p className="m-0 font-anton text-[26px] uppercase tracking-[0.5px]">
            Ankita Bhagawati
          </p>
          <p className="mt-0.5 mb-0 font-caveat text-xl leading-none text-[var(--accent)]">
            aka Tech Bagwitty
          </p>
          <p className="mt-2 mb-0 flex items-center gap-1.5 text-[13px] text-black/55">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5 flex-none"
            >
              <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.3" />
            </svg>
            {brand.location}
          </p>
          <p className="mt-2 max-w-[420px] text-[15px] leading-[1.55] text-black/70">
            Software Engineer: Fullstack &amp; AI-driven Development. I help
            startups ship products and students land careers.
          </p>
          <a
            href="#mentoring"
            className="underline-hover mt-5 inline-flex items-center gap-2 border-b-2 border-[var(--accent)] pb-[3px] text-[15px] font-semibold transition-colors"
          >
            What Do I Do? →
          </a>
        </div>
      </div>

      <div className="stats-bar mt-16 grid grid-cols-4 gap-px border-t border-b border-black/15 bg-black/15">
        {stats.map((st) => (
          <div key={st.label} className="bg-[var(--cream)] px-5 py-[26px]">
            <div className="font-anton text-4xl text-[var(--accent)]">
              {st.value}
            </div>
            <div className="mt-1 text-[13px] text-black/65">{st.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
