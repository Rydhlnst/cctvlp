"use client";

import * as React from "react";
import { ArrowUpRight, FileImage, Maximize2, X } from "lucide-react";

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
import { waUrl } from "@/lib/whatsapp";

export type PosterItem = {
  src: string;
  title: string;
  tag: string;
  desc?: string;
};

export const POSTERS: PosterItem[] = [
  {
    src: "/posters/poster-02.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
  {
    src: "/posters/poster-03.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
  {
    src: "/posters/poster-04.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
  {
    src: "/posters/poster-05.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
  {
    src: "/posters/poster-06.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
  {
    src: "/posters/poster-07.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
  {
    src: "/posters/poster-08.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
  {
    src: "/posters/poster-09.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
  {
    src: "/posters/poster-10.jpg",
    title: "Materi Layanan Pakar Inspeksi Indonesia",
    tag: "Materi Layanan",
    desc: "Poster resmi layanan PT. Pakar Inspeksi Indonesia.",
  },
];

export function PosterCarousel({ items = POSTERS }: { items?: PosterItem[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [lightboxSrc, setLightboxSrc] = React.useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = React.useState("");
  const [errored, setErrored] = React.useState<Record<string, boolean>>({});

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

  const openLightbox = (item: PosterItem) => {
    setLightboxSrc(item.src);
    setLightboxTitle(item.title);
  };

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {items.map((item) => (
            <CarouselItem
              key={item.src}
              className="basis-[78%] pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <div className="group relative flex flex-col overflow-hidden rounded-none border border-border/60 bg-background transition-all duration-300 hover:border-primary hover:shadow-lg">
                <button
                  type="button"
                  onClick={() => !errored[item.src] && openLightbox(item)}
                  aria-label={`Perbesar poster ${item.title}`}
                  className="relative block aspect-[9/16] w-full overflow-hidden bg-muted/40"
                >
                  {errored[item.src] ? (
                    /* Fallback brand card — poster file belum tersedia */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-muted/60 via-muted/30 to-background p-6 text-center">
                      <div className="flex size-16 items-center justify-center rounded-none bg-primary/10 text-primary">
                        <FileImage className="size-7" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {item.tag}
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-muted-foreground/70">
                        Materi visual segera hadir
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        onError={() =>
                          setErrored((s) => ({ ...s, [item.src]: true }))
                        }
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-none bg-background/90 text-foreground shadow-sm backdrop-blur-md">
                        <Maximize2 className="size-4" />
                      </div>
                    </>
                  )}
                  <Badge
                    variant="secondary"
                    className="absolute left-3 top-3 z-10 rounded-none border border-border/50 bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-md"
                  >
                    {item.tag}
                  </Badge>
                </button>

                <div className="flex flex-col gap-2 border-t border-border/60 p-4">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground line-clamp-2">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {item.desc}
                    </p>
                  )}
                  <a
                    href={waUrl(item.title, "consult")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Konsultasi
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
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
            aria-label={`Poster ${i + 1}`}
            className={cn(
              "h-1 transition-all duration-300",
              i === current ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>

      {/* Lightbox — poster asli, full detail */}
      <Dialog
        open={Boolean(lightboxSrc)}
        onOpenChange={(open) => !open && setLightboxSrc(null)}
      >
        <DialogContent className="max-h-[95vh] max-w-3xl overflow-hidden rounded-none border-border/60 bg-background p-0">
          <DialogTitle className="sr-only">{lightboxTitle}</DialogTitle>
          <div className="relative flex max-h-[95vh] w-full items-center justify-center overflow-auto bg-black">
            {lightboxSrc && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={lightboxSrc}
                alt={lightboxTitle}
                className="max-h-[95vh] w-auto max-w-full object-contain"
              />
            )}
            <Button
              type="button"
              size="icon"
              variant="secondary"
              onClick={() => setLightboxSrc(null)}
              aria-label="Tutup"
              className="absolute right-3 top-3 size-9 rounded-none border border-border/60 bg-background/90 backdrop-blur-md"
            >
              <X className="size-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
