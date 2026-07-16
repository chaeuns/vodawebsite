"use client";

import { useState, useEffect, useRef} from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/Container";


/* ── Brand tokens ─────────────────────────────────────────
   Navy  : #0E1B52  (primary text, headings, footer bg)
   Blue  : #3566E8  (accent, links, highlights)
   Muted : #5A6895  (secondary text)
   Tint  : #EEF2FF  (section background, hover fill)
───────────────────────────────────────────────────────── */

const MISSION_WORDS = [
  "가능성을",
  "변화를",
  "미래를",
  "인재를",
];

const MISSION_GRADIENTS = [
  "bg-gradient-to-r from-[#3566E8] via-[#7C3AED] to-[#C026D3]", // 가능성을 — blue → violet → magenta
  "bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#34D399]", // 변화를 — sky → cyan → emerald
  "bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#FB7185]", // 미래를 — violet → pink → rose
  "bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]", // 인재를 — amber → orange → red
];

const SOLUTIONS = [
  {
    groupTitle: "AI 활용 역량평가 시스템",
    groupSubtitle: null,
    items: [
      {
        num: "01",
        title: "얼굴/음성 인식",
        en: "Face & Voice Recognition",
        desc: "AI 기반 얼굴·음성 인식으로 응시자 본인 확인 절차를 자동화합니다.",
      },
      {
        num: "02",
        title: "외부 프로그램 차단",
        en: "External Program Blocking",
        desc: "평가 중 부정행위를 방지하기 위해 외부 프로그램 실행을 실시간으로 차단합니다.",
      },
      {
        num: "03",
        title: "학생 취약점 진단",
        en: "Weakness Diagnosis",
        desc: "응시 데이터를 분석해 학생별 취약 영역을 진단하고 리포트를 제공합니다.",
      },
    ],
  },
  {
    groupTitle: "VODA LMS",
    groupSubtitle: "통합 교육관리 시스템",
    items: [
      {
        num: "01",
        title: "LMS",
        en: "Learning Management System",
        desc: "자체 기술로 구현한 학습 관리 시스템으로 교육 데이터를 측정하고 개선합니다.",
      },
      {
        num: "02",
        title: "온라인 교육장",
        en: "Online Classroom",
        desc: "실시간 온라인 강의와 콘텐츠를 하나의 플랫폼에서 운영합니다.",
      },
      {
        num: "03",
        title: "학생 출결 관리 시스템",
        en: "Attendance Management",
        desc: "학생 출결 데이터를 자동으로 기록하고 관리자에게 리포트를 제공합니다.",
      },
    ],
  },
];

const PROGRAMS = [
  {
    status: "모집중",
    deadline: "~ 07.31",
    title: "AI·ML 트랙 3기",
    meta: "6개월 · 정부지원",
  },
  {
    status: "모집중",
    deadline: "~ 08.15",
    title: "클라우드 트랙 2기",
    meta: "4개월 · 정부지원",
  },
  {
    status: "예정",
    deadline: "모집 예정",
    title: "보안 트랙 1기",
    meta: "6개월 · 정부지원",
  },
  {
    status: "예정",
    deadline: "모집 예정",
    title: "AI 자격인증 과정",
    meta: "2개월",
  },
];

const WHY_VODA_TABS = [
  {
    id: "campus",
    label: "Campus",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&h=700&fit=crop&auto=format",
    kicker: "New Campus",
    title: "최적의 학습 환경에서 시작하는 교육",
    bullets: [
      "최신 강의실",
      "프로젝트룸",
      "세미나 공간",
      "학습 라운지",
    ],
    cta: "Campus 둘러보기",
  },
  {
    id: "metaverse",
    label: "Metaverse",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=900&h=700&fit=crop&auto=format",
    kicker: "Immersive Learning",
    title: "시공간 제약 없는 몰입형 협업 교육",
    bullets: [
      "ZEP 실시간 강의",
      "팀 프로젝트",
      "온라인 네트워킹",
      "몰입형 학습 경험",
    ],
    cta: "Metaverse 둘러보기",
  },
  {
    id: "ailab",
    label: "AI Lab",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&h=700&fit=crop&auto=format",
    kicker: "AI Practice Environment",
    title: "실무 그대로의 AI 실습 환경",
    bullets: [
      "GPU 서버",
      "Cloud 실습",
      "LMS 연동",
      "프로젝트 기반 교육",
    ],
    cta: "AI Lab 둘러보기",
  },
];

/* 사업 영역 — 라인 아이콘 (currentColor 기반, lens dot 포인트 컬러 별도 주입) */
const AREA_ICONS: Record<string, (dot: string) => ReactNode> = {
  education: (dot) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 14c-3.5-2.8-8.5-4-14-4v24c5.5 0 10.5 1.2 14 4 3.5-2.8 8.5-4 14-4V10c-5.5 0-10.5 1.2-14 4z" />
      <path d="M24 14v24" />
      <path d="M15 19c2.2.2 4.3.7 6 1.5M15 25c2.2.2 4.3.7 6 1.5" />
      <circle cx="38" cy="10" r="3.5" fill={dot} stroke="none" />
    </svg>
  ),
  ai: (dot) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="5" />
      <circle cx="10" cy="12" r="3" />
      <circle cx="38" cy="12" r="3" />
      <circle cx="10" cy="36" r="3" />
      <path d="M12.5 14 20 20.5M35.5 14 28 20.5M12.5 34 20 27.5" />
      <path d="M28 27.5 34 33" />
      <circle cx="37" cy="36" r="3.5" fill={dot} stroke="none" />
    </svg>
  ),
  cert: (dot) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6l4.2 3 5.2-.4 1.9 4.9 4.4 2.8-1.3 5L41 26l-4.4 2.8-1.9 4.9-5.2-.4-4.2 3-4.2-3-5.2.4-1.9-4.9L9.6 26l1.3-4.7-1.3-5 4.4-2.8 1.9-4.9 5.2.4 4.2-3z" />
      <path d="M18.5 23.5l4 4 7-8" />
      <path d="M18 36l-3 8 9-4 9 4-3-8" />
      <circle cx="24" cy="6" r="3" fill={dot} stroke="none" />
    </svg>
  ),
  cloud: (dot) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 32a8 8 0 0 1 1.2-15.9A10 10 0 0 1 34.6 18 7.5 7.5 0 0 1 34 32H14z" />
      <path d="M17 38v3M24 38v5M31 38v3" />
      <circle cx="39" cy="12" r="3.5" fill={dot} stroke="none" />
    </svg>
  ),
  consulting: (dot) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="16" />
      <path d="M30.5 17.5l-4 9-9 4 4-9 9-4z" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="24" cy="4.5" r="3" fill={dot} stroke="none" />
    </svg>
  ),
};

const AREAS = [
  {
    eyebrow: "EDUCATION",
    title: "교육 사업",
    icon: "education",
    desc: "정부와 기업이 필요로 하는 실무형 AI·데이터 인재를 양성합니다. 정부 지원 교육과정부터 기업 맞춤형 커리큘럼까지 운영합니다.",
    points: ["정부교육", "기업교육"],
    href: "/business/curriculum",
  },
  {
    eyebrow: "AI SOLUTIONS",
    title: "AI 솔루션",
    icon: "ai",
    desc: "AI, 메타버스, 블록체인 기술을 기반으로 고객사의 요구에 맞는 웹·앱 플랫폼과 주문형 솔루션을 개발합니다.",
    points: ["주문형 솔루션 개발", "웹·앱 플랫폼", "AI, 메타버스, 블록체인"],
    href: "/business/ai-solutions",
  },
  {
    eyebrow: "AI CERTIFICATION",
    title: "AI 자격인증",
    icon: "cert",
    desc: "AI 활용 역량을 객관적으로 평가하고 인증하는 통합 검증 체계를 구축해, 개인과 조직의 AI 역량을 데이터로 증명합니다.",
    points: ["AI 활용 역량 자격인증", "AI 기반 역량평가", "통합 검증 체계"],
    href: "/business/ai-certification",
  },
  {
    eyebrow: "CLOUD",
    title: "클라우드",
    icon: "cloud",
    desc: "안정적인 클라우드 전환과 지속적인 유지보수로 교육·비즈니스 인프라의 신뢰성을 지원합니다.",
    points: ["클라우드 전환", "유지보수"],
    href: "/services/cloud",
  },
  {
    eyebrow: "CONSULTING",
    title: "컨설팅",
    icon: "consulting",
    desc: "조직의 AI·AX 전략 수립과 역량 진단을 통해 데이터 기반 의사결정 체계로의 전환을 돕습니다.",
    points: ["AI·AX 전략 수립", "조직 역량 진단"],
    href: "/business/consulting",
  },
];

const NEWS = [
  {
    date: "2026.06.20",
    tag: "공지",
    title: "VODA, 과학기술정보통신부 AI 교육 혁신 과제 선정",
    desc: "VODA가 과학기술정보통신부의 '2026 AI 교육 혁신 사업' 주관 기관으로 선정되었습니다.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=380&fit=crop&auto=format",
  },
  {
    date: "2026.05.30",
    tag: "소식",
    title: "Voda Campus 2기 수강생 1,200명 돌파",
    desc: "2기 교육 과정에서 AI 및 데이터 엔지니어링 수강생이 빠르게 성장하고 있습니다.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=380&fit=crop&auto=format",
  },
  {
    date: "2026.05.10",
    tag: "파트너십",
    title: "VODA × LG CNS, 기업 DX 교육 MOU 체결",
    desc: "LG CNS와의 협력으로 대기업 임직원 대상 맞춤형 AI 전환 교육을 시작합니다.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=380&fit=crop&auto=format",
  },
];

const PARTNERS = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
  { name: "Partner 7" },
  { name: "Partner 8" },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [missionIdx, setMissionIdx] = useState(0);
  const [missionIn, setMissionIn] = useState(true);
  const [whyTab, setWhyTab] = useState("campus");

  /* 사업 영역 — 세로형 카드, 스크롤에 따라 활성 카드가 반전되는 스토리텔링 */
  const areaWrapRef = useRef<HTMLDivElement>(null);
  const [areaScrollIdx, setAreaScrollIdx] = useState(0);
  const [areaHoverIdx, setAreaHoverIdx] = useState<number | null>(null);
  const [isAreaMobile, setIsAreaMobile] = useState(false);
  const areaActive = areaHoverIdx !== null ? areaHoverIdx : areaScrollIdx;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const setMq = () => setIsAreaMobile(mq.matches);
    setMq();
    mq.addEventListener("change", setMq);
    return () => mq.removeEventListener("change", setMq);
  }, []);

  useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const el = areaWrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        if (total <= 0) return;
        const p = Math.min(0.999, Math.max(0, -rect.top / total));
        setAreaScrollIdx(Math.floor(p * AREAS.length));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setMissionIn(false);
      setTimeout(() => {
        setMissionIdx((p) => (p + 1) % MISSION_WORDS.length);
        setMissionIn(true);
      }, 350);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
      <div className="min-h-screen bg-white text-[#0e1b52]">
      <style>{`
        /* VODA fill: #EDEDED → #3566E8, left → right */
        @keyframes vodaFill {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0%   0 0); }
        }
        .voda-fill { animation: vodaFill 2s cubic-bezier(0.77,0,0.18,1) forwards 0.3s; }

        /* Fade up */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fu  { opacity:0; animation: fadeUp .7s ease forwards; }
        .fu1 { animation-delay: .5s; }
        .fu2 { animation-delay: .72s; }

        /* Mission word swap */
        .mw { display:inline-block; transition: opacity .34s ease, transform .34s ease; }
        .mw-in  { opacity:1; transform:translateY(0); }
        .mw-out { opacity:0; transform:translateY(10px); }


      /* Group glass panel — bright glass */
.glass-panel {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 40px rgba(14, 27, 82, 0.08);
}

/* Service card: bright glass, hover fills brand blue */
.sc {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 18px rgba(14, 27, 82, 0.05);
  transition: background .26s ease, border-color .26s ease, box-shadow .26s ease;
}
.sc:hover {
  background: rgba(53, 102, 232, 0.92);
  border-color: rgba(53, 102, 232, 0.92);
  box-shadow: 0 10px 30px rgba(53, 102, 232, 0.3);
}
.sc .sc-num, .sc .sc-title, .sc .sc-en { transition:color .26s ease; }
.sc:hover .sc-num   { color:rgba(255,255,255,.55); }
.sc:hover .sc-title { color:#fff; }
.sc:hover .sc-en    { color:rgba(255,255,255,.7); }
.sc .sc-desc {
  max-height:0; opacity:0; overflow:hidden;
  color:rgba(255,255,255,.9);
  transition: max-height .32s ease, opacity .28s ease;
  font-size:.8125rem; line-height:1.65; margin-top:.75rem;
}
.sc:hover .sc-desc { max-height:5rem; opacity:1; }

        /* Partner pill */
        .pp { transition:border-color .2s, color .2s; }
        .pp:hover { border-color:rgba(14,27,82,.3); color:#0e1b52; }

        /* News card */
        .nc { transition:box-shadow .22s ease; }
        .nc:hover { box-shadow:0 6px 32px rgba(14,27,82,.12); }
        .nc img { transition:transform .38s ease; }
        .nc:hover img { transform:scale(1.04); }
        .nc-title { transition:color .2s; }
        .nc:hover .nc-title { color:#3566e8; }
        .nc .nc-bar { transform:scaleX(0); transform-origin:left; transition:transform .28s ease; }
        .nc:hover .nc-bar { transform:scaleX(1); }

        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:rgba(14,27,82,.15); border-radius:2px; }

        /* Partners marquee — infinite scroll left */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-fade::before,
        .marquee-fade::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 10;
          pointer-events: none;
        }
        .marquee-fade::before {
          left: 0;
          background: linear-gradient(to right, #fff, transparent);
        }
        .marquee-fade::after {
          right: 0;
          background: linear-gradient(to left, #fff, transparent);
        }
        
        @keyframes fadeSlideUp {
  from { opacity:0; transform:translateY(14px); }
  to   { opacity:1; transform:translateY(0); }
}
.why-content { animation: fadeSlideUp .3s ease forwards; }

.why-pill { transition: background .22s ease, border-color .22s ease, color .22s ease; }

        @media (prefers-reduced-motion: reduce) {
          .biz-vcard, .biz-vcard * { transition: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          HERO — 미션 기반
      ══════════════════════════════════════════════ */}
     <section className="pt-[68px] min-h-screen flex flex-col items-center justify-center text-center border-b border-[rgba(14,27,82,0.07)] bg-white">
  <Container className="w-full flex flex-col items-center">
    {/* Rotating word + VODA logo */}
    <div className="flex items-center justify-center gap-6 flex-wrap mb-14">
      <span
        className={`mw ${missionIn ? "mw-in" : "mw-out"} font-suit font-extrabold leading-none ${MISSION_GRADIENTS[missionIdx]} bg-clip-text text-transparent`}
        style={{
          fontSize: "5.83rem",
        }}
      >
        {MISSION_WORDS[missionIdx]}
      </span>
      <img
        src="/voda-logo-hero.svg"
        alt="VODA"
        className="object-contain"
        style={{ height: "4.85rem", width: "auto" }}
      />
    </div>

    {/* Supporting text — 20pt */}
    <p
      className="text-[#5a6895] leading-relaxed max-w-3xl"
      style={{ fontSize: "1rem", lineHeight: 1.65 }}
    >
      VODA는 데이터와 AI 기술이 교육의 언어로 번역될 수
      있다고 믿습니다.
      <br />
      정부, 기업, 개인 — 각자의 위치에서 AI 시대를 주도할 수
      있도록 함께 나아갑니다.
    </p>
  </Container>
</section>

      {/* ══════════════════════════════════════════════
    사업 영역 — 세로형 카드, 스크롤에 따라 색상 반전
══════════════════════════════════════════════ */}
<section className="border-b border-[rgba(14,27,82,0.07)]">
  <div
    ref={areaWrapRef}
    style={{ height: isAreaMobile ? "auto" : `${AREAS.length * 60}vh`, position: "relative" }}
  >
    <div
      style={{
        position: isAreaMobile ? "relative" : "sticky",
        top: 0,
        height: isAreaMobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: isAreaMobile ? "center" : "flex-start",
        padding: isAreaMobile ? "48px 24px" : "56px 0 0",
        boxSizing: "border-box",
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
      }}
    >
      <Container>
      <div className="flex items-end justify-between py-6">
        <div>
          <p className="text-[11px] font-bold font-sora tracking-[0.22em] text-[#3566e8] uppercase mb-1.5">
            What We Do
          </p>
          <h2
            className="font-black font-suit text-[#0e1b52]"
            style={{
              fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
              letterSpacing: "-0.03em",
            }}
          >
            사업 영역
          </h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isAreaMobile ? "column" : "row",
          gap: 12,
          alignItems: "stretch",
          height: isAreaMobile ? "auto" : "min(62vh, 560px)",
        }}
        onMouseLeave={() => setAreaHoverIdx(null)}
      >
        {AREAS.map((a, i) => {
          const on = i === areaActive;
          return (
            <Link
              key={a.eyebrow}
              href={a.href}
              className="biz-vcard group"
              onMouseEnter={() => setAreaHoverIdx(i)}
              onFocus={() => setAreaHoverIdx(i)}
              onBlur={() => setAreaHoverIdx(null)}
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                flexGrow: isAreaMobile ? 0 : on ? 1.9 : 1,
                flexBasis: 0,
                minWidth: 0,
                minHeight: isAreaMobile ? (on ? 340 : 120) : "auto",
                padding: "26px 22px",
                borderRadius: 20,
                background: on
                  ? "linear-gradient(160deg, #0E1B52 0%, #17245F 60%, #22307A 100%)"
                  : "#FAFAFC",
                border: `1px solid ${on ? "transparent" : "rgba(14,27,82,0.09)"}`,
                transform: on ? "translateY(-4px)" : "translateY(0)",
                boxShadow: on ? "0 24px 48px -20px rgba(14,27,82,0.45)" : "none",
                transition:
                  "flex-grow 0.65s cubic-bezier(0.32,0.72,0,1), min-height 0.5s cubic-bezier(0.32,0.72,0,1), background 0.45s ease, border-color 0.45s ease, transform 0.45s ease, box-shadow 0.45s ease",
              }}
            >
              {/* lens glow (활성) */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: -70,
                  right: -70,
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(53,102,232,0.21) 0%, transparent 65%)",
                  opacity: on ? 1 : 0,
                  transition: "opacity 0.6s ease",
                  pointerEvents: "none",
                }}
              />

              {/* 아이콘 */}
              <div
                style={{
                  width: on ? 40 : 54,
                  height: on ? 40 : 54,
                  color: on ? "#FFFFFF" : "#B4BCD1",
                  transition: "width 0.45s ease, height 0.45s ease, color 0.4s ease",
                  flexShrink: 0,
                }}
              >
                {AREA_ICONS[a.icon](on ? "#7C93FF" : "#3566E8")}
              </div>

              <div style={{ flexGrow: 1 }} />

              <span
                className="font-sora"
                style={{
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  whiteSpace: "nowrap",
                  color: on ? "#9DB0FF" : "#9AA1B5",
                  transition: "color 0.4s ease",
                  marginBottom: 8,
                }}
              >
                {a.eyebrow}
              </span>

              <div style={{ display: "flex", alignItems: "baseline", gap: 7, minWidth: 0 }}>
                <h3
                  className="font-suit"
                  style={{
                    margin: 0,
                    fontSize: on ? (isAreaMobile ? 27 : 31) : isAreaMobile ? 20 : 22,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                    whiteSpace: "nowrap",
                    color: on ? "#FFFFFF" : "#0e1b52",
                    transition: "font-size 0.45s ease, color 0.4s ease",
                  }}
                >
                  {a.title}
                </h3>
                <span
                  aria-hidden
                  style={{
                    width: on ? 8 : 0,
                    height: on ? 8 : 0,
                    borderRadius: "50%",
                    background: "#3566E8",
                    flexShrink: 0,
                    transition: "width 0.35s ease 0.2s, height 0.35s ease 0.2s",
                  }}
                />
              </div>

              {/* 자세한 설명 + 핵심 포인트 (활성 시) */}
              <div
                style={{
                  maxHeight: on ? 320 : 0,
                  opacity: on ? 1 : 0,
                  overflow: "hidden",
                  transform: on ? "translateY(0)" : "translateY(10px)",
                  transition:
                    "max-height 0.6s cubic-bezier(0.32,0.72,0,1), opacity 0.4s ease 0.15s, transform 0.5s ease 0.1s",
                }}
              >
                <p style={{ margin: "13px 0 0", fontSize: 13.5, lineHeight: 1.75, color: "rgba(255,255,255,0.78)" }}>
                  {a.desc}
                </p>
                <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {a.points.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, fontWeight: 500, color: "#C9D4FF" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3566E8", flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <span
                  className="inline-flex items-center gap-1 rounded-full border transition-all duration-200 ease-out group-hover:bg-white group-hover:border-white active:scale-95 mt-4"
                  style={{
                    padding: "7px 14px",
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    color: "#FFFFFF",
                    background: "rgba(255,255,255,0.14)",
                    borderColor: "rgba(255,255,255,0.28)",
                  }}
                >
                  <span className="transition-colors duration-200 group-hover:text-[#0e1b52]">자세히 보기</span>
                  <ChevronRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#0e1b52]"
                  />
                </span>
              </div>

              <div style={{ flexGrow: on ? 1 : 0, transition: "flex-grow 0.5s ease" }} />
            </Link>
          );
        })}
      </div>

      {/* 진행 인디케이터 */}
      <div style={{ display: "flex", gap: 8, marginTop: 26, justifyContent: "center" }}>
        {AREAS.map((a, i) => (
          <span
            key={a.eyebrow}
            style={{
              width: i === areaActive ? 22 : 7,
              height: 7,
              borderRadius: 999,
              background: i === areaActive ? "#3566E8" : "rgba(14,27,82,0.12)",
              transition: "width 0.4s cubic-bezier(0.32,0.72,0,1), background 0.3s ease",
            }}
          />
        ))}
      </div>
      </Container>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════
    WHY VODA — 탭 기반 소개
══════════════════════════════════════════════ */}
      <section
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
        }}
      >
        <Container className="py-14">
          {/* 브랜드 라벨 */}
          <p
            className="text-center text-[30px] font-extrabold font-sora text-[#3566e8] uppercase mb-6"
            style={{
              letterSpacing: "0.32em",
            }}
          >
            Why VODA?
          </p>

          {/* Pill 탭 */}
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {WHY_VODA_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setWhyTab(tab.id)}
                className={`why-pill font-sora rounded-full px-6 py-2.5 text-sm font-semibold border ${
                  whyTab === tab.id
                    ? "bg-[#3566e8] border-[#3566e8] text-white"
                    : "bg-white border-[rgba(14,27,82,0.15)] text-[#5a6895] hover:border-[rgba(14,27,82,0.3)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 콘텐츠 — key를 바꿔서 리마운트 → fade-slide-up 재생 */}
          {WHY_VODA_TABS.filter((t) => t.id === whyTab).map(
            (tab) => (
              <div
                key={tab.id}
                className="why-content grid md:grid-cols-2 gap-12 items-center"
              >
                {/* 이미지 */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={tab.img}
                    alt={tab.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 텍스트 */}
                <div>
                  <p className="text-[11px] font-bold font-sora tracking-[0.2em] text-[#3566e8] uppercase mb-2">
                    {tab.kicker}
                  </p>
                  <h3
                    className="font-black font-suit text-[#0e1b52] leading-snug mb-6"
                    style={{
                      fontSize: "clamp(1.4rem,2.4vw,1.9rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {tab.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {tab.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 text-sm text-[#5a6895]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3566e8] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#3566e8] hover:text-[#1a4acc] transition-colors"
                  >
                    {tab.cta} <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ),
          )}
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          NOW RECRUITING — 현재 모집 중인 교육과정
      ══════════════════════════════════════════════ */}
      <section className="border-b border-[rgba(14,27,82,0.07)]">
        <Container className="py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-bold font-sora tracking-[0.22em] text-[#3566e8] uppercase mb-1.5">
                Now Recruiting
              </p>
              <h2
                className="font-black font-suit text-[#0e1b52]"
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                현재 모집 중인 교육과정
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-1 text-sm font-semibold text-[#5a6895] hover:text-[#0e1b52] transition-colors pb-1"
            >
            </a>
          </div>

          {/* 가로 스크롤 카드 */}
          <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="shrink-0 w-[260px] snap-start"
              >
                {/* 상태 뱃지 + 마감일 */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      p.status === "모집중"
                        ? "bg-[#3566e8] text-white"
                        : "border border-[rgba(14,27,82,0.2)] text-[#5a6895]"
                    }`}
                  >
                    {p.status}
                  </span>
                  <span className="text-xs text-[#b8c3de]">
                    {p.deadline}
                  </span>
                </div>

                {/* 포스터 이미지 자리 (세로형) */}
                <div className="w-full aspect-[3/4] bg-[#EEF2FF] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xs text-[#b8c3de] text-center leading-relaxed">
                    포스터 이미지
                    <br />
                    (세로형)
                  </span>
                </div>

                {/* 제목 + 메타 */}
                <h3
                  className="font-black font-suit text-[#0e1b52] mb-1"
                  style={{
                    fontSize: "1.15rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-[#5a6895] mb-2">
                  {p.meta}
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-[#3566e8] hover:text-[#1a4acc] transition-colors"
                >
                </a>
              </div>
            ))}
          </div>

          <p className="md:hidden mt-2 text-xs text-[#b8c3de]">
            ← 가로 스크롤로 더 보기 →
          </p>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          WHAT WE DO — 3×2 점선 카드
      ══════════════════════════════════════════════ */}
      <section>
        <Container>
          <div className="py-12">
            <p className="text-[11px] font-bold font-sora tracking-[0.22em] text-[#3566e8] uppercase mb-1.5">
              Solutions
            </p>
            <h2
              className="font-black font-suit text-[#0e1b52]"
              style={{
                fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
                letterSpacing: "-0.03em",
              }}
            >
              솔루션
            </h2>
          </div>
        </Container>

        <div
          className="relative overflow-hidden py-16"
          style={{
            background:
              "linear-gradient(135deg, #F3F6FF 0%, #E7EEFF 45%, #D6E3FF 100%)",
          }}
        >
          {/* 배경 데코 블롭 */}
          <div
            className="absolute top-0 right-0 w-130 h-130 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(53,102,232,0.22), transparent 70%)",
              transform: "translate(25%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-105 h-105 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(14,27,82,0.16), transparent 70%)",
              transform: "translate(-25%, 30%)",
            }}
          />

          <Container className="relative z-10">
            {SOLUTIONS.map((group, gi) => (
               <div
                 key={group.groupTitle}
                 className={`glass-panel rounded-2xl px-6 sm:px-10 py-10 sm:py-12 ${gi > 0 ? "mt-8" : ""}`}
               >
                  {/* 그룹 타이틀 */}
                  <div className="text-center mb-8">
                    <h3
                      className="font-black font-suit text-[#0e1b52] mb-1"
                      style={{
                        fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {group.groupTitle}
                    </h3>
                    {group.groupSubtitle && (
                      <p className="text-sm text-[#5a6895]">
                        {group.groupSubtitle}
                      </p>
                    )}
                  </div>

                  {/* 3열 카드 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {group.items.map((s) => (
                      <div
                        key={s.num}
                        className="sc p-8 rounded-xl cursor-default"
                      >
                        <span className="sc-num block text-[11px] font-bold font-sora tracking-widest text-[#0e1b52]/35 mb-4">
                          {s.num}
                        </span>
                        <h3
                          className="sc-title font-black font-suit text-[#0e1b52] mb-1 leading-tight"
                          style={{
                            fontSize: "clamp(1rem,1.6vw,1.25rem)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {s.title}
                        </h3>
                        <p className="sc-en text-xs text-[#5a6895] font-medium tracking-wide">
                          {s.en}
                        </p>
                        <p className="sc-desc">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Container>
          </div>
      </section>

      {/* ══════════════════════════════════════════════
          PARTNERS — 무한 스크롤 로고
      ══════════════════════════════════════════════ */}
      <section className="py-16 border-b border-[rgba(14,27,82,0.07)]">
        <Container>
          <p className="text-[11px] font-bold font-sora tracking-[0.22em] text-[#3566e8] uppercase mb-1.5">
            Partners
          </p>
          <h2
            className="font-black font-suit text-[#0e1b52] mb-10"
            style={{
              fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
              letterSpacing: "-0.03em",
            }}
          >
            파트너스
          </h2>
        </Container>

        {/* 풀블리드 마퀴 영역 (좌우 fade 포함) */}
        <div className="marquee-fade relative overflow-hidden">
          <div className="marquee-wrap overflow-hidden">
            <div className="marquee-track">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="pp shrink-0 w-[260px] h-[110px] mx-2.5 flex items-center justify-center border border-dashed border-[rgba(14,27,82,0.15)] rounded text-sm text-[#b8c3de]"
                >
                  로고 자리
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEWS
      ══════════════════════════════════════════════ */}
      <section className="py-16 border-b border-[rgba(14,27,82,0.07)]">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-bold font-sora tracking-[0.22em] text-[#3566e8] uppercase mb-1.5">
                News
              </p>
              <h2
                className="font-black font-suit text-[#0e1b52]"
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                최신 소식
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-1 text-sm font-semibold text-[#5a6895] hover:text-[#0e1b52] transition-colors pb-1"
            >
              전체보기 <ChevronRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {NEWS.map((n) => (
              <a
                key={n.title}
                href="#"
                className="nc block bg-white border border-[rgba(14,27,82,0.09)] rounded overflow-hidden"
              >
                <div className="overflow-hidden h-[180px] bg-[#eef2ff]">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[10px] font-bold font-suit text-[#3566e8]">
                      {n.tag}
                    </span>
                    <span className="text-[10px] text-[#b8c3de]">
                      {n.date}
                    </span>
                  </div>
                  <h3 className="nc-title text-sm font-bold text-[#0e1b52] leading-snug mb-1.5">
                    {n.title}
                  </h3>
                  <p className="text-xs text-[#5a6895] leading-relaxed line-clamp-2">
                    {n.desc}
                  </p>
                </div>
                <div className="nc-bar h-[2.5px] bg-[#3566e8]" />
              </a>
            ))}
          </div>

          <div className="md:hidden mt-5 text-center">
            <a
              href="#"
              className="text-sm font-semibold text-[#5a6895] hover:text-[#0e1b52]"
            >
              전체보기 →
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
}