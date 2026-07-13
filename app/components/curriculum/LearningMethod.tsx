"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";

const tabs = [
  {
    label: "Learning AI",
    title: "AI 맞춤형 학습",
    description: [
      "개인별 학습 수준을 정확히 분석하고",
      "맞춤형 학습 경로를 제공합니다.",
      "실시간 피드백으로 학습 효율을 극대화합니다.",
    ],
    tags: ["개인화 분석", "실시간 피드백"],
  },
  {
    label: "Practical Project",
    title: "실전 프로젝트 기반 교육",
    description: [
      "현업에서 요구하는 실무 역량을 갖추기 위해",
      "실제 프로젝트를 수행하며",
      "팀 협업과 문제 해결 능력을 기릅니다.",
    ],
    tags: ["실무 역량", "팀 프로젝트"],
  },
  {
    label: "Metaverse",
    title: "몰입형 메타버스 교육",
    description: [
      "가상현실과 증강현실을 활용한 혁신적인 학습 환경에서",
      "실제와 동일한 몰입감을 경험하며",
      "협업과 소통의 새로운 차원을 탐험합니다.",
    ],
    tags: ["몰입형 학습", "혁신적 교육 환경"],
  },
];

const STAGE_COUNT = tabs.length;
const MOBILE_QUERY = "(max-width: 767px)";
const TRANSITION_MS = 260;

type Phase = "visible" | "hiding" | "entering";

export default function LearningMethod() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const [renderedTab, setRenderedTab] = useState(0);
  const [phase, setPhase] = useState<Phase>("visible");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterRafRef = useRef<number | null>(null);

  // Track mobile breakpoint so scroll-linking only runs on desktop.
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    isMobileRef.current = mql.matches;
    const handleChange = () => {
      isMobileRef.current = mql.matches;
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Drive the active tab from scroll position while this section is pinned.
  useEffect(() => {
    const computeStage = () => {
      rafRef.current = null;
      if (isMobileRef.current) return;

      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -wrapper.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      const stage = Math.min(STAGE_COUNT - 1, Math.floor(progress * STAGE_COUNT));

      setActiveTab((prev) => (prev === stage ? prev : stage));
    };

    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(computeStage);
    };

    computeStage();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Crossfade the visible content whenever the active stage changes.
  useEffect(() => {
    if (activeTab === renderedTab) return;

    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    if (enterRafRef.current !== null) cancelAnimationFrame(enterRafRef.current);

    setPhase("hiding");
    transitionTimeoutRef.current = setTimeout(() => {
      setRenderedTab(activeTab);
      setPhase("entering");
      // Wait a frame so the "entering" starting position paints before
      // transitioning back to visible, otherwise the browser collapses
      // both style changes into one and the animation never plays.
      enterRafRef.current = requestAnimationFrame(() => {
        enterRafRef.current = requestAnimationFrame(() => setPhase("visible"));
      });
    }, TRANSITION_MS);

    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, [activeTab, renderedTab]);

  useEffect(() => {
    return () => {
      if (enterRafRef.current !== null) cancelAnimationFrame(enterRafRef.current);
    };
  }, []);

  const handleTabClick = useCallback((index: number) => {
    setActiveTab(index);

    // Mobile: no scroll-linking, tabs just switch the visible content.
    if (isMobileRef.current) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;

    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    const targetProgress = (index + 0.5) / STAGE_COUNT;
    window.scrollTo({
      top: wrapperTop + targetProgress * scrollableDistance,
      behavior: "smooth",
    });
  }, []);

  const stage = tabs[renderedTab];
  const contentStyle = {
    opacity: phase === "visible" ? 1 : 0,
    transform:
      phase === "hiding"
        ? "translateY(-16px)"
        : phase === "entering"
          ? "translateY(16px)"
          : "translateY(0)",
    transition: `opacity ${TRANSITION_MS}ms ease-out, transform ${TRANSITION_MS}ms ease-out`,
  };

  return (
    <div ref={wrapperRef} className="relative z-10 -mt-10 md:h-[400vh]">
      <section
        ref={ref}
        className="py-[80px] min-h-[860px] md:min-h-0 md:h-screen md:sticky md:top-0 flex flex-col justify-center relative shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)] md:overflow-y-auto transition-all duration-[900ms] ease-out"
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-full max-w-[1100px] mx-auto px-6">
          <p
            style={{ letterSpacing: "1.5px" }}
            className="text-[12px] font-semibold text-[#2563EB] uppercase"
          >
            LEARNING METHOD
          </p>
          <FillHeading
            key={renderedTab}
            loop
            className="text-[32px] font-bold mt-2 leading-[1.3]"
            duration="1.54s"
          >
            {stage.label}
          </FillHeading>

          <div style={contentStyle} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center">
            <div className="w-full aspect-[4/3] rounded-xl border border-dashed border-[#D1D5DB] bg-[#F3F4F6] flex items-center justify-center">
              <span className="text-[13px] text-[#9CA3AF]">교육 현장 이미지 자리</span>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => handleTabClick(i)}
                    className={`text-[12px] font-medium px-3 py-1 rounded-full border transition-colors ${
                      i === renderedTab
                        ? "text-white bg-[#2563EB] border-[#2563EB]"
                        : "text-[#2563EB] bg-[#EFF6FF] border-[#2563EB]/20 hover:bg-[#DBEAFE]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <p className="text-[22px] font-bold text-[#111827] mt-4 leading-[1.4]">
                {stage.title}
              </p>

              <p className="text-[14px] text-[#6B7280] mt-3 leading-[1.7]">
                {stage.description.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < stage.description.length - 1 && <br />}
                  </span>
                ))}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {stage.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-medium text-[#374151] bg-white border border-[#E5E7EB] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
