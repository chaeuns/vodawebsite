"use client";

import { fields } from "./data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import Container from "@/app/components/Container";

export default function FieldOfEducation() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="py-[80px] min-h-[860px] flex flex-col justify-center relative z-30 -mt-10"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
      }}
    >
      <div
        ref={ref}
        className="transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
      <Container className="-mt-20">
        <div className="pl-20 pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            핵심 기술 분야
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            디지털 전환 시대에 필요한 핵심 기술을 교육합니다.
          </p>
        </div>
      </Container>

      <Container>
        <div className="pl-20 pr-20">
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
                  className="ease-out h-full"
                  style={{
                    transitionProperty: "transform, opacity",
                    transitionDuration: "600ms",
                    transitionDelay: isVisible ? `${i * 0.3}s` : "0s",
                    transform: isVisible ? "translateY(0)" : "translateY(32px)",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <div className="group h-full flex flex-col items-center justify-start bg-white border border-[#E5E7EB] rounded-xl p-8 text-center transition-all duration-300 hover:bg-[#2563EB] hover:border-[#2563EB] hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
                    <p className="text-[14px] font-bold text-[#2563EB] transition-colors duration-300 group-hover:text-white/60">{field.number}</p>
                    <p className="text-[18px] font-bold text-[#111827] mt-2 transition-colors duration-300 group-hover:text-white">{field.title}</p>
                    <p className="text-[14px] text-[#6B7280] mt-2.5 leading-[1.7] transition-colors duration-300 group-hover:text-white/90">{field.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      </div>
    </section>
  );
}
