import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { siteUrl } from "@/lib/site";
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

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Full-Stack Developer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Mirza Ayan Baig, a Full-Stack Developer focused on the MERN stack, backend development, modern web applications, and practical AI integration.",
  keywords: [
    "Mirza Ayan Baig",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "Backend Developer",
    "AI Integration",
    "Frontend Developer Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  robots: { index: true, follow: true },
  ...(siteUrl && {
    metadataBase: siteUrl,
    alternates: { canonical: "/" },
  }),
  openGraph: {
    type: "website",
    ...(siteUrl && { url: siteUrl.toString() }),
    title: `${profile.name} | Full-Stack Developer`,
    description:
      "Portfolio of Mirza Ayan Baig, a Full-Stack Developer focused on the MERN stack, backend development, modern web applications, and practical AI integration.",
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | Full-Stack Developer`,
    description:
      "Portfolio of Mirza Ayan Baig, a Full-Stack Developer focused on the MERN stack, backend development, modern web applications, and practical AI integration.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  ...(siteUrl && { url: siteUrl.toString() }),
  jobTitle: "Junior Full-Stack Developer",
  sameAs: [profile.github],
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
