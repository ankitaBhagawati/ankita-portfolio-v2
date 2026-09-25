import type { Metadata } from "next";
import { Anton, Archivo, Caveat } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import FloatingMascot from "@/components/FloatingMascot";
import { brand, keySkills, siteUrl, social, workHistory } from "@/lib/site-config";

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
  // Absolute URLs (og:image, canonical) resolve against the live domain.
  metadataBase: new URL(siteUrl),
  title:
    "Tech Bagwitty (Ankita Bhagawati) | Software Engineer, Fullstack & AI-driven Development",
  description:
    "Ankita Bhagawati (Tech Bagwitty) helps startups ship products and students land careers. Fullstack & AI-driven development, technical consulting, mentoring, and social tech.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Tech Bagwitty",
    locale: "en_IN",
    title: "Tech Bagwitty (Ankita Bhagawati)",
    description:
      "Fullstack & AI-driven development, technical consulting, mentoring, and social tech.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sheisnotboring",
    title: "Tech Bagwitty (Ankita Bhagawati)",
    description:
      "Fullstack & AI-driven development, technical consulting, mentoring, and social tech.",
    images: ["/og-image.png"],
  },
};

// Tells Google who this site is about (can power a knowledge panel / rich result).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: brand.fullName,
  alternateName: brand.name,
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: workHistory.current.company },
  address: { "@type": "PostalAddress", addressLocality: "Sivasagar", addressRegion: "Assam", addressCountry: "IN" },
  knowsAbout: keySkills.map((s) => s.name),
  sameAs: [social.linkedin, social.github, social.instagram, social.x],
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
      <body className="font-archivo antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <FloatingMascot />
        <Analytics />
      </body>
    </html>
  );
}
