"use client";

import { useState } from "react";
import Image from "next/image";
import {
  founderApproach,
  founderTrack,
  instagramPosts,
  social,
  studentApproach,
  studentTrack,
} from "@/lib/site-config";

function SeeApproachButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flip-trigger inline-flex flex-none cursor-pointer items-center gap-1.5 rounded-full border border-current bg-transparent px-3 py-1.5 text-[11px] font-semibold tracking-[0.5px] uppercase transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      See Approach
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flip-trigger inline-flex flex-none cursor-pointer items-center gap-1.5 rounded-full border border-current bg-transparent px-3 py-1.5 text-[11px] font-semibold tracking-[0.5px] uppercase transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  );
}

export default function Mentoring() {
  const [studentFlipped, setStudentFlipped] = useState(false);
  const [founderFlipped, setFounderFlipped] = useState(false);

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
        <div
          className={`flip-card h-[540px] ${studentFlipped ? "is-flipped" : ""}`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front flex flex-col rounded-[20px] border border-black/25 p-9">
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <h3 className="m-0 font-anton text-2xl font-normal uppercase">
                  For Students &amp; Freshers
                </h3>
                <SeeApproachButton onClick={() => setStudentFlipped(true)} />
              </div>
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
            <div className="flip-card-back flex flex-col rounded-[20px] border border-black/25 p-9">
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <h3 className="m-0 font-anton text-2xl font-normal uppercase">
                  My Approach
                </h3>
                <BackButton onClick={() => setStudentFlipped(false)} />
              </div>
              <p className="m-0 mb-6 text-sm text-black/60">
                How a mentoring engagement actually runs.
              </p>
              <div className="min-h-0 flex-1 overflow-y-auto border-t border-black/20">
                {studentApproach.map((step) => (
                  <div key={step.num} className="border-b border-black/20 py-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-anton text-[13px] text-[var(--accent)]">
                        {step.num}
                      </span>
                      <p className="m-0 text-[14.5px] font-bold">
                        {step.title}
                      </p>
                    </div>
                    <p className="m-0 mt-1 pl-[27px] text-[13px] leading-[1.5] text-black/60">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flip-card h-[540px] ${founderFlipped ? "is-flipped" : ""}`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-back flex flex-col rounded-[20px] bg-[var(--accent)] p-9 text-[var(--cream)]">
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <h3 className="m-0 font-anton text-2xl font-normal uppercase">
                  My Approach
                </h3>
                <BackButton onClick={() => setFounderFlipped(false)} />
              </div>
              <p className="m-0 mb-6 text-sm text-[rgba(237,234,226,0.65)]">
                How a consulting engagement actually runs.
              </p>
              <div className="min-h-0 flex-1 overflow-y-auto border-t border-[rgba(237,234,226,0.25)]">
                {founderApproach.map((step) => (
                  <div
                    key={step.num}
                    className="border-b border-[rgba(237,234,226,0.25)] py-3"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-anton text-[13px] text-[rgba(237,234,226,0.6)]">
                        {step.num}
                      </span>
                      <p className="m-0 text-[14.5px] font-bold">
                        {step.title}
                      </p>
                    </div>
                    <p className="m-0 mt-1 pl-[27px] text-[13px] leading-[1.5] text-[rgba(237,234,226,0.7)]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flip-card-front flex flex-col rounded-[20px] bg-[var(--accent)] p-9 text-[var(--cream)]">
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <h3 className="m-0 font-anton text-2xl font-normal uppercase">
                  For Startup Founders
                </h3>
                <SeeApproachButton onClick={() => setFounderFlipped(true)} />
              </div>
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
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-black/25 p-7">
        <div className="flex flex-wrap items-center gap-4">
          <div
            className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px]"
            style={{
              background:
                "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="#fff" className="h-6 w-6">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38A5.85 5.85 0 0 0 .63 3.14c-.3.76-.5 1.63-.56 2.91C0 7.33 0 7.74 0 11s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.34 1.06 2.13 1.38.76.3 1.63.5 2.91.56C8.33 22.99 8.74 23 12 23s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.32 1.46-.72 2.13-1.38.66-.67 1.06-1.34 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.38-2.13A5.85 5.85 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 10.56a4.16 4.16 0 1 1 0-8.32 4.16 4.16 0 0 1 0 8.32zm8.16-10.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
          <p className="m-0 min-w-[260px] flex-1 text-[14.5px] leading-[1.6] text-black/75">
            I also make educational content for students &amp; freshers:
            short Instagram videos breaking down coding topics.
          </p>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener"
            className="ig-pill inline-flex items-center gap-2 rounded-[10px] border border-[var(--accent)] px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            tech_bagwitty →
          </a>
        </div>
        <div className="mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
          {instagramPosts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener"
              className="ig-tile group relative block aspect-[9/16] w-[104px] flex-none snap-start overflow-hidden rounded-[12px] border border-black/15 transition-colors"
            >
              <Image
                src={post.thumb}
                alt="Instagram reel preview"
                fill
                sizes="104px"
                className="object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
                <svg viewBox="0 0 24 24" className="h-5 w-5 drop-shadow">
                  <path d="M8 5v14l11-7z" fill="#fff" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
