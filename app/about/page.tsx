import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteContent } from "@/content/site";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ChevronRight,
  ShieldCheck,
  Heart,
  Users,
  Compass,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  CalendarCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: siteContent.pages.about.title,
  description: siteContent.pages.about.description,
};

export default function AboutPage() {
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Little Steps Play School, I would like to schedule a visit and meet the school director."
  )}`;

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* ============================================================== */}
      {/* 1. VIBRANT 2-COLUMN HERO BANNER (Little Leaders style)         */}
      {/* ============================================================== */}
      <section className="relative bg-[#FFF9EF] border-b border-[#EADFCF] overflow-hidden pt-8 pb-14 sm:py-16 lg:py-20">
        <div className="site-container relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
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
                About Us
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols): Heading, Intro, Trust Points, CTAs */}
            <div className="lg:col-span-7">

              <h1 className="text-[34px] sm:text-[46px] md:text-[50px] lg:text-[54px] font-bold text-[#29332F] leading-[1.14] mb-4 font-heading">
                About <span className="text-[#FFA45B]">Little Steps</span> School
              </h1>

              <p className="text-[16px] sm:text-[18px] text-[#4F5D56] leading-[1.65] font-body max-w-xl mb-6">
                Built around safety, unhurried growth, and parent partnership in Gomti Nagar, Lucknow. How Little Steps grew out of a commitment to provide families with a calm, orderly, and genuinely nurturing early education space.
              </p>

              {/* Quick Highlight Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#EADFCF] text-xs font-bold text-[#29332F] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF786B]" />
                  Gomti Nagar Campus
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#EADFCF] text-xs font-bold text-[#29332F] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#287F78]" />
                  Ages 2 to 5 Years
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#EADFCF] text-xs font-bold text-[#29332F] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FFA45B]" />
                  1:8 Educator Ratio
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#EADFCF] text-xs font-bold text-[#29332F] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#79C9F5]" />
                  100% CCTV Monitored
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#FFA45B] hover:bg-[#FF786B] text-white font-bold text-[14px] sm:text-[15px] shadow-[0_8px_20px_rgba(255,164,91,0.35)] hover:shadow-lg transition-all duration-300 font-heading"
                >
                  <span>Book a Campus Tour</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <Button
                  href={whatsappHref}
                  isExternal
                  variant="secondary"
                  className="!px-6 !py-3 rounded-full text-[14px] font-bold border border-[#EADFCF] bg-white text-[#29332F] hover:bg-[#FFF5EC] shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#287F78]" />
                  <span>WhatsApp Inquiry</span>
                </Button>
              </div>
            </div>

            {/* Right Column (5 cols): Campus Photo with Organic Framing */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] lg:max-w-[460px]">
                {/* Yellow Ring Arc Backdrop */}
                <div className="absolute -bottom-3 -right-3 w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full border-[14px] sm:border-[18px] border-[#FFCA3A]/45 pointer-events-none -z-0" />

                {/* Soft Lavender Cloud Shape Backdrop */}
                <div className="absolute -top-4 -left-4 w-32 sm:w-40 h-24 bg-[#EAF7EE] rounded-[40px] pointer-events-none -z-0" />

                {/* Main Photo Card */}
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border-4 border-white shadow-[0_16px_40px_rgba(41,51,47,0.12)] bg-white z-10">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/about/campus.webp"
                      alt="Welcoming reception and campus environment of Little Steps Play School in Gomti Nagar Lucknow"
                      fill
                      priority={true}
                      sizes="(max-width: 768px) 100vw, 420px"
                      quality={90}
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-[#EADFCF] flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FF786B]" />
                    <span className="text-xs font-bold text-[#29332F] font-heading">
                      Gomti Nagar, Lucknow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CAMPUS STORY & DIRECTOR'S PERSPECTIVE SPLIT                 */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EADFCF]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Left (5 of 12) */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-[0_16px_40px_rgba(41,51,47,0.1)] bg-white">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/about/campus.webp"
                    alt="Welcoming reception and campus environment of Little Steps Play School in Gomti Nagar Lucknow"
                    fill
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    quality={90}
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-[#EADFCF] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF786B]" />
                  <span className="text-xs font-bold text-[#29332F] font-heading">
                    Gomti Nagar, Lucknow
                  </span>
                </div>
              </div>
            </div>

            {/* Story Text Right (7 of 12) */}
            <div className="lg:col-span-7">

              <h2 className="text-[30px] sm:text-[40px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
                Every child deserves an unhurried, gentle start
              </h2>

              <p className="text-[17px] text-[#287F78] font-semibold mb-6">
                A preschool should not rush early childhood; it should nurture natural curiosity and create an emotionally predictable haven.
              </p>

              <div className="space-y-4 text-[16px] text-[#4F5D56] leading-relaxed mb-8">
                <p>
                  As an early childhood educator, I founded Little Steps Play School with one guiding principle: when toddlers feel genuinely safe, emotionally understood, and unhurried, their natural curiosity blossoms effortlessly.
                </p>
                <p>
                  Parents in Lucknow often tell us how difficult it is to find a preschool that balances rigorous hygiene, active CCTV transparency, and calm, child-centered Montessori learning without sensory overstimulation. We intentionally keep our batch sizes small so our educators know each child&apos;s unique temperament, favourite books, and emotional rhythm.
                </p>
                <p>
                  Admissions take place exclusively in person. We invite every parent to visit our premises in Gomti Nagar, inspect our learning halls, and observe our morning circle time before making an enrollment decision.
                </p>
              </div>

              {/* Director Contact Bar */}
              <div className="p-5 rounded-2xl bg-[#FFF9EF] border border-[#EADFCF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                <div>
                  <h4 className="text-[16px] font-bold text-[#29332F] font-heading">Director &amp; Early Learning Faculty</h4>
                  <p className="text-xs text-[#4F5D56] mt-0.5">Little Steps Play School · Gomti Nagar, Lucknow</p>
                </div>
                <Button
                  href={whatsappHref}
                  isExternal
                  variant="coral"
                  className="!min-h-[44px] !h-auto !py-2.5 !px-5 !text-xs flex items-center justify-center gap-1.5 w-full sm:w-auto shrink-0 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  <span>Connect with Director</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FOUR CORE FOUNDATIONAL PILLARS                              */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-[#F0F4FD] border-b border-[#E2ECF7]">
        <div className="site-container">
          <SectionHeader
            heading="Built on transparency, hygiene and verified safety"
            intro="The non-negotiable operational principles guiding our teachers and caregivers every single day."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 rounded-[28px] bg-white border border-[#FF786B]/30 shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0EB] border border-[#FF786B]/30 flex items-center justify-center text-[#FF786B] mb-5">
                  <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-[19px] font-bold text-[#29332F] mb-2 font-heading">
                  Verified Safety
                </h3>
                <p className="text-[14px] text-[#4F5D56] leading-relaxed">
                  Active CCTV surveillance across all classrooms, continuous visitor logging, and strict parent handover protocols.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0E6D8] text-xs font-bold text-[#FF786B]">
                100% Campus Monitored
              </div>
            </div>

            <div className="p-6 rounded-[28px] bg-white border border-[#79C9F5]/40 shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F0F4FD] border border-[#79C9F5]/40 flex items-center justify-center text-[#287F78] mb-5">
                  <Heart className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-[19px] font-bold text-[#29332F] mb-2 font-heading">
                  Gentle Nurturing
                </h3>
                <p className="text-[14px] text-[#4F5D56] leading-relaxed">
                  Unhurried transitions, assisted toilet training, and compassionate comfort whenever a toddler feels anxious or tired.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0E6D8] text-xs font-bold text-[#287F78]">
                1:8 Teacher-Student Ratio
              </div>
            </div>

            <div className="p-6 rounded-[28px] bg-white border border-[#FFA45B]/40 shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF9EF] border border-[#FFA45B]/40 flex items-center justify-center text-[#D96B14] mb-5">
                  <Compass className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-[19px] font-bold text-[#29332F] mb-2 font-heading">
                  Sensory Learning
                </h3>
                <p className="text-[14px] text-[#4F5D56] leading-relaxed">
                  Montessori tactile apparatus, wooden toys, reading corners, and non-toxic arts instead of digital screens.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0E6D8] text-xs font-bold text-[#D96B14]">
                Screen-Free Classrooms
              </div>
            </div>

            <div className="p-6 rounded-[28px] bg-white border border-[#A9DFC2] shadow-[0_8px_25px_rgba(41,51,47,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF7EE] border border-[#A9DFC2] flex items-center justify-center text-[#287F78] mb-5">
                  <Users className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-[19px] font-bold text-[#29332F] mb-2 font-heading">
                  Parent Partnership
                </h3>
                <p className="text-[14px] text-[#4F5D56] leading-relaxed">
                  Daily verbal briefings at pickup, transparent communication, and mutual trust between home and school.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0E6D8] text-xs font-bold text-[#287F78]">
                Daily Pickup Briefings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. WARM PRE-FOOTER CTA SECTION                                  */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF5EC] to-[#FFF9EF] py-16 sm:py-20 text-[#29332F] relative border-b border-[#EADFCF]">
        <div className="site-container text-center max-w-[720px] mx-auto">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
            Meet our educators in Gomti Nagar
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#4F5D56] leading-relaxed mb-8 max-w-[620px] mx-auto font-body">
            Schedule a morning visit to observe our classes in action, inspect our premises, and discuss how Little Steps can support your child&apos;s growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={whatsappHref}
              isExternal
              variant="coral"
              className="w-full sm:w-auto shadow-md !px-8 !py-4 font-bold"
            >
              <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
              <span>Book a visit on WhatsApp</span>
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto !px-7 !py-4 font-bold border border-[#EADFCF]"
            >
              <span>View campus address</span>
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
