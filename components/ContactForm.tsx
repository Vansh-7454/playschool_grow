"use client";

import React, { useState } from "react";
import { Button } from "@/components/Button";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface FormState {
  parentName: string;
  childAge: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  parentName?: string;
  childAge?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    parentName: "",
    childAge: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedValid, setSubmittedValid] = useState(false);

  // Normalize Indian 10-digit mobile number
  const normalizeIndianPhone = (raw: string): { isValid: boolean; normalized: string; error?: string } => {
    // Strip spaces, dashes, parentheses
    let cleaned = raw.replace(/[\s\-\(\)\.]/g, "");

    // Strip leading +91 or 91 if it's 12 digits, or leading 0 if 11 digits
    if (cleaned.startsWith("+91")) {
      cleaned = cleaned.substring(3);
    } else if (cleaned.startsWith("91") && cleaned.length === 12) {
      cleaned = cleaned.substring(2);
    } else if (cleaned.startsWith("0") && cleaned.length === 11) {
      cleaned = cleaned.substring(1);
    }

    // Must be exactly 10 numeric digits
    if (!/^\d+$/.test(cleaned)) {
      return { isValid: false, normalized: cleaned, error: "Phone number must contain numbers only." };
    }

    if (cleaned.length !== 10) {
      return {
        isValid: false,
        normalized: cleaned,
        error: `Must be exactly 10 digits (currently ${cleaned.length} digits).`,
      };
    }

    // India valid mobile prefixes: 6, 7, 8, 9
    const firstDigit = cleaned[0];
    if (!["6", "7", "8", "9"].includes(firstDigit)) {
      return {
        isValid: false,
        normalized: cleaned,
        error: "Indian mobile numbers must start with 6, 7, 8, or 9.",
      };
    }

    // Junk filter: 0000000000, 1111111111, 1234567890, 9876543210
    const junkPatterns = [
      "0000000000",
      "1111111111",
      "2222222222",
      "3333333333",
      "4444444444",
      "5555555555",
      "6666666666",
      "7777777777",
      "8888888888",
      "9999999999",
      "1234567890",
      "0123456789",
    ];

    if (junkPatterns.includes(cleaned)) {
      return {
        isValid: false,
        normalized: cleaned,
        error: "Please enter a genuine 10-digit mobile number.",
      };
    }

    return { isValid: true, normalized: cleaned };
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Parent Name: trimmed, 2 to 60 chars
    const trimmedName = formData.parentName.trim();
    if (!trimmedName) {
      newErrors.parentName = "Please enter parent or guardian name.";
    } else if (trimmedName.length < 2) {
      newErrors.parentName = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 60) {
      newErrors.parentName = "Name cannot exceed 60 characters.";
    }

    // Child's Age
    if (!formData.childAge) {
      newErrors.childAge = "Please select child's age bracket.";
    }

    // Phone: mandatory 10 digits
    const phoneCheck = normalizeIndianPhone(formData.phone);
    if (!phoneCheck.isValid) {
      newErrors.phone = phoneCheck.error || "Please enter a valid 10-digit phone number.";
    }

    // Email: optional or format check
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // Message: up to 1000 characters
    if (formData.message && formData.message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedValid(true);
    } else {
      setSubmittedValid(false);
    }
  };

  return (
    <div className="bg-white border border-[#EADFCF] rounded-3xl p-6 sm:p-8 shadow-soft-card">
      <div className="mb-6">
        <h3 className="text-[20px] sm:text-[24px] font-bold text-[#29332F] font-heading">
          Enquire About Campus Admissions
        </h3>
        <p className="text-[14px] text-[#4F5D56] mt-1">
          Parents are welcome to request a guided morning tour of our classrooms.
        </p>
      </div>

      {submittedValid ? (
        <div className="rounded-2xl bg-[#EAF7EE] border border-[#A9DFC2] p-5 sm:p-6 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#287F78] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h4 className="text-[17px] font-bold text-[#29332F] font-heading">
                Enquiry Details Validated
              </h4>
              <p className="text-[14px] text-[#29332F] mt-1">
                Thank you, <strong>{formData.parentName.trim()}</strong>. Your details have been checked for formatting.
              </p>
              <p className="text-[13px] text-[#4F5D56] mt-2.5 bg-white p-3.5 rounded-xl border border-[#A9DFC2]">
                <strong>Notice:</strong> This is a static demonstration environment. No data has been saved to an external database. For immediate campus appointments, please contact our admissions office directly via WhatsApp.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Button
              href={`https://wa.me/919876500000?text=${encodeURIComponent(
                `Hello Little Steps Play School, I am ${formData.parentName.trim()} inquiring about admission for my child (Age: ${formData.childAge || "2-5"}).`
              )}`}
              isExternal
              variant="coral"
              className="w-full !h-[48px]"
            >
              Continue on WhatsApp to Confirm
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Parent Name */}
          <div>
            <label
              htmlFor="parentName"
              className="block text-[13px] font-bold text-[#29332F] mb-1 font-heading"
            >
              Parent / Guardian Name <span className="text-[#D82852]">*</span>
            </label>
            <input
              id="parentName"
              type="text"
              value={formData.parentName}
              onChange={(e) =>
                setFormData({ ...formData, parentName: e.target.value })
              }
              maxLength={60}
              placeholder="e.g. Priya Sharma"
              className={`w-full h-[48px] px-4 rounded-xl border text-[15px] bg-[#FFFFFF] text-[#29332F] placeholder:text-[#5A6B64]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] transition-colors ${
                errors.parentName ? "border-[#D82852]" : "border-[#EADFCF]"
              }`}
              aria-invalid={!!errors.parentName}
              aria-describedby={errors.parentName ? "parentName-error" : undefined}
            />
            {errors.parentName && (
              <p
                id="parentName-error"
                className="text-[12px] text-[#D82852] mt-1 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{errors.parentName}</span>
              </p>
            )}
          </div>

          {/* Child's Age Bracket */}
          <div>
            <label
              htmlFor="childAge"
              className="block text-[13px] font-bold text-[#29332F] mb-1 font-heading"
            >
              Child&apos;s Age / Stage <span className="text-[#D82852]">*</span>
            </label>
            <select
              id="childAge"
              value={formData.childAge}
              onChange={(e) =>
                setFormData({ ...formData, childAge: e.target.value })
              }
              className={`w-full h-[48px] px-4 rounded-xl border text-[15px] bg-[#FFFFFF] text-[#29332F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] transition-colors ${
                errors.childAge ? "border-[#D82852]" : "border-[#EADFCF]"
              }`}
              aria-invalid={!!errors.childAge}
              aria-describedby={errors.childAge ? "childAge-error" : undefined}
            >
              <option value="">Select age group</option>
              <option value="Playgroup (2.0 – 3.0 Years)">Playgroup (2.0 – 3.0 Years)</option>
              <option value="Nursery (3.0 – 4.0 Years)">Nursery (3.0 – 4.0 Years)</option>
              <option value="Kindergarten (4.0 – 5.0+ Years)">Kindergarten (4.0 – 5.0+ Years)</option>
              <option value="Extended Day Care (2 – 5 Years)">Extended Day Care (2 – 5 Years)</option>
            </select>
            {errors.childAge && (
              <p
                id="childAge-error"
                className="text-[12px] text-[#D82852] mt-1 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{errors.childAge}</span>
              </p>
            )}
          </div>

          {/* Mobile Phone (Mandatory 10 Digits) */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[13px] font-bold text-[#29332F] mb-1 font-heading"
            >
              Mobile Phone (10 Digits) <span className="text-[#D82852]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[14px] text-[#287F78] font-bold select-none">
                +91
              </span>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="9876543210"
                className={`w-full h-[48px] pl-12 pr-3.5 rounded-xl border text-[15px] bg-[#FFFFFF] text-[#29332F] placeholder:text-[#5A6B64]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] transition-colors ${
                  errors.phone ? "border-[#D82852]" : "border-[#EADFCF]"
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            </div>
            {errors.phone ? (
              <p
                id="phone-error"
                className="text-[12px] text-[#D82852] mt-1 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{errors.phone}</span>
              </p>
            ) : (
              <p className="text-[11px] text-[#5A6B64] mt-1">
                Enter your 10-digit number without country code or spaces.
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-bold text-[#29332F] mb-1 font-heading"
            >
              Email Address <span className="text-xs text-[#5A6B64] font-normal">(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="parent@example.com"
              className={`w-full h-[48px] px-4 rounded-xl border text-[15px] bg-[#FFFFFF] text-[#29332F] placeholder:text-[#5A6B64]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] transition-colors ${
                errors.email ? "border-[#D82852]" : "border-[#EADFCF]"
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-[12px] text-[#D82852] mt-1 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Preferred Day / Notes */}
          <div>
            <label
              htmlFor="message"
              className="block text-[13px] font-bold text-[#29332F] mb-1 font-heading"
            >
              Questions or Preferred Visit Day{" "}
              <span className="text-xs text-[#5A6B64] font-normal">(Optional, max 1000 chars)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              maxLength={1000}
              placeholder="e.g. We would like to visit Tuesday morning around 10:30 AM."
              className={`w-full p-3.5 rounded-xl border text-[15px] bg-[#FFFFFF] text-[#29332F] placeholder:text-[#5A6B64]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] transition-colors resize-none ${
                errors.message ? "border-[#D82852]" : "border-[#EADFCF]"
              }`}
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <Button type="submit" variant="coral" className="w-full shadow-md">
              Review and Validate Enquiry
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
