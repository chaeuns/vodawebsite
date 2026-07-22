"use client";

import { BookOpen, MessageSquareText, UserCheck, CheckSquare, Video, Check } from "lucide-react";
import Container from "@/app/components/Container";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { features } from "../data";

const ICONS = [BookOpen, MessageSquareText, UserCheck, CheckSquare, Video];

export default function Features() {
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
              핵심 기능
            </h2>
          </div>
        </Container>

        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={f.titleEn}
                className={`bg-white rounded-[20px] border border-[#E5E7EB] p-6 ${
                  i === features.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <p className="text-[12px] font-semibold text-[#2563EB] uppercase tracking-wide mt-4">
                  {f.titleEn}
                </p>
                <p className="text-[18px] font-bold text-[#111827] mt-1">{f.titleKo}</p>
                <ul className="mt-3 space-y-1.5">
                  {f.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[13px] text-[#4B5563] leading-[1.6]"
                    >
                      <Check size={14} className="text-[#2563EB] mt-[3px] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
