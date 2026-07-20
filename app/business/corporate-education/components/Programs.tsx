"use client";

import { Sparkles, Cloud, BarChart3, ShieldCheck, ChevronRight } from "lucide-react";
import { useRepeatingReveal } from "../useRepeatingReveal";
import Container from "@/app/components/Container";
import { programs } from "../data";

const ICONS = [Sparkles, Cloud, BarChart3, ShieldCheck];

export default function Programs() {
  const { ref, isVisible } = useRepeatingReveal();

  return (
    <section
      id="programs"
      ref={ref}
      className="py-16 md:py-[100px] relative scroll-mt-16"
      style={{
        background: "linear-gradient(160deg, #E8EDF8 0%, #D6E0F5 45%, #EAF0FB 100%)",
      }}
    >
      <div
        className="transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
      <Container>
        <div className="pl-20 pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            교육 프로그램 소개
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            기업 상황과 목적에 맞는 4가지 핵심 프로그램을 운영합니다.
          </p>
        </div>
      </Container>

      <Container>
        <div className="pl-20 pr-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {programs.map((program, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={program.number}
                className="group relative min-h-[420px] pt-10 px-[26px] pb-9 flex flex-col rounded-[20px] bg-white border border-[#E5E7EB] transition-all duration-300 hover:bg-[#2563EB] hover:border-[#2563EB] hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
              >
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center bg-[rgba(37,99,235,0.1)] transition-colors duration-300 group-hover:bg-white/20">
                  <Icon size={26} className="text-[#2563EB] transition-colors duration-300 group-hover:text-white" />
                </div>

                <span className="inline-block w-fit mt-5 text-[11px] font-semibold text-[#2563EB] bg-[rgba(37,99,235,0.1)] px-[10px] py-1 rounded-full transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                  {program.number}
                </span>

                <h3 className="text-[18px] font-bold text-[#0D1B40] mt-3 whitespace-pre-line transition-colors duration-300 group-hover:text-white">{program.title}</h3>
                <p className="text-[13.5px] leading-[1.7] text-[#5B6478] mt-2 whitespace-pre-line transition-colors duration-300 group-hover:text-white/90">{program.body}</p>

                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#2563EB] mt-auto pt-4 transition-colors duration-300 group-hover:text-white"
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
      </Container>
      </div>
    </section>
  );
}
