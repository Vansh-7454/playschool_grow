import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteContent } from "@/content/site";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ChevronRight,
  Clock,
  ShieldCheck,
  Heart,
  Utensils,
  Moon,
  MessageSquare,
  Check,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: siteContent.pages.daycare.title,
  description: siteContent.pages.daycare.description,
};

export default function DayCarePage() {
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Little Steps Play School, I would like to inquire about day care availability and timings for my child."
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
                Day Care
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#FF786B] bg-[#FFF0EB] px-4 py-1.5 rounded-full border border-[#FF786B]/30 shadow-sm font-heading">
                {siteContent.pages.daycare.eyebrow}
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[52px] font-bold text-[#29332F] leading-[1.12] mb-5 font-heading">
              {siteContent.pages.daycare.heading}
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#4F5D56] leading-[1.65] font-body">
              {siteContent.pages.daycare.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. DAY CARE OVERVIEW & HERO SPLIT                              */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EADFCF]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual on Left (5 of 12) */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-[0_16px_40px_rgba(41,51,47,0.1)] bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/daycare/hero.webp"
                    alt="Caregiver interacting with happy young children in bright daycare room in Lucknow"
                    fill
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    quality={90}
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Verified Supervision Tag */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-[#EADFCF] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#287F78] animate-pulse" />
                  <span className="text-xs font-bold text-[#29332F] font-heading">
                    1:8 Monitored Toddler Care
                  </span>
                </div>
              </div>
            </div>

            {/* Content on Right (7 of 12) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EE] text-xs font-bold text-[#287F78] border border-[#A9DFC2] mb-4 font-heading">
                <Clock className="w-3.5 h-3.5 text-[#287F78]" aria-hidden="true" />
                <span>Operational Hours: 8:30 AM – 5:30 PM (Mon–Sat)</span>
              </div>

              <h2 className="text-[30px] sm:text-[40px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
                A structured, unhurried afternoon for growing toddlers
              </h2>

              <p className="text-[16px] text-[#4F5D56] leading-relaxed mb-6 font-normal">
                Our extended day care provides full-day or after-school care for children aged 2 to 5 years. Rather than unstructured screen time or crowded rooms, our day care is thoughtfully paced with balanced periods of nutrition, quiet monitored sleep, guided hygiene routines, and gentle table recreation.
              </p>

              {/* 2 Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-[#FFF9EF] border border-[#EADFCF] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] border border-[#FF786B]/30 flex items-center justify-center mb-3">
                    <Moon className="w-5 h-5 text-[#FF786B]" aria-hidden="true" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#29332F] font-heading mb-1">
                    Individual Cots &amp; Bedding
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4F5D56] leading-relaxed">
                    Personal hygienic bedding in a tranquil, climate-managed room with soothing instrumental lullabies.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F0F4FD] border border-[#D5E6F7] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF7EE] border border-[#A9DFC2] flex items-center justify-center mb-3">
                    <Utensils className="w-5 h-5 text-[#287F78]" aria-hidden="true" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#29332F] font-heading mb-1">
                    Warm Nutritious Routine
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4F5D56] leading-relaxed">
                    Assisted warm meals, handwashing routines, and healthy evening snacks served on child-height tables.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  href={whatsappHref}
                  isExternal
                  variant="coral"
                  className="flex items-center justify-center gap-2 shadow-md"
                  ariaLabel="Check day care slot availability"
                >
                  <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
                  <span>Check Day Care Availability on WhatsApp</span>
                </Button>
                <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                  <span>Visit Campus</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. DAILY ROUTINE TIMELINE                                      */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-[#F0F4FD] border-b border-[#E2ECF7]">
        <div className="site-container max-w-[880px] mx-auto">
          <SectionHeader
            eyebrow="PREDICTABLE SCHEDULE"
            heading="Our complete daily routine from arrival to evening pickup"
            intro="A predictable daily rhythm helps young children feel emotionally grounded, secure, and cooperative throughout the afternoon."
            align="center"
          />

          <div className="space-y-4 mt-10">
            {siteContent.dailyRoutine.map((item, index) => {
              const badgeColors = [
                "bg-[#FFF0EB] text-[#FF786B] border-[#FF786B]/30",
                "bg-[#FFF9EF] text-[#D96B14] border-[#FFA45B]/40",
                "bg-[#EAF7EE] text-[#287F78] border-[#A9DFC2]",
                "bg-[#F0F4FD] text-[#287F78] border-[#79C9F5]/40",
              ];
              const badgeStyle = badgeColors[index % badgeColors.length];

              return (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D5E6F7] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md hover:border-[#79C9F5] transition-all"
                >
                  <div className="sm:w-[210px] shrink-0">
                    <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold font-heading border ${badgeStyle}`}>
                      {item.timeSlot}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-bold text-[#29332F] font-heading mb-0.5">
                      {item.activity}
                    </h3>
                    <p className="text-sm text-[#4F5D56] leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. DAY CARE NUTRITION & ACTIVITIES SPLIT                       */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-[#FFF9EF] border-b border-[#EADFCF]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content Left (7 of 12) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#287F78] bg-[#EAF7EE] px-4 py-1.5 rounded-full border border-[#A9DFC2] shadow-sm font-heading">
                  HYGIENE &amp; NUTRITION
                </span>
              </div>
              <h2 className="text-[30px] sm:text-[40px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
                Clean dining habits and guided self-reliance
              </h2>
              <p className="text-[16px] text-[#4F5D56] leading-relaxed mb-8">
                Children learn handwashing habits, table manners, and enjoy quiet recreation before their evening ride home. Every routine is carefully assisted by experienced female caregivers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#EADFCF] shadow-sm">
                  <span className="w-6 h-6 rounded-full bg-[#EAF7EE] text-[#287F78] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#29332F] font-heading">Hygienic Handwashing Station</h4>
                    <p className="text-xs sm:text-[13px] text-[#4F5D56] mt-0.5">
                      Step-by-step soap routines before meals and after playground activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#EADFCF] shadow-sm">
                  <span className="w-6 h-6 rounded-full bg-[#EAF7EE] text-[#287F78] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#29332F] font-heading">Comfortable Rest Transition</h4>
                    <p className="text-xs sm:text-[13px] text-[#4F5D56] mt-0.5">
                      Calming background instrumental lullabies and soft dimmed lights for restful sleep.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#EADFCF] shadow-sm">
                  <span className="w-6 h-6 rounded-full bg-[#EAF7EE] text-[#287F78] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#29332F] font-heading">Quiet Evening Games</h4>
                    <p className="text-xs sm:text-[13px] text-[#4F5D56] mt-0.5">
                      Puzzle boards, picture reading, and creative blocks to end the day peacefully.
                    </p>
                  </div>
                </div>
              </div>

              <Button href="/contact" variant="secondary">
                <span>Speak with our Day Care Coordinator</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>

            {/* Visual Right (5 of 12) */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-[0_16px_40px_rgba(41,51,47,0.1)] bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/daycare/dining-routine.webp"
                    alt="Child-safe sanitized dining tables and nutrition routine at Little Steps Day Care Lucknow"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    quality={90}
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. WARM PRE-FOOTER CTA SECTION                                  */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF5EC] to-[#FFF9EF] py-16 sm:py-20 text-[#29332F] relative border-b border-[#EADFCF]">
        <div className="site-container text-center max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#287F78] bg-[#EAF7EE] px-4 py-1.5 rounded-full border border-[#A9DFC2] shadow-sm font-heading">
              EXTENDED CARE ADMISSIONS · GOMTI NAGAR
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
            Need dependable day care in Gomti Nagar?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#4F5D56] leading-relaxed mb-8 max-w-[620px] mx-auto font-body">
            Tour our nap facilities, inspect individual bedding hygiene, and discuss our warm meal schedule with our director during visiting hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={whatsappHref}
              isExternal
              variant="coral"
              className="w-full sm:w-auto shadow-md !px-8 !py-4 font-bold"
            >
              <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
              <span>Book a day care visit on WhatsApp</span>
            </Button>
            <Button
              href={`tel:${siteContent.contact.phoneTel}`}
              variant="secondary"
              className="w-full sm:w-auto !px-7 !py-4 font-bold border border-[#EADFCF]"
            >
              <Phone className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
              <span>Call Admissions Office</span>
            </Button>
          </div>
          <p className="text-xs text-[#5A6B64] font-medium mt-6">
            Flexible timings: After-school slots from 12:30 PM &amp; Full-Day care up to 5:30 PM
          </p>
        </div>
      </section>
    </div>
  );
}
