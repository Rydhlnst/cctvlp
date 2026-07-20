"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imgClassName?: string;
  href?: string;
  variant?: "default" | "footer" | "mobile";
}

export function Logo({
  className,
  imgClassName,
  href = "#top",
  variant = "default",
}: LogoProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
        className
      )}
      aria-label="PT Pakar Inspeksi Indonesia"
    >
      <img
        src="/logo.png"
        alt="PT. Pakar Inspeksi Indonesia"
        className={cn(
          "w-auto object-contain transition-opacity group-hover:opacity-95",
          variant === "footer" ? "h-12 md:h-14" : "h-9 md:h-11",
          imgClassName
        )}
      />
    </a>
  );
}
