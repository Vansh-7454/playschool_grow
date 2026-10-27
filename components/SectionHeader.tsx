import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-[720px] mb-10 sm:mb-14 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <div className="inline-block mb-3">
          <span
            className={`text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase px-3.5 py-1 rounded-full ${
              isDark
                ? "bg-white/15 text-[#FFD84D] border border-white/25"
                : "bg-[#EAF7EE] text-[#287F78] border border-[#A9DFC2]"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.14] tracking-tight font-heading ${
          isDark ? "text-[#FFFFFF]" : "text-[#29332F]"
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`text-[16px] sm:text-[18px] leading-[1.6] mt-3.5 ${
            isDark ? "text-white/80" : "text-[#5A6B64]"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
