"use client";

import * as React from "react";

type HeroVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
    />
  );
}
