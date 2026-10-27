import React from "react";

export function ConcentricRings({
  className = "",
  size = 140,
  stroke = "#FFD84D",
  opacity = 0.5,
}: {
  className?: string;
  size?: number;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <circle cx="50" cy="50" r="15" stroke={stroke} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="28" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="42" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

export function Squiggle({
  className = "",
  color = "#FFD84D",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width="44"
      height="24"
      viewBox="0 0 44 24"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 12C6 6 10 6 13 12C16 18 20 18 23 12C26 6 30 6 33 12C36 18 40 18 42 12"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlusMark({
  className = "",
  color = "#FFD84D",
  size = 28,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 4V20M4 12H20"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStar({
  className = "",
  color = "#FFD84D",
  size = 24,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
    </svg>
  );
}

export function DoodlePlane({
  className = "",
  color = "#FFD84D",
  size = 48,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path d="M12 36L44 14L32 46L24 38L12 36Z" />
      <path d="M24 38L44 14" />
      <path d="M48 20C54 26 56 34 50 40C44 46 36 44 32 46" strokeDasharray="3 3" />
    </svg>
  );
}

/** Little Leaders signature cheerful pencil motif */
export function DoodlePencil({
  className = "",
  size = 54,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <g transform="rotate(-30 32 32)">
        {/* Pencil body */}
        <rect x="24" y="16" width="16" height="30" rx="3" fill="#FFD84D" stroke="#29332F" strokeWidth="2.5" />
        {/* Stripes */}
        <line x1="29" y1="16" x2="29" y2="46" stroke="#29332F" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="35" y1="16" x2="35" y2="46" stroke="#29332F" strokeWidth="1.5" strokeOpacity="0.4" />
        {/* Eraser in coral accent */}
        <rect x="24" y="8" width="16" height="8" rx="2" fill="#FF786B" stroke="#29332F" strokeWidth="2" />
        <line x1="24" y1="16" x2="40" y2="16" stroke="#29332F" strokeWidth="2" />
        {/* Tip */}
        <polygon points="24,46 40,46 32,58" fill="#FFF9EF" stroke="#29332F" strokeWidth="2.5" />
        {/* Lead */}
        <polygon points="29,53 35,53 32,58" fill="#29332F" />
      </g>
    </svg>
  );
}

/** Little Leaders signature open storybook motif */
export function DoodleBook({
  className = "",
  size = 48,
  color = "#79C9F5",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Left Page */}
      <path
        d="M24 14C19 11 12 11 6 13V35C12 33 19 33 24 36V14Z"
        fill={color}
        stroke="#29332F"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Right Page */}
      <path
        d="M24 14C29 11 36 11 42 13V35C36 33 29 33 24 36V14Z"
        fill="#FFD84D"
        stroke="#29332F"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Bookmark in Coral */}
      <path d="M22 14V22L24 20L26 22V14" fill="#FF786B" />
    </svg>
  );
}

/** Little Leaders cheerful busy bee / butterfly motif */
export function DoodleBee({
  className = "",
  size = 46,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Wings */}
      <ellipse cx="20" cy="16" rx="8" ry="12" transform="rotate(-30 20 16)" fill="#79C9F5" stroke="#29332F" strokeWidth="2" opacity="0.85" />
      <ellipse cx="28" cy="16" rx="8" ry="12" transform="rotate(30 28 16)" fill="#79C9F5" stroke="#29332F" strokeWidth="2" opacity="0.85" />
      {/* Body */}
      <ellipse cx="24" cy="28" rx="9" ry="13" fill="#FFD84D" stroke="#29332F" strokeWidth="2.5" />
      {/* Stripes */}
      <path d="M16 26H32" stroke="#29332F" strokeWidth="2.5" />
      <path d="M17 31H31" stroke="#29332F" strokeWidth="2.5" />
      {/* Antennae */}
      <path d="M21 16C19 12 16 12 15 13" stroke="#29332F" strokeWidth="2" strokeLinecap="round" />
      <path d="M27 16C29 12 32 12 33 13" stroke="#29332F" strokeWidth="2" strokeLinecap="round" />
      {/* Stinger */}
      <polygon points="23,41 25,41 24,44" fill="#29332F" />
    </svg>
  );
}

/** Smiling sunshine motif */
export function DoodleSun({
  className = "",
  size = 42,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="11" fill="#FFD84D" stroke="#FF786B" strokeWidth="2.5" />
      {/* Rays */}
      <line x1="24" y1="4" x2="24" y2="8" stroke="#FF786B" strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="40" x2="24" y2="44" stroke="#FF786B" strokeWidth="3" strokeLinecap="round" />
      <line x1="4" y1="24" x2="8" y2="24" stroke="#FF786B" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="24" x2="44" y2="24" stroke="#FF786B" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="10" x2="13" y2="13" stroke="#FF786B" strokeWidth="3" strokeLinecap="round" />
      <line x1="35" y1="35" x2="38" y2="38" stroke="#FF786B" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="38" x2="13" y2="35" stroke="#FF786B" strokeWidth="3" strokeLinecap="round" />
      <line x1="35" y1="13" x2="38" y2="10" stroke="#FF786B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Coral / Yellow accent dot cluster */
export function CoralDot({
  className = "",
  color = "#FF786B",
  size = 14,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <span
      className={`inline-block rounded-full ${className}`}
      style={{ width: size, height: size, backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

/** Little Leaders playful hand outline motif (as seen in classes section) */
export function DoodleHand({
  className = "",
  color = "#FFFFFF",
  size = 48,
  opacity = 0.35,
}: {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        d="M20 28V16C20 13.8 21.8 12 24 12C26.2 12 28 13.8 28 16V26M28 20C28 17.8 29.8 16 32 16C34.2 16 36 17.8 36 20V26M36 22C36 19.8 37.8 18 40 18C42.2 18 44 19.8 44 22V28M44 26C44 24 45.6 22.4 47.6 22.4C49.6 22.4 51.2 24 51.2 26V38C51.2 46.8 44 54 35.2 54H31C22.2 54 15 46.8 15 38V32C15 29.8 16.8 28 19 28H20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

