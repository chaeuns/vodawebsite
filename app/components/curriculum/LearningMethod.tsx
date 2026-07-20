"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import Container from "@/app/components/Container";

const tabs = [
  {
    label: "LEARNING AI",
    title: "AI 맞춤형 학습",
    image: "/images/curriculum/learning-ai.png",
    description: [
      "개인별 학습 수준을 정확히 분석",
      "맞춤형 학습 경로를 제공",
      "실시간 피드백으로 학습 효율을 극대화",
    ],
    tags: ["개인화 분석", "실시간 피드백"],
  },
  {
    label: "PRACTICAL PROJECT",
    title: "실전 프로젝트 기반 교육",
    image: "/images/curriculum/practical-project2.png",
    description: [
      "현업에서 요구하는 실무 역량",
      "실제 프로젝트를 수행",
      "팀 협업과 문제 해결 능력",
    ],
    tags: ["실무 역량", "팀 프로젝트"],
  },
  {
    label: "METVERSE",
    title: "몰입형 메타버스 교육",
    image: "/images/curriculum/metaverse.png",
    description: [
      "가상현실과 증강현실을 활용한 혁신적인 학습 환경",
      "실제와 동일한 몰입감을 경험",
      "협업과 소통의 새로운 차원을 탐험",
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
  const [titleInView, setTitleInView] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterRafRef = useRef<number | null>(null);
  const directionRef = useRef<1 | -1>(1);

  // Retrigger the title wipe every time this section re-enters the viewport
  // (unlike useScrollReveal's isVisible, which only fires once).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setTitleInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

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

    directionRef.current = activeTab > renderedTab ? 1 : -1;

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

  // Top title (stage label) wipe reveal: replays every time the section re-enters view and on every tab switch.
  const titleRevealed = titleInView && phase === "visible";
  const TITLE_WIPE_FEATHER = 18; // % width of the soft leading edge, softer than a hard clip-path cut
  const titleWipeGradient = `linear-gradient(to right, black 0%, black calc(var(--title-wipe) - ${TITLE_WIPE_FEATHER}%), transparent var(--title-wipe))`;
  const titleStyle = {
    fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
    color: "#2563EB",
    textShadow: "2px 3px 0 rgba(37,99,235,0.16), 5px 7px 14px rgba(13,27,64,0.12)",
    "--title-wipe": titleRevealed ? `${100 + TITLE_WIPE_FEATHER}%` : "0%",
    WebkitMaskImage: titleWipeGradient,
    maskImage: titleWipeGradient,
    transition: `--title-wipe ${Math.round(TRANSITION_MS * 1.3)}ms cubic-bezier(.65,0,.35,1)`,
  } as React.CSSProperties;

  // Image-only motion: direction-aware 30px slide + fade, independent of contentStyle.
  const IMAGE_SLIDE_PX = 30;
  const dir = directionRef.current;
  const imageMotionStyle = {
    opacity: phase === "visible" ? 1 : 0,
    transform:
      phase === "hiding"
        ? `translateY(${dir * -IMAGE_SLIDE_PX}px)`
        : phase === "entering"
          ? `translateY(${dir * IMAGE_SLIDE_PX}px)`
          : "translateY(0)",
    transition: `opacity ${TRANSITION_MS}ms ease-out, transform ${TRANSITION_MS}ms ease-out`,
  };

  return (
    <div ref={wrapperRef} className="relative z-10 -mt-10 md:h-[400vh]">
      <section
        ref={ref}
        className="py-[80px] min-h-[860px] md:min-h-0 md:h-screen md:sticky md:top-0 flex flex-col justify-center relative md:overflow-y-auto transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? undefined : "translateY(80px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(37,99,235,0.22) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0px, black 220px)",
            maskImage:
              "linear-gradient(to bottom, transparent 0px, black 220px)",
          }}
        />

        <div className="relative z-10 mb-10">
          <Container>
            <div className="pl-20 pr-20">
              <style>{`
                @property --title-wipe {
                  syntax: '<percentage>';
                  inherits: false;
                  initial-value: 0%;
                }
              `}</style>
              <h2
                style={titleStyle}
                className="font-bold leading-[1.3]"
              >
                {stage.label}
              </h2>
            </div>
          </Container>
        </div>

        <div className="relative z-10 w-full">
          <Container>
            <div className="pl-20 pr-20">
          <div style={contentStyle} className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 mt-10 items-stretch">
            <div className="relative w-full">
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] -z-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.16), transparent 70%)",
                  filter: "blur(10px)",
                }}
              />

              <span
                className="absolute -top-[14px] -left-[14px] w-[22px] h-[22px] border-t-[1.5px] border-l-[1.5px] rounded-tl-md pointer-events-none"
                style={{ borderColor: "rgba(37,99,235,0.32)" }}
              />
              <span
                className="absolute -top-[14px] -right-[14px] w-[22px] h-[22px] border-t-[1.5px] border-r-[1.5px] rounded-tr-md pointer-events-none"
                style={{ borderColor: "rgba(37,99,235,0.32)" }}
              />
              <span
                className="absolute -bottom-[14px] -left-[14px] w-[22px] h-[22px] border-b-[1.5px] border-l-[1.5px] rounded-bl-md pointer-events-none"
                style={{ borderColor: "rgba(37,99,235,0.32)" }}
              />
              <span
                className="absolute -bottom-[14px] -right-[14px] w-[22px] h-[22px] border-b-[1.5px] border-r-[1.5px] rounded-br-md pointer-events-none"
                style={{ borderColor: "rgba(37,99,235,0.32)" }}
              />

              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-[#F3F4F6]">
                <style>{`
                  @keyframes lm-kenburns {
                    from { transform: scale(1); }
                    to { transform: scale(1.045); }
                  }
                  .lm-kenburns {
                    animation: lm-kenburns 9s ease-in-out infinite alternate;
                  }
                `}</style>
                <div style={imageMotionStyle} className="absolute inset-0">
                  <div key={renderedTab} className="lm-kenburns absolute inset-0">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-fit ml-auto flex flex-col justify-center rounded-2xl border border-white/50 bg-white/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,41,55,0.12)] p-8">
              <div className="inline-flex items-center gap-1 bg-[#F3F4F6] rounded-full p-1">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => handleTabClick(i)}
                    className={`text-[13px] font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                      i === renderedTab
                        ? "text-white bg-[#2563EB] shadow-sm"
                        : "text-[#6B7280] hover:text-[#111827]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <p className="text-[24px] font-bold mt-6 leading-[1.3] text-[#2563EB]">
                {stage.title}
              </p>

              <ul className="mt-6 space-y-3">
                {stage.description.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] text-[#374151] leading-[1.6]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              <style>{`
                @keyframes lm-tag-pop {
                  from {
                    opacity: 0;
                    transform: translateX(-26px) rotate(-10deg) scale(0.85);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0) rotate(0deg) scale(1);
                  }
                }
              `}</style>
              <div key={renderedTab} className="flex flex-wrap gap-2 mt-6">
                {stage.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className="text-[13px] font-semibold px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-[#374151]"
                    style={{
                      animation: "lm-tag-pop 0.5s cubic-bezier(.34,1.56,.64,1) both",
                      animationDelay: `${TRANSITION_MS + i * 100}ms`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
