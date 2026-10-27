import React from "react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/Button";
import { MessageSquare, Phone, MapPin } from "lucide-react";

interface ContactButtonsProps {
  showMap?: boolean;
  className?: string;
  size?: "default" | "sm";
}

export function ContactButtons({
  showMap = true,
  className = "",
  size = "default",
}: ContactButtonsProps) {
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    siteContent.contact.whatsappMessage
  )}`;

  const btnHeight = size === "sm" ? "!min-h-[44px] !h-auto !py-2 !px-4 !text-[14px]" : "!min-h-[50px] !h-auto !py-2.5 !px-6";

  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 ${className}`}>
      {/* Primary: WhatsApp School Visit Booking */}
      <Button
        href={whatsappHref}
        isExternal
        variant="coral"
        className={`${btnHeight} flex items-center justify-center gap-2 w-full sm:w-auto shadow-md`}
        ariaLabel="Book a school visit on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
        <span>Book a school visit on WhatsApp</span>
      </Button>

      {/* Secondary: Phone Direct Call */}
      <Button
        href={`tel:${siteContent.contact.phoneTel}`}
        variant="secondary"
        className={`${btnHeight} flex items-center justify-center gap-2 w-full sm:w-auto`}
        ariaLabel="Call school admissions"
      >
        <Phone className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
        <span>Call Admissions</span>
      </Button>

      {/* Tertiary: Campus Map Navigation */}
      {showMap && (
        <Button
          href={siteContent.contact.mapQueryUrl}
          isExternal
          variant="outline"
          className={`${btnHeight} flex items-center justify-center gap-2 w-full sm:w-auto`}
          ariaLabel="Get directions to Gomti Nagar campus"
        >
          <MapPin className="w-4 h-4 text-[#287F78]" aria-hidden="true" />
          <span>Get directions</span>
        </Button>
      )}
    </div>
  );
}
