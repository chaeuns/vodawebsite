"use client";

import { BookOpen, BarChart3, Cloud } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { relatedSolutions } from "../data";

const ICONS = [BookOpen, BarChart3, Cloud];

export default function RelatedSolutions() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-[#F9FAFB] py-[80px] relative transition-all duration-[900ms] ease-out"
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
          RELATED SOLUTIONS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          관련 솔루션 바로가기
        </FillHeading>

        <div className="flex flex-col gap-4 mt-10">
          {relatedSolutions.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className="border border-[#E5E7EB] rounded-2xl bg-white px-6 py-10 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={24} className="text-[#2563EB]" />
                </div>
                <span className="inline-block text-[12px] font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full mt-4">
                  {item.badge}
                </span>
                <p className="text-[20px] font-bold text-[#111827] mt-3">{item.title}</p>
                <p className="text-[14px] text-[#6B7280] mt-2 leading-[1.7] max-w-[560px] mx-auto break-keep">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
