"use client";

import { useForm, ValidationError } from "@formspree/react";
import SocialLinks from "@/components/SocialLinks";

const FORMSPREE_ID = "mvzezgvr";

export default function ContactPanel({
  idPrefix,
  brandIcons = false,
  showTitle = true,
}: {
  idPrefix: string;
  brandIcons?: boolean;
  showTitle?: boolean;
}) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  const submitLabel = state.submitting
    ? "Sending..."
    : state.succeeded
      ? "Sent"
      : "Send Message";

  return (
    <div className="booking-grid grid grid-cols-[1.3fr_auto_1fr] items-start gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {showTitle && (
          <h3 className="m-0 font-anton text-base uppercase text-[var(--cream)]">
            Let&apos;s Talk
          </h3>
        )}
        <div className="flex flex-col gap-1">
          <label
            htmlFor={`${idPrefix}-name`}
            className="text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.7)] uppercase"
          >
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
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
            htmlFor={`${idPrefix}-email`}
            className="text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.7)] uppercase"
          >
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
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
            htmlFor={`${idPrefix}-message`}
            className="text-xs font-semibold tracking-[1px] text-[rgba(237,234,226,0.7)] uppercase"
          >
            Message
          </label>
          <textarea
            id={`${idPrefix}-message`}
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

      <div
        aria-hidden="true"
        className="flex items-center gap-3 self-stretch min-[901px]:flex-col"
      >
        <span className="h-px flex-1 bg-[rgba(237,234,226,0.25)] min-[901px]:h-auto min-[901px]:w-px" />
        <span className="text-xs font-semibold tracking-[1.5px] text-[rgba(237,234,226,0.6)]">
          OR
        </span>
        <span className="h-px flex-1 bg-[rgba(237,234,226,0.25)] min-[901px]:h-auto min-[901px]:w-px" />
      </div>

      <div className="min-[901px]:self-center">
        <SocialLinks brand={brandIcons} />
      </div>
    </div>
  );
}
