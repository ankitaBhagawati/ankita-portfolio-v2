import Image from "next/image";
import aboutPhoto from "@/assets/images/about-placeholder.webp";
import { skills, social } from "@/lib/site-config";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px]"
    >
      <div className="rounded-t-[32px] bg-[var(--accent)] px-6 py-16 text-[var(--cream)] md:px-14 md:py-[72px]">
        <div className="about-grid grid grid-cols-[340px_1fr] items-start gap-14">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[20px] bg-white/10">
            <Image
              src={aboutPhoto}
              alt="Ankita Bhagawati"
              fill
              sizes="340px"
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block rounded-full border border-[rgba(237,234,226,0.4)] px-4 py-1.5 text-xs font-semibold tracking-[1.5px] text-[var(--cream)] uppercase">
              About Me
            </span>
            <h2 className="about-hl my-5 mt-[22px] mb-5 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
              Who am I and
              <br />
              how can I help?
            </h2>
            <p className="m-0 mb-7 max-w-[560px] text-[15px] leading-[1.65] text-[rgba(237,234,226,0.85)]">
              I&apos;m Ankita, a software engineer with 5 years across
              fullstack and AI-driven development, currently an Engineer at
              Numerator. On the side, I consult for startups on tech strategy
              and architecture, and mentor students and freshers breaking into
              tech.
            </p>
            <p className="m-0 mb-3 font-anton text-base tracking-[1px] uppercase">
              Key Skills
            </p>
            <div className="grid max-w-[560px] grid-cols-1 border-t border-[rgba(237,234,226,0.25)]">
              {skills.map((sk) => (
                <div
                  key={sk}
                  className="flex items-baseline gap-3 border-b border-[rgba(237,234,226,0.25)] py-3 text-[14.5px] text-[rgba(237,234,226,0.9)]"
                >
                  <span className="text-xs text-[rgba(237,234,226,0.5)]">
                    ●
                  </span>
                  {sk}
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm text-[rgba(237,234,226,0.7)]">
              Reach me anytime:{" "}
              <a
                href={`mailto:${social.email}`}
                className="about-link border-b border-[rgba(237,234,226,0.5)] text-[var(--cream)] transition-colors"
              >
                {social.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
