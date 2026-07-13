"use client";

import { Fragment } from "react";
import { ClipboardList, PenTool, Code2, Search, Rocket, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { processSteps } from "../data";

const ICONS = [ClipboardList, PenTool, Code2, Search, Rocket];

export default function DevelopmentProcess() {
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
          DEVELOPMENT PROCESS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          개발 프로세스
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          체계적이고 투명한 개발 프로세스로 고객의 요구사항을 정확히 반영한 맞춤형 솔루션을
          제공합니다.
        </p>

        {/* Desktop: steps connected with arrows */}
        <div className="hidden md:flex items-stretch gap-3 mt-10">
          {processSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Fragment key={step.step}>
                <div className="flex-1 border border-[#E5E7EB] rounded-xl bg-white p-5 text-center transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30">
                  <div className="w-11 h-11 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                    <Icon size={20} className="text-[#2563EB]" />
                  </div>
                  <p className="text-[11px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                  <p className="text-[15px] font-bold text-[#111827] mt-1">{step.title}</p>
                  <p className="text-[12px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="flex items-center justify-center text-[#93C5FD] shrink-0">
                    <ArrowRight size={16} />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-4 mt-10">
          {processSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={step.step}
                className="border border-[#E5E7EB] rounded-xl bg-white p-6 text-center"
              >
                <div className="w-11 h-11 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <p className="text-[11px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                <p className="text-[15px] font-bold text-[#111827] mt-1">{step.title}</p>
                <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
