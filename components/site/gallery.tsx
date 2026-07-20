"use client";

import * as React from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GalleryCategory = "all" | "cctv" | "electrical" | "grounding" | "service";

type GalleryItem = {
  label: string;
  tag?: string;
  category: GalleryCategory;
  aspect: "square" | "portrait" | "tall" | "wide";
  src: string;
};

const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "Semua Foto (36)" },
  { id: "cctv", label: "CCTV & Keamanan" },
  { id: "electrical", label: "Kelistrikan & Panel" },
  { id: "grounding", label: "Grounding & Petir" },
  { id: "service", label: "Supervisi & Maintenance" },
];

const ITEMS: GalleryItem[] = [
  {
    label: "Instalasi Kamera CCTV Outdoor Perimeter",
    tag: "CCTV System",
    category: "cctv",
    aspect: "square",
    src: "/gallery/IMG-20260720-WA0001.jpg",
  },
  {
    label: "Penataan Kabel & Panel Kelistrikan",
    tag: "Electrical Works",
    category: "electrical",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0002.jpg",
  },
  {
    label: "Pemasangan Dome CCTV Ruangan Indoor",
    tag: "CCTV System",
    category: "cctv",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0003.jpg",
  },
  {
    label: "Inspeksi Jalur Kelistrikan & Conduit",
    tag: "MEP Works",
    category: "electrical",
    aspect: "wide",
    src: "/gallery/IMG-20260720-WA0004.jpg",
  },
  {
    label: "Instalasi Kamera PTZ Speed Dome",
    tag: "CCTV System",
    category: "cctv",
    aspect: "square",
    src: "/gallery/IMG-20260720-WA0005.jpg",
  },
  {
    label: "Wiring & Integration Panel Otomasi",
    tag: "Panel Assembly",
    category: "electrical",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0006.jpg",
  },
  {
    label: "Pengujian Monitor & Sinyal CCTV",
    tag: "Service & Test",
    category: "service",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0007.jpg",
  },
  {
    label: "Survei & Pemasangan Bracket Kamera",
    tag: "Field Service",
    category: "service",
    aspect: "wide",
    src: "/gallery/IMG-20260720-WA0008.jpg",
  },
  {
    label: "Instalasi Main Distribution Panel (MDP)",
    tag: "Panel Assembly",
    category: "electrical",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0052.jpg",
  },
  {
    label: "Pemasangan Air Terminal Penangkal Petir",
    tag: "Lightning Protection",
    category: "grounding",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0053.jpg",
  },
  {
    label: "Pengukuran Resistansi Pembumian Grounding",
    tag: "Grounding System",
    category: "grounding",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0055.jpg",
  },
  {
    label: "Instalasi Charger Mobil Listrik EV Station",
    tag: "EV Station",
    category: "electrical",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0057.jpg",
  },
  {
    label: "Maintenance & Inspeksi CCTV Industri",
    tag: "CCTV Maintenance",
    category: "cctv",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0058.jpg",
  },
  {
    label: "Perakitan Panel Otomatis ATS-AMF Genset",
    tag: "Panel Assembly",
    category: "electrical",
    aspect: "square",
    src: "/gallery/IMG-20260720-WA0059.jpg",
  },
  {
    label: "Pemasangan Tiang PJU Perumahan & Jalan",
    tag: "Public Lighting",
    category: "electrical",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0060.jpg",
  },
  {
    label: "Setup Room & Finishing Fasilitas Gedung",
    tag: "Renovation",
    category: "service",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0061.jpg",
  },
  {
    label: "Penarikan Kabel FO & Coaxial CCTV",
    tag: "Network Wiring",
    category: "cctv",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0062.jpg",
  },
  {
    label: "Inspeksi Kelayakan Panel Distribusi",
    tag: "Safety Check",
    category: "electrical",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0063.jpg",
  },
  {
    label: "Instalasi Night-Vision Infrared Camera",
    tag: "CCTV System",
    category: "cctv",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0064.jpg",
  },
  {
    label: "Pemasangan Copper Rod & Grounding Well",
    tag: "Grounding System",
    category: "grounding",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0065.jpg",
  },
  {
    label: "Pemasangan Cable Tray Metal Heavy Duty",
    tag: "Cable Routing",
    category: "electrical",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0066.jpg",
  },
  {
    label: "Testing & Configuration NVR Multi-Channel",
    tag: "NVR System",
    category: "cctv",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0067.jpg",
  },
  {
    label: "Instalasi Head Lightning Arrester",
    tag: "Lightning Protection",
    category: "grounding",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0068.jpg",
  },
  {
    label: "Pemasangan Wallmount Rack Switch & DVR",
    tag: "Network Rack",
    category: "cctv",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0069.jpg",
  },
  {
    label: "Pusat Pengawasan Monitoring Control Room",
    tag: "Control Room",
    category: "cctv",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0071.jpg",
  },
  {
    label: "Instalasi Penerangan & Outlet Komersial",
    tag: "Electrical Works",
    category: "electrical",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0072.jpg",
  },
  {
    label: "Finetuning Horizon & Zoom PTZ Camera",
    tag: "CCTV Service",
    category: "cctv",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0073.jpg",
  },
  {
    label: "Instalasi Panel Kapasitor Bank Industri",
    tag: "Panel Assembly",
    category: "electrical",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0075.jpg",
  },
  {
    label: "Pemasangan PJU Tenaga Surya Mandiri",
    tag: "Solar Lighting",
    category: "electrical",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0077.jpg",
  },
  {
    label: "Peremajaan Instalasi Listrik & Interior",
    tag: "Renovation",
    category: "service",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0079.jpg",
  },
  {
    label: "Pemasangan Access Control Door System",
    tag: "Access Control",
    category: "cctv",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0080.jpg",
  },
  {
    label: "Pembersihan & Calibration Kamera Outdoor",
    tag: "Field Service",
    category: "service",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0081.jpg",
  },
  {
    label: "Pemeriksaan K3LL Alat Berat Proyek",
    tag: "Safety Inspection",
    category: "service",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0083.jpg",
  },
  {
    label: "Dokumentasi Instalasi CCTV Pabrik",
    tag: "CCTV System",
    category: "cctv",
    aspect: "tall",
    src: "/gallery/motion_photo_133187400404940470.jpg",
  },
  {
    label: "Pekerjaan Trafo & Substation Tegangan",
    tag: "Substation Power",
    category: "electrical",
    aspect: "tall",
    src: "/gallery/motion_photo_3861232322761906435.jpg",
  },
  {
    label: "Supervisi Lapangan & Quality Control",
    tag: "Project Management",
    category: "service",
    aspect: "tall",
    src: "/gallery/motion_photo_6572430783633278082.jpg",
  },
];

const ASPECT_CLASS: Record<GalleryItem["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/5]",
  wide: "aspect-[5/4]",
};

export function Gallery() {
  const [expanded, setExpanded] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<GalleryCategory>("all");

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "all") return ITEMS;
    return ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="relative space-y-6">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {CATEGORIES.map((cat) => {
          const count = cat.id === "all" ? ITEMS.length : ITEMS.filter((i) => i.category === cat.id).length;
          const isActive = activeCategory === cat.id;
          return (
            <Button
              key={cat.id}
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={cn("rounded-none text-xs transition-all", isActive ? "shadow-sm font-semibold" : "text-muted-foreground hover:text-foreground")}
              onClick={() => {
                setActiveCategory(cat.id);
              }}
            >
              {cat.label} {cat.id !== "all" && `(${count})`}
            </Button>
          );
        })}
      </div>

      <div
        className={cn(
          "relative overflow-hidden transition-[max-height] duration-700 ease-in-out",
          expanded ? "max-h-[15000px]" : "max-h-[850px]"
        )}
      >
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {filteredItems.map((item) => (
            <figure
              key={item.src}
              className="group relative mb-3 break-inside-avoid overflow-hidden rounded-none border border-border/60 bg-muted/40 transition-all hover:border-primary/50"
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden bg-black/5",
                  ASPECT_CLASS[item.aspect]
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
              <figcaption className="flex items-center justify-between gap-2 border-t border-border/60 bg-background/95 p-3 backdrop-blur-sm">
                <span className="truncate text-xs font-semibold text-foreground">
                  {item.label}
                </span>
                {item.tag && (
                  <Badge
                    variant="secondary"
                    className="shrink-0 text-[10px] rounded-none"
                  >
                    {item.tag}
                  </Badge>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Fade overlay — only when collapsed and there are many items */}
        {!expanded && filteredItems.length > 8 && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 transition-opacity duration-500 opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(to top, var(--background) 10%, color-mix(in oklch, var(--background) 75%, transparent) 60%, transparent 100%)",
            }}
          />
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          variant="outline"
          size="lg"
          className="rounded-none"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              Sembunyikan Sebagian Foto
              <ChevronUp />
            </>
          ) : (
            <>
              Tampilkan Semua ({filteredItems.length} Foto Dokumen Lapangan)
              <ChevronDown />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
