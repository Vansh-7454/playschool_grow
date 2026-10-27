"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { Menu, X, MessageSquare, Phone, MapPin, ArrowRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Trap focus inside mobile drawer when open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      drawerRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    siteContent.contact.whatsappMessage
  )}`;

  return (
    <div className="relative z-50 w-full font-sans">
      {/* ============================================================== */}
      {/* MAIN HEADER (Clean White Background, Crisp Little Leaders Look) */}
      {/* ============================================================== */}
      <header
        className={`w-full bg-[#FFFFFF] transition-all duration-300 ${
          scrolled
            ? "sticky top-0 shadow-md border-b border-[#EADFCF] py-2 sm:py-2.5"
            : "border-b border-[#EADFCF]/70 py-2.5 sm:py-3"
        }`}
      >
        <div className="site-container flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="shrink-0">
            <Logo variant="full" theme="dark" />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {siteContent.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-[15px] font-bold tracking-tight rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] group ${
                    isActive
                      ? "text-[#FF786B] bg-[#FFF0EB]"
                      : "text-[#29332F] hover:text-[#FF786B] hover:bg-[#FFF9EF]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF786B]" aria-hidden="true" />
                    )}
                  </span>
                  {isActive && (
                    <span
                      className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-[#FF786B] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button: Warm Coral Pill Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={whatsappHref}
              isExternal
              variant="coral"
              className="!h-[46px] !px-6 !text-[15px] flex items-center gap-2 font-bold shadow-[0_4px_14px_rgba(255,120,107,0.35)]"
              ariaLabel="Book a school visit on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-white ml-0.5" aria-hidden="true" />
            </Button>
          </div>

          {/* Mobile Hamburger & WhatsApp Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#25D366] text-white shadow-sm flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-[#29332F] bg-[#FFF9EF] hover:bg-[#FFEED6] border border-[#EADFCF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            ref={drawerRef}
            tabIndex={-1}
            className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[62px] bottom-0 bg-[#FFFFFF] z-50 overflow-y-auto border-t border-[#EADFCF] p-6 pb-24 flex flex-col justify-between shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#EADFCF]">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#FF786B]">
                  Navigation Menu
                </p>
                <span className="text-xs font-semibold text-[#5A6B64]">
                  Ages 2 to 5 · Lucknow
                </span>
              </div>
              {siteContent.nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 text-[17px] font-bold rounded-2xl transition-all ${
                      isActive
                        ? "text-[#FFFFFF] bg-[#FF786B] shadow-sm"
                        : "text-[#29332F] hover:bg-[#FFF9EF]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-white" />
                    ) : (
                      <span className="text-xs text-[#287F78] font-medium">→</span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="pt-6 border-t border-[#EADFCF] space-y-3">
              <Button
                href={whatsappHref}
                isExternal
                variant="coral"
                className="w-full justify-center flex items-center gap-2 !h-[48px] text-[15px] font-bold"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Contact Us on WhatsApp</span>
              </Button>
              <a
                href={`tel:${siteContent.contact.phoneTel}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#FFF9EF] text-[#29332F] font-bold text-sm border border-[#EADFCF] hover:bg-[#FFEED6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#287F78]" />
                <span>Call Admissions: {siteContent.contact.phoneDisplay}</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-[#5A6B64] pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF786B]" />
                <span>Gomti Nagar, Lucknow</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
