"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useForm, ValidationError } from "@formspree/react";
import { calLink, social } from "@/lib/site-config";

const CAL_NAMESPACE = "quick-call";
const FORMSPREE_ID = "mvzezgvr";

export default function Booking() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#3D0C0C" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const submitLabel = state.submitting
    ? "Sending…"
    : state.succeeded
      ? "Sent ✓"
      : "Schedule a Free Consultation →";

  return (
    <section
      id="contact"
      className="section-pad mx-auto max-w-[1280px] scroll-mt-20 px-6 pt-[110px]"
    >
      <div className="rounded-t-[32px] bg-[var(--accent)] px-6 py-16 text-[var(--cream)] md:px-14 md:py-[72px]">
        <span className="inline-block rounded-full border border-[rgba(237,234,226,0.4)] px-4 py-1.5 text-xs font-semibold tracking-[1.5px] uppercase">
          Contact Me
        </span>
        <h2 className="section-hl mt-6 mb-4 font-anton leading-[1.05] tracking-[-0.5px] uppercase">
          Schedule a
          <br />
          consultation
        </h2>
        <p className="m-0 mb-12 max-w-[520px] text-[15px] leading-[1.6] text-[rgba(237,234,226,0.75)]">
          The first call is free. Tell me what you&apos;re working on or where
          you&apos;re stuck, and we&apos;ll figure out the fastest path
          forward.
        </p>
        <div className="booking-grid grid grid-cols-2 items-start gap-10">
          <div className="min-h-[440px] overflow-hidden rounded-[20px] bg-[rgba(237,234,226,0.06)]">
            <Cal
              namespace={CAL_NAMESPACE}
              calLink={calLink}
              style={{ width: "100%", height: "440px", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-1.5">
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
                className="form-field rounded-xl border border-[rgba(237,234,226,0.35)] bg-transparent px-4 py-3.5 font-archivo text-sm text-[var(--cream)] outline-none"
              />
              <ValidationError field="name" errors={state.errors} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="track"
                className="text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.7)] uppercase"
              >
                What do you need help with?
              </label>
              <select
                id="track"
                name="track"
                required
                className="form-field rounded-xl border border-[rgba(237,234,226,0.35)] bg-[var(--accent)] px-4 py-3.5 font-archivo text-sm text-[var(--cream)] outline-none"
              >
                <option value="">Select a track…</option>
                <option value="student">
                  Student / Fresher: mentoring &amp; career help
                </option>
                <option value="founder">
                  Startup Founder: tech strategy &amp; consulting
                </option>
              </select>
              <ValidationError field="track" errors={state.errors} />
            </div>
            <div className="flex flex-col gap-1.5">
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
                className="form-field rounded-xl border border-[rgba(237,234,226,0.35)] bg-transparent px-4 py-3.5 font-archivo text-sm text-[var(--cream)] outline-none"
              />
              <ValidationError field="email" errors={state.errors} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.7)] uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me a little about what you need…"
                className="form-field resize-y rounded-xl border border-[rgba(237,234,226,0.35)] bg-transparent px-4 py-3.5 font-archivo text-sm text-[var(--cream)] outline-none"
              />
              <ValidationError field="message" errors={state.errors} />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit-btn mt-1.5 cursor-pointer rounded-full border-none bg-[var(--cream)] px-7 py-4 font-archivo text-[15px] font-bold tracking-[0.3px] text-[var(--accent)] transition-colors disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitLabel}
            </button>
            {state.succeeded && (
              <p className="m-0 text-[13.5px] text-[rgba(237,234,226,0.8)]">
                ✓ Thanks! I&apos;ll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
