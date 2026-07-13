"use client";

import { Bot, LayoutGrid, Lock, Cpu, ClipboardCheck, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { solutions } from "../data";

const ICONS = [Bot, LayoutGrid, Lock, Cpu, ClipboardCheck, GraduationCap];

export default function KeySolutions() {
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
          KEY SOLUTIONS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          주요 솔루션
        </FillHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {solutions.map((solution, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={solution.title}
                className={`rounded-xl border p-6 transition-all duration-300 hover:shadow-lg ${
                  solution.highlight
                    ? "bg-[#EFF6FF] border-[#2563EB]/20"
                    : "bg-white border-[#E5E7EB] hover:border-[#2563EB]/30"
                }`}
              >
                <span className="inline-block text-[11px] font-semibold text-[#2563EB] bg-white border border-[#2563EB]/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  {solution.category}
                </span>

                <div className="w-11 h-11 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center mt-4">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>

                <p className="text-[17px] font-bold text-[#111827] mt-3">{solution.title}</p>
                <p className="text-[14px] text-[#6B7280] mt-1.5 leading-[1.7]">{solution.body}</p>

                <span className="inline-block text-[13px] font-semibold text-[#2563EB] mt-4">
                  {solution.linkLabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
