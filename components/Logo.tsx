import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";

interface LogoProps {
  variant?: "full" | "icon";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({
  variant = "full",
  theme = "dark",
  size = "md",
  className = "",
}: LogoProps) {
  const isLight = theme === "light";
  const textColor = isLight ? "#FFFFFF" : "#29332F";
  const subTextColor = isLight ? "#A9DFC2" : "#287F78";

  // Size configurations
  const sizeConfig = {
    sm: {
      icon: "w-6 h-6 sm:w-7 sm:h-7",
      title: "text-[14px] sm:text-[15.5px]",
      sub: "text-[8px] sm:text-[8.5px]",
      gap: "gap-2",
    },
    md: {
      icon: "w-7 h-7 sm:w-8 sm:h-8",
      title: "text-[15px] min-[380px]:text-[16px] sm:text-[17.5px]",
      sub: "text-[8.5px] min-[380px]:text-[9px] sm:text-[9.5px]",
      gap: "gap-2 sm:gap-2.5",
    },
    lg: {
      icon: "w-8 h-8 sm:w-10 sm:h-10",
      title: "text-[17px] min-[380px]:text-[19px] sm:text-[21px]",
      sub: "text-[9px] min-[380px]:text-[10px] sm:text-[10.5px]",
      gap: "gap-2.5 sm:gap-3",
    },
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${currentSize.gap} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] rounded-md ${className}`}
      aria-label={`${siteContent.brand.name} home`}
    >
      {/* Multicolour Geometric SVG Icon Mark */}
      <div className={`relative ${currentSize.icon} shrink-0`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Base Stepping Stone in Coral */}
          <path
            d="M12 28C12 20 18 14 26 14C30 14 33 16 35 18C33 26 26 34 18 34C14.5 34 12 31.5 12 28Z"
            fill="#FF786B"
          />
          {/* Ascending Sprout Leaf in Teal */}
          <path
            d="M26 12C34 12 38 18 38 26C38 30 36 33 34 35C26 33 20 26 20 18C20 14.5 22.5 12 26 12Z"
            fill="#287F78"
            stroke={isLight ? "#FFFFFF" : "#FFF9EF"}
            strokeWidth="1.5"
          />
          {/* Sun / Energy Circle in Sunny Yellow */}
          <circle cx="27" cy="23" r="3.5" fill="#FFD84D" />
        </svg>
      </div>

      {variant === "full" && (
        <div className="flex flex-col">
          <span
            className={`${currentSize.title} font-bold leading-tight tracking-tight font-heading`}
            style={{ color: textColor }}
          >
            {siteContent.brand.name}
          </span>
          <span
            className={`${currentSize.sub} font-bold tracking-[0.14em] uppercase mt-0.5`}
            style={{ color: subTextColor }}
          >
            Play School &amp; Day Care · Lucknow
          </span>
        </div>
      )}
    </Link>
  );
}
