"use client";

import { Bus, Car, Train } from "lucide-react";
import { useRef } from "react";
import OurGoals from "./components/OurGoals";

const NAVY = "#1a3570";
const BLUE = "#2d6bff";

const RADAR_NODES = [
  { angle: 24, r: 92, delay: 0 },
  { angle: 108, r: 150, delay: 0.55 },
  { angle: 196, r: 118, delay: 1.1 },
  { angle: 262, r: 208, delay: 0.28 },
  { angle: 338, r: 176, delay: 0.85 },
  { angle: 64, r: 246, delay: 1.4 },
];

export default function AboutPage() {
  const radarRef = useRef<HTMLDivElement>(null);

  function handleHeroMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const radar = radarRef.current;
    if (!radar) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    radar.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
  }

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Noto Sans KR', 'Outfit', sans-serif" }}>

{/* ── 01. COMPANY HERO ────────────────────────────── */}
      <section
        className="relative flex min-h-[92vh] items-center overflow-hidden bg-white"
        onMouseMove={handleHeroMouseMove}
      >
        {/* 배경 도트 그리드 (아주 옅게) */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(rgba(26,53,112,0.1) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "linear-gradient(180deg, black 0%, transparent 85%)",
            WebkitMaskImage: "linear-gradient(180deg, black 0%, transparent 85%)",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-y-16">
            {/* 텍스트 — 최소화 */}
            <div className="voda-reveal relative z-10 lg:pr-10">
              <span
                className="mb-8 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase"
                style={{
                  color: BLUE,
                  background: "rgba(45,107,255,0.08)",
                  border: "1px solid rgba(45,107,255,0.18)",
                  letterSpacing: "0.15em",
                }}
              >
                <span className="relative inline-flex h-1.5 w-1.5" aria-hidden="true">
                  <span
                    className="voda-tf absolute inset-0 rounded-full"
                    style={{ border: `1.5px solid ${BLUE}`, animation: "voda-lens-ring 2.6s ease-out infinite" }}
                  />
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{ background: BLUE, animation: "voda-lens-core 2.6s ease-in-out infinite" }}
                  />
                </span>
                About VODA CAMPUS
              </span>

              <h1
                className="font-black leading-[1.14] whitespace-nowrap"
                style={{
                  color: NAVY,
                  letterSpacing: "-0.045em",
                  fontSize: "clamp(2.75rem, 7vw, 5.75rem)",
                  fontFamily: "'Noto Sans KR', sans-serif",
                }}
              >
                데이터의 가치를
                <br />
                증명합니다
                {/* 마침표 = 렌즈 도트 (VODA, '보다') */}
                <span
                  className="voda-lens relative ml-3 inline-block align-baseline"
                  style={{ width: "0.22em", height: "0.22em" }}
                  aria-hidden="true"
                >
                  <span
                    className="voda-tf absolute inset-0 rounded-full"
                    style={{
                      border: `2px solid ${BLUE}`,
                      animation: "voda-lens-ring 2.6s ease-out infinite",
                    }}
                  />
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: BLUE,
                      animation: "voda-lens-core 2.6s ease-in-out infinite",
                    }}
                  />
                </span>
              </h1>
            </div>

            {/* 레이더 비주얼 — 데이터를 감지/연결하는 VODA('보다') */}
            <div
              ref={radarRef}
              className="voda-reveal-delay relative mx-auto aspect-square w-full max-w-105 lg:max-w-none lg:justify-self-end"
              style={{ transition: "transform 0.3s ease-out" }}
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(45,107,255,0.22) 26deg, transparent 70deg)",
                  animation: "voda-radar-spin 5s linear infinite",
                }}
              />
              <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full">
                {[86, 150, 214, 278].map((r, i) => (
                  <circle
                    key={r}
                    cx="300"
                    cy="300"
                    r={r}
                    fill="none"
                    stroke={NAVY}
                    strokeWidth="1"
                    opacity={0.22 - i * 0.045}
                  />
                ))}

                {RADAR_NODES.map((n, i) => {
                  const rad = (n.angle * Math.PI) / 180;
                  const cx = 300 + n.r * Math.cos(rad);
                  const cy = 300 + n.r * Math.sin(rad);
                  return (
                    <g key={i}>
                      <line x1="300" y1="300" x2={cx} y2={cy} stroke={BLUE} strokeWidth="1" opacity="0.14" />
                      <circle
                        className="voda-tf"
                        cx={cx}
                        cy={cy}
                        r="10"
                        fill="none"
                        stroke={BLUE}
                        strokeWidth="1.5"
                        style={{ animation: `voda-node-ring 3s ease-out ${n.delay}s infinite` }}
                      />
                      <circle cx={cx} cy={cy} r="4" fill={BLUE} />
                    </g>
                  );
                })}

                <circle cx="300" cy="300" r="34" fill="#ffffff" stroke={BLUE} strokeWidth="1.5" opacity="0.9" />
                <circle
                  className="voda-tf"
                  cx="300"
                  cy="300"
                  r="34"
                  fill="none"
                  stroke={BLUE}
                  strokeWidth="1.5"
                  style={{ animation: "voda-lens-ring 2.6s ease-out infinite" }}
                />
                <circle cx="300" cy="300" r="9" fill={BLUE} style={{ animation: "voda-lens-core 2.6s ease-in-out infinite" }} className="voda-tf" />
              </svg>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes voda-fade-up {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes voda-lens-ring {
            0%   { transform: scale(0.6); opacity: 0.9; }
            100% { transform: scale(1.9); opacity: 0; }
          }
          @keyframes voda-lens-core {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(0.82); }
          }
          @keyframes voda-radar-spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes voda-node-ring {
            0%   { transform: scale(0.5); opacity: 0.9; }
            100% { transform: scale(1.8); opacity: 0; }
          }

          .voda-reveal { animation: voda-fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
          .voda-reveal-delay { animation: voda-fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
          .voda-tf { transform-box: fill-box; transform-origin: center; }

          @media (prefers-reduced-motion: reduce) {
            .voda-reveal, .voda-reveal-delay, .voda-lens, .voda-lens *,
            [style*="voda-radar-spin"], .voda-tf {
              animation: none !important;
            }
          }
        `}</style>
      </section>

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
                className="text-3xl md:text-4xl font-black leading-tight"
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
                  데이터와 AI로 기업의 성장을 도와왔습니다.
                </p>
                <p>
                  이제 개발(Works)과 교육(Campus)을 하나로 잇는
                  VODA로, 기술과 사람을 함께 성장시키는 파트너가
                  되겠습니다. 감사합니다.
                </p>
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

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-24">
        <hr style={{ borderColor: "rgba(26,53,112,0.08)" }} />
      </div>

      {/* ── 03. OUR GOALS ──────────────────────────────── */}
      <OurGoals />

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

    </div>
  );
}