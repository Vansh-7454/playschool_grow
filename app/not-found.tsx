import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Compass, Home, Phone } from "lucide-react";
import { siteContent } from "@/content/site";

export default function NotFound() {
  return (
    <div className="section-padding bg-[#FFF9EF] min-h-[60vh] flex items-center justify-center">
      <div className="site-container max-w-[580px] text-center">
        <div className="w-16 h-16 rounded-3xl bg-[#FF786B]/15 border border-[#FF786B]/30 flex items-center justify-center text-[#FF786B] mx-auto mb-6 shadow-sm">
          <Compass className="w-8 h-8" aria-hidden="true" />
        </div>


        <h1 className="text-[34px] sm:text-[42px] font-bold text-[#29332F] leading-tight mb-4 font-heading">
          This path has wandered off the playground
        </h1>

        <p className="text-[16px] text-[#4F5D56] leading-relaxed mb-8">
          The page you are looking for might have been moved or does not exist. Please return to our homepage or explore our early learning programmes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button href="/" variant="coral" className="w-full sm:w-auto flex items-center gap-2">
            <Home className="w-4 h-4 text-white" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/programmes" variant="secondary" className="w-full sm:w-auto">
            <span>Explore Programmes</span>
          </Button>
        </div>

        <div className="mt-10 pt-6 border-t border-[#EADFCF] text-xs text-[#4F5D56]">
          Need immediate assistance? Call our admissions office directly at{" "}
          <a
            href={`tel:${siteContent.contact.phoneTel}`}
            className="text-[#287F78] font-bold hover:underline"
          >
            {siteContent.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
