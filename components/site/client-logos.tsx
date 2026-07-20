"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type ClientLogoItem = {
  name: string;
  source: "wikimedia" | "external";
  logoUrl: string;
  wikimediaFile?: string;
  svg: React.ReactNode;
};

// Real brand logos from Wikimedia Commons & verified vector sources
export const REAL_WIKIMEDIA_CLIENTS: ClientLogoItem[] = [
  {
    name: "BCA",
    source: "wikimedia",
    wikimediaFile: "Bank Central Asia.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bank_Central_Asia.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#005caa">
          <path d="M12.5 3L2 9v14l10.5 6L23 23V9L12.5 3zm0 3.2l7.5 4.3v8.6l-7.5 4.3-7.5-4.3v-8.6l7.5-4.3z" />
          <path d="M9 10.5h7v2.5H9zM9 15h7v2.5H9zM9 19.5h7v2.5H9z" />
          <path d="M36 8h16c4.5 0 7.5 2.2 7.5 5.8 0 2.8-1.8 4.8-4.5 5.4 3.5.7 5.8 2.8 5.8 6.3 0 4.2-3.5 6.5-8.5 6.5H36V8zm7 6v4.5h8.5c1.8 0 2.8-.8 2.8-2.2 0-1.5-1-2.3-2.8-2.3H43zm0 8.5V27h9.5c2 0 3.2-1 3.2-2.8 0-1.8-1.2-2.7-3.2-2.7H43z" />
          <path d="M66 20c0-7.2 5.5-12.5 13.5-12.5 5.2 0 9.5 2.5 11.5 6.5l-5.8 3.2c-1.2-2.2-3.2-3.5-5.8-3.5-4.2 0-7 3.2-7 6.3s2.8 6.3 7 6.3c2.6 0 4.6-1.3 5.8-3.5l5.8 3.2c-2 4-6.3 6.5-11.5 6.5C71.5 32.5 66 27.2 66 20z" />
          <path d="M98 32l11-24h7.5l11 24h-7.8l-1.8-4.5H108l-1.8 4.5H98zm11.8-10h6.4l-3.2-8.2-3.2 8.2z" />
        </g>
      </svg>
    ),
  },
  {
    name: "Bank Mandiri",
    source: "wikimedia",
    wikimediaFile: "Bank Mandiri logo 2016.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bank_Mandiri_logo_2016.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M142 8c-6 0-13 4-18 9 5 4 12 7 19 7 6 0 12-2 17-6-5-6-11-10-18-10z" fill="#FDB913" />
        <path d="M125 18c-5 5-9 11-11 14 6-2 13-6 19-11-2-1-5-2-8-3z" fill="#002D62" opacity="0.2" />
        <g fill="#002D62">
          <path d="M10 12h5.5l5.5 12 5.5-12H32v18h-4.8v-12L21.8 28h-1.6L14.8 18V30H10V12z" />
          <path d="M37 22c0-4.8 3.5-8.5 8.5-8.5s8.5 3.7 8.5 8.5V30h-4.8v-8c0-2.5-1.8-4-3.7-4s-3.7 1.5-3.7 4v8H37V22z" />
          <path d="M60 12h4.8v4.5c1.5-3.2 4.2-5 7.5-5V17c-4 0-7.5 2.5-7.5 7.5V30H60V12z" />
          <path d="M78 12h4.8v18H78V12zm0-5h4.8v3.5H78V7z" />
          <path d="M88 22c0-4.8 3.5-8.5 8.5-8.5 3.2 0 5.8 1.5 7.2 4V7h4.8v23h-4.8v-3.5c-1.4 2.5-4 4-7.2 4-5 0-8.5-3.7-8.5-8.5zm4.8 0c0 2.5 1.8 4 3.8 4s3.8-1.5 3.8-4-1.8-4-3.8-4-3.8 1.5-3.8 4z" />
          <path d="M112 12h4.8v18h-4.8V12zm0-5h4.8v3.5h-4.8V7z" />
        </g>
      </svg>
    ),
  },
  {
    name: "Pertamina",
    source: "wikimedia",
    wikimediaFile: "Pertamina Logo.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pertamina_Logo.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 175 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6l11 11H8V6z" fill="#ED1C24" />
        <path d="M19 17l-11 11h11V17z" fill="#ED1C24" />
        <path d="M22 6l11 11H22V6z" fill="#00A651" />
        <path d="M33 17l-11 11h11V17z" fill="#00A651" />
        <path d="M8 30h25l-6 6H8v-6z" fill="#0072BC" />
        <text x="44" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#002D62" letterSpacing="0.8">
          PERTAMINA
        </text>
      </svg>
    ),
  },
  {
    name: "BNI",
    source: "wikimedia",
    wikimediaFile: "Bank Negara Indonesia logo (2004).svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bank_Negara_Indonesia_logo_%282004%29.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#F37021">
          <path d="M6 10h12.5l-6 20H6V10z" />
          <path d="M21 10h11l-6 20h-11l6-20z" />
          <path d="M34 10l-6 20h11.5l6-20H34z" />
        </g>
        <text x="48" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" fill="#00667E" letterSpacing="1">
          BNI
        </text>
      </svg>
    ),
  },
  {
    name: "BRI",
    source: "wikimedia",
    wikimediaFile: "BRI 2020.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/BRI_2020.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="28" height="28" rx="6" fill="#005596" />
        <path d="M10 14c3 0 6 2.5 6 6s-3 6-6 6M20 14c3 0 6 2.5 6 6s-3 6-6 6" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
        <text x="38" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" fill="#005596" letterSpacing="1">
          BRI
        </text>
      </svg>
    ),
  },
  {
    name: "WIKA",
    source: "wikimedia",
    wikimediaFile: "Wijaya Karya.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Wijaya_Karya.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10l5 20h4.5l4-12 4 12H28l5-20h-5.5l-2.5 13-4-13h-4l-4 13-2.5-13H6z" fill="#00529B" />
        <text x="38" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="19" fill="#00529B" letterSpacing="1.2">
          WIKA
        </text>
      </svg>
    ),
  },
  {
    name: "MINISO",
    source: "wikimedia",
    wikimediaFile: "Miniso logo.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Miniso_logo.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="24" rx="4" fill="#E60012" />
        <path d="M12 12c0-2 1.8-3 4-3s4 1 4 3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="18" r="1.5" fill="#FFFFFF" />
        <circle cx="20" cy="18" r="1.5" fill="#FFFFFF" />
        <text x="34" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" fill="#E60012" letterSpacing="1.5">
          MINISO
        </text>
      </svg>
    ),
  },
  {
    name: "Bridgestone",
    source: "wikimedia",
    wikimediaFile: "Bridgestone logo.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bridgestone_logo.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 175 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8h14c4 0 7 2 7 5.5 0 2.5-1.5 4.5-4 5.2 3.2.7 5 3 5 6.3 0 4.5-3.8 7-8.5 7H6V8zm6.5 5v4.5h6c1.5 0 2.5-.8 2.5-2.2s-1-2.3-2.5-2.3h-6zm0 9v5h6.5c1.8 0 2.8-.8 2.8-2.5 0-1.7-1-2.5-2.8-2.5h-6.5z" fill="#ED1C24" />
        <text x="36" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="14" fill="#111827" letterSpacing="0.8" className="dark:fill-white">
          BRIDGESTONE
        </text>
      </svg>
    ),
  },
  {
    name: "Dunlop",
    source: "wikimedia",
    wikimediaFile: "Dunlop brand logo.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dunlop_brand_logo.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 145 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="4,8 24,8 30,20 24,32 4,32 10,20" fill="#FFCC00" />
        <path d="M12 14h6c2.5 0 4 1.2 4 3s-1.5 3-4 3h-6v-6z" fill="#000000" />
        <text x="36" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="#111827" fontStyle="italic" letterSpacing="1" className="dark:fill-white">
          DUNLOP
        </text>
      </svg>
    ),
  },
  {
    name: "KFC",
    source: "wikimedia",
    wikimediaFile: "KFC logo.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/KFC_logo.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="30" height="28" rx="3" fill="#E4002B" />
        <rect x="11" y="6" width="5" height="28" fill="#FFFFFF" />
        <rect x="23" y="6" width="5" height="28" fill="#FFFFFF" />
        <text x="40" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" fill="#E4002B" letterSpacing="1">
          KFC
        </text>
      </svg>
    ),
  },
  {
    name: "McDonald's",
    source: "wikimedia",
    wikimediaFile: "McDonald's Golden Arches.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/McDonald%27s_Golden_Arches.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#FFBC0D" strokeWidth="4.5" strokeLinecap="round" fill="none">
          <path d="M8 32V16c0-4 2.5-7 6-7s6 3 6 7v16" />
          <path d="M20 32V16c0-4 2.5-7 6-7s6 3 6 7v16" />
        </g>
        <text x="38" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#111827" className="dark:fill-white">
          McDonald&apos;s
        </text>
      </svg>
    ),
  },
  {
    name: "Pirelli",
    source: "wikimedia",
    wikimediaFile: "Pirelli logo.svg",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pirelli_logo.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 145 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10h42c4 0 6 1.8 6 4.5S52 19 48 19H17v11H6V10zm11 4.5v.5h27c1 0 1.8-.3 1.8-1s-.8-1-1.8-1H17z" fill="#E30613" />
        <text x="46" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#E30613" letterSpacing="0.5">
          IRELLI
        </text>
      </svg>
    ),
  },
  {
    name: "Jasa Marga",
    source: "external",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Logo_Jasa_Marga.png/640px-Logo_Jasa_Marga.png",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="13" fill="#0284C7" />
        <path d="M12 26C15 16 21 16 24 26" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" fill="none" />
        <text x="38" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="15" fill="#0284C7" letterSpacing="0.8">
          JASA MARGA
        </text>
      </svg>
    ),
  },
  {
    name: "Bank Sinarmas",
    source: "external",
    logoUrl: "https://upload.wikimedia.org/wikipedia/id/f/fb/Bank_Sinarmas.svg",
    svg: (
      <svg className="h-8 md:h-9 w-auto shrink-0" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="18,6 22,14 30,14 24,20 26,28 18,23 10,28 12,20 6,14 14,14" fill="#DC2626" />
        <text x="36" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="14" fill="#DC2626" letterSpacing="0.5">
          bank sinarmas
        </text>
      </svg>
    ),
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

  if (!match) {
    return null;
  }

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center p-0 border-0 bg-transparent shadow-none transition-none",
        className
      )}
      title={match.name}
    >
      {!imgError && match.logoUrl ? (
        <div className="relative flex items-center justify-center">
          {!imgLoaded && (
            <div className="opacity-100">{match.svg}</div>
          )}
          <img
            src={match.logoUrl}
            alt={`${match.name} logo`}
            className={cn(
              "h-8 md:h-9 w-auto object-contain transition-none border-0 shadow-none bg-transparent filter-none opacity-100",
              !imgLoaded && "absolute inset-0 opacity-0"
            )}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center opacity-100 transition-none">
          {match.svg}
        </div>
      )}
    </div>
  );
}
