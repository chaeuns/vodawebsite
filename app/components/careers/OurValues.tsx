"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, User, Users } from "lucide-react";
import Container from "@/app/components/Container";

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

function useScrollDraw() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setProgress(1);
      return;
    }

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const p = (vh - rect.top) / total;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}

type Value = {
  word: string;
  title: string;
  body: string;
  align: "left" | "right";
  wordAlign: "left" | "center";
  badgeSide: "left" | "right";
};

const values: Value[] = [
  {
    word: "INNOVATION",
    title: "혁신과 도전",
    body: "새로운 기술과 아이디어로 미래를\n만들어 나갑니다. 실패를 두려워하지 않고\n끊임없이 도전합니다.",
    align: "right",
    wordAlign: "center",
    badgeSide: "right",
  },
  {
    word: "TOGETHER",
    title: "소통과 협업",
    body: "팀원 소통과 상호 존중을 바탕으로\n협력합니다.다양한 배경의 동료들과 함께\n성장하며 시너지를 만들어 냅니다.",
    align: "left",
    wordAlign: "center",
    badgeSide: "left",
  },
  {
    word: "GROWTH",
    title: "학습과 성장",
    body: "지속적인 학습과 성장을 위해 회사가 \n함께합니다. 교육비 지원, 컨퍼런스 참여,\n사내 스터디 등 다양한 기회를 제공합니다.",
    align: "right",
    wordAlign: "center",
    badgeSide: "right",
  },
];

const BADGE_STYLE: React.CSSProperties = {
  top: "50%",
  transform: "translateY(-50%)",
  background: "#EAF0FC",
  boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
};

function ValueBadge({ v }: { v: Value }) {
  const sideStyle =
    v.badgeSide === "left" ? { right: "calc(100% + 20px)" } : { left: "calc(100% + 20px)" };

  if (v.word === "INNOVATION") {
    return (
      <div
        className="absolute z-[2] hidden md:flex h-24 w-24 items-center justify-center rounded-full"
        style={{ ...BADGE_STYLE, ...sideStyle }}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid #2563EB", animation: "ov-ring1 2s ease-out infinite" }}
        />
        <span
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid #2563EB", animation: "ov-ring1 2s ease-out infinite", animationDelay: "1s" }}
        />
        <Lightbulb className="relative z-[1] h-9 w-9 text-[#2563EB]" />
      </div>
    );
  }

  if (v.word === "TOGETHER") {
    return (
      <div className="absolute z-[2] hidden md:block h-24 w-24 rounded-full" style={{ ...BADGE_STYLE, ...sideStyle }}>
        <span className="absolute inset-0 flex items-center justify-center">
          <User className="h-9 w-9 text-[#2563EB]" style={{ animation: "ov-userSolo 3s ease-in-out infinite" }} />
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <Users className="h-[42px] w-[42px] text-[#2563EB]" style={{ animation: "ov-usersJoin 3s ease-in-out infinite" }} />
        </span>
      </div>
    );
  }

  return (
    <div className="absolute z-[2] hidden md:block h-24 w-24 rounded-full" style={{ ...BADGE_STYLE, ...sideStyle }}>
      <span
        className="absolute rounded-full"
        style={{ left: 30, top: 51, width: 9, height: 9, background: "#2563EB", animation: "ov-startDot 3s ease-in-out infinite" }}
      />
      <svg className="absolute" style={{ left: 30, top: 30 }} width={36} height={36} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 17L9 11L13 15L21 7"
          stroke="#2563EB"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 25.46, animation: "ov-drawLine 3s ease-in-out infinite" }}
        />
        <path
          d="M14 7L21 7L21 14"
          stroke="#2563EB"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 14, animation: "ov-drawHead 3s ease-in-out infinite" }}
        />
      </svg>
    </div>
  );
}

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
      <div className="relative max-w-[352px] w-full">
        <div
          className="relative flex flex-col items-center text-center p-[35px]"
          style={{
            background: "rgba(255,255,255,0.62)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.8)",
            borderRadius: 24,
            boxShadow: "0 12px 32px rgba(13,27,64,0.14)",
          }}
        >
          <ValueBadge v={v} />

          <p className="text-[22px] md:text-[31px] font-extrabold text-[#0D1B40]">{v.title}</p>
          <p className="text-[16.5px] text-[#6B7280] mt-[13px] leading-[1.7] whitespace-pre-line">{v.body}</p>
        </div>
      </div>
    </div>
  );
}

export default function OurValues() {
  const { ref, isVisible } = useRepeatingReveal(0.1);
  const { ref: lineRef, progress: lineProgress } = useScrollDraw();

  return (
    <>
      <style>{`
        @keyframes ov-ring1 { 0%{transform:scale(1); opacity:0.55;} 100%{transform:scale(1.7); opacity:0;} }
        @keyframes ov-userSolo {
          0% { opacity:1; transform:scale(1); }
          25% { opacity:0; transform:scale(0.7); }
          100% { opacity:0; transform:scale(0.7); }
        }
        @keyframes ov-usersJoin {
          0% { opacity:0; transform:scale(0.6); }
          25% { opacity:0; transform:scale(0.6); }
          45% { opacity:1; transform:scale(1.12); }
          60% { opacity:1; transform:scale(1); }
          100% { opacity:1; transform:scale(1); }
        }
        @keyframes ov-startDot { 0%{opacity:1;transform:scale(1);} 15%{opacity:1;transform:scale(1);} 30%{opacity:0;transform:scale(.5);} 100%{opacity:0;transform:scale(.5);} }
        @keyframes ov-drawLine { 0%{stroke-dashoffset:25.46;opacity:0;} 15%{stroke-dashoffset:25.46;opacity:1;} 65%{stroke-dashoffset:0;opacity:1;} 90%{stroke-dashoffset:0;opacity:1;} 100%{stroke-dashoffset:0;opacity:0;} }
        @keyframes ov-drawHead { 0%{stroke-dashoffset:14;opacity:0;} 60%{stroke-dashoffset:14;opacity:0;} 85%{stroke-dashoffset:0;opacity:1;} 92%{stroke-dashoffset:0;opacity:1;} 100%{stroke-dashoffset:0;opacity:0;} }
      `}</style>

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
        <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            우리 팀을 움직이는 가치
          </h2>
          <p className="text-[16px] text-[#6B7280] mt-5">
            VODA는 도전과 협업, 성장을 움직이는 문화를 지향합니다.
          </p>
        </div>

        <div ref={lineRef} className="relative mt-16 max-w-[861px] mx-auto">
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
              style={{
                strokeDasharray: 2000,
                strokeDashoffset: 2000 * (1 - lineProgress),
                transition: "stroke-dashoffset 80ms linear",
              }}
            />
            <path
              d="M 280 0 C 280 140, 40 140, 40 320 C 40 500, 280 500, 280 680 C 280 860, 40 860, 40 1040 C 40 1120, 160 1160, 160 1240"
              stroke="url(#valuesGlassLine)"
              strokeWidth={2.5}
              strokeLinecap="round"
              style={{
                strokeDasharray: 2000,
                strokeDashoffset: 2000 * (1 - lineProgress),
                transition: "stroke-dashoffset 80ms linear",
              }}
            />
          </svg>

          <div className="relative flex flex-col gap-16 md:gap-[244px]">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`${i === 0 ? "mt-6" : ""} ${
                  v.word === "TOGETHER"
                    ? "md:translate-x-[-40px]"
                    : v.word === "INNOVATION"
                    ? "md:translate-x-[80px]"
                    : v.word === "GROWTH"
                    ? "md:translate-x-[80px] md:-translate-y-[30px]"
                    : ""
                }`}
              >
                <ValueBlock v={v} />
              </div>
            ))}
          </div>
        </div>
      </Container>
      </section>
    </>
  );
}
