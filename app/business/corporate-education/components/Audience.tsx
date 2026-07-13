"use client";

import { Briefcase, User, Code2 } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { audiences } from "../data";

const ICONS = [Briefcase, User, Code2];

export default function Audience() {
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
          AUDIENCE
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          교육 대상
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          직급과 직무에 맞는 과정으로 구분해 운영합니다.
        </p>

        <div className="flex flex-col gap-5 mt-10">
          {audiences.map((audience, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={audience.title}
                className="border border-[#E5E7EB] rounded-2xl px-6 py-10 text-center transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={24} className="text-[#2563EB]" />
                </div>
                <span className="inline-block text-[12px] font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full mt-4">
                  {audience.badge}
                </span>
                <p className="text-[20px] font-bold text-[#111827] mt-3">{audience.title}</p>
                <p className="text-[14px] text-[#6B7280] mt-2 leading-[1.7] max-w-[560px] mx-auto break-keep">
                  {audience.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
