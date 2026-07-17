"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, TrendingUp, Users } from "lucide-react";
import FillHeading from "@/app/components/shared/FillHeading";

function useRepeatingReveal(threshold: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

type Value = {
  word: string;
  title: string;
  body: string;
  align: "left" | "right";
  Icon: typeof Lightbulb;
};

const values: Value[] = [
  {
    word: "INNOVATION",
    title: "혁신과 도전",
    body: "새로운 기술과 아이디어로 미래를\n만들어 나갑니다. 실패를 두려워하지 않고\n끊임없이 도전합니다.",
    align: "right",
    Icon: Lightbulb,
  },
  {
    word: "TOGETHER",
    title: "소통과 협업",
    body: "팀원 소통과 상호 존중을 바탕으로\n협력합니다.다양한 배경의 동료들과 함께\n성장하며 시너지를 만들어 냅니다.",
    align: "left",
    Icon: Users,
  },
  {
    word: "GROWTH",
    title: "학습과 성장",
    body: "지속적인 학습을 장려하고 개인의 성장을\n위해 회사가 함께합니다. 교육비 지원,\n컨퍼런스 참여와 사내 스터디 운영 등을\n통해 배우고 발전할 기회를 제공합니다.",
    align: "right",
    Icon: TrendingUp,
  },
];

function useBlockReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function ValueBlock({ v }: { v: Value }) {
  const { ref, isVisible } = useBlockReveal();
  const isRight = v.align === "right";

  return (
    <div
      ref={ref}
      className={`relative flex ${isRight ? "justify-end" : "justify-start"} max-[780px]:justify-start`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "1.2s",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.82)",
      }}
    >
      <div className="relative max-w-[320px] w-full">
        <span
          aria-hidden="true"
          style={{ letterSpacing: "2px", color: "rgba(37,99,235,0.16)" }}
          className="pointer-events-none select-none absolute left-0 top-0 whitespace-nowrap text-[64px] font-black uppercase leading-none max-[780px]:hidden"
        >
          {v.word}
        </span>

        <div
          className={`relative mt-20 flex flex-col p-8 ${
            isRight ? "items-end text-right" : "items-start text-left"
          } max-[780px]:items-start max-[780px]:text-left max-[780px]:mt-0`}
          style={{
            background: "rgba(255,255,255,0.62)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.8)",
            borderRadius: 22,
            boxShadow: "0 12px 32px rgba(13,27,64,0.14)",
          }}
        >
          <div
            className="flex h-10 w-10 items-center justify-center"
            style={{
              borderRadius: 12,
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.16), rgba(37,99,235,0.06))",
            }}
          >
            <v.Icon className="h-5 w-5 text-[#2563EB]" />
          </div>

          <p className="text-[28px] font-extrabold text-[#0D1B40] mt-5">{v.title}</p>
          <p className="text-[15px] text-[#6B7280] mt-3 leading-[1.7] whitespace-pre-line">{v.body}</p>
        </div>
      </div>
    </div>
  );
}

export default function OurValues() {
  const { ref, isVisible } = useRepeatingReveal(0.1);

  return (
    <section
      ref={ref}
      className="relative z-10 -mt-10 py-[200px] transition-all duration-[900ms] ease-out"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #E8EDF8 15%, #D6E0F5 50%, #E8EDF8 85%, #ffffff 100%)",
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
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

        <div className="relative mt-16 max-w-[861px] mx-auto">
          <svg
            className="pointer-events-none absolute top-0 left-0 w-full max-[780px]:hidden"
            style={{ height: "calc(100% + 100px)" }}
            viewBox="0 0 320 1240"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="valuesGlassLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
              </linearGradient>
              <filter id="valuesGlassGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>
            <path
              d="M 280 0 C 280 140, 40 140, 40 320 C 40 500, 280 500, 280 680 C 280 860, 40 860, 40 1040 C 40 1120, 160 1160, 160 1240"
              stroke="url(#valuesGlassLine)"
              strokeWidth={10}
              strokeLinecap="round"
              opacity={0.4}
              filter="url(#valuesGlassGlow)"
            />
            <path
              d="M 280 0 C 280 140, 40 140, 40 320 C 40 500, 280 500, 280 680 C 280 860, 40 860, 40 1040 C 40 1120, 160 1160, 160 1240"
              stroke="url(#valuesGlassLine)"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          </svg>

          <div className="relative flex flex-col gap-[244px]">
            {values.map((v, i) => (
              <div key={v.title} className={i === 0 ? "mt-6" : undefined}>
                <ValueBlock v={v} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
