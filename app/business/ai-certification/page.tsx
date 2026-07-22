// app/business/ai-certification/page.tsx
// VODA · AI 자격인증 상세 페이지
// 구조: 첨부 와이어프레임(사업영역 상세) 참고
// 컬러: VODA Campus 히어로 팔레트(네이비 + 블루) 기반 + 섹션별 의미에 맞춘 컬러 코딩

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Container from "@/app/components/Container";

const track = [
  {
    eyebrow: "Scenario Based",
    title: "문제 해결형 평가",
    desc: "실제 비즈니스 시나리오를 기반으로 AI 도구 활용 능력을 측정합니다. 단순 지식이 아닌, 실무 문제 해결 역량을 객관적으로 평가합니다.",
    tags: ["시나리오 기반", "실무 적용", "문제 해결"],
    hex: "#3D5AFE",
    rgb: "61,90,254",
    glow: "rgba(61,90,254,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M8.2 7.2L15.8 11M8.2 16.8L15.8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    eyebrow: "Competency Diagnosis",
    title: "5대 영역 역량 진단",
    desc: "AI 활용의 5대 핵심 영역을 체계적으로 분석하여 개인별·조직별 역량 수준을 입체적으로 진단합니다.",
    tags: ["5대 영역", "역량 분석", "조직 진단"],
    hex: "#7B3FE4",
    rgb: "123,63,228",
    glow: "rgba(123,63,228,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 3L20 9.5L17 19H7L4 9.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path
          d="M12 12L12 3M12 12L20 9.5M12 12L17 19M12 12L7 19M12 12L4 9.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

const coreAreas = [
  {
    no: "01",
    title: "AI 이해",
    desc: "AI 기초 개념 및 원리 이해",
    hex: "#3D5AFE",
    rgb: "61,90,254",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 6c-1.5-1-3.5-1.5-5-1.5S3.5 5 3 5.5v13c1.5-1 3-1.5 4-1.5s3 .5 5 1.5m0-13c1.5-1 3.5-1.5 5-1.5s3.5.5 4 1v13c-1.5-1-3-1.5-4-1.5s-3.5.5-5 1.5m0-13v13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    no: "02",
    title: "AI 활용",
    desc: "실무 AI 도구 활용 능력",
    hex: "#7B3FE4",
    rgb: "123,63,228",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    no: "03",
    title: "데이터 리터러시",
    desc: "데이터 해석·분석 역량",
    hex: "#0EA5B7",
    rgb: "14,165,183",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="6" y="12" width="3" height="7" rx="1" fill="currentColor" />
        <rect x="11" y="8" width="3" height="11" rx="1" fill="currentColor" />
        <rect x="16" y="4" width="3" height="15" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "AI 윤리",
    desc: "AI 윤리 및 안전한 활용",
    hex: "#F59E0B",
    rgb: "245,158,11",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    no: "05",
    title: "문제 해결",
    desc: "AI 기반 비즈니스 문제 해결",
    hex: "#E2437E",
    rgb: "226,67,126",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11.2c.6.4 1 1.1 1 1.8h4c0-.7.4-1.4 1-1.8A6 6 0 0012 3z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const values = [
  {
    label: "Insight Report",
    title: "인사이트 리포트",
    desc: "개인·조직의 AI 역량을 다각도로 분석한 인사이트 리포트를 제공하여 데이터 기반의 역량 관리를 지원합니다.",
    hex: "#3D5AFE",
    rgb: "61,90,254",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M6 3h9l3 3v15H6V3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 13v4M12 10v7M15 14v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Verified Standard",
    title: "검증된 역량 스탠다드",
    desc: "자체 평가 알고리즘을 통한 인증 시스템으로 AI 활용 역량을 객관적으로 증명하고 조직의 디지털 전문성을 확립합니다.",
    hex: "#7B3FE4",
    rgb: "123,63,228",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3l2.2 1.6 2.7-.2 1 2.5 2.4 1.3-.6 2.7.6 2.7-2.4 1.3-1 2.5-2.7-.2L12 21l-2.2-1.6-2.7.2-1-2.5-2.4-1.3.6-2.7-.6-2.7 2.4-1.3 1-2.5 2.7.2L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12.5l2 2 4-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Talent Management",
    title: "인재 관리 효율화",
    desc: "채용·승진·배치 시 인증 결과를 활용하여 데이터 기반 의사결정을 지원합니다.",
    hex: "#0EA5B7",
    rgb: "14,165,183",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="17" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M15.5 13.3c2.7.3 4.9 2.4 5.5 5.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "STEP 1",
    title: "도입 상담",
    desc: "조직 현황 파악 및 트랙 선택",
    from: "#3D5AFE",
    to: "#6C8CFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 5h16v11H8l-4 4V5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "STEP 2",
    title: "평가 설계",
    desc: "맞춤형 평가 문항 및 시나리오 구성",
    from: "#5B39D6",
    to: "#8B6BFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 19V9l6-4 6 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 19v-6h4v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "STEP 3",
    title: "평가 시행",
    desc: "온라인/오프라인 평가 진행",
    from: "#7B3FE4",
    to: "#B98CFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "STEP 4",
    title: "결과 리포트",
    desc: "인사이트 리포트 제공 및 인증서 발급",
    from: "#0EA5B7",
    to: "#3D5AFE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="6" y="12" width="3" height="7" rx="1" fill="currentColor" />
        <rect x="11" y="8" width="3" height="11" rx="1" fill="currentColor" />
        <rect x="16" y="4" width="3" height="15" rx="1" fill="currentColor" />
      </svg>
    ),
  },
];

const getStarted = [
  {
    label: "Enterprise",
    title: "기업 도입 문의",
    desc: "전사적 AI 역량 진단이 필요한 기업을 위한 맞춤형 도입 상담을 제공합니다.",
    hex: "#3D5AFE",
    rgb: "61,90,254",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M5 21V5a1 1 0 011-1h6a1 1 0 011 1v16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M13 21V9h5a1 1 0 011 1v11" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path
          d="M8 7h.01M8 10h.01M8 13h.01M8 16h.01M16 12h.01M16 15h.01M16 18h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Custom Design",
    title: "맞춤 설계 상담",
    desc: "직무·부서별 특화된 평가 기준이 필요한 경우 맞춤 설계 상담을 진행합니다.",
    hex: "#7B3FE4",
    rgb: "123,63,228",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 6h11M4 12h7M4 18h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17" cy="6" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="13" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Pilot Program",
    title: "파일럿 프로그램",
    desc: "소규모 파일럿으로 먼저 경험해보고 전사 도입 여부를 결정하실 수 있습니다.",
    hex: "#0EA5B7",
    rgb: "14,165,183",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 3c2.5 1.5 4 4.3 4 8 0 2-.7 3.7-1.6 5H9.6C8.7 14.7 8 13 8 11c0-3.7 1.5-6.5 4-8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="1.5" fill="currentColor" />
        <path
          d="M9 16l-2.5 2.5M15 16l2.5 2.5M10.5 19l-.7 2M13.5 19l.7 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function AICertificationPage() {
  return (
    <main className="break-keep bg-white">
      {/* Hero */}
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
        <Image
          src="/images/Frame%205.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="relative max-w-[1100px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 py-6 md:py-8">
          <div className="-translate-y-5">
            <p
              className="hero-fade-1 text-[#0064DB] text-[13px] md:text-[15px] font-medium"
            >
              <span className="text-[#00163A]">사업 영역 &gt;</span> AI 자격인증
            </p>

            <h1 className="hero-fade-2 font-bold mt-4 leading-[1.3] text-[18px] sm:text-[22px] md:text-[29px] lg:text-[43px] whitespace-normal md:whitespace-nowrap break-keep">
              <span className="text-[#00163A]">
                데이터로 증명하는 AI 역량
              </span>
            </h1>
          </div>

          <p className="hero-fade-3 text-[#486C98] mt-4 leading-[1.6] text-[13px] md:text-[15px] max-w-[90%] md:max-w-[520px]">
            시나리오 기반 평가로 AI 활용 역량을 객관적으로 진단하고 인증합니다.
            <br />
            개인과 조직의 성장을 데이터로 추적하며 신뢰할 수 있는 기준을 제시합니다.
          </p>
        </div>
      </section>

      {/* 인증 체계 */}
      <section className="py-10">
        <Container>
          <div className="pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              인증 체계
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-500">
              일률적인 평가 기준에서 벗어나 조직의 비즈니스 목적과 직무 특성에 최적화된
              평가 방식을 제안합니다.
            </p>

            <div className="mt-8 grid overflow-hidden rounded-2xl border border-[#E4E9F7] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 sm:grid-cols-2">
              <div className="relative min-h-[320px] overflow-hidden bg-[#0B1130]">
                <Image
                  src="/images/ai-certification/aI-certification.png"
                  alt="AI 역량 평가 시스템"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% -40px" }}
                />
              </div>
              <div className="flex flex-col justify-center p-10">
                <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">
                  AI CERTIFICATION
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0F1B4C]">
                  조직에 최적화된
                  <br />
                  AI 역량 평가 시스템
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  실전 중심의 성과 측정이 필요한 현장부터 전사적 역량 진단이 필요한 의사
                  결정 단계까지, 귀사의 상황에 가장 전략적인 트랙을 선택하여 AI 전환의
                  객관적인 기준을 세울 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 두 가지 인증 트랙 */}
      <section className="py-10">
        <Container>
          <div className="pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              두 가지 인증 트랙
            </h2>
            <p className="mt-3 text-sm text-gray-500">조직의 목적에 맞는 최적의 평가 방식을 선택하세요.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {track.map((t) => (
                <div
                  key={t.title}
                  className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-[#E4E9F7] bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div
                    className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.hex}, rgba(${t.rgb},0.7))`,
                      boxShadow: `0 10px 20px -8px ${t.glow}`,
                    }}
                  >
                    {t.icon}
                  </div>
                  <p className="relative z-10 mt-4 text-xs font-semibold tracking-widest" style={{ color: t.hex }}>
                    {t.eyebrow}
                  </p>
                  <h3 className="relative z-10 mt-2 text-lg font-bold text-[#0F1B4C]">{t.title}</h3>
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-500">{t.desc}</p>
                  <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{ background: `rgba(${t.rgb},0.1)`, color: t.hex }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5대 핵심 영역 */}
      <section className="py-10">
        <Container>
          <div className="pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              AI 활용 5대 핵심 영역
            </h2>
            <p className="mt-3 text-sm text-gray-500">AI 역량의 5가지 핵심 영역을 체계적으로 진단합니다.</p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {coreAreas.map((a) => (
                <div
                  key={a.no}
                  className="group relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-xl border border-[#E4E9F7] p-7 text-center transition hover:-translate-y-1"
                  style={{ boxShadow: `0 14px 28px -20px rgba(${a.rgb},0.5)` }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-1"
                    style={{ background: a.hex }}
                    aria-hidden
                  />
                  <div
                    className="mx-auto flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: `rgba(${a.rgb},0.12)`, color: a.hex }}
                  >
                    {a.icon}
                  </div>
                  <p className="mt-3 text-xs font-semibold" style={{ color: a.hex }}>
                    {a.no}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0F1B4C]">{a.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 비즈니스 가치 */}
      <section className="bg-[#F7F9FC] py-16">
        <Container>
          <div className="pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              인증이 만드는 비즈니스 가치
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="min-h-[300px] rounded-2xl bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `rgba(${v.rgb},0.1)`, color: v.hex }}
                  >
                    {v.icon}
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-widest" style={{ color: v.hex }}>
                    {v.label}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-[#0F1B4C]">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 인증 프로세스 */}
      <section className="relative overflow-hidden bg-[#080C24] py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 50% at 85% 10%, rgba(123,63,228,0.25) 0%, rgba(8,12,36,0) 60%), radial-gradient(50% 50% at 10% 90%, rgba(14,165,183,0.2) 0%, rgba(8,12,36,0) 60%)",
          }}
          aria-hidden
        />
        <Container className="relative">
          <div className="pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-white"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              인증 프로세스
            </h2>

            <div className="relative mt-10 grid gap-6 sm:grid-cols-4">
              <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-linear-to-r from-transparent via-[#3D5AFE]/50 to-transparent sm:block" />
              {process.map((p, i) => (
                <div key={p.step} className="group relative text-center">
                  <div
                    className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                      boxShadow: `0 12px 26px -10px ${p.from}99`,
                    }}
                  >
                    {p.icon}
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-widest" style={{ color: p.to }}>
                    {p.step}
                  </p>
                  <p className="mt-2 text-base font-bold text-white">{p.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50">{p.desc}</p>

                  {i < process.length - 1 && (
                    <span
                      className="absolute -right-5.5 top-7 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0B1130] text-sm text-[#8FA6FF] sm:flex"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Get Started */}
      <section className="py-16">
        <Container>
          <div className="pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="break-keep font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              우리 조직에 맞는 인증 프로그램이 궁금하신가요?
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {getStarted.map((g) => (
                <div
                  key={g.title}
                  className="group flex min-h-[340px] flex-col items-center justify-center rounded-2xl border border-[#E4E9F7] p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{
                      background: `linear-gradient(135deg, ${g.hex}, rgba(${g.rgb},0.7))`,
                      boxShadow: `0 10px 20px -8px rgba(${g.rgb},0.5)`,
                    }}
                  >
                    {g.icon}
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-widest" style={{ color: g.hex }}>
                    {g.label}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-[#0F1B4C]">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{g.desc}</p>
                  <button
                    className="mt-5 rounded-full border px-5 py-2 text-sm font-medium transition hover:text-white hover:[background-color:var(--btn-color)]"
                    style={{ borderColor: g.hex, color: g.hex, ["--btn-color" as string]: g.hex } as CSSProperties}
                  >
                    자세히 보기 →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0B1130] px-6 py-20 text-center sm:px-10 lg:px-24">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          AI 역량 인증, 지금 시작하세요
        </h2>
        <p className="mt-4 text-sm text-white/60">
          VODA의 전문가가 귀사에 맞는 인증 프로그램을 제안해드립니다.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-[#3D5AFE] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c46e0]"
        >
          도입 문의하기 →
        </Link>
      </section>
    </main>
  );
}
