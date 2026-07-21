"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Camera,
  Car,
  Check,
  ChevronRight,
  CloudLightning,
  Cpu,
  FileCheck2,
  Gauge,
  Globe,
  HardHat,
  Hotel,
  Landmark,
  Layers,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  Truck,
  Users,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

import { ClientLogoBadge, REAL_WIKIMEDIA_CLIENTS } from "@/components/site/client-logos";
import { Gallery } from "@/components/site/gallery";
import { HeroCarousel } from "@/components/site/hero-carousel";
import { Logo } from "@/components/site/logo";
import { Navbar } from "@/components/site/navbar";
import { PosterCarousel } from "@/components/site/poster-carousel";
import { VideoGallery } from "@/components/site/video-gallery";
import { VideoSection } from "@/components/site/video-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker";
import { cn } from "@/lib/utils";
import { ADMIN_WA_DISPLAY, waUrl } from "@/lib/whatsapp";

const NAV = [
  { label: "Produk", href: "#produk" },
  { label: "Solusi", href: "#solusi" },
  { label: "Paket", href: "#paket" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

const BENEFITS = [
  { icon: ShieldCheck, title: "K3LL menyeluruh" },
  { icon: Gauge, title: "Respons cepat 24/7" },
  { icon: LineChart, title: "Skalabel & terpusat" },
];

const PRODUCTS = [
  {
    icon: Camera,
    title: "Layanan Jasa Pemasangan CCTV",
    tag: "Security System",
    desc: "Instalasi kamera CCTV HD/IP, DVR/NVR, integrasi jaringan pengawasan 24/7 untuk rumah, kantor & pabrik.",
    image: "/gallery/IMG-20260720-WA0005.jpg",
  },
  {
    icon: Zap,
    title: "Layanan Jasa Instalasi Listrik",
    tag: "Electrical Works",
    desc: "Pemasangan dan peremajaan instalasi listrik tegangan rendah & menengah (MV/LV) standar K3LL.",
    image: "/gallery/IMG-20260720-WA0060.jpg",
  },
  {
    icon: Cpu,
    title: "Layanan Jasa Perakitan Panel Listrik",
    tag: "Panel Assembly",
    desc: "Perakitan panel MDP, SDP, ATS-AMF, kapasitor bank, dan sinkronisasi genset terintegrasi.",
    image: "/gallery/IMG-20260720-WA0059.jpg",
  },
  {
    icon: CloudLightning,
    title: "Layanan Jasa Pemasangan Penangkal Petir",
    tag: "Lightning Protection",
    desc: "Pemasangan penangkal petir elektrostatis & konvensional untuk perlindungan maksimal bangunan.",
    image: "/gallery/IMG-20260720-WA0063.jpg",
  },
  {
    icon: Layers,
    title: "Layanan Jasa Pemasangan Grounding Sistem",
    tag: "Grounding System",
    desc: "Pemasangan pembumian (grounding) dengan resistansi rendah untuk keamanan peralatan listrik & elektronik.",
    image: "/gallery/IMG-20260720-WA0083.jpg",
  },
  {
    icon: Car,
    title: "Layanan Jasa Pemasangan Charger Mobil Listrik",
    tag: "EV Charging Station",
    desc: "Instalasi charger EV (Electric Vehicle) home charging & SPKLU komersial yang aman dan standar.",
    image: "/gallery/IMG-20260720-WA0080.jpg",
  },
  {
    icon: Lightbulb,
    title: "Layanan Jasa Pemasangan PJU",
    tag: "Public Street Lighting",
    desc: "Pemasangan Penerangan Jalan Umum (PJU) konvensional dan solar cell mandiri untuk jalan & perumahan.",
    image: "/gallery/IMG-20260720-WA0077.jpg",
  },
  {
    icon: Building2,
    title: "Layanan Jasa Renovasi Rumah, Kantor dan Gedung",
    tag: "Renovation & Build",
    desc: "Pekerjaan renovasi total/parsial, struktur, interior, eksterior, dan sipil bangunan berkualitas.",
    image: "/gallery/IMG-20260720-WA0071.jpg",
  },
] as const;

const HERO_TILES = [
  { label: "Gerbang Utama", src: "/gallery/IMG-20260720-WA0001.jpg" },
  { label: "Warehouse", src: "/gallery/IMG-20260720-WA0080.jpg" },
  { label: "Lobi", src: "/gallery/IMG-20260720-WA0006.jpg" },
  { label: "Panel Room", src: "/gallery/IMG-20260720-WA0059.jpg" },
  { label: "Parkir A", src: "/gallery/IMG-20260720-WA0002.jpg" },
  { label: "Loading Bay", src: "/gallery/IMG-20260720-WA0004.jpg" },
  { label: "Perimeter", src: "/gallery/IMG-20260720-WA0005.jpg" },
  { label: "Server Room", src: "/gallery/IMG-20260720-WA0071.jpg" },
];

const SOLUTIONS = [
  {
    id: "industri",
    icon: Warehouse,
    label: "Industri & Pabrik",
    desc: "Perakitan panel listrik, instalasi grounding system, penangkal petir, dan CCTV lantai produksi & gudang.",
    products: ["Layanan Jasa Perakitan Panel Listrik", "Layanan Jasa Pemasangan Grounding Sistem", "Layanan Jasa Pemasangan CCTV"],
  },
  {
    id: "perbankan",
    icon: Landmark,
    label: "Perbankan",
    desc: "Infrastruktur CCTV bertingkat, penangkal petir, dan grounding sistem untuk cabang & ruang server.",
    products: ["Layanan Jasa Pemasangan CCTV", "Layanan Jasa Pemasangan Grounding Sistem", "Layanan Jasa Instalasi Listrik"],
  },
  {
    id: "retail",
    icon: ShoppingBag,
    label: "Retail & F&B",
    desc: "Instalasi CCTV toko, charger mobil listrik area parkir, dan instalasi listrik gerai.",
    products: ["Layanan Jasa Pemasangan CCTV", "Layanan Jasa Pemasangan Charger Mobil Listrik", "Layanan Jasa Instalasi Listrik"],
  },
  {
    id: "perhotelan",
    icon: Hotel,
    label: "Perhotelan",
    desc: "Sistem PJU area properti, EV charger untuk tamu, penangkal petir, dan renovasi area hotel.",
    products: ["Layanan Jasa Pemasangan PJU", "Layanan Jasa Pemasangan Charger Mobil Listrik", "Layanan Jasa Renovasi Rumah, Kantor dan Gedung"],
  },
  {
    id: "kantor",
    icon: Building2,
    label: "Perkantoran",
    desc: "Renovasi gedung kantor, instalasi listrik modern, perakitan panel, dan EV charger perkantoran.",
    products: ["Layanan Jasa Renovasi Rumah, Kantor dan Gedung", "Layanan Jasa Instalasi Listrik", "Layanan Jasa Pemasangan Charger Mobil Listrik"],
  },
  {
    id: "konstruksi",
    icon: HardHat,
    label: "Konstruksi",
    desc: "Perakitan panel temporer, grounding sistem proyek, penangkal petir, dan pembangunan gedung.",
    products: ["Layanan Jasa Perakitan Panel Listrik", "Layanan Jasa Pemasangan Penangkal Petir", "Layanan Jasa Renovasi Rumah, Kantor dan Gedung"],
  },
];

const VALUES = [
  { title: "Challenge", desc: "Challenge ourselves to grow." },
  { title: "Speed", desc: "Be bold and move fast." },
  { title: "Honesty", desc: "Customers at the heart of everything." },
  { title: "Trust", desc: "Build trust with transparency." },
];

const CLIENTS = [
  "WIKA", "KFC", "MINISO", "BCA", "HSRCC", "Bonita",
  "iDexpress", "Bank Sinarmas", "Mandiri", "Bridgestone", "Pirelli", "BNI",
  "Pertamina", "BRI", "McDonald's", "Dunlop", "Optik Melawai", "Tamara Group",
  "Scuto", "BWS", "Aston", "Indomobil", "RSIA Melinda", "Holland Bakery",
  "Jasamarga", "Aqma", "Esa", "Umama Gallery",
];

const PROOF = [
  { icon: Award, value: "10+", label: "Tahun Pengalaman", desc: "Sejak 2014 melayani industri" },
  { icon: Building2, value: "8", label: "Layanan Jasa Utama", desc: "CCTV, Listrik, Panel, Renovasi, DLL" },
  { icon: Users, value: "28+", label: "Klien Nasional", desc: "Perbankan, retail & korporat" },
  { icon: Gauge, value: "24/7", label: "Support Proyek", desc: "Tim siaga respon cepat" },
];

const PACKAGES = [
  {
    name: "Basic",
    tagline: "Kebutuhan instalasi ringan",
    price: "Mulai Rp 2,5jt",
    features: [
      "Survei lokasi",
      "Instalasi 1 titik layanan",
      "Garansi teknisi 30 hari",
      "Konsultasi via chat",
    ],
    featured: false,
  },
  {
    name: "Pro",
    tagline: "Standar usaha & kantor",
    price: "Mulai Rp 8jt",
    features: [
      "Survei + desain teknis",
      "Instalasi multi-titik",
      "Garansi menyeluruh 90 hari",
      "Prioritas response support",
      "Maintenance ringan 1 bulan",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "Skala industri & korporat",
    price: "Custom",
    features: [
      "Perencanaan & manajemen proyek",
      "SDM & alat bersertifikasi",
      "K3LL menyeluruh",
      "SLA & maintenance kontrak",
      "Integrasi lintas sistem",
    ],
    featured: false,
  },
];

const LEGAL = [
  { label: "NIB", value: "2007220065552" },
  { label: "KEMENKUMHAM", value: "AHU-027251.AH.01.30 · 2022" },
  { label: "NPWP", value: "60.300.620.6-409.000" },
];

const FAQ = [
  {
    q: "Area layanan mana saja yang dijangkau?",
    a: "Kami beroperasi di berbagai daerah di Indonesia, berpusat di Purwakarta, Jawa Barat. Proyek luar Jawa tetap kami tangani — silakan chat admin untuk konfirmasi lokasi dan estimasi mobilisasi tim.",
  },
  {
    q: "Bagaimana proses konsultasi dan survei?",
    a: "Diskusi awal via WhatsApp gratis tanpa komitmen. Setelah kebutuhan jelas, tim melakukan survei lokasi, lalu memberikan penawaran teknis & harga. Jadwal survei disesuaikan dengan operasional Anda.",
  },
  {
    q: "Apakah menerima proyek skala kecil?",
    a: "Ya. Paket Basic dirancang khusus untuk kebutuhan instalasi 1 titik seperti CCTV rumah/toko atau perbaikan elektronik. Tidak ada minimum proyek yang kaku — kami menyesuaikan.",
  },
  {
    q: "Bagaimana skema pembayaran?",
    a: "Umumnya termin: uang muka saat kontrak, progres saat instalasi, pelunasan saat serah terima. Untuk paket kecil bisa 50/50. Detail final ditentukan bersama admin sebelum pekerjaan dimulai.",
  },
  {
    q: "Berapa lama garansi pekerjaan?",
    a: "Garansi teknisi mulai dari 30 hari untuk Paket Basic, 90 hari menyeluruh untuk Paket Pro, dan mengikuti SLA kontrak untuk Enterprise. Garansi perangkat mengikuti masa garansi resmi dari pabrikan.",
  },
  {
    q: "Apakah tersedia paket maintenance?",
    a: "Ya. Paket Pro sudah mencakup maintenance ringan 1 bulan. Untuk Enterprise, kami menyediakan kontrak maintenance berkala dengan SLA respons dan laporan periodik.",
  },
  {
    q: "Apakah tim bersertifikasi K3LL dan berbadan hukum resmi?",
    a: "Ya. PT. Pakar Inspeksi Indonesia terdaftar Kemenkumham (AHU-027251.AH.01.30 tahun 2022), NIB 2007220065552, NPWP resmi, dan seluruh proyek dijalankan dengan standar Keselamatan, Kesehatan Kerja, dan Lingkungan (K3LL).",
  },
  {
    q: "Bagaimana kontak darurat di luar jam kerja?",
    a: "Untuk klien kontrak, tersedia jalur support 24/7. Untuk yang belum berkontrak, kirim pesan ke WhatsApp admin — pesan tetap dipantau di luar jam kerja untuk kasus kritis.",
  },
];

/* ---------- SVG covers (original, procedural) ---------- */

function Cover({ kind }: { kind: string }) {
  const commonProps = {
    className: "h-full w-full text-primary/60",
    viewBox: "0 0 200 100",
    preserveAspectRatio: "xMidYMid slice",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  switch (kind) {
    case "dots":
      return (
        <svg {...commonProps}>
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 20 }).map((__, c) => (
              <circle
                key={`${r}-${c}`}
                cx={c * 10 + 5}
                cy={r * 12 + 8}
                r={r === 3 && c === 10 ? 3 : 1}
                fill="currentColor"
                opacity={r === 3 && c === 10 ? 1 : 0.35}
              />
            ))
          )}
        </svg>
      );
    case "waves":
      return (
        <svg {...commonProps}>
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${20 + i * 15} Q50 ${5 + i * 15} 100 ${20 + i * 15} T200 ${20 + i * 15}`}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity={0.4 + i * 0.1}
            />
          ))}
        </svg>
      );
    case "orbit":
      return (
        <svg {...commonProps}>
          <circle cx="100" cy="50" r="6" fill="currentColor" />
          {[20, 35, 50].map((r, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="50"
              rx={r * 1.6}
              ry={r * 0.7}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity={0.4}
              transform={`rotate(${i * 40} 100 50)`}
            />
          ))}
          <circle cx="150" cy="35" r="2" fill="currentColor" />
          <circle cx="55" cy="65" r="2" fill="currentColor" />
        </svg>
      );
    case "iso":
      return (
        <svg {...commonProps}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} transform={`translate(${20 + i * 28} ${20 + (i % 2) * 8})`}>
              <path d="M0 20 L15 12 L30 20 L15 28 Z" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M0 20 L0 40 L15 48 L15 28" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
              <path d="M30 20 L30 40 L15 48 L15 28" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
            </g>
          ))}
        </svg>
      );
    case "pipes":
      return (
        <svg {...commonProps}>
          {[10, 30, 50, 70, 90].map((y) => (
            <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.35" />
          ))}
          {[40, 100, 160].map((x) => (
            <circle key={x} cx={x} cy="50" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          ))}
        </svg>
      );
    case "rays":
      return (
        <svg {...commonProps}>
          <circle cx="100" cy="80" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i / 14) * Math.PI;
            const x1 = 100 + Math.cos(a) * 24;
            const y1 = 80 - Math.sin(a) * 24;
            const x2 = 100 + Math.cos(a) * 42;
            const y2 = 80 - Math.sin(a) * 42;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.6" />;
          })}
        </svg>
      );
    case "grid":
      return (
        <svg {...commonProps}>
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 20} x2="200" y2={i * 20} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          ))}
          <rect x="70" y="30" width="60" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "cross":
      return (
        <svg {...commonProps}>
          {Array.from({ length: 40 }).map((_, i) => {
            const x = (i % 10) * 20 + 10;
            const y = Math.floor(i / 10) * 25 + 12;
            return (
              <g key={i} stroke="currentColor" strokeWidth="1" opacity="0.5">
                <line x1={x - 3} y1={y} x2={x + 3} y2={y} />
                <line x1={x} y1={y - 3} x2={x} y2={y + 3} />
              </g>
            );
          })}
        </svg>
      );
    case "bars":
    default:
      return (
        <svg {...commonProps}>
          {Array.from({ length: 20 }).map((_, i) => (
            <rect
              key={i}
              x={i * 10 + 2}
              y={100 - (20 + ((i * 13) % 55))}
              width="6"
              height={20 + ((i * 13) % 55)}
              fill="currentColor"
              opacity={0.35 + ((i * 7) % 40) / 100}
            />
          ))}
        </svg>
      );
  }
}

function WhatsAppButton({
  product,
  intent = "consult",
  children,
  variant = "default",
  size = "lg",
  className,
}: {
  product: string;
  intent?: "order" | "consult" | "quote";
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}) {
  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a
        href={waUrl(product, intent)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Button>
  );
}

export default function Home() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Navbar />

      {/* Hero — MOBILE: cinematic video background with staggered text reveal */}
      <section className="relative overflow-hidden border-b border-border/60 bg-black lg:hidden">
        {/* Background video — LCP element on mobile */}
        <video
          src="/video/lapangan-1.mp4"
          poster="/video/posters/lapangan-1.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlays — darken + brand gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />

        {/* Content — staggered fade-in */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-14 pt-32">
          <div className="opacity-0 hero-in hero-in-2">
            <Badge
              variant="secondary"
              className="rounded-none border border-white/20 bg-white/10 text-white backdrop-blur-md"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              Perusahaan nasional · Sejak 2014
            </Badge>
          </div>

          <h1 className="display-tight mt-6 text-balance text-5xl font-semibold tracking-tight text-white drop-shadow-lg md:text-7xl opacity-0 hero-in hero-in-3">
            Keamanan &amp; teknis
            <br />
            untuk bisnis
            <br />
            <span className="text-primary">yang tumbuh.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 drop-shadow md:text-lg opacity-0 hero-in hero-in-4">
            Electrical, Security System, Mechanical, PLC, dan Penyedia SDM —
            satu mitra untuk seluruh kebutuhan teknis Anda, dikerjakan tim
            tersertifikasi dengan standar K3LL menyeluruh.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 opacity-0 hero-in hero-in-5">
            <WhatsAppButton product="Proyek Baru" intent="quote">
              Mulai Proyek
              <ArrowRight />
            </WhatsAppButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="#produk">Jelajahi Produk</a>
            </Button>
          </div>

          <ItemGroup className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-3 opacity-0 hero-in hero-in-6">
            {BENEFITS.map(({ icon: Icon, title }) => (
              <Item
                key={title}
                variant="muted"
                className="rounded-none border border-white/15 bg-white/10 p-2.5 backdrop-blur-md"
              >
                <ItemMedia variant="icon" className="text-primary">
                  <Icon className="size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="text-xs font-semibold text-white">
                    {title}
                  </ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </section>

      {/* Hero — DESKTOP: original two-column layout */}
      <section className="relative hidden overflow-hidden border-b border-border/60 lg:block">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Badge variant="secondary" className="gap-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                Perusahaan nasional · Sejak 2014
              </Badge>

              <h1 className="display-tight mt-6 text-balance text-5xl font-semibold md:text-7xl lg:text-[5.5rem] tracking-tight">
                Keamanan &amp; teknis
                <br />
                untuk bisnis
                <br />
                <span className="text-primary">yang tumbuh.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Electrical, Security System, Mechanical, PLC, dan Penyedia SDM —
                satu mitra untuk seluruh kebutuhan teknis Anda, dikerjakan tim
                tersertifikasi dengan standar K3LL menyeluruh.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppButton product="Proyek Baru" intent="quote">
                  Mulai Proyek
                  <ArrowRight />
                </WhatsAppButton>
                <Button size="lg" variant="outline" asChild>
                  <a href="#produk">Jelajahi Produk</a>
                </Button>
              </div>

              <ItemGroup className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {BENEFITS.map(({ icon: Icon, title }) => (
                  <Item key={title} variant="muted" className="p-2.5 border border-border/40 bg-muted/40">
                    <ItemMedia variant="icon" className="text-primary">
                      <Icon className="size-4" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className="text-xs font-semibold text-foreground">{title}</ItemTitle>
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </div>

            <div className="lg:col-span-5 w-full">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Hero visual band — mobile: 2-row bidirectional marquee, desktop: 8-col grid */}
      <section className="border-b border-border/60 bg-muted/30 py-6 md:py-8">
        {/* MOBILE — 2 baris marquee kanan-kiri */}
        <div className="mask-fade-x space-y-2 overflow-hidden md:hidden">
          {[0, 1].map((row) => {
            const tiles = row === 0 ? HERO_TILES.slice(0, 4) : HERO_TILES.slice(4);
            return (
              <div
                key={row}
                className={cn(
                  "flex w-max gap-2",
                  row === 0 ? "animate-marquee-slow" : "animate-marquee-slow-reverse"
                )}
              >
                {[...tiles, ...tiles, ...tiles].map((tile, i) => (
                  <div
                    key={`${row}-${i}`}
                    className="relative flex aspect-square w-32 shrink-0 flex-col justify-between overflow-hidden rounded-none border border-border/60 bg-background p-2 text-[10px] font-medium"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tile.src}
                      alt={tile.label}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
                    <div className="relative flex items-center gap-1 text-white/90 drop-shadow">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      LIVE
                    </div>
                    <div className="relative flex items-center justify-between text-white drop-shadow">
                      <span>CH{String((row * 4 + (i % tiles.length)) + 1).padStart(2, "0")}</span>
                      <span className="truncate">{tile.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* TABLET/DESKTOP — 8-col grid */}
        <div className="mx-auto hidden max-w-7xl px-6 md:block">
          <div className="grid grid-cols-4 gap-2 lg:grid-cols-8">
            {HERO_TILES.map((tile, i) => (
              <div
                key={tile.label}
                className="relative flex aspect-square flex-col justify-between overflow-hidden rounded-none border border-border/60 bg-background p-2 text-[10px] font-medium"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile.src}
                  alt={tile.label}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
                <div className="relative flex items-center gap-1 text-white/90 drop-shadow">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  LIVE
                </div>
                <div className="relative flex items-center justify-between text-white drop-shadow">
                  <span>CH{String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate">{tile.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company profile video (lazy — nothing streams until user clicks Play) */}
      <VideoSection />

      {/* Marquee clients */}
      <section className="overflow-hidden border-b border-border/60 bg-background py-8">
        <div className="mx-auto max-w-7xl px-6 mb-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Dipercaya oleh Perusahaan &amp; BUMN Nasional
          </p>
        </div>
        <div className="mask-fade-x relative flex w-full overflow-hidden">
          <div className="animate-marquee flex items-center w-max gap-12 md:gap-16 py-2 hover:[animation-play-state:paused]">
            {[...REAL_WIKIMEDIA_CLIENTS, ...REAL_WIKIMEDIA_CLIENTS].map((c, i) => (
              <ClientLogoBadge key={`${c.name}-${i}`} name={c.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Proof band — minimal borderless executive design */}
      <section className="border-b border-border/60 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {PROOF.map(({ icon: Icon, value, label, desc }) => (
              <div
                key={label}
                className="group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center bg-primary/20 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-4 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="display-tight text-5xl font-extrabold tracking-tight text-background md:text-6xl transition-colors duration-300 group-hover:text-primary">
                    {value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-background/90">
                    {label}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-background/60">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produk" className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4">Produk & Layanan</Badge>
              <h2 className="display-tight text-4xl font-semibold md:text-6xl">
                Portofolio lengkap. Satu mitra.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Tombol Konsultasi di tiap kartu otomatis membuka WhatsApp admin
              dengan format pesan produk yang Anda pilih.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map(({ icon: Icon, title, tag, desc, image }) => (
              <Card
                key={title}
                className="group relative flex flex-col overflow-hidden border-border/60 p-0 transition-all duration-300 hover:border-primary hover:shadow-md"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-muted/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-none bg-background text-primary shadow-xs">
                    <Icon className="size-4" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute right-4 top-4 text-[10px] rounded-none"
                  >
                    {tag}
                  </Badge>
                </div>
                <CardHeader className="gap-2">
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pb-4 pt-2">
                  <div className="opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <WhatsAppButton
                      product={title}
                      intent="consult"
                      variant="default"
                      size="sm"
                      className="w-full bg-primary text-primary-foreground font-semibold shadow-xs hover:bg-primary/90 rounded-none"
                    >
                      <MessageCircle className="size-4" />
                      Konsultasi via WhatsApp
                      <ArrowUpRight className="size-4" />
                    </WhatsAppButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video gallery — dokumentasi & promosi (lazy per video) */}
      <section id="video-gallery" className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4">Galeri Video</Badge>
              <h2 className="display-tight text-4xl font-semibold md:text-6xl">
                Lihat proses & hasil.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Video promosi tiap layanan + dokumentasi lapangan. Klik untuk
              memutar — hanya video yang di‑klik yang akan dimuat.
            </p>
          </div>

          <VideoGallery />
        </div>
      </section>

      {/* Poster / Materi Layanan — carousel */}
      <section id="materi" className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4">Materi Layanan</Badge>
              <h2 className="display-tight text-4xl font-semibold md:text-6xl">
                Brosur & poster resmi.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Geser untuk melihat materi tiap layanan. Klik poster untuk versi
              lengkap yang bisa dibagikan atau dicetak.
            </p>
          </div>

          <PosterCarousel />
        </div>
      </section>

      {/* Solutions tabs */}
      <section id="solusi" className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Solusi per Industri</Badge>
            <h2 className="display-tight text-4xl font-semibold md:text-6xl">
              Dibangun untuk industri Anda.
            </h2>
          </div>

          <Tabs defaultValue={SOLUTIONS[0].id} className="gap-8">
            {/* Horizontal-scroll tablist on mobile — no wrapping onto card */}
            <div className="mask-fade-x -mx-6 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList
                variant="line"
                className="mx-auto flex w-max min-w-full snap-x snap-mandatory items-center justify-start gap-2 md:justify-center md:flex-wrap"
              >
                {SOLUTIONS.map(({ id, icon: Icon, label }) => (
                  <TabsTrigger
                    key={id}
                    value={id}
                    className="shrink-0 snap-start whitespace-nowrap"
                  >
                    <Icon />
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {SOLUTIONS.map((s) => (
              <TabsContent key={s.id} value={s.id}>
                <Card className="border-border/60">
                  <CardContent className="grid gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
                    <div>
                      <div className="mb-4 flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <s.icon className="size-5" />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {s.label}
                      </h3>
                      <p className="mt-3 text-muted-foreground">{s.desc}</p>
                      <div className="mt-6">
                        <WhatsAppButton
                          product={`Solusi untuk ${s.label}`}
                          intent="consult"
                          variant="outline"
                        >
                          Konsultasi sektor {s.label}
                          <ArrowUpRight />
                        </WhatsAppButton>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Produk terkait
                      </div>
                      <ItemGroup className="gap-2">
                        {s.products.map((p) => (
                          <Item
                            key={p}
                            asChild
                            variant="outline"
                            className="p-3 bg-background hover:border-primary/40 transition-colors"
                          >
                            <a
                              href={waUrl(`${p} — untuk ${s.label}`, "consult")}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ItemContent>
                                <ItemTitle className="text-sm font-medium">{p}</ItemTitle>
                              </ItemContent>
                              <ItemActions>
                                <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover/item:translate-x-0.5" />
                              </ItemActions>
                            </a>
                          </Item>
                        ))}
                      </ItemGroup>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Packages */}
      <section id="paket" className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Paket Layanan</Badge>
            <h2 className="display-tight text-4xl font-semibold md:text-6xl">
              Pilih paket, langsung order.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tombol Order otomatis membuka WhatsApp admin dengan nama paket
              yang Anda pilih.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 pt-6 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <Card
                key={p.name}
                className={cn(
                  "relative border rounded-none transition-all",
                  p.featured
                    ? "z-10 border-2 border-primary shadow-lg overflow-visible md:-my-2 bg-background"
                    : "border-border/60 overflow-visible bg-background"
                )}
              >
                {p.featured && (
                  <Badge className="absolute -top-3.5 left-6 z-30 bg-primary text-primary-foreground font-semibold px-3 py-1 shadow-sm rounded-none">
                    Paling populer
                  </Badge>
                )}
                <CardHeader className="gap-2">
                  <CardTitle className="text-lg">{p.name}</CardTitle>
                  <CardDescription>{p.tagline}</CardDescription>
                  <div className="display-tight pt-4 text-4xl font-semibold text-foreground">
                    {p.price}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  <Separator />
                  <ItemGroup className="gap-2">
                    {p.features.map((f) => (
                      <Item key={f} size="xs" className="p-0 border-0 bg-transparent">
                        <ItemMedia variant="icon" className="text-primary">
                          <Check className="size-4" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-xs font-medium text-foreground">{f}</ItemTitle>
                        </ItemContent>
                      </Item>
                    ))}
                  </ItemGroup>
                  <WhatsAppButton
                    product={`Paket ${p.name}`}
                    intent="order"
                    variant={p.featured ? "default" : "outline"}
                    className="w-full"
                  >
                    <MessageCircle />
                    Order Paket {p.name}
                  </WhatsAppButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About + Vision + Values */}
      <section id="tentang" className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4">
                <Sparkles className="size-3" />
                Tentang Kami
              </Badge>
              <h2 className="display-tight text-4xl font-semibold md:text-6xl">
                Sejak 2014, mengerjakan proyek lintas industri di seluruh
                Indonesia.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                PT. Pakar Inspeksi Indonesia — perusahaan swasta berskala
                nasional yang berdiri sejak 2014, berpusat di Purwakarta, Jawa
                Barat.
              </p>
              <p>
                Kami meningkatkan kinerja lewat manajemen teknologi, budaya
                organisasi, sistem informasi, dan manajemen risiko dalam
                konstruksi — untuk kepuasan pelanggan yang nyata dengan karya
                berkualitas dan tepat waktu.
              </p>
              <WhatsAppButton
                product="Diskusi Kebutuhan Proyek"
                intent="consult"
                variant="outline"
              >
                Diskusi bersama tim
                <ArrowUpRight />
              </WhatsAppButton>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-[1.2fr_1fr]">
            <Card className="border-border/60">
              <CardHeader className="h-full justify-between gap-8">
                <div>
                  <Badge variant="outline" className="mb-4 w-fit">Vision</Badge>
                  <CardTitle className="text-2xl leading-snug tracking-tight md:text-3xl">
                    Menjadi group perusahaan yang bermanfaat dan memudahkan
                    aktivitas sehari-hari melalui teknologi One&nbsp;Click.
                  </CardTitle>
                </div>
                <CardDescription className="leading-relaxed">
                  Perusahaan Mechanical Electrical, Security System &amp;
                  Outsourcing profesional yang turut membantu percepatan
                  perekonomian Indonesia.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <Card key={v.title} className="border-border/60">
                  <CardHeader className="gap-2">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <CardTitle className="text-xs font-semibold uppercase tracking-widest">
                        {v.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {v.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-24 md:grid-cols-2">
          <Card className="border-border/60">
            <CardHeader>
              <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Award className="size-5" />
              </div>
              <CardTitle>Kebijakan Mutu</CardTitle>
              <CardDescription className="leading-relaxed">
                Pengadaan SDM, barang, dan jasa ketenagalistrikan &amp; sistem
                keamanan yang profesional dan bersertifikasi. Menjamin
                kehandalan operasional industri lewat inspeksi dini,
                preventif, dan eksekusi efisien.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/60">
            <CardHeader>
              <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <HardHat className="size-5" />
              </div>
              <CardTitle>Kebijakan K3LL</CardTitle>
              <CardDescription className="leading-relaxed">
                Berkomitmen menjaga Kesehatan dan Keselamatan Kerja bagi
                karyawan, pekerja, dan pihak lain — mematuhi peraturan
                perundang-undangan untuk mencegah kecelakaan dan penyakit
                akibat kerja.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Clients + Legalitas */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Klien</Badge>
            <h2 className="display-tight text-4xl font-semibold md:text-5xl">
              Dipercaya lintas industri di Indonesia.
            </h2>
          </div>
          <div className="mb-16 flex flex-wrap justify-center gap-4 items-center">
            {REAL_WIKIMEDIA_CLIENTS.map((c) => (
              <ClientLogoBadge key={c.name} name={c.name} />
            ))}
          </div>

          <Separator />

          <div className="mt-10">
            <div className="mb-6 flex items-center gap-2">
              <FileCheck2 className="size-4 text-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Legalitas Resmi
              </span>
            </div>
            <ItemGroup className="grid gap-4 md:grid-cols-3">
              {LEGAL.map((l) => (
                <Item key={l.label} variant="outline" className="p-4 bg-background border-border/60">
                  <ItemMedia variant="icon" className="size-9 rounded-md bg-primary/10 text-primary">
                    <FileCheck2 className="size-4" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemDescription className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {l.label}
                    </ItemDescription>
                    <ItemTitle className="mt-1 font-mono text-sm font-semibold text-foreground">
                      {l.value}
                    </ItemTitle>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </div>
        </div>
      </section>

      {/* Gallery — Pinterest-style masonry, expandable */}
      <section id="galeri" className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4">Galeri Proyek</Badge>
              <h2 className="display-tight text-4xl font-semibold md:text-6xl">
                Karya di lapangan.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Cuplikan dokumentasi lintas layanan — dari instalasi panel,
              CCTV, hingga proyek konstruksi.
            </p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="display-tight text-4xl font-semibold md:text-6xl">
              Pertanyaan yang sering diajukan.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Belum menemukan jawaban? Chat admin langsung — biasanya balas
              dalam hitungan menit di jam kerja.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="rounded-xl border border-border/60 bg-background"
          >
            {FAQ.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                className="border-b border-border/60 px-6 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <div className="text-sm text-muted-foreground">
              Masih ada pertanyaan?
            </div>
            <WhatsAppButton product="Pertanyaan dari FAQ" intent="consult">
              <MessageCircle />
              Tanya admin sekarang
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Final CTA — massive */}
      <section
        id="kontak"
        className="border-b border-border/60 bg-foreground text-background"
      >
        <div className="mx-auto max-w-7xl px-6 py-32 text-center">
          <Badge
            variant="outline"
            className="border-background/30 bg-transparent text-background"
          >
            <MessageCircle className="size-3" />
            Admin Pembayaran
          </Badge>
          <h2 className="display-tight mx-auto mt-6 max-w-5xl text-5xl font-semibold md:text-[7rem]">
            Siap order?
            <br />
            <span className="text-primary">Chat sekarang.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg opacity-75">
            Tim admin membantu proses pemesanan hingga pembayaran. Konsultasi
            awal gratis, tanpa komitmen.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <WhatsAppButton product="Order & Pembayaran" intent="order">
              <MessageCircle />
              Chat {ADMIN_WA_DISPLAY}
            </WhatsAppButton>
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
              asChild
            >
              <a href="mailto:ptpakarinspeksiindonesia@gmail.com">
                <Mail />
                Kirim Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <Logo variant="footer" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                PT. Pakar Inspeksi Indonesia — Electrical, Security System,
                Mechanical, PLC &amp; Human Resources sejak 2014.
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  product="Kontak dari Footer"
                  intent="consult"
                  variant="outline"
                  size="sm"
                >
                  <MessageCircle />
                  Chat Admin
                </WhatsAppButton>
              </div>
            </div>

            <div>
              <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Kontak
              </div>
              <div className="space-y-3 text-sm">
                <Marker className="items-start">
                  <MarkerIcon><MapPin className="mt-0.5 size-4 text-muted-foreground" /></MarkerIcon>
                  <MarkerContent className="text-xs leading-relaxed text-muted-foreground">
                    Margasaluyu RT 01 RW 01, Desa Cisarua, Kec. Tegalwaru, Kab. Purwakarta, Jawa Barat.
                  </MarkerContent>
                </Marker>
                <Marker>
                  <MarkerIcon><Phone className="size-4 text-muted-foreground" /></MarkerIcon>
                  <MarkerContent className="text-xs text-muted-foreground">{ADMIN_WA_DISPLAY}</MarkerContent>
                </Marker>
                <Marker>
                  <MarkerIcon><Mail className="size-4 text-muted-foreground" /></MarkerIcon>
                  <MarkerContent className="text-xs text-muted-foreground">ptpakarinspeksiindonesia@gmail.com</MarkerContent>
                </Marker>
                <Marker>
                  <MarkerIcon><Globe className="size-4 text-muted-foreground" /></MarkerIcon>
                  <MarkerContent className="text-xs text-muted-foreground">pakarinspeksiindonesia.com</MarkerContent>
                </Marker>
              </div>
            </div>

            <div>
              <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Navigasi
              </div>
              <ul className="space-y-2 text-sm">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-10" />

          <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
            <span>
              © {new Date().getFullYear()} PT. Pakar Inspeksi Indonesia. All
              rights reserved.
            </span>
            <span>Purwakarta · Jawa Barat · Indonesia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
