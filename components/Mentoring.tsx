import { founderTrack, social, studentTrack } from "@/lib/site-config";

export default function Mentoring() {
  return (
    <section
      id="mentoring"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px] md:px-12"
    >
      <span className="inline-block rounded-full border border-black/30 px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
        Mentoring
      </span>
      <h2 className="section-hl my-6 mt-6 mb-12 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
        Two ways I help
      </h2>
      <div className="tracks-grid grid grid-cols-2 gap-7">
        <div className="rounded-[20px] border border-black/25 p-9">
          <h3 className="m-0 mb-1.5 font-anton text-2xl font-normal uppercase">
            For Students &amp; Freshers
          </h3>
          <p className="m-0 mb-6 text-sm text-black/60">
            Break into tech with a clear plan.
          </p>
          <div className="border-t border-black/20">
            {studentTrack.map((it) => (
              <div
                key={it.num}
                className="flex items-baseline gap-3.5 border-b border-black/20 py-3.5 text-[14.5px]"
              >
                <span className="font-anton text-[13px] text-[var(--accent)]">
                  {it.num}
                </span>
                {it.label}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[20px] bg-[var(--accent)] p-9 text-[var(--cream)]">
          <h3 className="m-0 mb-1.5 font-anton text-2xl font-normal uppercase">
            For Startup Founders
          </h3>
          <p className="m-0 mb-6 text-sm text-[rgba(237,234,226,0.65)]">
            Make the right technical calls, early.
          </p>
          <div className="border-t border-[rgba(237,234,226,0.25)]">
            {founderTrack.map((it) => (
              <div
                key={it.num}
                className="flex items-baseline gap-3.5 border-b border-[rgba(237,234,226,0.25)] py-3.5 text-[14.5px]"
              >
                <span className="font-anton text-[13px] text-[rgba(237,234,226,0.6)]">
                  {it.num}
                </span>
                {it.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-black/30 px-7 py-[22px]">
        <p className="m-0 min-w-[260px] flex-1 text-[14.5px] leading-[1.6] text-black/75">
          I also make free educational content for students &amp; freshers:
          short Instagram videos breaking down coding topics.
        </p>
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener"
          className="ig-pill inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          @tech_bagwitty →
        </a>
      </div>
    </section>
  );
}
