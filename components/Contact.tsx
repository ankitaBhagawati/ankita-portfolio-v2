import ContactPanel from "@/components/ContactPanel";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px]"
    >
      <div className="rounded-t-[32px] bg-[var(--accent)] px-6 py-10 text-[var(--cream)] md:px-10 md:py-12">
        <span className="inline-block rounded-full border border-[rgba(237,234,226,0.4)] px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
          Contact Me
        </span>
        <h2 className="section-hl mt-4 mb-3 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
          Get in touch
        </h2>
        <p className="m-0 mb-8 max-w-[520px] text-[15px] leading-[1.6] text-[rgba(237,234,226,0.75)]">
          Tell me what you&apos;re working on or where you&apos;re stuck, and
          I&apos;ll get back to you.
        </p>
        <ContactPanel idPrefix="contact" />
      </div>
    </section>
  );
}
