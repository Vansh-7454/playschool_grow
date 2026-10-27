import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteContent } from "@/content/site";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ChevronRight,
  Baby,
  Palette,
  BookOpen,
  Clock,
  Check,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Phone,
  Users,
  CalendarCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: siteContent.pages.programmes.title,
  description: siteContent.pages.programmes.description,
};

export default function ProgrammesPage() {
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Little Steps Play School, I would like to inquire about program admissions for my child."
  )}`;

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* ============================================================== */}
      {/* 1. EDITORIAL PAGE HEADER                                       */}
      {/* ============================================================== */}
      <section className="bg-[#FFF9EF] py-14 sm:py-20 border-b border-[#EADFCF]">
        <div className="site-container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#287F78]">
              <li>
                <Link href="/" className="hover:text-[#FF786B] transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#5A6B64]/50" aria-hidden="true" />
              </li>
              <li className="font-bold text-[#29332F]" aria-current="page">
                Programmes
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#287F78] bg-[#EAF7EE] px-4 py-1.5 rounded-full border border-[#A9DFC2] shadow-sm font-heading">
                {siteContent.pages.programmes.eyebrow}
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[52px] font-bold text-[#29332F] leading-[1.12] mb-5 font-heading">
              {siteContent.pages.programmes.heading}
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#4F5D56] leading-[1.65] font-body">
              {siteContent.pages.programmes.intro}
            </p>
          </div>

          {/* Clean Stage Jump Bar */}
          <div className="mt-10 pt-6 border-t border-[#EADFCF] flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B64] mr-1">
              Jump to Stage:
            </span>
            {siteContent.programmes.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-4 py-2 rounded-full bg-white border border-[#EADFCF] text-xs font-bold text-[#29332F] hover:border-[#FF786B] hover:text-[#FF786B] shadow-sm transition-all"
              >
                {p.title} ({p.ageBracket})
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CURRICULUM OVERVIEW HERO BANNER                             */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#EADFCF]">
        <div className="site-container">
          <div className="relative w-full rounded-[32px] overflow-hidden border-4 border-white shadow-[0_16px_40px_rgba(41,51,47,0.08)] bg-[#FFF9EF]">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              <Image
                src="/images/programmes/hero.webp"
                alt="Overview of Montessori learning materials and children's activity table at Little Steps Lucknow"
                fill
                priority={true}
                sizes="(max-width: 1280px) 100vw, 1200px"
                quality={90}
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29332F]/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
                <div className="text-white max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFD84D] block mb-1 font-heading">
                    Structured Development · Gomti Nagar Campus
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading">
                    Montessori Apparatus &amp; Natural Sensory Exploration
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. INDIVIDUAL PROGRAMME DETAILED SECTIONS                      */}
      {/* ============================================================== */}
      {siteContent.programmes.map((programme, index) => {
        const isAlternate = index % 2 === 1;
        const sectionBg = isAlternate ? "bg-[#FFFFFF]" : "bg-[#F0F4FD]";
        const borderBottom = isAlternate ? "border-b border-[#EADFCF]" : "border-b border-[#E2ECF7]";

        const stageColors =
          programme.id === "playgroup"
            ? "bg-[#FF786B] text-white"
            : programme.id === "nursery"
            ? "bg-[#79C9F5] text-[#29332F]"
            : programme.id === "kindergarten"
            ? "bg-[#287F78] text-white"
            : "bg-[#FFA45B] text-white";

        const stageWhatsAppHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
          `Hello Little Steps Play School, I would like to book a visit to learn more about the ${programme.title} (${programme.ageBracket}) programme.`
        )}`;

        return (
          <section
            key={programme.id}
            id={programme.id}
            className={`py-16 sm:py-24 ${sectionBg} ${borderBottom} relative`}
          >
            <div className="site-container">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center`}
              >
                {/* Visual Column (5 of 12) */}
                <div
                  className={`lg:col-span-5 ${
                    isAlternate ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-[0_16px_40px_rgba(41,51,47,0.1)] bg-white">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={programme.image.src}
                        alt={programme.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        quality={90}
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Stage Quick Facts Bar */}
                  <div className="mt-4 p-4 rounded-2xl bg-white border border-[#EADFCF] text-xs text-[#4F5D56] flex flex-wrap items-center justify-between gap-3 shadow-sm">
                    <div className="flex items-center gap-2 font-bold text-[#29332F]">
                      <Users className="w-4 h-4 text-[#287F78]" />
                      <span>Age: {programme.ageBracket}</span>
                    </div>
                    <div className="text-[#287F78] font-semibold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
                      <span>{programme.timings}</span>
                    </div>
                    <div className="text-[#4F5D56] font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#FF786B]" />
                      <span>1:8 Ratio</span>
                    </div>
                  </div>
                </div>

                {/* Content Column (7 of 12) */}
                <div
                  className={`lg:col-span-7 ${
                    isAlternate ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`inline-block text-[12px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm font-heading ${stageColors}`}
                    >
                      {programme.ageBracket}
                    </span>
                    <span className="text-xs font-semibold text-[#5A6B64] flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-[#EADFCF]">
                      <Clock className="w-3.5 h-3.5 text-[#287F78]" aria-hidden="true" />
                      <span>{programme.timings}</span>
                    </span>
                  </div>

                  <h2 className="text-[30px] sm:text-[38px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
                    {programme.title}
                  </h2>

                  <p className="text-[16px] sm:text-[17px] text-[#4F5D56] leading-relaxed mb-6 font-body">
                    {programme.description}
                  </p>

                  {/* Key Developmental Inclusions */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#287F78] mb-3 font-heading">
                      Developmental Inclusions &amp; Daily Focus:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {programme.whatIsIncluded.map((inc, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-[#EADFCF] shadow-sm text-sm text-[#29332F]"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#EAF7EE] text-[#287F78] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                            ✓
                          </span>
                          <span className="font-medium text-[13px] sm:text-[14px] leading-snug">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Who it is for */}
                  <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#EADFCF] mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF786B] block mb-1 font-heading">
                      Who It Is Ideal For:
                    </span>
                    <p className="text-sm text-[#29332F] font-medium leading-relaxed">
                      {programme.whoItIsFor}
                    </p>
                  </div>

                  {/* Next Step / Action */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Button
                      href={stageWhatsAppHref}
                      isExternal
                      variant="coral"
                      className="flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
                      ariaLabel={`Inquire about ${programme.title} on WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
                      <span>Book a visit for {programme.title}</span>
                    </Button>
                    <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                      <span>Schedule In-Person Tour</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============================================================== */}
      {/* 4. ADMISSIONS PROCESS (Clear 3-Step Walkthrough)               */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-[#FFF9EF] border-b border-[#EADFCF]">
        <div className="site-container max-w-[920px] mx-auto text-center">
          <SectionHeader
            eyebrow="ADMISSIONS PROCESS"
            heading="How admissions work at Little Steps"
            intro="We prioritize personal connection, classroom transparency, and verified readiness. Admissions happen exclusively in person."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
            <div className="p-7 rounded-[28px] bg-white border border-[#EADFCF] shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-2xl bg-[#FF786B] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm font-heading">
                  1
                </span>
                <h3 className="text-[20px] font-bold text-[#29332F] mb-2 font-heading">
                  Book a Morning Visit
                </h3>
                <p className="text-sm text-[#4F5D56] leading-relaxed">
                  Connect via WhatsApp to reserve a morning slot (9:30 AM to 12:30 PM) so you can see how students interact with educators during live circle time.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0E6D8] text-xs font-bold text-[#FF786B]">
                Takes 2 minutes via WhatsApp
              </div>
            </div>

            <div className="p-7 rounded-[28px] bg-white border border-[#EADFCF] shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-2xl bg-[#79C9F5] text-[#29332F] flex items-center justify-center font-bold text-lg mb-5 shadow-sm font-heading">
                  2
                </span>
                <h3 className="text-[20px] font-bold text-[#29332F] mb-2 font-heading">
                  Tour Campus &amp; Meet Teachers
                </h3>
                <p className="text-sm text-[#4F5D56] leading-relaxed">
                  Inspect classrooms, the CCTV surveillance console, wash stations, and discuss your child&apos;s eating, sleep, and social habits with the director.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0E6D8] text-xs font-bold text-[#287F78]">
                Personalized 30-min walkthrough
              </div>
            </div>

            <div className="p-7 rounded-[28px] bg-white border border-[#EADFCF] shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-2xl bg-[#287F78] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm font-heading">
                  3
                </span>
                <h3 className="text-[20px] font-bold text-[#29332F] mb-2 font-heading">
                  In-Person Enrollment
                </h3>
                <p className="text-sm text-[#4F5D56] leading-relaxed">
                  Confirm your child&apos;s seat in person at the school office. No online portal or registration fee is required beforehand.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0E6D8] text-xs font-bold text-[#29332F]">
                Transparent documentation
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
              ADMISSIONS &amp; GUIDANCE · LUCKNOW
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
            Not sure which stage is right for your child?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#4F5D56] leading-relaxed mb-8 max-w-[620px] mx-auto font-body">
            Speak directly with our school director to discuss your child&apos;s date of birth, developmental readiness, and schedule your personal morning tour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={whatsappHref}
              isExternal
              variant="coral"
              className="w-full sm:w-auto shadow-md !px-8 !py-4 font-bold"
            >
              <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
              <span>Book a consultation on WhatsApp</span>
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
            Gomti Nagar, Lucknow · Visiting slots: Monday to Saturday 9:30 AM – 12:30 PM
          </p>
        </div>
      </section>
    </div>
  );
}
