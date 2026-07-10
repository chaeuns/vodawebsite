"use client";

import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";

type Value = { icon: string; bg: string; title: string; body: string };

const values: Value[] = [
  {
    icon: "💡",
    bg: "#FEF9C3",
    title: "혁신과 도전",
    body: "새로운 기술과 아이디어로 교육의 미래를 만들어 나갑니다. 실패를 두려워하지 않고 끊임없이 도전합니다.",
  },
  {
    icon: "💬",
    bg: "#DBEAFE",
    title: "소통과 협업",
    body: "팀원 소통과 상호 존중을 바탕으로 협력합니다. 다양한 배경의 동료들과 함께 성장하며 시너지를 만들어 냅니다.",
  },
  {
    icon: "✅",
    bg: "#DCFCE7",
    title: "학습과 성장",
    body: "지속적인 학습을 장려하고 개인의 성장을 위해 회사가 함께합니다. 교육비 지원, 컨퍼런스 참여 등을 제공합니다.",
  },
];

function ValueCard({ v, index }: { v: Value; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="ease-out"
      style={{
        transitionProperty: "transform, opacity",
        transitionDuration: "700ms",
        transitionDelay: isVisible ? `${index * 0.35}s` : "0s",
        transform: isVisible ? "translateY(0)" : "translateY(64px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="rounded-xl p-10 border border-white/60 shadow-[0_8px_32px_rgba(31,41,55,0.08)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_20px_40px_rgba(37,99,235,0.18)] hover:border-white/80"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div
          className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl"
          style={{ backgroundColor: v.bg }}
        >
          {v.icon}
        </div>
        <p className="text-[22px] font-bold text-[#111827] mt-5">{v.title}</p>
        <p className="text-[15px] text-[#6B7280] mt-2.5 leading-[1.7]">{v.body}</p>
      </div>
    </div>
  );
}

export default function OurValues() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-[#F9FAFB] py-[80px] relative z-10 -mt-10 shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-[900ms] ease-out"
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
          OUR VALUES
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          우리 팀을 움직이는 가치
        </FillHeading>
        <p className="text-[16px] text-[#6B7280] mt-3">
          VODA는 도전과 협업, 성장을 움직이는 문화를 지향합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {values.map((v, i) => (
            <ValueCard key={v.title} v={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
