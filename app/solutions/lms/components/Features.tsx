"use client";

import { BookOpen, MessageSquareText, UserCheck, CheckSquare, Video, Check } from "lucide-react";
import Container from "@/app/components/Container";
import GlassCard from "@/app/components/shared/GlassCards";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { features } from "../data";

const ICONS = [BookOpen, MessageSquareText, UserCheck, CheckSquare, Video];

export default function Features() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="py-[80px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F3F6FF 0%, #E7EEFF 45%, #D6E3FF 100%)",
      }}
    >
      {/* 배경 데코 블롭 (메인페이지 솔루션 섹션과 동일) */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none"
        style={{
          width: "55%",
          background: "radial-gradient(ellipse 100% 80% at 0% 50%, rgba(53,102,232,0.20) 0%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 pointer-events-none"
        style={{
          width: "55%",
          background: "radial-gradient(ellipse 100% 80% at 100% 50%, rgba(53,102,232,0.18) 0%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      <div
        ref={ref}
        className="relative transition-all duration-500 ease-out"
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
              핵심 기능
            </h2>
          </div>

            <div className="pl-20 pr-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">            {features.map((f, i) => {
              const Icon = ICONS[i];
              return (
                <GlassCard
                  key={f.titleEn}
                  className="p-6"                >
                  <div className="w-11 h-11 rounded-xl bg-[#3566e8]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#3566e8]" />
                  </div>
                  <p className="text-[12px] font-semibold text-[#5a6895] uppercase tracking-wide mt-4">
                    {f.titleEn}
                  </p>
                  <p className="text-[18px] font-bold text-[#0e1b52] mt-1">{f.titleKo}</p>
                  <ul className="mt-3 space-y-1.5">
                    {f.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-[13px] text-[#0e1b52]/70 leading-[1.6]">
                        <Check size={14} className="text-[#3566e8] mt-[3px] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}