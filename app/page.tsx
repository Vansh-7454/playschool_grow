import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/SmartImage";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PlayfulPillars } from "@/components/PlayfulPillars";
import {
  ConcentricRings,
  Squiggle,
  PlusMark,
  DoodleStar,
  DoodlePlane,
  DoodlePencil,
  DoodleBook,
  DoodleBee,
  DoodleSun,
  CoralDot,
  DoodleHand,
} from "@/components/PlayfulDecorations";
import {
  Baby,
  ShieldCheck,
  Clock,
  Sparkles,
  Palette,
  BookOpen,
  Camera,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  MessageSquare,
  Phone,
  MapPin,
  Check,
  Award,
  Users,
  CalendarCheck,
} from "lucide-react";

export default function HomePage() {
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    siteContent.contact.whatsappMessage
  )}`;

  return (
    <div className="flex flex-col overflow-x-hidden relative">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (Warm Cream, Authentic Editorial Layout)      */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9EF] text-[#29332F] pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#EADFCF]">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column (7 of 12): Expressive Preschool Typography & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center">

              {/* H1 Headline in dark charcoal with coral highlight */}
              <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-bold text-[#29332F] leading-[1.12] tracking-tight mb-5 font-heading">
                Where <span className="text-[#FF786B]">curiosity blossoms</span> and every little step is celebrated
              </h1>

              {/* Supporting Parent-focused Description */}
              <p className="text-[17px] sm:text-[19px] text-[#4F5D56] leading-[1.65] max-w-[580px] mb-8 font-normal font-body">
                {siteContent.pages.home.intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
                <Button
                  href={whatsappHref}
                  isExternal
                  variant="coral"
                  className="flex items-center justify-center gap-2.5 w-full sm:w-auto text-[16px] !px-7 !py-4 font-bold shadow-[0_8px_25px_rgba(255,120,107,0.3)]"
                  ariaLabel="Book a school visit on WhatsApp"
                >
                  <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
                  <span>Book a school visit on WhatsApp</span>
                </Button>
                <Button
                  href="/programmes"
                  variant="secondary"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto text-[16px] !px-6 !py-4 font-bold"
                  ariaLabel="Explore our programmes"
                >
                  <span>Explore our programmes</span>
                  <ArrowRight className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
                </Button>
              </div>

              {/* Reassuring Parent Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EADFCF] max-w-[580px]">
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#4F5D56] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#287F78] shrink-0" />
                  <span>100% CCTV Safety</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#4F5D56] font-semibold">
                  <Baby className="w-4 h-4 text-[#FF786B] shrink-0" />
                  <span>1:8 Small Batch Ratio</span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 text-xs sm:text-[13px] text-[#4F5D56] font-semibold">
                  <MapPin className="w-4 h-4 text-[#FFA45B] shrink-0" />
                  <span>Gomti Nagar, Lucknow</span>
                </div>
              </div>
            </div>

            {/* Right Column (5 of 12): Modern High-Resolution Preschool Photo Frame */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] overflow-hidden rounded-[36px] border-4 border-white shadow-[0_20px_50px_rgba(41,51,47,0.12)] bg-white">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/images/home/hero.webp"
                    alt="Authentic Indian toddler smiling happily while learning with colorful sensory blocks in a preschool classroom in Lucknow"
                    fill
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    quality={90}
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />

                  {/* Clean Top Status Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-[#EADFCF] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF786B] animate-pulse" />
                    <span className="text-xs font-bold text-[#29332F] font-heading">
                      Sensory Play &amp; Phonics
                    </span>
                  </div>

                  {/* Clean Bottom Banner */}
                  <div className="absolute bottom-4 right-4 bg-[#287F78]/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-lg border border-white/20 flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFD84D]" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#FFD84D]">
                        Playgroup · Nursery · KG
                      </p>
                      <p className="text-xs font-semibold text-white">Ages 2 to 5 Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. WHY PARENTS CHOOSE SECTION (Little Leaders Screenshot 1)     */}
      {/* ============================================================== */}
      <PlayfulPillars />

      {/* ============================================================== */}
      {/* 3. PROGRAMMES SECTION ("OUR CLASSES" - Little Leaders Screenshot 2) */}
      {/* ============================================================== */}
      <section className="section-padding bg-[#FFA45B] relative overflow-hidden text-white border-b border-[#E8934C]">
        <div className="site-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <h2 className="text-[34px] sm:text-[46px] font-bold text-white leading-tight font-heading mb-4">
              We Meet Kids At Their Level Regardless Of Their Age
            </h2>
            <p className="text-[17px] sm:text-[19px] text-white/90 max-w-2xl mx-auto font-body">
              Each programme is thoughtfully tailored with distinct developmental milestones, morning timings, and nurturing teacher-student ratios.
            </p>
          </div>

          {/* White Arched Cards Grid (Directly matching Screenshot 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
            {siteContent.programmes.map((p) => {
              return (
                <div
                  key={p.id}
                  className="flex flex-col justify-between bg-white text-[#29332F] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div>
                    {/* Arched Photo Window */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#FFF9EF]">
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        quality={90}
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Age Pill Badge on Photo */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold shadow-md tracking-wider uppercase bg-[#FF786B] text-white">
                        {p.ageBracket}
                      </div>
                    </div>

                    {/* Card Content with Vertical Orange Accent Bar (as in Screenshot 2) */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-[22px] font-bold text-[#29332F] mb-1.5 font-heading">
                        {p.title}
                      </h3>

                      <p className="text-xs font-bold text-[#287F78] mb-3.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{p.timings}</span>
                      </p>

                      {/* Summary with Signature Vertical Accent Line */}
                      <div className="border-l-4 border-[#FFA45B] pl-3 py-0.5">
                        <p className="text-[14px] text-[#4F5D56] leading-relaxed">
                          {p.summary}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#F0E6D8] flex items-center justify-between">
                    <Link
                      href={`/programmes#${p.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF786B] group-hover:text-[#FFA45B] transition-colors focus:outline-none"
                    >
                      <span>Explore stage</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="w-8 h-8 rounded-full bg-[#FFF0EB] text-[#FF786B] flex items-center justify-center text-xs font-bold group-hover:bg-[#FF786B] group-hover:text-white transition-colors shadow-sm">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered "See All Programmes" CTA (from Screenshot 2) */}
          <div className="text-center">
            <Button
              href="/programmes"
              variant="secondary"
              className="!h-[50px] !px-8 text-[16px] shadow-lg bg-white !text-[#287F78] hover:!bg-[#FFF9EF]"
            >
              <span>See All Programmes</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#287F78]" />
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SAFETY & PARENT-TRUST SECTION (Clean Mint Green Canvas)     */}
      {/* ============================================================== */}
      <section className="section-padding bg-[#EAF7EE] relative overflow-hidden text-[#29332F] border-b border-[#D8ECE0]">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual on Left (6 cols): Real Classroom Environment Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 overflow-hidden rounded-[32px] border-4 border-white shadow-[0_12px_40px_rgba(40,127,120,0.12)] bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/home/safety-environment.webp"
                    alt="Authentic sunlit, clean child-safe preschool classroom with rounded furniture and soft safety turf in Lucknow"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Verified Trust Badge */}
                <div className="absolute bottom-4 right-4 bg-[#287F78] text-white px-4 py-2 rounded-2xl shadow-lg border-2 border-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FFD84D]" aria-hidden="true" />
                  <span className="text-xs font-bold font-heading">Verified Campus Safety</span>
                </div>
              </div>
            </div>

            {/* Content on Right (6 cols): 2x2 Feature Grid */}
            <div className="lg:col-span-6">
              <h2 className="text-[32px] sm:text-[42px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
                Continuous safety measures so parents have peace of mind
              </h2>
              <p className="text-[16px] text-[#4F5D56] leading-relaxed mb-7 font-body">
                We maintain stringent hygiene, verified supervision, and active monitoring across our premises in Gomti Nagar.
              </p>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {siteContent.safetyPoints.map((point, idx) => {
                  const icons = {
                    Camera: <Camera className="w-5 h-5 text-[#287F78]" aria-hidden="true" />,
                    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#287F78]" aria-hidden="true" />,
                    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#287F78]" aria-hidden="true" />,
                    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#287F78]" aria-hidden="true" />,
                  };
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-[#D8ECE0] shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#EAF7EE] border border-[#A9DFC2] flex items-center justify-center shrink-0 mb-3">
                        {icons[point.iconName]}
                      </div>
                      <h4 className="text-[15px] font-bold text-[#29332F] font-heading mb-1">
                        {point.title}
                      </h4>
                      <p className="text-[13px] text-[#4F5D56] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Button
                href="/contact"
                variant="teal"
                className="flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
                ariaLabel="Schedule an in-person safety tour"
              >
                <span>Tour our campus in Gomti Nagar</span>
                <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. DAY CARE EDITORIAL SECTION (Warm Cream & Soft Amber Canvas) */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9EF] text-[#29332F] py-16 sm:py-24 border-b border-[#EADFCF]">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Daycare Content (6 cols) */}
            <div className="lg:col-span-6">

              <h2 className="text-[34px] sm:text-[46px] font-bold text-[#29332F] leading-[1.1] mb-5 font-heading">
                A warm, loving home away from home
              </h2>

              {/* Duration highlight box with clock and routine */}
              <div className="border border-[#FFA45B]/40 bg-white rounded-2xl p-5 mb-6 text-sm sm:text-base space-y-1.5 shadow-sm">
                <p className="font-bold text-[#FFA45B] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFA45B]" />
                  <span>Choose Suitable Hours Schedule (8:30 AM – 5:30 PM)</span>
                </p>
                <p className="text-[#4F5D56] font-medium text-xs sm:text-sm">
                  Flexible Slots — Post-School (12:30 PM+) &amp; Full-Day Care for working parents
                </p>
              </div>

              <p className="text-[16px] sm:text-[17px] text-[#4F5D56] leading-relaxed mb-8 font-normal font-body">
                We understand that the early years in a child&apos;s life are critical for overall development. Our dedicated day care provides loving, caring, and happy experiences with monitored restful sleep in individual cots, warm nutrition, and quiet afternoon activities.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href="/daycare"
                  variant="coral"
                  className="flex items-center justify-center gap-2 text-[15px] shadow-md !px-6"
                  ariaLabel="Know more about Day Care"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                </Button>
                <Button
                  href={whatsappHref}
                  isExternal
                  variant="secondary"
                  className="flex items-center justify-center gap-2 text-[15px]"
                  ariaLabel="Inquire day care on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 text-[#287F78]" />
                  <span>Check Availability</span>
                </Button>
              </div>
            </div>

            {/* Right Column: Authentic Daycare Photograph (6 cols) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative z-10 w-full overflow-hidden rounded-[36px] border-4 border-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/daycare/hero.webp"
                    alt="Authentic caregiver and happy toddlers playing together in bright daycare at Little Steps Lucknow"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
      {/* 6. ABOUT / FOUNDING PHILOSOPHY SPLIT (Pure White Canvas)       */}
      {/* ============================================================== */}
      <section className="section-padding bg-[#FFFFFF] relative overflow-hidden border-b border-[#F0E6D8]">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text on Left (6 cols) */}
            <div className="lg:col-span-6">
              <h2 className="text-[32px] sm:text-[44px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
                Gentle first steps. Confident young minds.
              </h2>
              <p className="text-[17px] text-[#287F78] font-semibold mb-6">
                Founded in Lucknow with the belief that a child&apos;s earliest school experience should feel as secure and unhurried as home.
              </p>

              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#4F5D56] leading-relaxed mb-8">
                <p>
                  At Little Steps Play School, we understand that leaving home for the first time is a monumental transition for both children and parents. That is why our curriculum balances warm emotional reassurance with structured exploratory play.
                </p>
                <p>
                  Every classroom is arranged with child-height wooden furniture, natural Montessori sensory apparatus, and open reading corners. We do not use flashy digital screens or chaotic sensory overstimulation; instead, our educators guide children through rhythm, language, and social collaboration.
                </p>
                <p>
                  Admissions take place exclusively in person. We encourage parents to visit our classrooms, meet our teachers, and see how our daily routine works first-hand.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/about" variant="secondary" className="w-full sm:w-auto">
                  <span>Learn more about our school</span>
                </Button>
                <Button
                  href={whatsappHref}
                  isExternal
                  variant="coral"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
                  <span>Ask the Director on WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Visual on Right (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 overflow-hidden rounded-[32px] border-4 border-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/home/about-campus.webp"
                    alt="Authentic early learning activity hall at Little Steps Play School in Lucknow"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Call Admissions Badge */}
              <div className="mt-4 p-4 rounded-2xl bg-[#FFF9EF] border border-[#EADFCF] flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#287F78] text-white flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#4F5D56] font-bold uppercase tracking-wider">In-Person Campus Tours</p>
                    <p className="text-[15px] font-bold text-[#29332F]">Mon–Sat: 8:30 AM – 5:30 PM</p>
                  </div>
                </div>
                <a
                  href={`tel:${siteContent.contact.phoneTel}`}
                  className="text-xs font-bold text-[#FF786B] hover:underline"
                >
                  Call Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. VISITOR FAQ PREVIEW (Soft Neutral Canvas)                   */}
      {/* ============================================================== */}
      <section className="section-padding bg-[#FFFDF9] pt-16 pb-20 border-b border-[#EADFCF]">
        <div className="site-container max-w-[820px]">
          <SectionHeader
            heading="Common questions parents ask before visiting"
            intro="Everything you need to know about our admission visits, safety measures, and program timings."
            align="center"
          />

          <FAQAccordion items={siteContent.faqs.slice(0, 4)} />

          <div className="text-center mt-10">
            <p className="text-sm text-[#4F5D56] mb-3">
              Have specific questions regarding your child&apos;s age or admission schedule?
            </p>
            <Button
              href={whatsappHref}
              isExternal
              variant="outline"
              className="!h-[46px]"
            >
              <span>Chat with us on WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. WARM PRE-FOOTER CTA SECTION                                  */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF5EC] to-[#FFF9EF] py-16 sm:py-22 text-[#29332F] relative overflow-hidden border-b border-[#EADFCF]">
        <div className="site-container text-center max-w-[760px] mx-auto relative z-10">
          <h2 className="text-[34px] sm:text-[46px] font-bold text-[#29332F] leading-[1.12] mb-4 font-heading">
            Experience our classrooms and meet our educators
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#4F5D56] leading-relaxed mb-8 max-w-[620px] mx-auto font-body">
            Admissions at Little Steps happen in person so you can tour our safety facilities, inspect the CCTV setup, and see our morning routine in action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={whatsappHref}
              isExternal
              variant="coral"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(255,120,107,0.3)] !px-8 !py-4 font-bold"
              ariaLabel="Book a school visit on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
              <span>Book a school visit on WhatsApp</span>
            </Button>
            <Button
              href={`tel:${siteContent.contact.phoneTel}`}
              variant="secondary"
              className="w-full sm:w-auto flex items-center justify-center gap-2 !px-7 !py-4 font-bold border border-[#EADFCF]"
              ariaLabel="Call school admissions directly"
            >
              <Phone className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
              <span>Call Admissions Desk</span>
            </Button>
          </div>
          <p className="text-xs text-[#5A6B64] font-medium mt-7">
            Gomti Nagar, Lucknow · Monday to Friday 8:30 AM – 5:30 PM, Saturday 9:00 AM – 1:00 PM
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Quick Action Button (as seen in reference screenshot) */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 border-2 border-white"
        aria-label="Chat directly on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
}
