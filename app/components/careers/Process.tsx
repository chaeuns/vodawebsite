"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, FileText, MessageCircle, CheckCircle2 } from "lucide-react";
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

const steps = [
  {
    number: "01",
    title: "서류 접수",
    duration: "약 3~5일 소요",
    body: "서류를 넣어주시면\n검토 후 안내드립니다.",
    Icon: FileText,
    color: "#60A5FA",
  },
  {
    number: "02",
    title: "면접 / 인터뷰",
    duration: "약 1주 이내 안내",
    body: "역할 수행 능력과\n팀 적합성을 확인합니다.",
    Icon: MessageCircle,
    color: "#3B82F6",
  },
  {
    number: "03",
    title: "최종 합격",
    duration: "협의 후 확정",
    body: "처우 협의 후\n최종 채용 확정됩니다.",
    Icon: CheckCircle2,
    color: "#2563EB",
  },
];

const NUMBER_GRAY = "#D3D9E6";

export default function Process() {
  const { ref, isVisible } = useRepeatingReveal(0.1);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean[]>([false, false, false]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
  }, []);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(
      ([entry]) => {
        timers.forEach(clearTimeout);
        timers.length = 0;

        if (!entry.isIntersecting) {
          setActive([false, false, false]);
          return;
        }

        if (media.matches) {
          setActive([true, true, true]);
        } else {
          steps.forEach((_, i) => {
            timers.push(
              setTimeout(() => {
                setActive((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 200)
            );
          });
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative"
    >
      <Container
        className="transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(100px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="pl-20 pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            채용 프로세스
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            최종 합격까지의 과정을 명확하게 안내하며,
            <br />
            투명하고 신뢰할 수 있는 절차를 통해 가장 적합한 인재와 함께 성장해 나가고자 합니다.
          </p>
        </div>

        <div
          ref={stepsRef}
          className="pl-20 pr-20 mt-16 flex flex-col md:flex-row items-stretch md:items-center gap-10 md:gap-4"
        >
          {steps.map((s, i) => (
            <div key={s.number} className="flex-1 flex flex-col md:flex-row items-center w-full">
              <div className="flex-1 flex flex-col items-center text-center w-full">
                <span
                  className="font-extrabold leading-none text-[64px] md:text-[70px]"
                  style={{
                    color: active[i] ? s.color : NUMBER_GRAY,
                    opacity: active[i] ? 1 : 0,
                    transform: active[i]
                      ? "translateY(0) scale(1)"
                      : "translateY(24px) scale(0.96)",
                    transitionProperty: "opacity, transform, color",
                    transitionDuration: reducedMotion
                      ? "0ms, 0ms, 0ms"
                      : "600ms, 600ms, 400ms",
                    transitionDelay: reducedMotion ? "0ms, 0ms, 0ms" : "0ms, 0ms, 450ms",
                    transitionTimingFunction: "ease-out",
                  }}
                >
                  {s.number}
                </span>

                <div className="group mt-5 flex items-center gap-2">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EAF1FF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2563EB]">
                    <s.Icon className="h-4 w-4 text-[#2563EB] transition-colors duration-300 group-hover:text-white" />
                  </span>
                  <span className="text-[13px] text-[#6B7280]">{s.duration}</span>
                </div>

                <p className="text-[22px] font-bold text-[#111827] mt-4">{s.title}</p>
                <p className="text-[15px] text-[#6B7280] mt-2.5 leading-[1.7] whitespace-pre-line">
                  {s.body}
                </p>
              </div>

              {i < steps.length - 1 && (
                <ChevronRight className="hidden md:block w-[35px] h-[35px] text-[#D1D5DB] flex-shrink-0 mx-2" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
