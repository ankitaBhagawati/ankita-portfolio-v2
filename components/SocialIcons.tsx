"use client";

import { useId } from "react";

type IconProps = { className?: string };

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 6.5 12 13l9-6.5" />
    </svg>
  );
}

export function InstagramIcon({
  className,
  colored,
}: IconProps & { colored?: boolean }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 24 24"
      fill={colored ? `url(#${id})` : "currentColor"}
      className={className}
    >
      {colored && (
        <defs>
          <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#feda75" />
            <stop offset="0.3" stopColor="#fa7e1e" />
            <stop offset="0.55" stopColor="#d62976" />
            <stop offset="0.8" stopColor="#962fbf" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
      )}
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38A5.85 5.85 0 0 0 .63 3.14c-.3.76-.5 1.63-.56 2.91C0 7.33 0 7.74 0 11s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.34 1.06 2.13 1.38.76.3 1.63.5 2.91.56C8.33 22.99 8.74 23 12 23s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.32 1.46-.72 2.13-1.38.66-.67 1.06-1.34 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.38-2.13A5.85 5.85 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 10.56a4.16 4.16 0 1 1 0-8.32 4.16 4.16 0 0 1 0 8.32zm8.16-10.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.24 2h3.3l-7.2 8.23L23 22h-6.62l-5.2-6.79L5.2 22H1.9l7.7-8.8L1 2h6.78l4.68 6.2L18.24 2zm-1.16 18h1.83L7.02 3.9H5.06L17.08 20z" />
    </svg>
  );
}
