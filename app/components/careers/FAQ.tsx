"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "./data";
import FillHeading from "@/app/components/shared/FillHeading";

function useRepeatingReveal(threshold: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useRepeatingReveal(0.1);

  return (
    <section
      ref={ref}
      className="py-[80px] relative z-30 -mt-10"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #E8EDF8 15%, #D6E0F5 50%, #E8EDF8 85%, #ffffff 100%)",
      }}
    >
      <div
        className="max-w-[1100px] mx-auto px-6 transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          FAQ
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          자주 묻는 질문
        </FillHeading>

        <div className="mt-10 border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={i < faqs.length - 1 ? "border-b border-[#E5E7EB]" : ""}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F9FAFB] transition-colors"
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
      </div>
    </section>
  );
}
