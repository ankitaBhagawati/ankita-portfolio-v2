"use client";

import { useForm, ValidationError } from "@formspree/react";
import { social } from "@/lib/site-config";

const FORMSPREE_ID = "mvzezgvr";

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  const submitLabel = state.submitting
    ? "Sending..."
    : state.succeeded
      ? "Sent"
      : "Send Message";

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
        <div className="booking-grid grid grid-cols-[1fr_1.3fr] items-start gap-8">
          <div className="flex flex-col gap-5">
            <div>
              <p className="m-0 mb-1.5 text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.6)] uppercase">
                Email
              </p>
              <a
                href={`mailto:${social.email}`}
                className="about-link border-b border-[rgba(237,234,226,0.5)] text-base text-[var(--cream)] transition-colors"
              >
                {social.email}
              </a>
            </div>
            <div>
              <p className="m-0 mb-1.5 text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.6)] uppercase">
                Instagram (DM)
              </p>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener"
                className="about-link border-b border-[rgba(237,234,226,0.5)] text-base text-[var(--cream)] transition-colors"
              >
                tech_bagwitty
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="icon-btn flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(237,234,226,0.35)] text-[var(--cream)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="icon-btn flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(237,234,226,0.35)] text-[var(--cream)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
              <a
                href={social.x}
                target="_blank"
                rel="noopener"
                aria-label="X"
                className="icon-btn flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(237,234,226,0.35)] text-[var(--cream)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
                  <path d="M18.24 2h3.3l-7.2 8.23L23 22h-6.62l-5.2-6.79L5.2 22H1.9l7.7-8.8L1 2h6.78l4.68 6.2L18.24 2zm-1.16 18h1.83L7.02 3.9H5.06L17.08 20z" />
                </svg>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h3 className="m-0 font-anton text-base uppercase text-[var(--cream)]">
              Let&apos;s Talk
            </h3>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.7)] uppercase"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="form-field rounded-xl border border-[rgba(237,234,226,0.35)] bg-transparent px-4 py-2.5 font-archivo text-base leading-5 text-[var(--cream)] md:text-sm outline-none"
              />
              <ValidationError field="name" errors={state.errors} />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.7)] uppercase"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="form-field rounded-xl border border-[rgba(237,234,226,0.35)] bg-transparent px-4 py-2.5 font-archivo text-base leading-5 text-[var(--cream)] md:text-sm outline-none"
              />
              <ValidationError field="email" errors={state.errors} />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.7)] uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Tell me a little about what you need..."
                className="form-field resize-y rounded-xl border border-[rgba(237,234,226,0.35)] bg-transparent px-4 py-2.5 font-archivo text-base leading-5 text-[var(--cream)] md:text-sm outline-none"
              />
              <ValidationError field="message" errors={state.errors} />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit-btn mt-1.5 cursor-pointer rounded-[10px] border-none bg-[var(--cream)] px-6 py-3 font-archivo text-[15px] font-bold tracking-[0.3px] text-[var(--accent)] transition-colors disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitLabel}
            </button>
            {state.succeeded && (
              <p className="m-0 text-[13.5px] text-[rgba(237,234,226,0.8)]">
                Thanks. I&apos;ll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
