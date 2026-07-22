"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Container from "@/app/components/Container";
import BusinessAreaCards from "@/app/components/BusinessAreaCards";


/* ── Brand tokens ─────────────────────────────────────────
   Navy  : #0E1B52  (primary text, headings, footer bg)
   Blue  : #3566E8  (accent, links, highlights)
   Muted : #5A6895  (secondary text)
   Tint  : #EEF2FF  (section background, hover fill)
───────────────────────────────────────────────────────── */

const MISSION_WORDS = [
  "가치를",
  "변화를",
  "미래를",
  "인재를",
  "성장을",
];

const MISSION_GRADIENTS = [
  "bg-gradient-to-r from-[#3566E8] via-[#7C3AED] to-[#C026D3]", // 가치를 — blue → violet → magenta
  "bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#34D399]", // 변화를 — sky → cyan → emerald
  "bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#FB7185]", // 미래를 — violet → pink → rose
  "bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444]", // 인재를 — amber → orange → red
  "bg-gradient-to-r from-[#84CC16] via-[#22C55E] to-[#10B981]", // 성장을 — lime → green → teal
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
        desc: "얼굴·음성 인식으로 본인 확인을 자동화합니다.",
      },
      {
        num: "02",
        title: "외부 프로그램 차단",
        en: "External Program Blocking",
        desc: "부정행위 방지를 위해 외부 프로그램을 실시간 차단합니다.",
      },
      {
        num: "03",
        title: "학생 취약점 진단",
        en: "Weakness Diagnosis",
        desc: "응시 데이터를 분석해 취약 영역을 진단합니다.",
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
        desc: "자체 기술로 구현한 학습 관리 시스템입니다.",
      },
      {
        num: "02",
        title: "온라인 교육장",
        en: "Online Classroom",
        desc: "실시간 강의와 콘텐츠를 한 플랫폼에서 운영합니다.",
      },
      {
        num: "03",
        title: "학생 출결 관리 시스템",
        en: "Attendance Management",
        desc: "출결 데이터를 자동으로 기록하고 관리합니다.",
      },
    ],
  },
];

const PROGRAMS = [
  {
    status: "모집중",
    deadline: "~ 07.19",
    title: "지능형 앱 개발자 6기",
    meta: "6개월 · 정부지원",
    img: "/images/mainpage/now_recruiting/sk-rookies-dev-06.jpg",
    link: "https://www.ssra.kr/",
  },
  {
    status: "모집중",
    deadline: "~ 07.23",
    title: "AI·클라우드 엔지니어 6기",
    meta: "6개월 · 정부지원",
    img: "/images/mainpage/now_recruiting/lgcns-am-06.png",
    link: "https://lgcnscamp.kr/",
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
  {
    status: "예정",
    deadline: "모집 예정",
    title: "빅데이터 분석 전문가 과정",
    meta: "3개월 · 정부지원",
  },
];

const PROGRAM_CATEGORIES = ["전체", "모집중", "예정"];
const PROGRAMS_PER_PAGE = 4;

const WHY_VODA_TABS = [
  {
    id: "campus",
    label: "Campus",
    img: "/campus-3d.svg",
    kicker: "New Campus",
    title: "최적의 학습 환경에서 시작하는 교육",
    bullets: [
      "최신 강의실",
      "프로젝트룸",
      "세미나 공간",
      "학습 라운지",
    ],
    cta: "Campus 둘러보기",
    href: "/about",
  },
  {
    id: "metaverse",
    label: "Metaverse",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&h=750&fit=crop&auto=format",
    kicker: "Immersive Learning",
    title: "시공간 제약 없는 몰입형 협업 교육",
    bullets: [
      "ZEP 실시간 강의",
      "팀 프로젝트",
      "온라인 네트워킹",
      "몰입형 학습 경험",
    ],
    cta: "Metaverse 둘러보기",
    href: "#",
  },
  {
    id: "ailab",
    label: "AI Lab",
    img: "/images/mainpage/ai.jpeg",
    kicker: "AI Practice Environment",
    title: "실무 그대로의 AI 실습 환경",
    bullets: [
      "GPU 서버",
      "Cloud 실습",
      "LMS 연동",
      "프로젝트 기반 교육",
    ],
    cta: "AI Lab 둘러보기",
    href: "#",
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
  { name: "SK쉴더스", logo: "/images/mainpage/partners/skshieldus.logo.png" },
  { name: "LG CNS", logo: "/images/mainpage/partners/lgcns.jpg" },
  { name: "새싹(SeSAC)", logo: "/images/mainpage/partners/sesac.png" },
  { name: "신세계아이앤씨", logo: "/images/mainpage/partners/ssg.jpg" },
  { name: "더존비즈온", logo: "/images/mainpage/partners/douzone.png" },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [missionIdx, setMissionIdx] = useState(0);
  const [missionIn, setMissionIn] = useState(true);
  const [whyTab, setWhyTab] = useState(WHY_VODA_TABS[0].id);
  const whyWrapperRef = useRef<HTMLDivElement>(null);
  const [programCategory, setProgramCategory] = useState("전체");
  const [programPage, setProgramPage] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = whyWrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const idx = Math.min(
        WHY_VODA_TABS.length - 1,
        Math.floor(progress * WHY_VODA_TABS.length),
      );
      setWhyTab(WHY_VODA_TABS[idx].id);
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setProgramPage(0);
  }, [programCategory]);

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
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(28px) saturate(160%);
  -webkit-backdrop-filter: blur(28px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow:
    0 8px 35px rgba(14, 27, 82, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Service card: bright glass, hover fills brand blue */
.sc {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
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
  opacity:0;
  color:rgba(255,255,255,.9);
  transition: opacity .28s ease;
  font-size:.8125rem; line-height:1.65; margin-top:.75rem;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.sc:hover .sc-desc { opacity:1; }


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

.why-tab { transition: color .22s ease; }

@keyframes arrowNudge {
  0%, 100% { transform: translateX(0); }
  50%      { transform: translateX(4px); }
}
.why-cta-arrow { animation: arrowNudge 1.3s ease-in-out infinite; }
      `}</style>

      {/* ══════════════════════════════════════════════
          HERO — 미션 기반
      ══════════════════════════════════════════════ */}
     <section
  className="relative pt-17 pb-17 min-h-screen flex flex-col items-center justify-center text-center bg-white overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.35) 65%, #ffffff 100%), url('/images/mainpage/bg-2_ver2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <Container className="relative z-10 w-full flex flex-col items-center">
    {/* Rotating word + VODA logo */}
    <div className="flex items-center justify-center gap-3 flex-wrap mb-14">
      <span
        className={`mw ${missionIn ? "mw-in" : "mw-out"} font-suit font-extrabold leading-none ${MISSION_GRADIENTS[missionIdx]} bg-clip-text text-transparent`}
        style={{
          fontSize: "5.83rem",
          width: "3.2em",
          whiteSpace: "nowrap",
        }}
      >
        {MISSION_WORDS[missionIdx]}
      </span>
      <img
        src="/voda-logo-hero.svg"
        alt="VODA"
        className="object-contain"
        style={{ height: "5.1rem", width: "auto" }}
      />
    </div>

    {/* Supporting text — 20pt */}
    <p
      className="text-[#3d4a75] font-semibold leading-relaxed max-w-3xl"
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
          사업 영역
      ══════════════════════════════════════════════ */}
      <BusinessAreaCards />

      {/* ══════════════════════════════════════════════
    WHY VODA — 탭 기반 소개
══════════════════════════════════════════════ */}
      <div
        ref={whyWrapperRef}
        className="relative"
        style={{ height: `${WHY_VODA_TABS.length * 100}vh` }}
      >
        <section
          className="sticky top-0 z-10 min-h-screen flex items-center"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
          }}
        >
        <Container className="py-20">
          {/* 브랜드 라벨 */}
          <div className="pl-20 pr-20 mb-12">
            <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{
                fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
                letterSpacing: "-0.03em",
              }}
            >
              WHY VODA?
            </h2>
          </div>

          <div className="grid md:grid-cols-[140px_1fr] gap-8 md:gap-16 pl-20 pr-20">
            {/* 언더라인 텍스트 탭 */}
            <div className="flex md:flex-col md:justify-center gap-6 md:gap-7">
              {WHY_VODA_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setWhyTab(tab.id)}
                  className={`why-tab relative text-left font-sora text-sm font-semibold pb-2 transition-colors ${
                    whyTab === tab.id
                      ? "text-[#3566e8]"
                      : "text-[#0e1b52]/35 hover:text-[#0e1b52]/60"
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
                  <div className="rounded-2xl overflow-hidden aspect-4/2.5 max-w-md mx-auto w-full">
                    <img
                      src={tab.img}
                      alt={tab.label}
                      className={`w-full h-full ${tab.img.endsWith(".svg") ? "object-contain" : "object-cover"}`}
                    />
                  </div>

                  {/* 텍스트 */}
                  <div>
                    <p className="text-[11px] font-bold font-sora tracking-[0.2em] text-[#3566e8] uppercase mb-2">
                      {tab.kicker}
                    </p>
                    <h3
                      className="font-extrabold font-suit text-[#0e1b52] leading-snug mb-6"
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
                    <Link
                      href={tab.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#3566e8] hover:text-[#1a4acc] transition-colors"
                    >
                      {tab.cta}{" "}
                      <ChevronRight size={14} className="why-cta-arrow" />
                    </Link>
                  </div>
                </div>
              ),
            )}
          </div>
        </Container>
        </section>
      </div>

      {/* ══════════════════════════════════════════════
          NOW RECRUITING — 현재 모집 중인 교육과정
      ══════════════════════════════════════════════ */}
      <section>
        <Container className="py-20">
          <div className="flex items-end justify-between mb-8">
            <div className="pl-20 pr-20">
              <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
              <h2
                className="font-extrabold font-suit text-[#0e1b52]"
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                교육과정
              </h2>
            </div>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex items-center gap-2 mb-8 pl-20 pr-20">
            {PROGRAM_CATEGORIES.map((cat) => {
              const isActive = cat === programCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setProgramCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#3566e8] text-white"
                      : "bg-white text-[#5a6895] border border-[rgba(14,27,82,0.12)] hover:border-[#3566e8]/40 hover:text-[#0e1b52]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {(() => {
            const filtered =
              programCategory === "전체"
                ? PROGRAMS
                : PROGRAMS.filter((p) => p.status === programCategory);
            const totalPages = Math.max(1, Math.ceil(filtered.length / PROGRAMS_PER_PAGE));
            const currentPage = Math.min(programPage, totalPages - 1);
            const visible = filtered.slice(
              currentPage * PROGRAMS_PER_PAGE,
              currentPage * PROGRAMS_PER_PAGE + PROGRAMS_PER_PAGE,
            );

            return (
              <>
                <div className="pl-20 pr-20">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {visible.map((p) => (
                      <div key={p.title}>
                        {/* 상태 뱃지 + 마감일 */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full ${
                              p.status === "모집중"
                                ? "bg-[#DCFCE7] text-[#15803D]"
                                : "border border-[rgba(14,27,82,0.2)] text-[#5a6895]"
                            }`}
                          >
                            {p.status}
                          </span>
                          <span className="text-xs font-bold text-[#5a6895]">
                            {p.deadline}
                          </span>
                        </div>

                        {/* 포스터 이미지 자리 (세로형, A4 비율) */}
                        <div className="relative w-full aspect-210/297 bg-[#EEF2FF] rounded-lg overflow-hidden mb-4">
                          {p.img ? (
                            p.link ? (
                              <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full"
                              >
                                <Image
                                  src={p.img}
                                  alt={p.title}
                                  fill
                                  sizes="(min-width:1024px) 25vw, 50vw"
                                  className="object-cover"
                                />
                              </a>
                            ) : (
                              <Image
                                src={p.img}
                                alt={p.title}
                                fill
                                sizes="(min-width:1024px) 25vw, 50vw"
                                className="object-cover"
                              />
                            )
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-xs text-[#b8c3de] text-center leading-relaxed">
                                포스터 이미지
                                <br />
                                (세로형)
                              </span>
                            </div>
                          )}
                        </div>

                        {/* 제목 + 메타 */}
                        <h3
                          className="font-black font-suit text-[#0e1b52] mb-1"
                          style={{
                            fontSize: "1.1rem",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {p.title}
                        </h3>
                        <p className="text-sm text-[#5a6895] mb-2">
                          {p.meta}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 이전/다음 원형 화살표 버튼 — 포스터 하단 중앙 */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                      onClick={() =>
                        setProgramPage((currentPage - 1 + totalPages) % totalPages)
                      }
                      aria-label="이전 페이지"
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#3566e8] shadow-[0_1px_4px_rgba(14,27,82,0.1)] ring-1 ring-[rgba(14,27,82,0.08)] hover:text-[#1a4acc] transition-colors"
                    >
                      <ChevronLeft size={20} strokeWidth={2.75} />
                    </button>
                    <button
                      onClick={() => setProgramPage((currentPage + 1) % totalPages)}
                      aria-label="다음 페이지"
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#3566e8] shadow-[0_1px_4px_rgba(14,27,82,0.1)] ring-1 ring-[rgba(14,27,82,0.08)] hover:text-[#1a4acc] transition-colors"
                    >
                      <ChevronRight size={20} strokeWidth={2.75} />
                    </button>
                  </div>
                )}
              </>
            );
          })()}
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          WHAT WE DO — 3×2 점선 카드
      ══════════════════════════════════════════════ */}
      <section>
        <Container>
          <div className="py-20 pl-14 sm:pl-18 pr-14 sm:pr-18">
            <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
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
          className="relative overflow-hidden py-24"
          style={{
            background:
              "linear-gradient(135deg, #F3F6FF 0%, #E7EEFF 45%, #D6E3FF 100%)",
          }}
        >
          {/* 배경 데코 블롭 */}
          <div
            className="absolute inset-y-0 left-0 pointer-events-none"
            style={{
              width: "55%",
              background: "radial-gradient(ellipse 100% 80% at 0% 50%, rgba(53,102,232,0.20) 0%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 pointer-events-none"
            style={{
              width: "55%",
              background: "radial-gradient(ellipse 100% 80% at 100% 50%, rgba(53,102,232,0.18) 0%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />

          <Container className="relative z-10">
            {SOLUTIONS.map((group, gi) => (
               <div
                 key={group.groupTitle}
                 className={`glass-panel rounded-[28px] px-14 sm:px-18 py-10 sm:py-12 ${gi > 0 ? "mt-8" : ""}`}
               >
                  {/* 그룹 타이틀 */}
                  <div className="text-center mb-8">
                    <h3
                      className="break-keep font-black font-suit text-[#0e1b52] mb-1"
                      style={{
                        fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {group.groupTitle}
                    </h3>
                    {group.groupSubtitle && (
                      <p className="break-keep text-sm text-[#5a6895]">
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
                          className="sc-title break-keep font-black font-suit text-[#0e1b52] mb-1 leading-tight"
                          style={{
                            fontSize: "clamp(1rem,1.6vw,1.25rem)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {s.title}
                        </h3>
                        <p className="sc-en break-keep text-xs text-[#5a6895] font-medium tracking-wide">
                          {s.en}
                        </p>
                        <p className="sc-desc break-keep">{s.desc}</p>
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
      <section className="py-24">
        <Container>
          <div className="pl-20 pr-20">
            <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52] mb-10"
              style={{
                fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
                letterSpacing: "-0.03em",
              }}
            >
              파트너스
            </h2>
          </div>
        </Container>

        {/* 풀블리드 마퀴 영역 (좌우 fade 포함) */}
        <div className="marquee-fade relative overflow-hidden">
          <div className="marquee-wrap overflow-hidden">
            <div className="marquee-track">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="pp shrink-0 w-[260px] h-[110px] mx-2.5 flex items-center justify-center"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-w-[85%] max-h-[65%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEWS
      ══════════════════════════════════════════════ */}
      <section className="py-24">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div className="pl-20 pr-20">
              <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
              <h2
                className="font-extrabold font-suit text-[#0e1b52]"
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                최신 소식
              </h2>
            </div>
            <Link
              href="/news"
              className="hidden md:flex items-center gap-1 text-sm font-semibold text-[#5a6895] hover:text-[#0e1b52] transition-colors pb-1"
            >
              더보기 <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 pl-20 pr-20">
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