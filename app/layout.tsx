import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://mirzaayanbaig.dev"; // PLACEHOLDER — your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Engineer & Full Stack Developer`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Portfolio of Mirza Ayan Baig — an aspiring AI Engineer and full-stack MERN developer building premium, AI-powered web experiences.",
  keywords: [
    "Mirza Ayan Baig",
    "AI Engineer",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "Generative AI",
    "Agentic AI",
    "Frontend Developer Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — AI Engineer & Full Stack Developer`,
    description:
      "Aspiring AI Engineer and full-stack MERN developer building premium, AI-powered web experiences.",
    siteName: profile.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }], // PLACEHOLDER — add /public/og-image.png
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer & Full Stack Developer`,
    description:
      "Aspiring AI Engineer and full-stack MERN developer building premium, AI-powered web experiences.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: "AI Engineer (Aspiring) & Full Stack Developer",
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:rounded-md focus:bg-cyan focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
