"use client";

import React from "react";
import Image from "next/image";
import {
  Baby,
  ShieldCheck,
  Clock,
  Sparkles,
  Heart,
  CheckCircle2,
  BookOpen,
  Palette,
  Users,
} from "lucide-react";
import {
  DoodleSun,
  DoodleBee,
  DoodleStar,
  PlusMark,
} from "@/components/PlayfulDecorations";

export function PlayfulPillars() {
  return (
    <section className="relative bg-[#F0F4FD] py-16 sm:py-24 border-b border-[#E2ECF7]">
      <div className="site-container relative z-10">
        {/* Section Heading: Dual-Color Headline directly inspired by Little Leaders reference screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-[34px] sm:text-[46px] font-bold leading-tight font-heading mb-3">
            <span className="text-[#FF786B]">Why Parents Choose </span>
            <span className="text-[#287F78]">Little Steps School?</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#5A6B64] font-body max-w-2xl mx-auto">
            A calm, nurturing early-learning sanctuary in Gomti Nagar, Lucknow where every little milestone is celebrated with patience and care.
          </p>
        </div>

        {/* 3-Column Editorial Layout (Directly matching Little Leaders Screenshot 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1 (Left, 4 cols): Child Care & Daily Nurturing */}
          <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-[32px] border border-[#E2ECF7] shadow-[0_8px_30px_rgba(40,127,120,0.06)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0EB] text-[#FF786B] text-xs font-bold uppercase tracking-wider mb-3">
              <Baby className="w-3.5 h-3.5" />
              <span>Attentive Child Care</span>
            </div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#29332F] mb-3 font-heading">
              Child Care &amp; Early Comfort
            </h3>
            <p className="text-[15px] text-[#5A6B64] leading-relaxed mb-4 font-body">
              In the post-covid era, we have rediscovered the importance of calm, emotionally secure daycares. The child care we provide at Little Steps in Gomti Nagar ensures children receive a comforting home-away-from-home touch.
            </p>
            <p className="text-[15px] text-[#5A6B64] leading-relaxed font-body mb-5">
              With well-structured safety infrastructure, clean dining routines, and attentive female caregivers, toddlers feel completely secure from their very first day.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-[#F0E6D8] text-xs text-[#287F78] font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#287F78] shrink-0" />
                <span>1:8 Dedicated Caregiver Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#287F78] shrink-0" />
                <span>Sanitized Nap Facilities &amp; Individual Cots</span>
              </div>
            </div>
          </div>

          {/* Column 2 (Center, 4 cols): Circular Photograph Window with Colourful Rim */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            {/* Outer Circular Ring with Refined Border Rim */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-[#FF786B] via-[#FFA45B] to-[#287F78] shadow-xl">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                <Image
                  src="/images/home/kidzee-holistic.webp"
                  alt="Happy preschool children and teacher sitting together in a bright learning circle"
                  fill
                  sizes="(max-width: 768px) 280px, 300px"
                  quality={90}
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            {/* Location Badge below photo */}
            <div className="mt-4 px-4 py-1.5 rounded-full bg-white shadow-md border border-[#E2ECF7] flex items-center gap-2 text-xs font-bold text-[#287F78]">
              <span className="w-2 h-2 rounded-full bg-[#FF786B]" />
              <span>Gomti Nagar, Lucknow Campus</span>
            </div>
          </div>

          {/* Column 3 (Right, 4 cols): Statement of Philosophy */}
          <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-[32px] border border-[#E2ECF7] shadow-[0_8px_30px_rgba(40,127,120,0.06)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7EE] text-[#287F78] text-xs font-bold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#29332F] mb-3 font-heading">
              Statement Of Philosophy
            </h3>
            <p className="text-[15px] text-[#5A6B64] leading-relaxed mb-4 font-body">
              As one of the leading preschools in Lucknow, we believe learners emerge with confident, holistic personalities when nurtured in a stimulating and secure environment.
            </p>
            <p className="text-[15px] text-[#5A6B64] leading-relaxed font-body mb-5">
              We focus on cognitive development, emotional intelligence, creative arts, and environmental curiosity through tactile Montessori play rather than digital screens.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-[#F0E6D8] text-xs text-[#FF786B] font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF786B] shrink-0" />
                <span>Play-Based Experiential Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF786B] shrink-0" />
                <span>Unhurried Morning Circle Rhythms</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Badges in a clean horizontal strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="p-4 rounded-2xl bg-white border border-[#E2ECF7] flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[#FF786B]/15 text-[#FF786B] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-[#29332F] font-heading">Holistic Learning</p>
              <p className="text-xs text-[#5A6B64]">Play &amp; life habits balanced</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E2ECF7] flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[#79C9F5]/25 text-[#287F78] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-[#29332F] font-heading">Expert Educators</p>
              <p className="text-xs text-[#5A6B64]">Warm, trained teachers</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E2ECF7] flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[#EAF7EE] text-[#287F78] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-[#29332F] font-heading">Safe &amp; Secure</p>
              <p className="text-xs text-[#5A6B64]">100% active CCTV monitoring</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E2ECF7] flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[#FFA45B]/20 text-[#D96B14] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-[#29332F] font-heading">Predictable Rhythm</p>
              <p className="text-xs text-[#5A6B64]">Building toddler confidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
