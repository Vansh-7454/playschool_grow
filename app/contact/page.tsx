import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteContent } from "@/content/site";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ChevronRight,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Navigation,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: siteContent.pages.contact.title,
  description: siteContent.pages.contact.description,
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    siteContent.contact.whatsappMessage
  )}`;

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* ============================================================== */}
      {/* 1. EDITORIAL PAGE HEADER                                       */}
      {/* ============================================================== */}
      <section className="bg-[#FFF9EF] py-14 sm:py-20 border-b border-[#EADFCF]">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#287F78]">
              <li>
                <Link href="/" className="hover:text-[#FF786B] transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#4F5D56]/50" aria-hidden="true" />
              </li>
              <li className="font-bold text-[#29332F]" aria-current="page">
                Contact &amp; Visits
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-2">
              <span className="text-[13px] sm:text-[14px] font-bold text-[#FFA45B] tracking-wide flex items-center gap-1.5 font-heading">
                <Sparkles className="w-4 h-4 text-[#FFA45B]" aria-hidden="true" />
                Campus Visits &amp; Inquiries
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[52px] font-bold text-[#29332F] leading-[1.12] mb-5 font-heading">
              Contact <span className="text-[#FFA45B]">Little Steps</span> School
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#4F5D56] leading-[1.65] font-body">
              {siteContent.pages.contact.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CONTACT SPLIT (Campus Info left, In-Person Form right)       */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EADFCF]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Campus Info Card & Gate Visual (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 sm:p-8 rounded-[28px] bg-[#FFF9EF] border border-[#EADFCF] shadow-[0_8px_25px_rgba(41,51,47,0.06)] space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF786B] block mb-1 font-heading">
                    Direct Admissions &amp; Tours
                  </span>
                  <h2 className="text-[24px] font-bold text-[#29332F] font-heading">
                    Campus Information
                  </h2>
                  <p className="text-sm text-[#4F5D56] mt-1.5 leading-relaxed">
                    {siteContent.contact.appointmentNote}
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <Button
                  href={whatsappHref}
                  isExternal
                  variant="coral"
                  className="w-full flex items-center justify-center gap-2.5 shadow-md font-bold"
                  ariaLabel="Book a school visit on WhatsApp"
                >
                  <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
                  <span>Book a school visit on WhatsApp</span>
                </Button>

                {/* Direct Details */}
                <div className="space-y-4 pt-4 border-t border-[#EADFCF] text-sm text-[#29332F]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EAF7EE] flex items-center justify-center shrink-0 mt-0.5 border border-[#A9DFC2]">
                      <MapPin className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-[#29332F]">Campus Address</p>
                      <p className="text-[#4F5D56] leading-relaxed">{siteContent.contact.address}</p>
                      <a
                        href={siteContent.contact.mapQueryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#287F78] hover:text-[#FF786B] mt-1.5"
                      >
                        <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Open in Google Maps →</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF0EB] flex items-center justify-center shrink-0 mt-0.5 border border-[#FF786B]/30">
                      <Phone className="w-4 h-4 text-[#FF786B]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-[#29332F]">Admissions Desk</p>
                      <p className="text-[#4F5D56]">{siteContent.contact.phoneDisplay}</p>
                      <a
                        href={`tel:${siteContent.contact.phoneTel}`}
                        className="text-xs font-bold text-[#287F78] hover:text-[#FF786B] mt-1 block"
                      >
                        Call school directly →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#F0F4FD] flex items-center justify-center shrink-0 mt-0.5 border border-[#79C9F5]/40">
                      <Clock className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-[#29332F]">Visiting &amp; Office Hours</p>
                      <p className="text-[#4F5D56]">{siteContent.contact.hoursWeekday}</p>
                      <p className="text-xs text-[#287F78] font-medium mt-0.5">{siteContent.contact.hoursSaturday}</p>
                      <p className="text-xs text-[#4F5D56]">{siteContent.contact.hoursSunday}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#EADFCF] text-xs text-[#4F5D56] flex items-center gap-2.5 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#287F78] shrink-0" aria-hidden="true" />
                  <span>Campus visitor log and government photo ID check required at main gate.</span>
                </div>
              </div>

              {/* Campus Gate Visual */}
              <div className="relative rounded-[28px] overflow-hidden border-4 border-white shadow-[0_12px_30px_rgba(41,51,47,0.08)] bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/contact/campus-gate.webp"
                    alt="Exterior entrance gate and reception access at Little Steps Lucknow"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    quality={90}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute bottom-3 left-3 bg-[#29332F]/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold">
                    Gomti Nagar Main Entrance
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. VISITOR CHECK-IN GUIDELINES                                 */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-[#F0F4FD] border-b border-[#E2ECF7]">
        <div className="site-container max-w-[880px] mx-auto text-center">
          <SectionHeader
            eyebrow="CAMPUS ACCESS &amp; COURTESY"
            heading="Guidelines for parents visiting campus"
            intro="To preserve our calm classroom rhythm and ensure 100% child safety during school hours:"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mt-10">
            <div className="p-7 rounded-[28px] bg-white border border-[#D5E6F7] shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:border-[#FF786B] transition-all">
              <span className="w-10 h-10 rounded-2xl bg-[#FFF0EB] text-[#FF786B] flex items-center justify-center font-bold text-sm mb-4 font-heading border border-[#FF786B]/30">
                1
              </span>
              <h3 className="font-bold text-[17px] text-[#29332F] mb-1.5 font-heading">
                Morning Hours
              </h3>
              <p className="text-xs sm:text-sm text-[#4F5D56] leading-relaxed">
                Preferred visit slots are 9:30 AM to 12:30 PM, when classes and morning circle time are active.
              </p>
            </div>

            <div className="p-7 rounded-[28px] bg-white border border-[#D5E6F7] shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:border-[#FFA45B] transition-all">
              <span className="w-10 h-10 rounded-2xl bg-[#FFF9EF] text-[#D96B14] flex items-center justify-center font-bold text-sm mb-4 font-heading border border-[#FFA45B]/40">
                2
              </span>
              <h3 className="font-bold text-[17px] text-[#29332F] mb-1.5 font-heading">
                Gate Check-In
              </h3>
              <p className="text-xs sm:text-sm text-[#4F5D56] leading-relaxed">
                Please present government photo ID at the security gate to sign into our visitor log before entering.
              </p>
            </div>

            <div className="p-7 rounded-[28px] bg-white border border-[#D5E6F7] shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:border-[#A9DFC2] transition-all">
              <span className="w-10 h-10 rounded-2xl bg-[#EAF7EE] text-[#287F78] flex items-center justify-center font-bold text-sm mb-4 font-heading border border-[#A9DFC2]">
                3
              </span>
              <h3 className="font-bold text-[17px] text-[#29332F] mb-1.5 font-heading">
                Director Meeting
              </h3>
              <p className="text-xs sm:text-sm text-[#4F5D56] leading-relaxed">
                Walkthroughs include a 20-minute discussion with the school director regarding child readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. WARM PRE-FOOTER CTA SECTION                                  */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF5EC] to-[#FFF9EF] py-16 sm:py-20 text-[#29332F] relative border-b border-[#EADFCF]">
        <div className="site-container text-center max-w-[720px] mx-auto">
          <div className="flex items-center justify-center mb-3">
            <span className="text-[13px] sm:text-[14px] font-bold text-[#287F78] tracking-wide flex items-center gap-1.5 font-heading">
              <CalendarCheck className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
              Schedule Your Visit · Lucknow
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
            Book your school visit now
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#4F5D56] leading-relaxed mb-8 max-w-[620px] mx-auto font-body">
            Click below to open WhatsApp with a prefilled message to select your preferred morning slot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={whatsappHref}
              isExternal
              variant="coral"
              className="w-full sm:w-auto shadow-md !px-8 !py-4 font-bold"
            >
              <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
              <span>Book a school visit on WhatsApp</span>
            </Button>
            <Button
              href={`tel:${siteContent.contact.phoneTel}`}
              variant="secondary"
              className="w-full sm:w-auto !px-7 !py-4 font-bold border border-[#EADFCF]"
            >
              <Phone className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
              <span>Call Admissions</span>
            </Button>
          </div>
          <p className="text-xs text-[#5A6B64] font-medium mt-6">
            Gomti Nagar, Lucknow · Monday to Friday 8:30 AM – 5:30 PM, Saturday 9:00 AM – 1:00 PM
          </p>
        </div>
      </section>
    </div>
  );
}
