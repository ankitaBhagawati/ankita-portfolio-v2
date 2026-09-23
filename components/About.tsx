import Image from "next/image";
import {
  builtProjects,
  keySkills,
  sideWork,
  whatIDo,
  workHistory,
} from "@/lib/site-config";

function LogoBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-[10px] border border-black/10 bg-white p-1.5">
      <Image src={src} alt={alt} fill className="object-contain p-1.5" sizes="44px" />
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px] md:px-12"
    >
      <span className="inline-block rounded-full border border-black/30 px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
        About
      </span>
      <h2 className="section-hl my-6 mt-6 mb-12 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
        Who I am
      </h2>

      {/* What I do */}
      <div className="mb-10">
        <p className="m-0 mb-3 text-xs font-bold tracking-[1.5px] text-[var(--accent)] uppercase">
          What I Do
        </p>
        <p className="m-0 max-w-[640px] text-lg leading-[1.6] text-black/80">
          {whatIDo}
        </p>
      </div>

      {/* Where I work */}
      <div className="mb-10 rounded-[20px] border border-black/15 p-6 md:p-8">
        <p className="m-0 mb-5 text-xs font-bold tracking-[1.5px] text-[var(--accent)] uppercase">
          Where I Work
        </p>

        <a
          href={workHistory.current.href}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-4 rounded-[14px] border border-black/15 bg-black/[0.02] p-4 transition-colors hover:border-[var(--accent)]"
        >
          <LogoBadge src={workHistory.current.logo} alt={workHistory.current.company} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <p className="m-0 text-base font-normal text-[var(--ink)]">
                {workHistory.current.company}
              </p>
              <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[11px] font-semibold tracking-[0.5px] text-[var(--cream)] uppercase">
                Current
              </span>
            </div>
            <p className="mt-1 mb-0 text-[13.5px] text-black/60">
              {workHistory.current.role} · {workHistory.current.period}
            </p>
          </div>
        </a>

        <p className="mt-6 mb-3 text-xs font-semibold tracking-[1px] text-black/45 uppercase">
          Previously
        </p>
        <div className="border-t border-black/15">
          {workHistory.previous.map((job) => {
            const content = (
              <div className="flex items-center gap-4 py-4">
                {job.logo ? (
                  <LogoBadge src={job.logo} alt={job.company} />
                ) : (
                  <div className="h-11 w-11 flex-none rounded-[10px] border border-dashed border-black/20" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="m-0 text-sm font-bold text-[var(--ink)]">
                    {job.company}
                  </p>
                  <p className="mt-0.5 mb-0 text-[13px] text-black/60">
                    {job.role} · {job.period}
                  </p>
                  <p className="mt-1 mb-0 text-[12.5px] text-black/45">
                    {job.type}
                  </p>
                </div>
              </div>
            );
            return (
              <div key={job.company} className="border-b border-black/15">
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener"
                    className="block transition-colors hover:text-[var(--accent)]"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-10 flex items-start gap-4 rounded-2xl border-l-4 border-[var(--accent)] bg-[rgba(61,12,12,0.05)] p-6">
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--accent)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[18px] w-[18px]"
          >
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
        </div>
        <p className="m-0 text-base leading-[1.55] font-semibold text-[var(--ink)]">
          {sideWork}
        </p>
      </div>

      {/* What I'm building */}
      <div className="mb-10">
        <p className="m-0 mb-5 text-xs font-bold tracking-[1.5px] text-[var(--accent)] uppercase">
          What I&apos;m Building
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {builtProjects.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-4 rounded-[20px] border border-black/15 p-6"
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3.5 transition-colors hover:text-[var(--accent)]"
              >
                <LogoBadge src={p.logo} alt={p.name} />
                <p className="m-0 font-anton text-lg uppercase text-[var(--ink)]">
                  {p.name}
                </p>
              </a>
              <p className="m-0 text-[14px] leading-[1.55] text-black/65">
                {p.desc}
              </p>
              {(p.instagram || p.x) && (
                <div className="flex items-center gap-4">
                  {p.instagram && (
                    <a
                      href={p.instagram}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.5px] text-[var(--accent)]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38A5.85 5.85 0 0 0 .63 3.14c-.3.76-.5 1.63-.56 2.91C0 7.33 0 7.74 0 11s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.34 1.06 2.13 1.38.76.3 1.63.5 2.91.56C8.33 22.99 8.74 23 12 23s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.32 1.46-.72 2.13-1.38.66-.67 1.06-1.34 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.38-2.13A5.85 5.85 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 10.56a4.16 4.16 0 1 1 0-8.32 4.16 4.16 0 0 1 0 8.32zm8.16-10.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>
                      {p.instagramHandle}
                    </a>
                  )}
                  {p.x && (
                    <a
                      href={p.x}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.5px] text-[var(--accent)]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                        <path d="M18.24 2h3.3l-7.2 8.23L23 22h-6.62l-5.2-6.79L5.2 22H1.9l7.7-8.8L1 2h6.78l4.68 6.2L18.24 2zm-1.16 18h1.83L7.02 3.9H5.06L17.08 20z" />
                      </svg>
                      {p.xHandle}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key skills */}
      <div>
        <p className="m-0 mb-3 text-xs font-bold tracking-[1.5px] text-[var(--accent)] uppercase">
          Key Skills
        </p>
        <div className="grid grid-cols-1 gap-x-8 border-t border-black/15 md:grid-cols-2">
          {keySkills.map((sk) => (
            <div
              key={sk}
              className="flex items-baseline gap-3 border-b border-black/15 py-3 text-[14.5px] text-black/75"
            >
              <span className="text-xs text-black/40">●</span>
              {sk}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
