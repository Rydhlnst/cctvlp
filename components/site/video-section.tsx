"use client";

import * as React from "react";
import { Play, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type VideoSectionProps = {
  poster?: string;
  src?: string;
  title?: string;
  eyebrow?: string;
  desc?: string;
};

/**
 * Lightweight click-to-play video.
 * - Nothing is fetched until the user presses Play (preload="none").
 * - Poster image is a lazy-loaded JPG so it does not block LCP.
 */
export function VideoSection({
  poster = "/gallery/IMG-20260720-WA0071.jpg",
  src = "/video/company-profile.mp4",
  title = "Company Profile — PT. Pakar Inspeksi Indonesia",
  eyebrow = "Company Profile",
  desc = "Cuplikan singkat perjalanan tim, lingkup layanan, dan proyek lintas industri sejak 2014.",
}: VideoSectionProps) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  return (
    <section id="video" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="size-3" />
            {eyebrow}
          </Badge>
          <h2 className="display-tight text-4xl font-semibold md:text-6xl">
            Kenali kami dalam 60 detik.
          </h2>
          <p className="mt-4 text-muted-foreground">{desc}</p>
        </div>

        <div className="relative mx-auto w-full max-w-5xl overflow-hidden border border-border/60 bg-black shadow-xl">
          <div className="relative aspect-video w-full">
            {!playing ? (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Putar video company profile"
                className="group absolute inset-0 z-10 flex h-full w-full items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={poster}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2">
                  <Badge
                    variant="secondary"
                    className="rounded-none border border-border/50 bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-md"
                  >
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                    VIDEO PROFILE
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-none border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] text-white/90 backdrop-blur-md"
                  >
                    <ShieldCheck className="mr-1 size-3 text-primary" />
                    Standar K3LL
                  </Badge>
                </div>

                <span
                  className={cn(
                    "relative z-10 flex size-20 items-center justify-center rounded-full",
                    "bg-primary text-primary-foreground shadow-2xl",
                    "transition-transform duration-300 group-hover:scale-110"
                  )}
                >
                  <span className="absolute inset-0 rounded-full bg-primary/60 opacity-70 animate-ping" />
                  <Play className="relative size-8 translate-x-0.5 fill-current" />
                </span>

                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-5 pt-10 text-left">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    <span className="bg-primary px-2 py-0.5">Play</span>
                  </div>
                  <h3 className="mt-2 line-clamp-1 text-base font-semibold tracking-tight text-white drop-shadow-sm sm:text-lg">
                    {title}
                  </h3>
                </div>
              </button>
            ) : (
              <video
                ref={videoRef}
                src={src}
                poster={poster}
                controls
                playsInline
                preload="none"
                className="absolute inset-0 h-full w-full bg-black object-contain"
              >
                Browser Anda tidak mendukung pemutaran video.
              </video>
            )}
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-xs text-muted-foreground">
          Video hanya dimuat setelah tombol putar ditekan — hemat kuota &amp;
          cepat saat halaman pertama dibuka.
        </p>
      </div>
    </section>
  );
}
