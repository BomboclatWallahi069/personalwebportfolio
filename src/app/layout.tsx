import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { profile } from "@/content/profile";
import BackToTop from "@/components/BackToTop";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — UI/UX Designer`,
  description: profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="min-h-screen">
        <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
          <Link href="/" className="font-display text-lg font-semibold">
            {profile.shortName}
          </Link>
          <nav className="flex gap-5 text-sm text-muted sm:gap-6">
            <Link href="/#work" className="hover:text-ink">
              Work
            </Link>
            <Link href="/#about" className="hover:text-ink">
              About
            </Link>
            <Link href="/resume" className="hover:text-ink">
              Résumé
            </Link>
            <Link href="/#contact" className="hover:text-ink">
              Contact
            </Link>
          </nav>
          </div>
        </header>
        {children}
        <footer className="bg-ink text-paper/60">
          <div className="mx-auto max-w-6xl border-t border-paper/10 px-4 py-10 text-sm sm:px-8">
            © {new Date().getFullYear()} {profile.name}. Designed in Figma, built with Next.js and
            Tailwind CSS.
          </div>
        </footer>
        <BackToTop />
      </body>
    </html>
  );
}
