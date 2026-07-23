"use client";

import * as React from "react";
import { Clapperboard, Play, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { r2 } from "@/lib/r2";

export type VideoItem = {
  src: string;
  title: string;
  tag: string;
  poster?: string;
  duration?: string;
};

export const VIDEO_ITEMS: VideoItem[] = [
  {
    src: r2("/video/promosi-pjuts.mp4"),
    title: "Promosi PJUTS — Solar Cell",
    tag: "Public Lighting",
    poster: r2("/video/posters/promosi-pjuts.jpg"),
  },
  {
    src: r2("/video/promosi-genset.mp4"),
    title: "Promosi Genset — Kelistrikan Industri",
    tag: "Genset",
    poster: r2("/video/posters/promosi-genset.jpg"),
  },
  {
    src: r2("/video/genset-industri.mp4"),
    title: "Genset untuk Industri",
    tag: "Genset",
    poster: r2("/video/posters/genset-industri.jpg"),
  },
  {
    src: r2("/video/grounding-sistem.mp4"),
    title: "Promosi Grounding Sistem",
    tag: "Grounding",
    poster: r2("/video/posters/grounding-sistem.jpg"),
  },
  {
    src: r2("/video/akses-kontrol-pintu.mp4"),
    title: "Promosi Akses Kontrol Pintu",
    tag: "Access Control",
    poster: r2("/video/posters/akses-kontrol-pintu.jpg"),
  },
  {
    src: r2("/video/folkip.mp4"),
    title: "Promosi Forklift",
    tag: "Security",
    poster: r2("/video/posters/folkip.jpg"),
  },
  {
    src: r2("/video/purifikasi-oil-trafo.mp4"),
    title: "Purifikasi & Treatment Oil Trafo",
    tag: "Trafo Service",
    poster: r2("/video/posters/purifikasi-oil-trafo.jpg"),
  },
  {
    src: r2("/video/lapangan-1.mp4"),
    title: "Dokumentasi Lapangan #1",
    tag: "Field Work",
    poster: r2("/video/posters/lapangan-1.jpg"),
  },
  {
    src: r2("/video/lapangan-2.mp4"),
    title: "Dokumentasi Lapangan #2",
    tag: "Field Work",
    poster: r2("/video/posters/lapangan-2.jpg"),
  },
  {
    src: r2("/video/lapangan-3.mp4"),
    title: "Dokumentasi Lapangan #3",
    tag: "Field Work",
    poster: r2("/video/posters/lapangan-3.jpg"),
  },
];

export function VideoGallery({ items = VIDEO_ITEMS }: { items?: VideoItem[] }) {
  const [active, setActive] = React.useState<VideoItem | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!active || !videoRef.current) return;
    videoRef.current.play().catch(() => {});
  }, [active]);

  const open = (item: VideoItem) => {
    setActive(item);
  };

  const close = () => {
    videoRef.current?.pause();
    setActive(null);
  };

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {items.map((item) => (
            <CarouselItem
              key={item.src}
              className="basis-[82%] pl-3 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <button
                type="button"
                onClick={() => open(item)}
                aria-label={`Putar ${item.title}`}
                className="group relative flex w-full flex-col overflow-hidden rounded-none border border-border/60 bg-background text-left transition-all duration-300 hover:border-primary hover:shadow-md"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black/80">
                  {item.poster && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.poster}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                  <Badge
                    variant="secondary"
                    className="absolute left-3 top-3 z-10 rounded-none border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md"
                  >
                    <Clapperboard className="mr-1 size-3 text-primary" />
                    {item.tag}
                  </Badge>

                  {item.duration && (
                    <span className="absolute right-3 top-3 z-10 rounded-none border border-white/20 bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-md">
                      {item.duration}
                    </span>
                  )}

                  <span
                    className={cn(
                      "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                      "flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl",
                      "transition-transform duration-300 group-hover:scale-110"
                    )}
                  >
                    <Play className="size-6 translate-x-0.5 fill-current" />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 z-10 p-3">
                    <h3 className="line-clamp-2 text-sm font-semibold tracking-tight text-white drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden rounded-none border-border/60 sm:flex" />
        <CarouselNext className="hidden rounded-none border-border/60 sm:flex" />
      </Carousel>

      {/* Progress dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Video ${i + 1}`}
            className={cn(
              "h-1 transition-all duration-300",
              i === current ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Video hanya dimuat setelah tombol putar ditekan — hemat kuota, cepat
        dibuka.
      </p>

      <Dialog open={Boolean(active)} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-h-[95vh] max-w-4xl overflow-hidden rounded-none border-border/60 bg-black p-0">
          <DialogTitle className="sr-only">{active?.title ?? "Video"}</DialogTitle>
          <div className="relative aspect-video w-full bg-black">
            {active && (
              <video
                ref={videoRef}
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full bg-black object-contain"
              >
                Browser Anda tidak mendukung pemutaran video ini.
              </video>
            )}
            <Button
              type="button"
              size="icon"
              variant="secondary"
              onClick={close}
              aria-label="Tutup video"
              className="absolute right-3 top-3 z-20 size-9 rounded-none border border-white/20 bg-black/60 text-white backdrop-blur-md hover:bg-black/80"
            >
              <X className="size-4" />
            </Button>
          </div>
          {active && (
            <div className="border-t border-border/60 bg-background p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {active.tag}
                  </div>
                  <h3 className="mt-1 text-sm font-semibold text-foreground">
                    {active.title}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
