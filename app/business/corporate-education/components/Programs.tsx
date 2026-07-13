"use client";

import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { programs } from "../data";

export default function Programs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="programs"
      ref={ref}
      className="bg-[#F9FAFB] py-[80px] relative scroll-mt-16 transition-all duration-[900ms] ease-out"
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
          PROGRAMS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          교육 프로그램 소개
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          기업 상황과 목적에 맞는 4가지 핵심 프로그램을 운영합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {programs.map((program) => (
            <div
              key={program.number}
              className="bg-white border border-[#E5E7EB] rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30"
            >
              <span className="inline-block text-[12px] font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full">
                {program.number}
              </span>
              <p className="text-[18px] font-bold text-[#111827] mt-4">{program.title}</p>
              <p className="text-[14px] text-[#6B7280] mt-2 leading-[1.7]">{program.body}</p>
              <a
                href="#inquiry"
                className="inline-block text-[13px] font-semibold text-[#2563EB] mt-4 hover:underline"
              >
                자세히 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
