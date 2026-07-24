"use client";

import { Bus, Car, Train } from "lucide-react";
import OurGoals from "./components/OurGoals";
import HeroScene from "./components/HeroScene";
import FadeInSection from "./components/FadeInSection";

const NAVY = "#1a3570";
const BLUE = "#2d6bff";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Noto Sans KR', 'Outfit', sans-serif" }}>

{/* ── 01. COMPANY HERO ────────────────────────────── */}
      <HeroScene />

      {/* ── 02. CEO GREETING ────────────────────────────── */}
      <FadeInSection>
      <section className="pt-36 pb-24 bg-white px-6 sm:px-10 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
          <h2
            className="hidden md:block md:text-5xl font-black leading-tight md:whitespace-nowrap"
            style={{
              color: NAVY,
              letterSpacing: "-0.025em",
            }}
          >
            "기술과 사람이 함께 성장하는 곳, <span style={{ color: BLUE }}>VODA</span>"
          </h2>
          <h2
            className="md:hidden font-black leading-tight"
            style={{
              color: NAVY,
              letterSpacing: "-0.025em",
              fontSize: "clamp(20px, 6.2vw, 30px)",
            }}
          >
            <span className="block whitespace-nowrap">"기술과 사람이 함께 성장하는 곳,</span>
            <span className="block whitespace-nowrap"><span style={{ color: BLUE }}>VODA</span>"</span>
          </h2>

          <div className="space-y-1 text-gray-600 leading-relaxed text-base md:text-lg">
            <p className="md:whitespace-nowrap">
              우리는 데이터와 AI로 기업의 새로운 가능성을 만들어왔습니다.
            </p>
            <p className="hidden md:block md:whitespace-nowrap">
              이제 개발(Works)과 교육(Campus)을 하나로 잇는 VODA로, 기술과 사람을 함께 성장시키는 파트너가 되겠습니다.
            </p>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* ── 03. OUR GOALS ──────────────────────────────── */}
      <FadeInSection>
        <OurGoals />
      </FadeInSection>

     {/* ── 04. DIRECTIONS ──────────────────────────────── */}
     <FadeInSection>
<section className="py-24 bg-white px-6 sm:px-10 lg:px-24">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12">
      <h2
        className="text-3xl md:text-4xl font-black"
        style={{ color: NAVY, letterSpacing: "-0.025em" }}
      >
        오시는 길
      </h2>
    </div>

    {/* 지도 (실제 이미지, 말풍선은 이미지 안에 이미 포함되어 있음) */}

<a
  href="https://naver.me/GsBKqXjt"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full max-w-6xl mx-auto rounded-3xl mb-10 overflow-hidden"
>
  <img
    src="/voda_map.png"
    alt="VODA 오시는 길 지도"
    className="w-full h-auto object-cover"
  />
</a>

    {/* 하단 정보: 지하철 / 버스 / 자차 */}
<div className="max-w-6xl mx-auto space-y-6">
  {[
    {
      icon: <Train size={20} />,
      label: "지하철 이용 시",
      lines: [
        "신당역 6번 출구에서 도보 4분",
        "청구역 2번 출구에서 도보 5분",
      ],
    },
    {
      icon: <Bus size={20} />,
      label: "버스 이용 시",
      lines: [
        "142번, 147번 : 신당누리센터.신당동떡볶이타운 하차 후 도보 2분",
        "202번 : 신당역 1번 출구.서울중앙시장 하차 후 도보 8분",
      ],
    },
    {
      icon: <Car size={20} />,
      label: "자차 이용 시",
      lines: ["네비게이션에 '서울 중구 다산로36길 11' 입력"],
    },
  ].map((block, i) => (
    <div
      key={block.label}
      className="p-7 rounded-2xl border flex flex-col sm:flex-row sm:items-start gap-4"
      style={{
        borderColor: "rgba(26,53,112,0.08)",
        background: "#fafbff",
      }}
    >
      <div className="flex items-center gap-2 sm:w-52 shrink-0">
        <span style={{ color: BLUE }}>{block.icon}</span>
        <p className="text-base font-bold" style={{ color: NAVY }}>
          {block.label}
        </p>
      </div>
      <div className="space-y-1.5">
        {block.lines.map((line, j) => (
          <p key={j} className="text-base text-gray-600 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  ))}
</div>
  </div>
</section>
     </FadeInSection>

    </div>
  );
}