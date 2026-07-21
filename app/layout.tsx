import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWA } from "@/components/site/floating-wa";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  // Plus Jakarta Sans is a variable font — omit `weight` so next/font ships one
  // small variable file that covers all weights (400–800) used across the UI.
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "PT. Pakar Inspeksi Indonesia — Electrical, Security & Mechanical Solutions",
  description:
    "Perusahaan nasional sejak 2014 di bidang Electrical, Security System, PLC, Mechanical Plumbing, PLTS dan Penyedia Sumber Daya Manusia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* LCP hint — mobile hero poster (28KB, tiny). Media query keeps desktop untouched. */}
        <link
          rel="preload"
          as="image"
          href="/video/posters/lapangan-1.jpg"
          fetchPriority="high"
          media="(max-width: 1023px)"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingWA />
      </body>
    </html>
  );
}
