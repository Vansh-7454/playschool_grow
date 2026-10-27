"use client";

import React, { useState } from "react";
import { FAQItem } from "@/content/site";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
  grouped?: boolean;
}

export function FAQAccordion({ items, grouped = false }: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({ 0: true });

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!grouped) {
    return (
      <div className="space-y-3.5">
        {items.map((item, idx) => {
          const isOpen = !!openIndices[idx];
          return (
            <div
              key={idx}
              className={`border rounded-2xl bg-[#FFFFFF] transition-all overflow-hidden ${
                isOpen
                  ? "border-[#287F78]/50 shadow-[0_4px_16px_rgba(40,127,120,0.08)]"
                  : "border-[#EADFCF] shadow-sm hover:border-[#287F78]/30"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-[17px] text-[#29332F] hover:bg-[#FFF9EF]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] font-heading"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="pr-4">{item.question}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-[#287F78] text-white" : "bg-[#F0F4FD] text-[#287F78]"
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className="px-5 pb-5 pt-1 text-[15px] sm:text-[16px] text-[#5A6B64] leading-relaxed border-t border-[#EADFCF]/60"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Group by category
  const categories = Array.from(new Set(items.map((i) => i.category)));

  return (
    <div className="space-y-10">
      {categories.map((cat, catIdx) => {
        const catItems = items.filter((i) => i.category === cat);
        return (
          <div key={catIdx} className="space-y-4">
            <h3 className="text-[20px] font-bold text-[#29332F] font-heading flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF786B]" />
              <span>{cat}</span>
            </h3>
            <div className="space-y-3">
              {catItems.map((item, itemIdx) => {
                const uniqueKey = catIdx * 100 + itemIdx;
                const isOpen = !!openIndices[uniqueKey];
                return (
                  <div
                    key={uniqueKey}
                    className={`border rounded-2xl bg-[#FFFFFF] transition-all overflow-hidden ${
                      isOpen
                        ? "border-[#287F78]/50 shadow-[0_4px_16px_rgba(40,127,120,0.08)]"
                        : "border-[#EADFCF] shadow-sm hover:border-[#287F78]/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleIndex(uniqueKey)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-[17px] text-[#29332F] hover:bg-[#FFF9EF]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF786B] font-heading"
                      aria-expanded={isOpen}
                      aria-controls={`faq-group-answer-${uniqueKey}`}
                      id={`faq-group-question-${uniqueKey}`}
                    >
                      <span className="pr-4">{item.question}</span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-[#287F78] text-white" : "bg-[#F0F4FD] text-[#287F78]"
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-group-answer-${uniqueKey}`}
                        role="region"
                        aria-labelledby={`faq-group-question-${uniqueKey}`}
                        className="px-5 pb-5 pt-1 text-[15px] sm:text-[16px] text-[#5A6B64] leading-relaxed border-t border-[#EADFCF]/60"
                      >
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
