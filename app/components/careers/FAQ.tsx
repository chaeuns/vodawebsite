"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "./data";
import Container from "@/app/components/Container";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-[80px] relative z-30 mt-16"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
      }}
    >
      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            자주 묻는 질문
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto mt-10 border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={i < faqs.length - 1 ? "border-b border-[#E5E7EB]" : ""}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="cursor-pointer w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F9FAFB] transition-colors"
              >
                <span className="text-[15px] font-semibold text-[#111827]">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <ChevronUp size={16} className="text-[#9CA3AF] flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown size={16} className="text-[#9CA3AF] flex-shrink-0 ml-4" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-[14px] text-[#6B7280] leading-[1.7] whitespace-pre-line">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
