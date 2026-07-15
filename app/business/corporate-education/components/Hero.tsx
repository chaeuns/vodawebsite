"use client";

import { useScrollReveal } from "@/app/components/shared/useScrollReveal";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden py-20 px-6 sm:px-10 lg:px-16"
      style={{ background: "linear-gradient(135deg, #E8EDF8 0%, #D6E0F5 100%)" }}
    >
      <h1
        ref={ref}
        className="font-bold leading-[1.35] text-[26px] md:text-[38px] text-[#111827] text-center break-keep transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        기업의 성장과 개인의 역량 강화를 위한
        <br />
        최적의 교육 솔루션
      </h1>
    </section>
  );
}
