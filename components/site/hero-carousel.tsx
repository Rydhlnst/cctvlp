"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Pause, Play, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  src: string;
  title: string;
  category: string;
  location?: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/gallery/IMG-20260720-WA0001.jpg",
    title: "Instalasi Kamera CCTV Outdoor Perimeter",
    category: "Security System",
    location: "Kawasan Industri Bukit Indah City",
  },
  {
    src: "/gallery/IMG-20260720-WA0059.jpg",
    title: "Perakitan & Integration Panel ATS-AMF",
    category: "Electrical Panel",
    location: "Gedung Perkantoran",
  },
  {
    src: "/gallery/IMG-20260720-WA0005.jpg",
    title: "Instalasi Kamera PTZ Speed Dome HD",
    category: "CCTV & Alarm",
    location: "Fasilitas Komersial",
  },
  {
    src: "/gallery/IMG-20260720-WA0071.jpg",
    title: "Setup Control Room & Monitoring Wall",
    category: "Monitoring Center",
    location: "Pusat Operasional 24/7",
  },
  {
    src: "/gallery/IMG-20260720-WA0077.jpg",
    title: "Pemasangan PJU Solar Cell Tenaga Surya",
    category: "Public Lighting",
    location: "Kawasan Industri",
  },
  {
    src: "/gallery/IMG-20260720-WA0080.jpg",
    title: "Pemasangan Access Control & Auto Gate",
    category: "Access Control",
    location: "Pergudangan Logistik",
  },
  {
    src: "/gallery/IMG-20260720-WA0083.jpg",
    title: "Sertifikasi & Pengujian K3LL Proyek Lapangan",
    category: "K3LL Safety",
    location: "Site Project",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  React.useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  return (
    <div
      className="group relative w-full overflow-hidden border border-border/60 bg-muted/40 shadow-xl transition-all"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* 
        Container with responsive aspect ratio:
        - Mobile: w-full aspect-[16/9] (Full landscape view on mobile without top/bottom crop)
        - Tablet/Desktop: aspect-[16/9] or custom height
      */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/90">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.src}
              className={cn(
                "absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out",
                isActive
                  ? "opacity-100 scale-100 z-10 pointer-events-auto"
                  : "opacity-0 scale-105 z-0 pointer-events-none"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.title}
                className="h-full w-full object-cover object-center transition-transform duration-700"
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />

              {/* Smooth Vignette / Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            </div>
          );
        })}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-[11px] font-medium border border-border/50 text-foreground gap-1.5 rounded-none px-2.5 py-1">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
            </span>
            PROYEK REAL
          </Badge>

          <Badge variant="outline" className="bg-black/60 backdrop-blur-md text-[10px] text-white/90 border border-white/20 rounded-none px-2 py-0.5">
            <ShieldCheck className="size-3 text-primary mr-1" />
            Standar K3LL
          </Badge>
        </div>

        {/* Floating Slide Information Overlay */}
        <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div className="space-y-1 max-w-lg">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-primary text-primary-foreground">
                  {HERO_SLIDES[currentIndex].category}
                </span>
                {HERO_SLIDES[currentIndex].location && (
                  <span className="text-[11px] text-white/70 font-medium truncate">
                    • {HERO_SLIDES[currentIndex].location}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug drop-shadow-sm line-clamp-1">
                {HERO_SLIDES[currentIndex].title}
              </h3>
            </div>

            {/* Controls & Indicators */}
            <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
              {/* Slide Counter */}
              <div className="text-[11px] font-mono text-white/70">
                <span className="text-primary font-bold">{String(currentIndex + 1).padStart(2, "0")}</span> / {String(HERO_SLIDES.length).padStart(2, "0")}
              </div>

              {/* Prev / Next & Pause Buttons */}
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7 rounded-none bg-black/40 text-white hover:bg-primary hover:text-primary-foreground transition-colors border border-white/10"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="size-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7 rounded-none bg-black/40 text-white hover:bg-primary hover:text-primary-foreground transition-colors border border-white/10"
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? "Pause Carousel" : "Play Carousel"}
                >
                  {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7 rounded-none bg-black/40 text-white hover:bg-primary hover:text-primary-foreground transition-colors border border-white/10"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-3 flex items-center gap-1.5 w-full">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-1 rounded-none transition-all duration-500 flex-1",
                  idx === currentIndex
                    ? "bg-primary"
                    : "bg-white/20 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
