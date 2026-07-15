"use client";

import { Sparkles, Cloud, BarChart3, ShieldCheck, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { programs } from "../data";

const ICONS = [Sparkles, Cloud, BarChart3, ShieldCheck];

export default function Programs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="programs"
      ref={ref}
      className="py-16 md:py-[100px] relative scroll-mt-16 transition-all duration-[900ms] ease-out"
      style={{
        background: "linear-gradient(160deg, #E8EDF8 0%, #D6E0F5 45%, #EAF0FB 100%)",
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          className="text-center text-[13px] font-semibold text-[#2563EB] uppercase"
          style={{ letterSpacing: "0.08em" }}
        >
          PROGRAMS
        </p>
        <h2 className="text-center text-[34px] font-bold text-[#0D1B40] mt-2 leading-[1.3]">
          교육 프로그램 소개
        </h2>
        <p className="text-center text-[16px] text-[#5B6478] mt-3 mb-14">
          기업 상황과 목적에 맞는 4가지 핵심 프로그램을 운영합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((program, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={program.number}
                className="group relative min-h-[420px] pt-10 px-[26px] pb-9 flex flex-col rounded-[20px] bg-[rgba(255,255,255,0.55)] backdrop-blur-[18px] border border-[rgba(255,255,255,0.6)] shadow-[0_1px_2px_rgba(13,27,64,0.04),0_8px_24px_rgba(13,27,64,0.06)] transition-[transform,background-color,border-color,box-shadow] duration-[580ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:bg-[rgba(255,255,255,0.75)] hover:border-[rgba(37,99,235,0.25)] hover:shadow-[0_20px_40px_rgba(13,27,64,0.14),0_4px_12px_rgba(37,99,235,0.10)]"
              >
                <span
                  className="absolute top-0 left-0 w-full h-[3px] origin-left scale-x-[0.18] bg-[linear-gradient(90deg,#2563EB,#5B8DEF)] transition-transform duration-[580ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center bg-[rgba(37,99,235,0.1)] transition-[background-color,transform] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[rgba(37,99,235,0.16)] group-hover:scale-[1.06]">
                  <Icon size={26} className="text-[#2563EB]" />
                </div>

                <span className="inline-block w-fit mt-5 text-[11px] font-semibold text-[#2563EB] bg-[rgba(37,99,235,0.1)] px-[10px] py-1 rounded-full">
                  {program.number}
                </span>

                <h3 className="text-[18px] font-bold text-[#0D1B40] mt-3">{program.title}</h3>
                <p className="text-[13.5px] leading-[1.7] text-[#5B6478] mt-2">{program.body}</p>

                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#2563EB] mt-auto pt-4"
                >
                  문의하기
                  <ChevronRight
                    size={14}
                    className="transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
