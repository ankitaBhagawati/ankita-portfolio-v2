import { publishedItems } from "@/lib/site-config";

export default function Published() {
  return (
    <section
      id="published"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px] md:px-12"
    >
      <span className="inline-block rounded-full border border-black/30 px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
        Published
      </span>
      <h2 className="section-hl my-6 mt-6 mb-12 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
        In the press
      </h2>

      <div className="border-t border-black/20">
        {publishedItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener"
            className="group grid grid-cols-1 gap-1.5 border-b border-black/20 py-[26px] md:grid-cols-[160px_1fr] md:items-baseline md:gap-6"
          >
            <span className="text-sm font-semibold text-[var(--link)] transition-colors group-hover:text-[var(--link-hover)]">
              {item.outlet}
            </span>
            <div>
              <h3 className="m-0 flex items-start gap-2 font-anton text-xl font-normal tracking-[0.3px] text-[var(--ink)] transition-colors group-hover:text-[var(--link)]">
                {item.title}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1.5 h-4 w-4 flex-none text-black/35 transition-colors group-hover:text-[var(--link)]"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </h3>
              <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--link)] underline-offset-4 transition-colors group-hover:text-[var(--link-hover)] group-hover:underline">
                Read full article
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
