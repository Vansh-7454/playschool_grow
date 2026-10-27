"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/Logo";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowUp,
  Navigation,
} from "lucide-react";

export function Footer() {
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    siteContent.contact.whatsappMessage
  )}`;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#FFF9EF] text-[#29332F] border-t border-[#EADFCF] pt-16 sm:pt-20 relative overflow-hidden font-sans">
      <div className="site-container relative z-10">
        {/* Main 4-Column Grid (Directly inspired by Little Leaders reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1 (4 cols): Brand Identity, Motto & Social Connect */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="full" theme="dark" />

            <p className="text-[14px] leading-relaxed text-[#4F5D56] pt-1 max-w-[340px]">
              Inspiring young minds in Gomti Nagar, Lucknow. Where curiosity blossoms and every little step is celebrated with gentle care.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF7EE] text-[#287F78] text-xs font-bold border border-[#A9DFC2] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#287F78]" aria-hidden="true" />
              <span>Full CCTV Campus · 1:8 Ratio</span>
            </div>

            {/* Social & Contact Icon Squares (as seen in Reference Image 2) */}
            <div className="pt-2 flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white border border-[#EADFCF] text-[#4F5D56] hover:bg-[#FF786B] hover:text-white hover:border-[#FF786B] flex items-center justify-center transition-all shadow-sm group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl bg-white border border-[#EADFCF] text-[#4F5D56] hover:bg-[#FF786B] hover:text-white hover:border-[#FF786B] flex items-center justify-center transition-all shadow-sm group"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white border border-[#EADFCF] text-[#4F5D56] hover:bg-[#FF786B] hover:text-white hover:border-[#FF786B] flex items-center justify-center transition-all shadow-sm group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white border border-[#EADFCF] text-[#4F5D56] hover:bg-[#FF786B] hover:text-white hover:border-[#FF786B] flex items-center justify-center transition-all shadow-sm group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white border border-[#EADFCF] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] flex items-center justify-center transition-all shadow-sm group"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2 (2.5 cols): Quick Links with Chevron Prefix */}
          <div className="lg:col-span-2 sm:pl-2">
            <h3 className="text-[17px] font-bold text-[#29332F] font-heading">
              Quick Links
            </h3>
            {/* Orange Underline Accent Bar */}
            <div className="w-10 h-0.5 bg-[#FFA45B] rounded-full mt-2 mb-4" />

            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link
                  href="/"
                  className="group inline-flex items-center text-[#4F5D56] hover:text-[#FF786B] transition-colors"
                >
                  <span className="text-[#FFA45B] font-bold text-xs mr-2 transition-transform group-hover:translate-x-1">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes"
                  className="group inline-flex items-center text-[#4F5D56] hover:text-[#FF786B] transition-colors"
                >
                  <span className="text-[#FFA45B] font-bold text-xs mr-2 transition-transform group-hover:translate-x-1">&gt;</span>
                  <span>Programmes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/daycare"
                  className="group inline-flex items-center text-[#4F5D56] hover:text-[#FF786B] transition-colors"
                >
                  <span className="text-[#FFA45B] font-bold text-xs mr-2 transition-transform group-hover:translate-x-1">&gt;</span>
                  <span>Day Care</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="group inline-flex items-center text-[#4F5D56] hover:text-[#FF786B] transition-colors"
                >
                  <span className="text-[#FFA45B] font-bold text-xs mr-2 transition-transform group-hover:translate-x-1">&gt;</span>
                  <span>Campus Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group inline-flex items-center text-[#4F5D56] hover:text-[#FF786B] transition-colors"
                >
                  <span className="text-[#FFA45B] font-bold text-xs mr-2 transition-transform group-hover:translate-x-1">&gt;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center text-[#4F5D56] hover:text-[#FF786B] transition-colors"
                >
                  <span className="text-[#FFA45B] font-bold text-xs mr-2 transition-transform group-hover:translate-x-1">&gt;</span>
                  <span>Contact &amp; Visits</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (2.5 cols): Our Programmes */}
          <div className="lg:col-span-3 sm:pl-2">
            <h3 className="text-[17px] font-bold text-[#29332F] font-heading">
              Our Programmes
            </h3>
            {/* Orange Underline Accent Bar */}
            <div className="w-10 h-0.5 bg-[#FFA45B] rounded-full mt-2 mb-4" />

            <ul className="space-y-2.5 text-[14px]">
              {siteContent.programmes.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/programmes#${p.id}`}
                    className="group flex flex-col text-[#4F5D56] hover:text-[#FF786B] transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-[#FFA45B] font-bold text-xs mr-2 transition-transform group-hover:translate-x-1">&gt;</span>
                      <span className="font-semibold text-[#29332F] group-hover:text-[#FF786B] transition-colors">
                        {p.title}
                      </span>
                      <span className="text-xs text-[#287F78] ml-1.5 font-bold">
                        ({p.ageBracket})
                      </span>
                    </div>
                    <span className="text-[12px] text-[#5A6B64] pl-4">{p.timings}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (3 cols): Campus & Visits / Admissions */}
          <div className="lg:col-span-3 space-y-3.5 text-[14px]">
            <h3 className="text-[17px] font-bold text-[#29332F] font-heading">
              Campus &amp; Visits
            </h3>
            {/* Orange Underline Accent Bar */}
            <div className="w-10 h-0.5 bg-[#FFA45B] rounded-full mt-2 mb-4" />

            <div className="flex items-start gap-2.5 text-[#4F5D56]">
              <MapPin className="w-4 h-4 text-[#FF786B] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium text-[#29332F]">{siteContent.contact.address}</p>
                <a
                  href={siteContent.contact.mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#287F78] hover:text-[#FF786B] mt-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open in Google Maps →</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-[#4F5D56] pt-1">
              <Clock className="w-4 h-4 text-[#FFA45B] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium text-[#29332F]">{siteContent.contact.hoursWeekday}</p>
                <p className="text-xs text-[#5A6B64]">{siteContent.contact.hoursSaturday}</p>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#FF786B] hover:bg-[#FFA45B] px-4 py-2.5 rounded-full transition-all shadow-[0_4px_14px_rgba(255,120,107,0.35)]"
                aria-label="Book a visit on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                <span>Book a school visit on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PLAYFUL SCALLOPED WAVY BOTTOM BASE (Directly matching Image 2) */}
      {/* ============================================================== */}
      <div className="relative w-full">
        {/* Adorable Preschool Lion Mascot standing on the wave (as seen in Image 2) */}
        <div className="absolute -top-20 sm:-top-28 left-4 sm:left-12 z-20 w-24 sm:w-32 md:w-36 pointer-events-none drop-shadow-xl select-none">
          <Image
            src="/images/footer/mascot.png"
            alt="Little Steps Play School friendly lion mascot waving cheerfully"
            width={180}
            height={180}
            className="w-full h-auto animate-mascot"
            priority={false}
          />
        </div>

        {/* Scroll-to-Top Circular Button (Directly inspired by Image 2) */}
        <button
          onClick={scrollToTop}
          className="absolute -top-5 sm:-top-6 right-6 sm:right-14 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFA45B] hover:bg-[#FF786B] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-2 border-white focus:outline-none focus:ring-2 focus:ring-[#FF786B]"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-white stroke-[2.5]" aria-hidden="true" />
        </button>

        {/* Scalloped Wavy SVG Divider */}
        <div className="w-full overflow-hidden leading-none block">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-10 sm:h-14 fill-[#FFA45B] block"
            aria-hidden="true"
          >
            {/* Repeating smooth scalloped wave curve */}
            <path d="M0,35 C60,5 100,5 160,35 C220,65 260,65 320,35 C380,5 420,5 480,35 C540,65 580,65 640,35 C700,5 740,5 800,35 C860,65 900,65 960,35 C1020,5 1060,5 1120,35 C1180,65 1220,65 1280,35 C1340,5 1380,5 1440,35 L1440,60 L0,60 Z" />
          </svg>
        </div>

        {/* Solid Warm Orange Bottom Bar */}
        <div className="bg-[#FFA45B] text-white py-4 sm:py-5 px-4 text-xs font-medium">
          <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-white/95 font-body">
              &copy; All Copyright {new Date().getFullYear()} by {siteContent.brand.name} ({siteContent.brand.city}, {siteContent.brand.state}). All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/90 text-xs">
              <Link href="/about" className="hover:text-[#29332F] transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/contact" className="hover:text-[#29332F] transition-colors">
                Parental Consent Directive
              </Link>
              <span>·</span>
              <Link href="/contact" className="hover:text-[#29332F] transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
