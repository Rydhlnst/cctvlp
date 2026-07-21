"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type ClientLogoItem = {
  name: string;
  source: "wikimedia" | "external";
  logoUrl: string;
  wikimediaFile?: string;
};

// Real brand logos from Wikimedia Commons & verified vector sources
export const REAL_WIKIMEDIA_CLIENTS: ClientLogoItem[] = [
  {
    name: "BCA",
    source: "wikimedia",
    wikimediaFile: "Bank Central Asia.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bank_Central_Asia.svg",
  },
  {
    name: "Bank Mandiri",
    source: "wikimedia",
    wikimediaFile: "Bank Mandiri logo 2016.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bank_Mandiri_logo_2016.svg",
  },
  {
    name: "Pertamina",
    source: "wikimedia",
    wikimediaFile: "Pertamina Logo.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pertamina_Logo.svg",
  },
  {
    name: "BNI",
    source: "wikimedia",
    wikimediaFile: "Bank Negara Indonesia logo (2004).svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bank_Negara_Indonesia_logo_%282004%29.svg",
  },
  {
    name: "BRI",
    source: "wikimedia",
    wikimediaFile: "BRI 2020.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/BRI_2020.svg",
  },
  {
    name: "WIKA",
    source: "wikimedia",
    wikimediaFile: "Wijaya Karya.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Wijaya_Karya.svg",
  },
  {
    name: "MINISO",
    source: "wikimedia",
    wikimediaFile: "Miniso logo.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Miniso_logo.svg",
  },
  {
    name: "Bridgestone",
    source: "wikimedia",
    wikimediaFile: "Bridgestone logo.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bridgestone_logo.svg",
  },
  {
    name: "Dunlop",
    source: "wikimedia",
    wikimediaFile: "Dunlop brand logo.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dunlop_brand_logo.svg",
  },
  {
    name: "KFC",
    source: "wikimedia",
    wikimediaFile: "KFC logo.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/KFC_logo.svg",
  },
  {
    name: "McDonald's",
    source: "wikimedia",
    wikimediaFile: "McDonald's Golden Arches.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/McDonald%27s_Golden_Arches.svg",
  },
  {
    name: "Pirelli",
    source: "wikimedia",
    wikimediaFile: "Pirelli logo.svg",
    logoUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pirelli_logo.svg",
  },
  {
    name: "Jasa Marga",
    source: "external",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Logo_Jasa_Marga.png/640px-Logo_Jasa_Marga.png",
  },
  {
    name: "Bank Sinarmas",
    source: "external",
    logoUrl: "https://upload.wikimedia.org/wikipedia/id/f/fb/Bank_Sinarmas.svg",
  },
];

export function ClientLogoBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const match = REAL_WIKIMEDIA_CLIENTS.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );

  // Tidak ada fallback SVG hardcoded — hanya real logo yang boleh tampil.
  // Kalau logo gagal fetch → badge hilang total (bukan jadi fake SVG).
  if (!match || imgError) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative inline-flex h-8 shrink-0 items-center justify-center md:h-9",
        className
      )}
      title={match.name}
      aria-label={match.name}
    >
      {/* Skeleton placeholder — hilang begitu logo asli selesai load. */}
      {!imgLoaded && (
        <span
          aria-hidden
          className="inline-block h-6 w-20 animate-pulse rounded-sm bg-muted/60 md:h-7 md:w-24"
        />
      )}
      <img
        src={match.logoUrl}
        alt={`${match.name} logo`}
        className={cn(
          "h-8 w-auto object-contain md:h-9",
          !imgLoaded && "absolute inset-0 opacity-0"
        )}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
