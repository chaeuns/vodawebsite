// app/business/consulting/page.tsx
// VODA · 컨설팅(Consulting) 페이지
// 구조: 01 히어로 → 02 4대 컨설팅 영역(계단형 스택 카드) → 03 프로세스 → 04 Bottom CTA
// 컬러: 히어로는 네이비(#0B1130) + 블루(#3D5AFE), 02·03번 섹션은 화이트

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/Container";

const consultingAreas = [
  {
    no: "01",
    title: "AI·AX 전략 수립",
    desc: ["현황 진단 후", "로드맵 설계"],
    subtext: [
      "기업의 AI 도입 현황과 데이터 역량을 진단해 맞춤형 전략을 수립합니다.",
      "산업 특성을 반영한 단계별 실행 로드맵으로 AI 전환을 이끕니다.",
    ],
    rgb: "130,157,235",
    accent: "#5B7FE0",
    glow: "rgba(91,127,224,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 sm:h-14 sm:w-14">
        <path
          d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    no: "02",
    title: "공공·정부 사업",
    desc: ["기획·제안·", "수행 지원"],
    subtext: [
      "정부 부처와 공공기관 사업을 기획부터 제안까지 함께합니다.",
      "다수의 국책과제 수행 경험을 바탕으로 성공적인 사업화를 돕습니다.",
    ],
    rgb: "150,138,224",
    accent: "#6B5FC7",
    glow: "rgba(107,95,199,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 sm:h-14 sm:w-14">
        <path
          d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    no: "03",
    title: "교육 체계 설계",
    desc: ["인재 양성 계획·", "커리큘럼"],
    subtext: [
      "조직의 성장 단계와 직무별 역량 요구를 분석해 맞춤형 인재 양성 전략을 수립합니다.",
      "AI 리터러시부터 실무 역량까지 아우르는 교육 커리큘럼과 운영 체계를 함께 설계합니다.",
    ],
    rgb: "179,148,224",
    accent: "#9169C9",
    glow: "rgba(145,105,201,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 sm:h-14 sm:w-14">
        <path
          d="M4 5c2-1 5-1 8 1 3-2 6-2 8-1v13c-2-1-5-1-8 1-3-2-6-2-8-1V5z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path d="M12 6v13" stroke="currentColor" strokeWidth="2.1" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "기술 도입 지원",
    desc: ["AI·클라우드·LMS", "도입 지원"],
    subtext: [
      "AI, 클라우드, LMS 등 최신 기술 도입에 필요한 설계를 지원합니다.",
      "안정적인 구축부터 운영 정착까지 성공적인 도입을 책임집니다.",
    ],
    rgb: "196,150,209",
    accent: "#A869B8",
    glow: "rgba(168,105,184,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 sm:h-14 sm:w-14">
        <path
          d="M12 2c2.8 1.4 4.6 4 5 7.5-.4 3.5-2.2 6.1-5 7.5-2.8-1.4-4.6-4-5-7.5.4-3.5 2.2-6.1 5-7.5z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="2.1" />
        <path
          d="M9 16.5 7 21l3.5-1.8M15 16.5l2 4.5-3.5-1.8"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "현황 진단",
    desc: "조직·역량·데이터 분석",
    from: "#3D5AFE",
    to: "#6C8CFF",
    glow: "rgba(61,90,254,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
        <path d="M19 19L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "전략 및 설계",
    desc: "로드맵·실행 전략 수립",
    from: "#2B3FE0",
    to: "#5B6EFF",
    glow: "rgba(43,63,224,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path d="M4 19V9l6-4 6 4v10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 19v-6h4v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "실행·도입",
    desc: "시스템·교육 실행",
    from: "#7B3FE4",
    to: "#3D5AFE",
    glow: "rgba(123,63,228,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M13 3L4 14h6l-1 7 9-11h-6l1-7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "성과·사후관리",
    desc: "성과 측정·지속 관리",
    from: "#0EA5B7",
    to: "#3D5AFE",
    glow: "rgba(14,165,183,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="6" y="12" width="3" height="7" rx="1" fill="currentColor" />
        <rect x="11" y="8" width="3" height="11" rx="1" fill="currentColor" />
        <rect x="16" y="4" width="3" height="15" rx="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ConsultingPage() {
  return (
    <main className="bg-white">
      {/* 01. Hero — 정부 교육 사업 히어로 디자인 재사용 */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-1 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.1s forwards; }
        .hero-fade-2 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.3s forwards; }
        .hero-fade-3 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.5s forwards; }
      `}</style>

      <section
        className="relative flex items-center pt-16 overflow-hidden bg-[#0D1B40]"
        style={{ minHeight: 420 }}
      >
        <Image src="/images/Frame%205.jpg" alt="" fill priority className="object-cover" />
        <div className="relative max-w-[1100px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 py-6 md:py-8">
          <div className="-translate-y-5">
            <p className="hero-fade-1 text-[#0064DB] text-[13px] md:text-[15px] font-medium">
              <span className="text-[#00163A]">사업 영역 &gt;</span> 컨설팅
            </p>

            <h1 className="hero-fade-2 font-bold mt-4 leading-[1.3] text-[18px] sm:text-[22px] md:text-[29px] lg:text-[43px] whitespace-normal md:whitespace-nowrap break-keep">
              <span className="text-[#00163A]">성공적인 AI 전환을 위한 토탈 솔루션</span>
            </h1>
          </div>

          <p className="hero-fade-3 text-[#486C98] mt-4 leading-[1.6] text-[13px] md:text-[15px] max-w-[90%] md:max-w-[520px]">
            전략 수립부터 시스템 도입, 인재 양성까지.
            <br />
            성공적인 AI 전환(AX)을 위한 컨설팅을 제공합니다.
          </p>
        </div>
      </section>

      {/* 02. 4대 컨설팅 영역 — 화면 꽉 찬 컬러 밴드가 스크롤에 따라 겹겹이 덮이는 스택 */}
      <section className="bg-white pt-24">
        <Container>
          <div className="mb-33 pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              4대 컨설팅 영역
            </h2>
          </div>
        </Container>

        <div className="relative">
          {consultingAreas.map((area, i) => (
            <div
              key={area.no}
              id={`area-${area.no}`}
              className="sticky flex min-h-70 items-start pt-10 text-white sm:min-h-80 sm:pt-12"
              style={{
                top: `${68 + i * 108}px`,
                zIndex: i + 1,
                background: `linear-gradient(135deg, ${area.accent}, rgb(${area.rgb}))`,
              }}
            >
              <Container className="w-full">
                <div className="flex flex-col items-start justify-between gap-6 pl-20 pr-20 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="flex flex-wrap items-baseline gap-x-4 font-extrabold font-suit">
                      <span
                        className="text-white/60"
                        style={{ fontSize: "clamp(1.6rem,2.6vw,2.2rem)", letterSpacing: "-0.02em" }}
                      >
                        {area.no}
                      </span>
                      <span
                        style={{ fontSize: "clamp(1.7rem,3vw,2.6rem)", letterSpacing: "-0.03em" }}
                      >
                        {area.title}
                      </span>
                    </h3>
                    <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                      {area.desc.join(" ")}
                    </p>
                    <p className="mt-2 max-w-2xl break-keep text-sm leading-relaxed text-white/75 sm:text-base">
                      {area.subtext.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx < area.subtext.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)] sm:h-28 sm:w-28">
                    {area.icon}
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </div>
      </section>

      {/* 03. 프로세스 */}
      <section className="relative overflow-hidden bg-white pt-24 pb-41.5">
        <Container className="relative">
          <div className="pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              프로세스
            </h2>
          </div>

          <div className="relative mt-14 grid gap-6 sm:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="group relative">
                <div
                  className="relative rounded-3xl border px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
                  style={{
                    borderColor: "rgba(22,24,29,0.07)",
                    background: "#F8F9FC",
                  }}
                >
                  <div
                    className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                      boxShadow: `0 4px 10px -4px ${p.glow}`,
                    }}
                  >
                    {p.icon}
                  </div>

                  <p
                    className="relative z-10 mt-5 text-xs font-semibold tracking-widest"
                    style={{ color: p.to }}
                  >
                    {p.step}
                  </p>
                  <p className="relative z-10 mt-2 text-base font-bold text-[#0F1B4C]">
                    {p.title}
                  </p>
                  <p className="relative z-10 mt-1.5 text-xs leading-relaxed text-gray-500">
                    {p.desc}
                  </p>
                </div>

                {i < process.length - 1 && (
                  <span
                    className="absolute top-1/2 right-[-29.5px] hidden -translate-y-1/2 items-center justify-center text-[#2563EB] sm:flex"
                    aria-hidden
                  >
                    <ChevronRight className="h-8.75 w-8.75" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04. Bottom CTA */}
      <section className="bg-[#0D1B40] py-[80px] relative z-50 -mt-10 shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-white text-[26px] md:text-[30px] font-bold leading-[1.4]">
            지금 무료 컨설팅을 신청해보세요
          </p>
          <p className="text-[#93C5FD] text-[14px] md:text-[15px] mt-3">
            VODA는 전략 수립부터 시스템 도입, 인재 양성까지 성공적인 AI 전환(AX)을 위한 컨설팅을 제공합니다.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#3D5AFE] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c46e0]"
          >
            컨설팅 상담 신청하기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
