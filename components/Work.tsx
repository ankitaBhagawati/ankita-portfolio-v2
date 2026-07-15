import { featuredProject, projects } from "@/lib/site-config";

export default function Work() {
  return (
    <section
      id="work"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px] md:px-12"
    >
      <span className="inline-block rounded-full border border-black/30 px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
        Work
      </span>
      <h2 className="section-hl my-6 mt-6 mb-12 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
        What I&apos;m building
      </h2>

      <div className="mb-12 rounded-[20px] border border-black/25 p-6 md:p-10">
        <div className="mb-7 flex flex-wrap items-baseline gap-3.5">
          <span className="font-anton text-[15px] text-[var(--accent)]">
            Featured
          </span>
          <h3 className="m-0 font-anton text-2xl font-normal uppercase">
            {featuredProject.title}
          </h3>
        </div>
        <div className="case-cols grid grid-cols-3 gap-8">
          <div>
            <p className="m-0 mb-2 text-xs font-bold tracking-[1.5px] text-[var(--accent)] uppercase">
              Challenge
            </p>
            <p className="m-0 text-sm leading-[1.6] text-black/70">
              {featuredProject.challenge}
            </p>
          </div>
          <div>
            <p className="m-0 mb-2 text-xs font-bold tracking-[1.5px] text-[var(--accent)] uppercase">
              Solution
            </p>
            <p className="m-0 text-sm leading-[1.6] text-black/70">
              {featuredProject.solution}
            </p>
          </div>
          <div>
            <p className="m-0 mb-2 text-xs font-bold tracking-[1.5px] text-[var(--accent)] uppercase">
              Impact
            </p>
            <p className="m-0 text-sm leading-[1.6] text-black/70">
              {featuredProject.impact}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-black/20">
        {projects.map((pr) => (
          <div
            key={pr.num}
            className="grid grid-cols-[80px_1fr_auto] items-baseline gap-6 border-b border-black/20 py-[26px]"
          >
            <span className="font-anton text-lg text-[var(--accent)]">
              {pr.num}
            </span>
            <div>
              <h3 className="m-0 font-anton text-xl font-normal tracking-[0.3px] uppercase">
                {pr.title}
              </h3>
              <p className="mt-1.5 mb-0 text-[13.5px] text-black/60">
                {pr.cat}
              </p>
            </div>
            <span className="text-xs font-semibold tracking-[1px] text-black/45 uppercase">
              Details soon
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
