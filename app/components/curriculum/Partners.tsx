"use client";

import { partners } from "./data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";

export default function Partners() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] min-h-[860px] flex flex-col justify-center relative z-40 -mt-10 shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          PARTNERS
        </p>
        <FillHeading loop className="text-[32px] font-bold mt-2 leading-[1.3]">
          함께 만드는 교육
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          VODA는 주요 기업과 협력하여 현장 중심의 교육 과정을 운영합니다.
        </p>

        <div className="flex flex-col gap-4 mt-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="border border-[#E5E7EB] rounded-xl p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-[#F3F4F6] flex items-center justify-center">
                <span className="text-[11px] text-[#9CA3AF]">기업로고</span>
              </div>
              <div>
                <p className="text-[16px] font-bold text-[#111827]">{partner.name}</p>
                <p className="text-[14px] text-[#6B7280] mt-1">{partner.description}</p>
                <a href="#" className="inline-block text-[13px] font-semibold text-[#2563EB] mt-2 hover:underline">
                  과정 자세히 보기 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
