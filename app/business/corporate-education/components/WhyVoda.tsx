"use client";

import { ClipboardList, GraduationCap, BarChart3, Layers } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { strengths } from "../data";

const ICONS = [ClipboardList, GraduationCap, BarChart3, Layers];

export default function WhyVoda() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          WHY VODA
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          왜 VODA 기업교육인가
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          기업 교육에 필요한 네 가지 핵심 경쟁력을 갖췄습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {strengths.map((strength, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={strength.title}
                className="flex gap-4 border border-[#E5E7EB] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-[17px] font-bold text-[#111827]">{strength.title}</p>
                  <p className="text-[14px] text-[#6B7280] mt-1.5 leading-[1.7]">
                    {strength.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
