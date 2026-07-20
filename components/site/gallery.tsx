"use client";

import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GalleryItem = {
  label: string;
  tag?: string;
  aspect: "square" | "portrait" | "tall" | "wide";
  src: string;
};

const ITEMS: GalleryItem[] = [
  {
    label: "Instalasi Kamera CCTV Outdoor Perimeter",
    tag: "Security System",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0001.jpg",
  },
  {
    label: "Penataan Kabel & Panel Kelistrikan",
    tag: "Electrical Works",
    aspect: "square",
    src: "/gallery/IMG-20260720-WA0002.jpg",
  },
  {
    label: "Pemasangan Dome CCTV Ruangan Indoor",
    tag: "CCTV & Alarm",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0003.jpg",
  },
  {
    label: "Inspeksi Jalur Kelistrikan & Conduit",
    tag: "MEP Works",
    aspect: "wide",
    src: "/gallery/IMG-20260720-WA0004.jpg",
  },
  {
    label: "Instalasi Kamera PTZ Speed Dome",
    tag: "Security System",
    aspect: "portrait",
    src: "/gallery/IMG-20260720-WA0005.jpg",
  },
  {
    label: "Wiring & Integration Panel Otomasi",
    tag: "Industrial PLC",
    aspect: "square",
    src: "/gallery/IMG-20260720-WA0006.jpg",
  },
  {
    label: "Pengujian Monitor & Sinyal CCTV",
    tag: "Electronic Service",
    aspect: "tall",
    src: "/gallery/IMG-20260720-WA0007.jpg",
  },
  {
    label: "Survei & Pemasangan Bracket Kamera",
    tag: "Field Installation",
    aspect: "wide",
    src: "/gallery/IMG-20260720-WA0008.jpg",
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

  return (
    <div className="relative">
      <div
        className={cn(
          "relative overflow-hidden transition-[max-height] duration-700 ease-in-out",
          expanded ? "max-h-[8000px]" : "max-h-[680px]"
        )}
      >
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {ITEMS.map((item) => (
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

        {/* Fade overlay — only when collapsed */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-48 transition-opacity duration-500",
            expanded ? "opacity-0" : "opacity-100"
          )}
          style={{
            backgroundImage:
              "linear-gradient(to top, var(--background) 5%, color-mix(in oklch, var(--background) 70%, transparent) 55%, transparent 100%)",
          }}
        />
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
              Sembunyikan galeri
              <ChevronUp />
            </>
          ) : (
            <>
              Lihat semua ({ITEMS.length} foto)
              <ChevronDown />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
