"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { siteContent } from "@/content/site";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Classrooms" | "Art & Creativity" | "Montessori & Sensory" | "Daycare & Dining" | "Outdoor Play";
  src: string;
  alt: string;
  caption: string;
}

const ALL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Art & Creativity Wall",
    category: "Art & Creativity",
    caption: "Children's finger painting, leaf prints, and seasonal craft displays celebrating self-expression.",
    src: "/images/gallery/art-craft.webp",
    alt: "Art and craft display wall with children's colorful paper creations",
  },
  {
    id: "gal-2",
    title: "Montessori Reading & Story Nook",
    category: "Classrooms",
    caption: "Low wooden book cubbies and plush cushions where educators read picture classics daily.",
    src: "/images/gallery/reading-corner.webp",
    alt: "Cosy reading corner with child-accessible wooden bookshelves and cushions",
  },
  {
    id: "gal-3",
    title: "Outdoor Soft Turf Play Area",
    category: "Outdoor Play",
    caption: "Shock-absorbent lawn equipped with child-height slides, tunnels, and safe balance beams.",
    src: "/images/gallery/outdoor-play.webp",
    alt: "Outdoor play yard with clean green artificial turf and child slide",
  },
  {
    id: "gal-4",
    title: "Montessori Sensory Zone",
    category: "Montessori & Sensory",
    caption: "Tactile wooden shape sorters, kinetic sand, and sound cylinder boxes designed for tactile learning.",
    src: "/images/gallery/sensory-zone.webp",
    alt: "Sensorial exploration table with natural wooden sorting blocks",
  },
  {
    id: "gal-5",
    title: "Child-Sized Hygiene Station",
    category: "Daycare & Dining",
    caption: "Low-height sinks, anti-slip washroom floor mats, and gentle automated soap dispensers.",
    src: "/images/gallery/hygiene-wash.webp",
    alt: "Spotless child-sized handwashing sinks with anti-slip flooring",
  },
  {
    id: "gal-6",
    title: "Morning Assembly Circle",
    category: "Classrooms",
    caption: "Vibrant circle rug where daily greetings, morning exercise, and interactive storytelling occur.",
    src: "/images/gallery/circle-time.webp",
    alt: "Circle time carpet area with morning activity props",
  },
  {
    id: "gal-7",
    title: "Kindergarten STEM & Activity Lab",
    category: "Classrooms",
    caption: "Engaging early math counters, alphabet blocks, and curiosity stations for kindergarteners.",
    src: "/images/programmes/kindergarten.webp",
    alt: "Kindergarten learning zone with engaging educational learning aids",
  },
  {
    id: "gal-8",
    title: "Nursery Phonics & Language Space",
    category: "Classrooms",
    caption: "Interactive phonics flashcards, picture vocabulary charts, and speech readiness tables.",
    src: "/images/programmes/nursery.webp",
    alt: "Nursery classroom equipped with colorful language development toys",
  },
  {
    id: "gal-9",
    title: "Playgroup Soft Play & Motor Zone",
    category: "Montessori & Sensory",
    caption: "Safe foam balance beams, crawling tunnels, and gentle tactile surfaces for toddlers.",
    src: "/images/programmes/playgroup.webp",
    alt: "Playgroup soft playroom designed for toddler motor development",
  },
  {
    id: "gal-10",
    title: "Nutritious Dining & Snack Hall",
    category: "Daycare & Dining",
    caption: "Child-safe sanitized dining furniture with healthy snack routines guided by caregivers.",
    src: "/images/daycare/dining-routine.webp",
    alt: "Clean and welcoming preschool dining setup with child-safe chairs",
  },
  {
    id: "gal-11",
    title: "After-School Activity & Rest Zone",
    category: "Daycare & Dining",
    caption: "Supervised daycare space for evening quiet reading, gentle nap pods, and indoor play.",
    src: "/images/daycare/after-school.webp",
    alt: "After-school daycare lounge with comfortable rest and activity areas",
  },
  {
    id: "gal-12",
    title: "Gomti Nagar Campus Campus Front",
    category: "Outdoor Play",
    caption: "Secure gated preschool campus in Gomti Nagar featuring 24/7 CCTV surveillance and safety gates.",
    src: "/images/home/about-campus.webp",
    alt: "Little Steps Play School modern Lucknow campus entrance and green area",
  },
];

const CATEGORIES = [
  "All Spaces",
  "Classrooms",
  "Art & Creativity",
  "Montessori & Sensory",
  "Daycare & Dining",
  "Outdoor Play",
] as const;

type CategoryType = (typeof CATEGORIES)[number];

export function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All Spaces");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All Spaces"
      ? ALL_GALLERY_ITEMS
      : ALL_GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  // Disable body scroll when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Little Steps Play School, I would like to book a campus visit to view the classrooms in person."
  )}`;

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* ============================================================== */}
      {/* 1. LITTLE LEADERS HERO BANNER REDESIGN                         */}
      {/* Exact reference recreation: boy with books, mascot,            */}
      {/* cream background, orange accents, doodles, and warm layout     */}
      {/* ============================================================== */}
      <section className="relative bg-[#FFF9EF] border-b border-[#EADFCF] overflow-hidden pt-8 pb-16 sm:py-16 lg:py-20">

        {/* Waving Mascot (Bottom Left Corner) */}
        <div className="absolute bottom-0 left-2 sm:left-6 lg:left-12 w-20 sm:w-24 md:w-28 lg:w-32 z-20 pointer-events-none hidden sm:block">
          <Image
            src="/images/footer/mascot.png"
            alt="Little Steps Lion Mascot"
            width={160}
            height={200}
            priority
            className="w-full h-auto drop-shadow-md select-none"
          />
        </div>

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, Heading, Subtitle, CTA */}
            <div className="lg:col-span-7 pt-5 sm:pt-0 pl-4 sm:pl-16 lg:pl-16 pr-2">

              {/* Main Heading styled like "About Little Leaders School" */}
              <h1 className="text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] font-bold text-[#29332F] leading-[1.12] mb-5 font-heading">
                Campus Gallery <span className="text-[#FFA45B]">Little Steps</span> School
              </h1>

              {/* Subtitle */}
              <p className="text-[16px] sm:text-[18px] md:text-[19px] text-[#4F5D56] leading-[1.65] font-body max-w-xl mb-8">
                Step inside our safe, sensory-rich Lucknow campus — thoughtfully designed for joyful exploration, early creativity, and trustworthy daycare in Gomti Nagar.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FFA45B] hover:bg-[#FF786B] text-white font-bold text-[15px] sm:text-[16px] shadow-[0_8px_20px_rgba(255,164,91,0.35)] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 font-heading"
                >
                  <span>Apply Today</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <Button
                  href={whatsappHref}
                  isExternal
                  variant="secondary"
                  className="!px-6 !py-3.5 rounded-full text-[14px] font-bold border border-[#EADFCF] bg-white text-[#29332F] hover:bg-[#FFF5EC] shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#287F78]" />
                  <span>WhatsApp Tour</span>
                </Button>
              </div>
            </div>

            {/* Right Column: Boy holding books with playful backdrop */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
              {/* Decorative Yellow Arc & Pastel Shapes behind the boy */}
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/5] flex items-end justify-center">
                {/* Yellow Arc / Ring */}
                <div className="absolute -bottom-4 right-2 sm:right-6 w-[300px] sm:w-[350px] lg:w-[390px] h-[300px] sm:h-[350px] lg:h-[390px] rounded-full border-[14px] sm:border-[18px] border-[#FFCA3A]/50 pointer-events-none -z-0" />

                {/* Soft Lavender Cloud Shape (Right side) */}
                <div className="absolute top-12 -right-4 w-36 sm:w-44 h-24 sm:h-28 bg-[#ECEAF5]/90 rounded-[50px] blur-[1px] pointer-events-none -z-0" />

                {/* Flying Bumblebee with flight dash trail */}
                <div className="absolute top-8 right-6 z-20 pointer-events-none">
                  <div className="relative flex items-center">
                    <svg
                      className="w-14 h-8 text-[#FFA45B]/60"
                      viewBox="0 0 60 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeDasharray="3 3"
                    >
                      <path d="M5 25 Q 25 5, 45 18" />
                    </svg>
                    <svg className="w-8 h-8 -ml-1 drop-shadow" viewBox="0 0 36 36" fill="none">
                      <ellipse cx="14" cy="11" rx="6" ry="4" transform="rotate(-30 14 11)" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
                      <ellipse cx="22" cy="11" rx="6" ry="4" transform="rotate(30 22 11)" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
                      <ellipse cx="18" cy="20" rx="9" ry="7" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M15 13.5 C15 13.5 15.5 26.5 15.5 26.5" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M20 13.5 C20 13.5 20.5 26.5 20.5 26.5" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M9 20 L6 20" stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M24 16 Q 28 13 27 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <circle cx="27" cy="10" r="1.2" fill="#1F2937" />
                    </svg>
                  </div>
                </div>

                {/* Open Book Line-Art Doodle (Left side of boy's head) */}
                <div className="absolute top-10 left-4 sm:left-8 z-20 pointer-events-none drop-shadow-sm">
                  <svg
                    className="w-14 h-12 text-[#4A72C8]"
                    viewBox="0 0 48 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 8C12 4 20 6 24 10C28 6 36 4 44 8V34C36 30 28 32 24 36C20 32 12 30 4 34V8Z" />
                    <path d="M24 10V36" />
                    <path d="M9 14C14 12 19 13 21 15" />
                    <path d="M9 19C14 17 19 18 21 20" />
                    <path d="M9 24C14 22 19 23 21 25" />
                    <path d="M39 14C34 12 29 13 27 15" />
                    <path d="M39 19C34 17 29 18 27 20" />
                    <path d="M39 24C34 22 29 23 27 25" />
                  </svg>
                </div>

                {/* The Indian preschool boy holding books */}
                <div className="relative w-full h-full flex items-end justify-center z-10">
                  <Image
                    src="/images/gallery/student-boy-clean.png"
                    alt="Little Steps preschool student holding storybooks"
                    width={450}
                    height={600}
                    priority
                    className="w-auto h-[95%] sm:h-full object-contain object-bottom drop-shadow-xl select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CATEGORY FILTERS                                            */}
      {/* ============================================================== */}
      <section className="bg-white py-6 sm:py-8 border-b border-[#F0E6D8]">
        <div className="site-container">
          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((category) => {
              const count =
                category === "All Spaces"
                  ? ALL_GALLERY_ITEMS.length
                  : ALL_GALLERY_ITEMS.filter((item) => item.category === category).length;
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#FFA45B] text-white shadow-[0_4px_14px_rgba(255,164,91,0.35)] scale-105"
                      : "bg-[#FFF9EF] text-[#29332F] hover:bg-[#FFEED8] border border-[#EADFCF]"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      isActive ? "bg-white/25 text-white" : "bg-black/5 text-[#5A6B64]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CLEAN PHOTO GALLERY GRID (NO BULKY TEXT UNDER CARDS)        */}
      {/* Pure image cards with hover title overlay and Lightbox zoom    */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white min-h-[500px]">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] w-full rounded-[22px] overflow-hidden border border-[#EADFCF] bg-[#FFF9EF] shadow-[0_4px_20px_rgba(41,51,47,0.06)] hover:shadow-2xl hover:border-[#FFA45B] transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Permanent Category Badge (Top Left) */}
                <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#EADFCF] text-[#29332F] text-[11px] font-bold shadow-sm font-heading">
                  {item.category}
                </div>

                {/* Hover Gradient Overlay with Title and Zoom Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 z-20">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[11px] font-bold text-[#FFA45B] uppercase tracking-wider block mb-1">
                      Little Steps Campus
                    </span>
                    <h3 className="text-white text-lg sm:text-xl font-bold font-heading mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  {/* Centered / Corner Zoom Icon */}
                  <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-[#5A6B64]">
              <p className="text-lg">No campus photographs in this category yet.</p>
              <button
                onClick={() => setSelectedCategory("All Spaces")}
                className="mt-4 text-[#FFA45B] font-bold underline"
              >
                View all campus spaces
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. INTERACTIVE LIGHTBOX MODAL                                  */}
      {/* ============================================================== */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all animate-fadeIn"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Control Bar */}
          <div
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-30 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#FFA45B] text-white text-xs font-bold font-heading">
                {filteredItems[lightboxIndex].category}
              </span>
              <span className="text-white/70 text-xs sm:text-sm font-medium">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-[#FFA45B] text-white flex items-center justify-center transition-all z-30 border border-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-[#FFA45B] text-white flex items-center justify-center transition-all z-30 border border-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative max-w-4xl w-full flex flex-col items-center justify-center z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain select-none border border-white/15"
              />
            </div>

            {/* Caption & Title beneath image */}
            <div className="w-full text-center mt-4 px-4">
              <h2 className="text-white text-lg sm:text-xl font-bold font-heading mb-1">
                {filteredItems[lightboxIndex].title}
              </h2>
              <p className="text-white/70 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 5. WARM PRE-FOOTER CTA SECTION                                  */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF5EC] to-[#FFF9EF] py-16 sm:py-20 text-[#29332F] relative border-b border-[#EADFCF]">
        <div className="site-container text-center max-w-[720px] mx-auto">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
            Experience our classrooms in person
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#4F5D56] leading-relaxed mb-8 max-w-[620px] mx-auto font-body">
            Photographs only capture a glimpse. Schedule a morning walk-through to see our learning spaces, Montessori apparatus, and meet our teachers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={whatsappHref}
              isExternal
              variant="coral"
              className="w-full sm:w-auto shadow-md !px-8 !py-4 font-bold bg-[#FFA45B] hover:bg-[#FF786B] text-white"
            >
              <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
              <span>Book a Campus Walkthrough on WhatsApp</span>
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto !px-7 !py-4 font-bold border border-[#EADFCF] bg-white hover:bg-[#FFF5EC]"
            >
              <span>View visiting hours</span>
            </Button>
          </div>
          <p className="text-xs text-[#5A6B64] font-medium mt-6">
            Gomti Nagar, Lucknow · Monday to Saturday 8:30 AM – 5:30 PM
          </p>
        </div>
      </section>
    </div>
  );
}
