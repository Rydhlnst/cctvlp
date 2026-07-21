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
  metadataBase: new URL("https://jasapasangcctvkawasanindustribukitindahcity.my.id"),
  title: {
    default:
      "Jasa Pasang CCTV Kawasan Industri Bukit Indah City — PT. Pakar Inspeksi Indonesia",
    template: "%s | PT. Pakar Inspeksi Indonesia",
  },
  description:
    "Jasa Pasang CCTV Kawasan Industri Bukit Indah City & Kawasan Industri Kota Bukit Indah (KBI/KIBI) — instalasi CCTV, panel listrik, penangkal petir, grounding, dan renovasi untuk pabrik di Cikampek–Karawang. Tim tersertifikasi K3LL sejak 2014.",
  keywords: [
    "Kawasan Industri Kota Bukit Indah",
    "Kawasan Industri Bukit Indah City",
    "Bukit Indah City Cikampek",
    "Jasa Pasang CCTV Kawasan Industri Bukit Indah City",
    "Jasa CCTV Kawasan Industri Kota Bukit Indah",
    "Pasang CCTV Pabrik Bukit Indah",
    "CCTV Cikampek Karawang",
    "Instalasi CCTV Kawasan Industri Cikampek",
    "Kontraktor Electrical Bukit Indah City",
    "Panel Listrik Kawasan Industri Bukit Indah",
    "Penangkal Petir Bukit Indah City",
    "PT. Pakar Inspeksi Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "PT. Pakar Inspeksi Indonesia",
    title:
      "Jasa Pasang CCTV Kawasan Industri Bukit Indah City — Cikampek, Karawang",
    description:
      "Spesialis pemasangan CCTV, panel listrik, penangkal petir, grounding, dan renovasi untuk pabrik di Kawasan Industri Kota Bukit Indah (Bukit Indah City), Cikampek–Karawang. Tim tersertifikasi K3LL sejak 2014.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jasa Pasang CCTV Kawasan Industri Bukit Indah City — Cikampek, Karawang",
    description:
      "Pemasangan CCTV & sistem kelistrikan pabrik di Kawasan Industri Kota Bukit Indah (KBI). Konsultasi WA 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PT. Pakar Inspeksi Indonesia",
              image:
                "https://jasapasangcctvkawasanindustribukitindahcity.my.id/video/posters/lapangan-1.jpg",
              url: "https://jasapasangcctvkawasanindustribukitindahcity.my.id",
              telephone: "+62-877-6073-7847",
              email: "ptpakarinspeksiindonesia@gmail.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Perum Kebun Kembang Asri",
                addressLocality: "Cikampek Timur, Kec. Cikampek",
                addressRegion: "Karawang, Jawa Barat",
                postalCode: "41373",
                addressCountry: "ID",
              },
              areaServed: [
                "Kawasan Industri Kota Bukit Indah",
                "Kawasan Industri Bukit Indah City",
                "Cikampek",
                "Karawang",
                "Purwakarta",
                "Jawa Barat",
                "Indonesia",
              ],
              description:
                "Jasa Pasang CCTV Kawasan Industri Bukit Indah City (Kawasan Industri Kota Bukit Indah) — instalasi CCTV, panel listrik, penangkal petir, grounding, dan renovasi untuk pabrik di Cikampek dan Karawang. Tersertifikasi K3LL sejak 2014.",
              foundingDate: "2014",
              sameAs: [
                "https://jasapasangcctvkawasanindustribukitindahcity.my.id",
                "https://inspeksiindonesia.com",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingWA />
      </body>
    </html>
  );
}
