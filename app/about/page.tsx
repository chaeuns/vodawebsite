"use client";

import { ArrowRight, MapPin, Phone, Train, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const NAVY = "#1a3570";
const BLUE = "#2d6bff";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Noto Sans KR', 'Outfit', sans-serif" }}>
      
{/* ── 01. COMPANY HERO ────────────────────────────── */}
      <section
        className="pt-32 pb-24 relative overflow-hidden px-6 sm:px-10 lg:px-24"
        style={{ background: "#fff" }}
      >
        {/* Background decorative elements */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${BLUE}, transparent)`,
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${NAVY}, transparent)`,
            transform: "translate(-40%, 40%)",
          }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{
                color: BLUE,
                background: "rgba(45,107,255,0.08)",
                letterSpacing: "0.15em",
              }}
            >
              About VODA CAMPUS
            </span>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]"
              style={{
                color: NAVY,
                letterSpacing: "-0.03em",
                fontFamily: "'Noto Sans KR', sans-serif",
              }}
            >
              데이터의 가치
              <span style={{ color: BLUE }}>
                (Value Of Data)
              </span>
              로<br />
              지속 가능한 미래를 봅니다.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl font-light">
              VODA는 AI 및 디지털 기술을 통해 기업의 혁신을 돕는
              '보다웍스'와,
              <br className="hidden sm:block" />
              미래 인재를 양성하는 에듀테크 '보다캠퍼스'를 통해
              세상의 성장을 연결합니다.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  label: "혁신 (Innovation)",
                  desc: "AI 기술 중심의 문제 해결",
                  num: "01",
                },
                {
                  label: "성장 (Growth)",
                  desc: "교육을 통한 인재 발굴",
                  num: "02",
                },
                {
                  label: "연결 (Connection)",
                  desc: "기술과 사람의 시너지",
                  num: "03",
                },
              ].map((v) => (
                <div
                  key={v.num}
                  className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default"
                  style={{
                    borderColor: "rgba(26,53,112,0.1)",
                    background: "#fafbff",
                  }}
                >
                  <span
                    className="text-xs font-black mb-4 block"
                    style={{
                      color: BLUE,
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {v.num}
                  </span>
                  <p
                    className="font-bold text-base mb-1"
                    style={{ color: NAVY }}
                  >
                    {v.label}
                  </p>
                  <p className="text-sm text-gray-500">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-24">
        <hr style={{ borderColor: "rgba(26,53,112,0.08)" }} />
      </div>

      {/* ── 02. CEO GREETING ────────────────────────────── */}
      <section className="py-24 bg-white px-6 sm:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Right – Text */}
            <div className="flex flex-col gap-6">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: BLUE, letterSpacing: "0.15em" }}
              >
                CEO 인사말
              </span>

              <h2
                className="text-3xl md:text-4xl font-black leading-[1.25]"
                style={{
                  color: NAVY,
                  letterSpacing: "-0.025em",
                }}
              >
                "고객과 함께 성장하는 VODA."
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  안녕하세요, VODA 대표 OOO입니다. 우리는
                  데이터와 AI 기술의 가능성을 증명해왔습니다.
                </p>
                <p>
                  이제 VODA(보다)라는 새로운 도약대 위에서,
                  고도화된 개발 사업(Works)과 선진화된 IT 교육
                  사업(Campus)을 융합하여 더욱 신뢰할 수 있는
                  파트너가 되고자 합니다.
                </p>
                <p>
                  기술로 기업을 이롭게 하고, 교육으로 사람을
                  키우는 VODA의 여정에 함께해 주시기 바랍니다.
                </p>
                <p>감사합니다.</p>
              </div>

              <div
                className="pt-4 border-t"
                style={{ borderColor: "rgba(26,53,112,0.1)" }}
              >
                <p
                  className="font-bold text-sm"
                  style={{ color: NAVY }}
                >
                  VODA 대표이사 OOO 배상
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
     {/* ── 04. DIRECTIONS ──────────────────────────────── */}
<section className="py-24 bg-white px-6 sm:px-10 lg:px-24">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12">
      <span
        className="text-xs font-semibold tracking-widest uppercase mb-4 block"
        style={{ color: BLUE, letterSpacing: "0.15em" }}
      >
        Location
      </span>
      <h2
        className="text-3xl md:text-4xl font-black"
        style={{ color: NAVY, letterSpacing: "-0.025em" }}
      >
        오시는 길
      </h2>
    </div>

    {/* 지도 (실제 이미지, 말풍선은 이미지 안에 이미 포함되어 있음) */}

<div
  className="w-full max-w-6xl mx-auto rounded-3xl mb-10 overflow-hidden"
>
  <img
    src="/voda_map.png"
    alt="VODA 오시는 길 지도"
    className="w-full h-auto object-cover"
  />
</div>

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
      icon: <MapPin size={20} />,
      label: "버스 이용 시",
      lines: [
        "142번, 147번 : 신당누리센터.신당동떡볶이타운 하차 후 도보 2분",
        "202번 : 신당역 1번 출구.서울중앙시장 하차 후 도보 8분",
      ],
    },
    {
      icon: <Phone size={20} />,
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

    </div>
  );
}