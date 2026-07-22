"use client";

import { BookOpen, MessageSquareText, Briefcase, BarChart3, ShieldCheck, Workflow } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { domains } from "../data";

const ICONS = [BookOpen, MessageSquareText, Briefcase, BarChart3, ShieldCheck, Workflow];

export default function Domains() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="py-[80px] relative"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
      }}
    >
      <div
        ref={ref}
        className="max-w-[1100px] mx-auto px-6 transition-all duration-500 ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(12px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <h2 className="text-[32px] font-bold leading-[1.3] text-[#00163A]">
          6대 핵심 평가 영역
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {domains.map((d, i) => {
            const Icon = ICONS[i];
            return (
              <div key={d.title} className="bg-white rounded-[20px] border border-[#E5E7EB] p-6">
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <p className="text-[18px] font-bold text-[#111827] mt-4">{d.title}</p>
                <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.7]">{d.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
