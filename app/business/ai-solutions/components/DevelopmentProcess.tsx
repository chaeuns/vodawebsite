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
      className="py-[80px] relative transition-all duration-[900ms] ease-out"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <style>{`
        @media (hover: hover) {
          .ai-dp-row .ai-dp-card {
            transition: transform 0.35s cubic-bezier(.22,1,.36,1),
              opacity 0.35s cubic-bezier(.22,1,.36,1),
              box-shadow 0.35s cubic-bezier(.22,1,.36,1);
          }
          .ai-dp-row .ai-dp-arrow {
            transition: opacity 0.35s cubic-bezier(.22,1,.36,1);
          }
          .ai-dp-row:has(.ai-dp-card:hover) .ai-dp-card:not(:hover) {
            transform: translateY(28px);
            opacity: 0.55;
          }
          .ai-dp-row:has(.ai-dp-card:hover) .ai-dp-card:hover {
            transform: scale(1.08) translateY(-6px);
            z-index: 10;
            box-shadow: 0 20px 40px -12px rgba(37,99,235,0.35), 0 8px 20px -8px rgba(17,24,39,0.15);
          }
          .ai-dp-row:has(.ai-dp-card:hover) .ai-dp-arrow {
            opacity: 0.35;
          }
        }
      `}</style>

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
        <div className="ai-dp-row hidden md:flex items-stretch gap-3 mt-10">
          {processSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Fragment key={step.step}>
                <div className="ai-dp-card relative flex-1 flex flex-col min-h-[210px] border border-[#E5E7EB] rounded-xl bg-white p-5 text-center">
                  <div className="w-11 h-11 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                    <Icon size={20} className="text-[#2563EB]" />
                  </div>
                  <p className="text-[11px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                  <p className="text-[15px] font-bold text-[#111827] mt-1">{step.title}</p>
                  <p className="text-[12px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="ai-dp-arrow flex items-center justify-center text-[#93C5FD] shrink-0">
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
