"use client";

import Container from "@/app/components/Container";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { techComponents } from "../data";

export default function TechComponents() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#F9FAFB] py-[80px] relative">
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
              솔루션 기술 구성 요소
            </h2>
          </div>
        </Container>

        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techComponents.map((t) => (
            <div key={t.code} className="bg-white rounded-[16px] border border-[#E5E7EB] p-5">
              <span className="inline-block rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-bold text-[#2563EB]">
                {t.code}
              </span>
              <p className="text-[15px] font-bold text-[#111827] mt-3 leading-[1.4]">{t.title}</p>
              <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.7]">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
