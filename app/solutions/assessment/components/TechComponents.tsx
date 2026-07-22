"use client";

import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { techComponents } from "../data";

export default function TechComponents() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#F9FAFB] py-[80px] relative">
      <div
        ref={ref}
        className="max-w-[1100px] mx-auto px-6 transition-all duration-500 ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(12px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <h2 className="text-[32px] font-bold leading-[1.3] text-[#00163A]">
          8가지 핵심 기술 요소
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
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
