// app/business/consulting/page.tsx
// VODA · 컨설팅(Consulting) 페이지
// 구조: 01 히어로 → 02 4대 컨설팅 영역(겹치는 원형 다이어그램) → 03 프로세스 → 04 Bottom CTA
// 컬러: 히어로/프로세스는 네이비(#0B1130) + 블루(#3D5AFE), 02번 섹션만 밝은 그라데이션

import Image from "next/image";
import Container from "@/app/components/Container";

const heroTags = ["AI·AX 전략 수립", "공공·정부 사업", "교육 체계 설계", "기술 도입 지원"];

// public/4_consulting_areas.png 내 4개 원의 중심 좌표(이미지 700×191 기준 %) — 아이콘 정렬용
const circlePositions = [
  { left: "12.9%", top: "47.1%" },
  { left: "37.1%", top: "52.9%" },
  { left: "62.9%", top: "48.2%" },
  { left: "87.1%", top: "52.9%" },
];

const consultingAreas = [
  {
    no: "01",
    title: "AI·AX 전략 수립",
    desc: ["현황 진단 후", "로드맵 설계"],
    rgb: "61,90,254", // #3D5AFE — 프로세스 STEP 01과 동일 계열
    accent: "#3D5AFE",
    glow: "rgba(61,90,254,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 sm:h-8 sm:w-8">
        <path
          d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"
          stroke="currentColor"
          strokeWidth="1.7"
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
    rgb: "43,63,224", // #2B3FE0 — 프로세스 STEP 02와 동일 계열
    accent: "#2B3FE0",
    glow: "rgba(43,63,224,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 sm:h-8 sm:w-8">
        <path
          d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.7"
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
    rgb: "123,63,228", // #7B3FE4 — 프로세스 STEP 03과 동일 계열
    accent: "#7B3FE4",
    glow: "rgba(123,63,228,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 sm:h-8 sm:w-8">
        <path
          d="M4 5c2-1 5-1 8 1 3-2 6-2 8-1v13c-2-1-5-1-8 1-3-2-6-2-8-1V5z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M12 6v13" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "기술 도입 지원",
    desc: ["AI·클라우드·LMS", "도입 지원"],
    rgb: "14,165,183", // #0EA5B7 — 프로세스 STEP 04와 동일 계열
    accent: "#0B7F8C",
    glow: "rgba(14,165,183,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 sm:h-8 sm:w-8">
        <path
          d="M12 2c2.8 1.4 4.6 4 5 7.5-.4 3.5-2.2 6.1-5 7.5-2.8-1.4-4.6-4-5-7.5.4-3.5 2.2-6.1 5-7.5z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M9 16.5 7 21l3.5-1.8M15 16.5l2 4.5-3.5-1.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const process = [
  {
    step: "STEP 01",
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
    step: "STEP 02",
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
    step: "STEP 03",
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
    step: "STEP 04",
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
      {/* 01. Hero */}
      <section className="relative overflow-hidden bg-[#0B1130] pt-20 pb-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 0%, rgba(61,90,254,0.35) 0%, rgba(11,17,48,0) 60%)",
          }}
        />
        <Container className="relative">
          <div className="pl-20 pr-20">
            <p className="mb-4 text-sm font-semibold tracking-widest text-[#8FA6FF]">
              CONSULTING <span className="text-white/40">—</span> 컨설팅
            </p>
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h1
              className="font-extrabold font-suit leading-tight text-white"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              컨설팅{" "}
              <span className="bg-gradient-to-r from-[#8FA6FF] to-white bg-clip-text text-transparent">
                (Consulting)
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              전략 수립부터 시스템 도입, 인재 양성까지. 성공적인 AI 전환(AX)을 위한
              토탈 솔루션
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-[#8FA6FF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 02. 4대 컨설팅 영역 — 겹치는 원형 이미지 + 아이콘/텍스트 */}
      <section className="bg-linear-to-b from-[#EEF2FF] to-white py-24">
        <Container>
          <div className="mb-16 pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              4대 컨설팅 영역
            </h2>
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-10">
            {/* 원 이미지 + 아이콘 오버레이 */}
            <div className="relative w-full" style={{ aspectRatio: "700 / 191" }}>
              <Image
                src="/4_consulting_areas.png"
                alt=""
                fill
                className="object-contain"
                sizes="(min-width: 768px) 800px, 100vw"
              />
              {consultingAreas.map((area, i) => (
                <div
                  key={area.no}
                  className="absolute text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
                  style={{
                    left: circlePositions[i].left,
                    top: circlePositions[i].top,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {area.icon}
                </div>
              ))}
            </div>

            {/* 아이콘 하단 텍스트 */}
            <div className="mt-8 grid grid-cols-4 gap-x-2 gap-y-8 sm:mt-10 sm:gap-x-4">
              {consultingAreas.map((area) => (
                <div key={area.no} className="text-center">
                  <p
                    className="text-[10px] font-bold tracking-widest sm:text-xs"
                    style={{ color: area.accent }}
                  >
                    STEP {area.no}
                  </p>
                  <p className="mt-1.5 text-xs font-bold text-[#0F1B4C] sm:text-base">
                    {area.title}
                  </p>
                  <p className="mt-1.5 hidden text-xs leading-relaxed text-gray-500 sm:block">
                    {area.desc[0]}
                    <br />
                    {area.desc[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 03. 프로세스 */}
      <section className="relative overflow-hidden bg-[#080C24] py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 50% at 85% 10%, rgba(123,63,228,0.25) 0%, rgba(8,12,36,0) 60%), radial-gradient(50% 50% at 10% 90%, rgba(14,165,183,0.2) 0%, rgba(8,12,36,0) 60%)",
          }}
        />
        <Container className="relative">
          <div className="pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-white"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              프로세스
            </h2>
          </div>

          <div className="relative mt-14 grid gap-6 sm:grid-cols-4">
            {/* connecting line behind cards */}
            <div className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-linear-to-r from-transparent via-[#3D5AFE]/50 to-transparent sm:block" />

            {process.map((p, i) => (
              <div key={p.step} className="group relative">
                <div
                  className="relative rounded-3xl border border-white/10 bg-white/4 px-6 py-8 text-center backdrop-blur transition-transform duration-300 hover:-translate-y-2"
                  style={{
                    boxShadow: `0 24px 48px -20px ${p.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                  }}
                >
                  <div
                    className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                      boxShadow: `0 10px 24px -8px ${p.glow}`,
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
                  <p className="relative z-10 mt-2 text-base font-bold text-white">{p.title}</p>
                  <p className="relative z-10 mt-1.5 text-xs leading-relaxed text-white/50">
                    {p.desc}
                  </p>
                </div>

                {i < process.length - 1 && (
                  <span
                    className="absolute -right-5.5 top-14 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0B1130] text-sm text-[#8FA6FF] sm:flex"
                    aria-hidden
                  >
                    →
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

          <button className="mt-7 bg-[#2563EB] text-white text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors">
            컨설팅 상담 신청하기 →
          </button>
        </div>
      </section>
    </main>
  );
}
