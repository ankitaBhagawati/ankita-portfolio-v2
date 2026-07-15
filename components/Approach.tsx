import { steps, theme } from "@/lib/site-config";

export default function Approach() {
  return (
    <section
      id="approach"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px] md:px-12"
    >
      <span className="inline-block rounded-full border border-black/30 px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
        Approach
      </span>
      <h2 className="section-hl my-6 mt-6 mb-12 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
        How I solve
        <br />
        your challenges
      </h2>
      <div className="border-t border-black/20">
        {steps.map((step) => (
          <div
            key={step.num}
            className="grid grid-cols-[80px_1fr_1.4fr] items-baseline gap-6 border-b border-black/20 py-[30px]"
          >
            <span className="font-anton text-[22px] text-[var(--accent)]">
              {step.num}
            </span>
            <h3 className="m-0 font-anton text-[22px] font-normal tracking-[0.3px] uppercase">
              {step.title}
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.6] text-black/70">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      {theme.showHandwrittenNotes && (
        <p className="mt-7 -rotate-1 font-caveat text-[26px] text-[var(--accent)]">
          no bloat, no buzzwords. just working software.
        </p>
      )}
    </section>
  );
}
