"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SmartImageProps {
  src: string;
  alt: string;
  ratio?: "4:5" | "16:9" | "4:3" | "1:1" | "21:9";
  focalPoint?: string;
  priority?: boolean;
  quality?: number;
  className?: string;
  sizes?: string;
  roundedClassName?: string;
  label?: string;
}

export function SmartImage({
  src,
  alt,
  ratio = "4:3",
  focalPoint = "center",
  priority = false,
  quality = 90,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  roundedClassName = "rounded-2xl",
  label,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  // Aspect ratio classes
  const ratioClasses = {
    "4:5": "aspect-[4/5]",
    "16:9": "aspect-[16/9]",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-[1/1]",
    "21:9": "aspect-[21/9]",
  }[ratio];

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#FFF9EF] border border-[#F0E6D8] ${ratioClasses} ${roundedClassName} ${className}`}
    >
      {!hasError && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes={sizes}
          onError={() => setHasError(true)}
          style={{ objectFit: "cover", objectPosition: focalPoint }}
          className="transition-transform duration-300 hover:scale-[1.02]"
        />
      ) : (
        /* Designed neutral placeholder */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FFF9EF] to-[#F5ECE0]">
          <div className="w-12 h-12 rounded-full bg-[#FF786B]/15 flex items-center justify-center text-[#FF786B] mb-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#287F78]">
            {label || "Classroom Environment View"}
          </span>
          <span className="text-[11px] text-[#4F5D56] max-w-[200px] mt-1 line-clamp-2">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
