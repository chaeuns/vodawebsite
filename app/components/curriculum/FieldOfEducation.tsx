"use client";

import { fields } from "./data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";

export default function FieldOfEducation() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-[80px] relative z-30 -mt-10 shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-[900ms] ease-out"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          FIELD OF EDUCATION
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          핵심 기술 분야
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          디지털 전환 시대에 필요한 핵심 기술을 교육합니다.
        </p>

        <div
          className="rounded-[32px] p-6 sm:p-8 md:p-12 mt-10 border border-white/60 shadow-[0_8px_32px_rgba(31,41,55,0.08)]"
          style={{
            background: "rgba(255,255,255,0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {fields.map((field, i) => (
              <div
                key={field.number}
                className="ease-out"
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "600ms",
                  transitionDelay: isVisible ? `${i * 0.3}s` : "0s",
                  transform: isVisible ? "translateY(0)" : "translateY(32px)",
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30">
                  <p className="text-[14px] font-bold text-[#2563EB]">{field.number}</p>
                  <p className="text-[18px] font-bold text-[#111827] mt-2">{field.title}</p>
                  <p className="text-[14px] text-[#6B7280] mt-2.5 leading-[1.7]">{field.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
