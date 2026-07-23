"use client";

import { Monitor, Server, Sparkles, Cloud, Database } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { techStack } from "../data";

const ICONS = [Monitor, Server, Sparkles, Cloud, Database];

const CATEGORY_STYLES: Record<string, { accent: string; accentRgb: string; glowRgb: string }> = {
  "FRONT END": { accent: "#5B8DEF", accentRgb: "91,141,239", glowRgb: "37,99,235" },
  "BACK END": { accent: "#A78BFA", accentRgb: "167,139,250", glowRgb: "124,58,237" },
  "AI / ML": { accent: "#4ADE80", accentRgb: "74,222,128", glowRgb: "22,163,74" },
  CLOUD: { accent: "#FB923C", accentRgb: "251,146,60", glowRgb: "234,88,12" },
  DATABASE: { accent: "#F87171", accentRgb: "248,113,113", glowRgb: "220,38,38" },
};

export default function TechStack() {
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
        <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
        <h2
          className="font-extrabold font-suit text-[#0e1b52]"
          style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
        >
          기술 스택
        </h2>
        <p className="text-[15px] text-[#5a6895] mt-3">
          다양한 산업 도메인에서 검증된 기술 스택으로 안정적인 서비스를 구축합니다.
        </p>

        <div className="flex max-[900px]:flex-col h-[320px] max-[900px]:h-auto gap-2 rounded-[24px] overflow-hidden mt-10">
          {techStack.map((group, i) => {
            const Icon = ICONS[i];
            const style = CATEGORY_STYLES[group.category] ?? CATEGORY_STYLES["FRONT END"];

            return (
              <div
                key={group.category}
                className="group relative flex-1 max-[900px]:flex-none min-w-[80px] max-[900px]:min-w-0 max-[900px]:h-[60px] max-[900px]:hover:h-auto max-[900px]:hover:min-h-[130px] rounded-[18px] overflow-hidden border border-[#edf1f7] bg-[#F7F9FC] hover:z-10"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.5s ease ${i * 90}ms, transform 0.5s ease ${i * 90}ms, box-shadow 0.3s ease`,
                }}
              >
                {/* accent glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 25%, rgba(${style.glowRgb},0.14) 0%, rgba(${style.glowRgb},0) 70%)`,
                  }}
                />

                {/* collapsed layer */}
                <div className="absolute inset-0 flex flex-col max-[900px]:flex-row items-center justify-center max-[900px]:justify-start gap-2 max-[900px]:px-4 opacity-100 transition-opacity ease-out duration-150 group-hover:opacity-0 group-hover:duration-150">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `rgba(${style.accentRgb},0.16)` }}
                  >
                    <Icon size={16} style={{ color: style.accent }} />
                  </div>
                  <p className="text-[19px] font-bold tracking-[0.03em] text-[#0D1B40] whitespace-nowrap">
                    {group.label}
                  </p>
                </div>

                {/* expanded layer */}
                <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-[18px] pt-[64px] pb-[18px] opacity-0 transition-opacity ease-out duration-150 group-hover:opacity-100 group-hover:duration-150">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-2.5"
                    style={{ background: `rgba(${style.accentRgb},0.16)` }}
                  >
                    <Icon size={17} style={{ color: style.accent }} />
                  </div>
                  <p
                    className="text-[10px] font-bold tracking-[0.08em]"
                    style={{ color: style.accent }}
                  >
                    {group.category}
                  </p>
                  <p className="text-[16px] font-extrabold text-[#0D1B40] leading-[1.25] mt-1">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap justify-center gap-[5px] mt-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-semibold text-[#3a4256] bg-white px-[9px] py-[3px] rounded-full border"
                        style={{ borderColor: `rgba(${style.accentRgb},0.35)` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
