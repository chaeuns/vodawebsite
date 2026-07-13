"use client";

import { useScrollReveal } from "@/app/components/shared/useScrollReveal";

export default function CTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-[#0D1B40] py-[80px] relative transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[#60A5FA] text-[12px] font-semibold uppercase"
        >
          LET&apos;S BUILD TOGETHER
        </p>
        <p className="text-white text-[26px] md:text-[30px] font-bold leading-[1.4] mt-3">
          프로젝트를 시작할 준비가 되셨나요?
        </p>
        <p className="text-[#93C5FD] text-[14px] md:text-[15px] mt-3">
          VODA의 AI 솔루션 전문가가 귀사에 최적화된 솔루션을 함께 설계합니다.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <button className="bg-[#2563EB] text-white text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors">
            개발 문의하기
          </button>
          <button className="border border-white/25 text-white text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
            포트폴리오 보기
          </button>
        </div>
      </div>
    </section>
  );
}
