"use client";

import { BookOpen, MessageSquareText, Briefcase, BarChart3, ShieldCheck, Workflow } from "lucide-react";
import Container from "@/app/components/Container";
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
        className="transition-all duration-500 ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(12px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Container>
          <div className="mb-10 pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              6대 핵심 평가 영역
            </h2>
          </div>

          <div className="pl-20 pr-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
        </Container>
      </div>
    </section>
  );
}
