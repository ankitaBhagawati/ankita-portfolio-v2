import type { Metadata } from "next";
import { Anton, Archivo, Caveat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

const caveat = Caveat({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL once the custom domain is connected, so
  // absolute URLs (like the og:image below) resolve correctly.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title:
    "Tech Bagwitty (Ankita Bhagawati) | Software Engineer, Fullstack & AI-driven Development",
  description:
    "Ankita Bhagawati (Tech Bagwitty) helps startups ship products and students land careers. Fullstack & AI-driven development, technical consulting, mentoring, and social tech.",
  openGraph: {
    title: "Tech Bagwitty (Ankita Bhagawati)",
    description:
      "Fullstack & AI-driven development, technical consulting, mentoring, and social tech.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${archivo.variable} ${caveat.variable}`}
    >
      <body className="font-archivo antialiased">{children}</body>
    </html>
  );
}
