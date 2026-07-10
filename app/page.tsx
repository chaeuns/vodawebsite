"use client";

import { useState, useEffect } from "react";
import {
  ChevronRight,
  GraduationCap,
  Cpu,
  BadgeCheck,
  Cloud,
  Users2,
} from "lucide-react";


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

const SERVICES = [
  {
    num: "01.",
    icon: GraduationCap,
    label: "Education",
    title: "교육 사업",
    desc: "정부와 기업이 필요로 하는 실무형 AI·데이터 인재를 양성합니다. 정부 지원 교육과정부터 기업 맞춤형 커리큘럼까지 운영합니다.",
    items: ["정부교육", "기업교육"],
  },
  {
    num: "02.",
    icon: Cpu,
    label: "AI Solutions",
    title: "AI 솔루션",
    desc: "AI, 메타버스, 블록체인 기술을 기반으로 고객사의 요구에 맞는 웹·앱 플랫폼과 주문형 솔루션을 개발합니다.",
    items: ["주문형 솔루션 개발", "웹·앱 플랫폼", "AI, 메타버스, 블록체인"],
  },
  {
    num: "03.",
    icon: BadgeCheck,
    label: "AI Certification",
    title: "AI 자격인증",
    desc: "AI 활용 역량을 객관적으로 평가하고 인증하는 통합 검증 체계를 구축해, 개인과 조직의 AI 역량을 데이터로 증명합니다.",
    items: ["AI 활용 역량 자격인증", "AI 기반 역량평가", "통합 검증 체계"],
  },
  {
    num: "04.",
    icon: Cloud,
    label: "Cloud",
    title: "클라우드",
    desc: "안정적인 클라우드 전환과 지속적인 유지보수로 교육·비즈니스 인프라의 신뢰성을 지원합니다.",
    items: ["클라우드 전환", "유지보수"],
  },
  {
    num: "05.",
    icon: Users2,
    label: "Consulting",
    title: "컨설팅",
    desc: "조직의 AI·AX 전략 수립과 역량 진단을 통해 데이터 기반 의사결정 체계로의 전환을 돕습니다.",
    items: ["AI·AX 전략 수립", "조직 역량 진단"],
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
  const [openService, setOpenService] = useState(1);

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
    <div
      className="min-h-screen bg-white text-[#0e1b52] overflow-x-hidden"
      style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
    >
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


      /* Group glass panel */
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
}

/* Service card: glass, hover fills brand blue glass */
.sc {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  transition: background .26s ease, border-color .26s ease, box-shadow .26s ease;
}
.sc:hover {
  background: rgba(53, 102, 232, 0.28);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 24px rgba(53, 102, 232, 0.25);
}
.sc .sc-num, .sc .sc-title, .sc .sc-en { transition:color .26s ease; }
.sc:hover .sc-num   { color:rgba(255,255,255,.4); }
.sc:hover .sc-title { color:#fff; }
.sc:hover .sc-en    { color:rgba(255,255,255,.55); }

        .sc .sc-num, .sc .sc-title, .sc .sc-en { transition:color .26s ease; }
        .sc:hover .sc-num   { color:rgba(255,255,255,.3); }
        .sc:hover .sc-title { color:#fff; }
        .sc:hover .sc-en    { color:rgba(255,255,255,.45); }
        .sc .sc-desc {
          max-height:0; opacity:0; overflow:hidden;
          color:rgba(255,255,255,.75);
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

       .svc-card { min-height: 100%; }
@media (min-width: 768px) {
  .svc-card { flex-basis: 0; }
}

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
      `}</style>

      {/* ══════════════════════════════════════════════
          HERO — 미션 기반
      ══════════════════════════════════════════════ */}
     <section className="pt-[68px] min-h-screen flex flex-col items-center justify-center text-center border-b border-[rgba(14,27,82,0.07)] bg-white">
  <div className="max-w-[1440px] w-full mx-auto px-10 flex flex-col items-center">
    {/* Rotating word + VODA logo */}
    <div className="flex items-center justify-center gap-6 flex-wrap mb-14">
      <span
        className={`mw ${missionIn ? "mw-in" : "mw-out"} font-black text-[#2d6bff] leading-none`}
        style={{
          fontFamily: "'Epilogue',sans-serif",
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
  </div>
</section>

      {/* ══════════════════════════════════════════════
    Services — 넘버링 기반 확장 카드
══════════════════════════════════════════════ */}
<section className="border-b border-[rgba(14,27,82,0.07)]">
  <div className="max-w-[1440px] mx-auto px-10">
    <div className="flex items-end justify-between py-6 border-b border-[rgba(14,27,82,0.07)]">
      <div>
        <p
          className="text-[11px] font-bold tracking-[0.22em] text-[#3566e8] uppercase mb-1.5"
          style={{ fontFamily: "'Epilogue',sans-serif" }}
        >
          What We Do
        </p>
        <h2
          className="font-black text-[#0e1b52]"
          style={{
            fontFamily: "'Epilogue',sans-serif",
            fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
            letterSpacing: "-0.03em",
          }}
        >
          사업 영역
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 py-12">
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        const isOpen = openService === i;
        return (
          <div
            key={s.num}
            onMouseEnter={() => setOpenService(i)}
            className={`svc-card relative rounded-2xl border cursor-default overflow-hidden transition-all duration-500 ease-out ${
  isOpen
    ? "md:scale-[1.05] md:z-10 border-[rgba(14,27,82,0.1)] bg-white shadow-[0_16px_44px_rgba(14,27,82,0.14)]"
    : "border-[rgba(14,27,82,0.08)] bg-white"
}`}
          >
            {/* 확장 상태: 상단 그라디언트 액센트 */}
            {isOpen && (
  <div className="px-5 pt-5 md:px-6 md:pt-6">
    <div
      className="h-28 md:h-32 w-full rounded-xl relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #EEF2FF 0%, #C9D8FF 50%, #3566E8 100%)",
      }}
    >
      <svg
        viewBox="0 0 400 160"
        className="absolute inset-0 w-full h-full opacity-60"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-20,120 C80,60 140,140 220,70 C280,10 340,50 420,10"
          stroke="#0E1B52"
          strokeWidth="1.2"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M-20,90 C90,130 160,40 240,100 C300,140 360,70 420,110"
          stroke="#3566E8"
          strokeWidth="1.2"
          fill="none"
          opacity="0.45"
        />
      </svg>
    </div>
  </div>
)}

            <div className="p-6 flex flex-col h-full">
              {!isOpen && (
  <div className="hidden md:flex flex-col justify-between h-full min-h-[220px] text-left">
    <span
      className="font-black text-[#dbe2f5]"
      style={{
        fontFamily: "'Epilogue',sans-serif",
        fontSize: "4rem",
        letterSpacing: "-0.02em",
      }}
    >
      {s.num}
    </span>
    <div className="flex flex-col gap-3">
      <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
        <Icon size={16} className="text-[#3566e8]" />
      </div>
      <span
        className="text-lg font-bold text-[#0e1b52] leading-snug break-keep"
        style={{ fontFamily: "'Epilogue',sans-serif" }}
      >
        {s.title}
      </span>
    </div>
  </div>
)}

              {/* 모바일: 항상 펼쳐진 형태로 표시 */}
              <div className={`${isOpen ? "flex" : "md:hidden flex"} flex-col`}>
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-bold tracking-widest text-[#b8c3de]"
                    style={{ fontFamily: "'Epilogue',sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
                    <Icon size={16} className="text-[#3566e8]" />
                  </div>
                </div>

                <p
                  className="text-[11px] font-bold tracking-[0.2em] text-[#3566e8] uppercase mb-2"
                  style={{ fontFamily: "'Epilogue',sans-serif" }}
                >
                  {s.label}
                </p>
                <h3
                  className="font-black text-[#0e1b52] leading-tight mb-3"
                  style={{
                    fontFamily: "'Epilogue',sans-serif",
                    fontSize: "clamp(1.15rem,1.6vw,1.4rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#5a6895] leading-relaxed mb-5">
                  {s.desc}
                </p>

                <ul className="space-y-2 mt-auto">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#0e1b52] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#3566e8] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
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
        <div className="max-w-[1440px] mx-auto px-10 py-14">
          {/* 브랜드 라벨 */}
          <p
            className="text-center text-[30px] font-semibold text-[#3566e8] uppercase mb-6"
            style={{
              fontFamily: "'Sora', sans-serif",
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
                className={`why-pill rounded-full px-6 py-2.5 text-sm font-semibold border ${
                  whyTab === tab.id
                    ? "bg-[#3566e8] border-[#3566e8] text-white"
                    : "bg-white border-[rgba(14,27,82,0.15)] text-[#5a6895] hover:border-[rgba(14,27,82,0.3)]"
                }`}
                style={{ fontFamily: "'Epilogue',sans-serif" }}
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
                  <p
                    className="text-[11px] font-bold tracking-[0.2em] text-[#3566e8] uppercase mb-2"
                    style={{
                      fontFamily: "'Epilogue',sans-serif",
                    }}
                  >
                    {tab.kicker}
                  </p>
                  <h3
                    className="font-black text-[#0e1b52] leading-snug mb-6"
                    style={{
                      fontFamily: "'Epilogue',sans-serif",
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NOW RECRUITING — 현재 모집 중인 교육과정
      ══════════════════════════════════════════════ */}
      <section className="border-b border-[rgba(14,27,82,0.07)]">
        <div className="max-w-[1440px] mx-auto px-10 py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.22em] text-[#3566e8] uppercase mb-1.5"
                style={{ fontFamily: "'Epilogue',sans-serif" }}
              >
                Now Recruiting
              </p>
              <h2
                className="font-black text-[#0e1b52]"
                style={{
                  fontFamily: "'Epilogue',sans-serif",
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
              인스타그램 보기 <ChevronRight size={14} />
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
                  className="font-black text-[#0e1b52] mb-1"
                  style={{
                    fontFamily: "'Epilogue',sans-serif",
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
                  바로가기 ↗
                </a>
              </div>
            ))}
          </div>

          <p className="md:hidden mt-2 text-xs text-[#b8c3de]">
            ← 가로 스크롤로 더 보기 →
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHAT WE DO — 3×2 점선 카드
      ══════════════════════════════════════════════ */}
      <section>
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="py-12">
            <p
              className="text-[11px] font-bold tracking-[0.22em] text-[#3566e8] uppercase mb-1.5"
              style={{ fontFamily: "'Epilogue',sans-serif" }}
            >
              Solutions
            </p>
            <h2
              className="font-black text-[#0e1b52]"
              style={{
                fontFamily: "'Epilogue',sans-serif",
                fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
                letterSpacing: "-0.03em",
              }}
            >
              솔루션
            </h2>
          </div>

          <div
            className="rounded-2xl px-6 sm:px-10 py-16"
            style={{
              background:
                "linear-gradient(135deg, #030818 0%, #0E1B52 30%, #2B5AD1 75%, #4A9FE0 100%)",
            }}
          >
            {SOLUTIONS.map((group, gi) => (
             <div
               key={group.groupTitle}
               className={`glass-panel rounded-2xl px-6 sm:px-10 py-10 sm:py-12 ${gi > 0 ? "mt-8" : ""}`}
             >
                {/* 그룹 타이틀 */}
                <div className="text-center mb-8">
                  <h3
                    className="font-black text-white mb-1"
                    style={{
                      fontFamily: "'Epilogue',sans-serif",
                      fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {group.groupTitle}
                  </h3>
                  {group.groupSubtitle && (
                    <p className="text-sm text-white/50">
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
                      <span
                        className="sc-num block text-[11px] font-bold tracking-widest text-white/30 mb-4"
                        style={{ fontFamily: "'Epilogue',sans-serif" }}
                      >
                        {s.num}
                      </span>
                      <h3
                        className="sc-title font-black text-white mb-1 leading-tight"
                        style={{
                          fontFamily: "'Epilogue',sans-serif",
                          fontSize: "clamp(1rem,1.6vw,1.25rem)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p className="sc-en text-xs text-white/50 font-medium tracking-wide">
                        {s.en}
                      </p>
                      <p className="sc-desc">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PARTNERS — 무한 스크롤 로고
      ══════════════════════════════════════════════ */}
      <section className="py-16 border-b border-[rgba(14,27,82,0.07)]">
        <div className="max-w-[1440px] mx-auto px-10">
          <p
            className="text-[11px] font-bold tracking-[0.22em] text-[#3566e8] uppercase mb-1.5"
            style={{ fontFamily: "'Epilogue',sans-serif" }}
          >
            Partners
          </p>
          <h2
            className="font-black text-[#0e1b52] mb-10"
            style={{
              fontFamily: "'Epilogue',sans-serif",
              fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
              letterSpacing: "-0.03em",
            }}
          >
            파트너스
          </h2>
        </div>

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
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.22em] text-[#3566e8] uppercase mb-1.5"
                style={{ fontFamily: "'Epilogue',sans-serif" }}
              >
                News
              </p>
              <h2
                className="font-black text-[#0e1b52]"
                style={{
                  fontFamily: "'Epilogue',sans-serif",
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
                    <span
                      className="text-[10px] font-bold text-[#3566e8]"
                      style={{
                        fontFamily: "'Epilogue',sans-serif",
                      }}
                    >
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
        </div>
      </section>

    </div>
  );
}