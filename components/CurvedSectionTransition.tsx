import React from "react";

interface CurvedSectionTransitionProps {
  /** The color of the filled shape (usually the incoming section) */
  fill: string;
  /** The background color behind the shape (usually the outgoing section) */
  bg?: string;
  /** Shape variant */
  variant?: "wave" | "organic" | "gentle" | "asymmetric" | "cloud";
  /** Flip horizontally */
  flipX?: boolean;
  /** Invert vertically */
  invert?: boolean;
  className?: string;
}

export function CurvedSectionTransition({
  fill,
  bg = "transparent",
  variant = "wave",
  flipX = false,
  invert = false,
  className = "",
}: CurvedSectionTransitionProps) {
  const transform = [
    flipX ? "scaleX(-1)" : "",
    invert ? "scaleY(-1)" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const paths = {
    wave: "M0,32 C320,96 420,-16 720,40 C1020,96 1140,8 1440,36 L1440,80 L0,80 Z",
    organic: "M0,45 C280,10 460,85 760,35 C1060,-15 1240,65 1440,25 L1440,80 L0,80 Z",
    gentle: "M0,25 C480,75 960,75 1440,25 L1440,80 L0,80 Z",
    asymmetric: "M0,60 C380,80 720,10 1080,45 C1240,60 1360,30 1440,15 L1440,80 L0,80 Z",
    cloud: "M0,50 C180,20 320,60 520,30 C720,0 880,55 1080,25 C1260,-5 1380,45 1440,30 L1440,80 L0,80 Z",
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none select-none ${className}`}
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        className="w-full block h-[38px] sm:h-[54px] md:h-[72px]"
        style={{ transform: transform || undefined }}
      >
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}
