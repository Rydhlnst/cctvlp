import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWA } from "@/components/site/floating-wa";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingWA />
      </body>
    </html>
  );
}
