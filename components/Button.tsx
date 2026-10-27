import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "coral" | "orange" | "yellow" | "teal" | "outline" | "ghost" | "secondary-dark" | "whatsapp";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  isExternal?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  isExternal = false,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  // Height strictly 48–52px, horizontal padding 24–28px, weight 700/600, rounded-full for friendly preschool aesthetic
  const baseClasses =
    "inline-flex items-center justify-center font-bold text-[15px] sm:text-[16px] min-h-[50px] py-2.5 px-6 sm:px-7 rounded-full transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] text-center";

  const variantClasses = {
    primary:
      "bg-[#FF786B] text-white hover:bg-[#E66356] shadow-[0_4px_16px_rgba(255,120,107,0.35)] hover:shadow-[0_6px_22px_rgba(255,120,107,0.5)] hover:-translate-y-0.5 border border-[#FF786B]",
    coral:
      "bg-[#FF786B] text-white hover:bg-[#E66356] shadow-[0_4px_16px_rgba(255,120,107,0.35)] hover:shadow-[0_6px_22px_rgba(255,120,107,0.5)] hover:-translate-y-0.5 border border-[#FF786B]",
    orange:
      "bg-[#FFA45B] text-white hover:bg-[#F29448] shadow-[0_4px_16px_rgba(255,164,91,0.35)] hover:shadow-[0_6px_22px_rgba(255,164,91,0.5)] hover:-translate-y-0.5 border border-[#FFA45B]",
    yellow:
      "bg-[#FFD84D] text-[#29332F] hover:bg-[#F5CB38] shadow-[0_4px_16px_rgba(255,216,77,0.35)] hover:shadow-[0_6px_22px_rgba(255,216,77,0.5)] hover:-translate-y-0.5 border border-[#FFD84D]",
    teal:
      "bg-[#287F78] text-white hover:bg-[#206761] shadow-[0_4px_16px_rgba(40,127,120,0.3)] hover:shadow-[0_6px_22px_rgba(40,127,120,0.45)] hover:-translate-y-0.5 border border-[#287F78]",
    secondary:
      "bg-[#FFFFFF] text-[#287F78] hover:bg-[#F0F4FD] border-2 border-[#287F78]/30 hover:border-[#287F78] shadow-sm",
    "secondary-dark":
      "bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 border border-white/30",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BA59] shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 border border-[#25D366]",
    outline:
      "bg-transparent text-[#287F78] hover:bg-[#F0F4FD] border-2 border-[#287F78]",
    ghost:
      "bg-transparent text-[#29332F] hover:bg-[#F0F4FD]",
  }[variant];

  const fullClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={fullClasses}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={fullClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
