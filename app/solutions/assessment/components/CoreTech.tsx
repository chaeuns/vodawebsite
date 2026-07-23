"use client";

import { Brain, Layers3 } from "lucide-react";
import Container from "@/app/components/Container";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { coreTech } from "../data";

const ICONS = [Brain, Layers3];

export default function CoreTech() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative z-10 bg-white py-[80px]">
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
              AI가 만드는 새로운 평가 기준
            </h2>
          </div>

          <div className="pl-20 pr-20 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreTech.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={item.number}
                  className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-extrabold text-[#93C5FD]">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                      <Icon size={18} className="text-[#2563EB]" />
                    </div>
                  </div>
                  <p className="text-[16px] sm:text-[17px] font-bold text-[#111827] mt-4">
                    {item.title}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-[#6B7280] mt-2 leading-[1.7]">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
