"use client";

/* ═══════════════════════════════════════════════════════════
   VODA About — Our Goals (이 섹션만 포함)
   혁신 = 전구 점등 / 성장 = 계단 오르기 / 연결 = 체인 링크 결합
   ═══════════════════════════════════════════════════════════ */

const INK = "#16181D";
const BODY = "#5B6270";
const ACCENT = "#3D5AFE";
const BORDER = "rgba(22,24,29,0.07)";
const SURFACE = "#F8F9FC";

const CONTAINER = "mx-auto max-w-6xl";

export default function OurGoals() {
  return (
    <section
      className="bg-white py-24 px-6 sm:px-10 lg:px-24"
      style={{ fontFamily: "'Noto Sans KR', 'Outfit', sans-serif" }}
    >
      <style>{`
        /* ── 01 혁신: 전구 점등 (6s 루프) */
        @keyframes voda-filament {
          0%   { stroke-dashoffset: 110; opacity: 1; }
          22%  { stroke-dashoffset: 0; }
          78%  { stroke-dashoffset: 0; opacity: 1; }
          88%  { stroke-dashoffset: 0; opacity: 0.25; }
          100% { stroke-dashoffset: 110; opacity: 0.25; }
        }
        @keyframes voda-bulb-glow {
          0%, 20%  { opacity: 0; }
          30%      { opacity: 1; }
          76%      { opacity: 1; }
          88%, 100%{ opacity: 0; }
        }
        @keyframes voda-ray {
          0%, 24%  { opacity: 0; transform: scale(0.5); }
          34%      { opacity: 1; transform: scale(1); }
          76%      { opacity: 1; transform: scale(1); }
          86%, 100%{ opacity: 0; transform: scale(0.5); }
        }

        /* ── 02 성장: 계단 오르기 (6s 루프) — 3칸 */
        @keyframes voda-climb {
          0%   { transform: translate(0, 0); opacity: 0; }
          8%   { transform: translate(0, 0); opacity: 1; }
          22%  { transform: translate(80px, -56px); }
          32%  { transform: translate(80px, -56px); }
          46%  { transform: translate(160px, -112px); }
          68%  { transform: translate(160px, -112px); opacity: 1; }
          84%  { transform: translate(185px, -152px); opacity: 0; }
          100% { transform: translate(185px, -152px); opacity: 0; }
        }
        @keyframes voda-summit-arrow {
          0%, 52%  { opacity: 0; transform: translateY(10px); }
          64%      { opacity: 1; transform: translateY(0); }
          82%      { opacity: 1; transform: translateY(0); }
          92%, 100%{ opacity: 0; transform: translateY(-8px); }
        }

        /* ── 03 연결: 체인 링크가 서로 꿰어지는 결합 (6s 루프) */
        @keyframes voda-link-a {
          0%, 100% { transform: translate(-26px, 26px); }
          35%      { transform: translate(0, 0); }
          65%      { transform: translate(0, 0); }
        }
        @keyframes voda-link-b {
          0%, 100% { transform: translate(26px, -26px); }
          35%      { transform: translate(0, 0); }
          65%      { transform: translate(0, 0); }
        }
        @keyframes voda-joint-ripple {
          0%, 34%  { transform: scale(0.4); opacity: 0; }
          38%      { transform: scale(0.6); opacity: 0.6; }
          58%      { transform: scale(1.9); opacity: 0; }
          100%     { transform: scale(1.9); opacity: 0; }
        }

        .voda-tf { transform-box: fill-box; transform-origin: center; }

        @media (prefers-reduced-motion: reduce) {
          .voda-anim, .voda-anim * { animation: none !important; }
        }
      `}</style>

      <div className={CONTAINER}>
        <div className="mb-16">
          <h2
            className="text-3xl font-black md:text-4xl"
            style={{ color: "#1a3570", letterSpacing: "-0.03em" }}
          >
            VODA가 지켜온 세 가지 가치
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <GoalCard
            en="Innovation"
            desc="정해진 방법 대신, 데이터와 AI로 문제의 본질부터 다시 정의합니다."
            statNum="47+"
            statLabel="개발 완료 프로젝트"
            svg={<BulbViz />}
          />
          <GoalCard
            en="Growth"
            desc="배움이 실무 역량으로 이어지도록, 측정 가능한 성장을 설계합니다."
            statNum="12,000+"
            statLabel="수료 인원"
            svg={<StairsViz />}
          />
          <GoalCard
            en="Connection"
            desc="기술과 사람, 기업과 인재를 연결해 더 큰 시너지를 만듭니다."
            statNum="230+"
            statLabel="파트너 기업"
            svg={<LinkViz />}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   카드 셸
───────────────────────────────────────────── */
function GoalCard({
  en,
  desc,
  statNum,
  statLabel,
  svg,
}: {
  en: string;
  desc: string;
  statNum: string;
  statLabel: string;
  svg: React.ReactNode;
}) {
  return (
    <div
      className="group rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
      style={{ borderColor: BORDER, background: SURFACE }}
    >
      <div className="voda-anim mb-8 overflow-hidden rounded-2xl bg-white">
        {svg}
      </div>

      <div className="flex flex-col items-center text-center">
        <h3
          className="mb-3 text-3xl font-extrabold"
          style={{
            color: INK,
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {en}
        </h3>
        <p className="text-[15px] leading-[1.7]" style={{ color: BODY }}>
          {desc}
        </p>
      </div>

      <div
        className="mt-6 flex flex-col items-center gap-1.5 border-t pt-5 text-center"
        style={{ borderColor: BORDER }}
      >
        <span
          className="text-4xl font-black"
          style={{
            color: ACCENT,
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {statNum}
        </span>
        <span
          className="text-sm font-bold"
          style={{ color: INK, letterSpacing: "-0.01em" }}
        >
          {statLabel}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   01. 혁신 — 전구 (연한 글로우)
───────────────────────────────────────────── */
function BulbViz() {
  return (
    <svg viewBox="0 0 400 280" className="h-56 w-full" aria-hidden="true">
      <defs>
        <radialGradient id="voda-glow-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.13" />
          <stop offset="60%" stopColor={ACCENT} stopOpacity="0.05" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="200"
        cy="112"
        r="86"
        fill="url(#voda-glow-g)"
        style={{ animation: "voda-bulb-glow 6s ease-in-out infinite" }}
      />

      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          className="voda-tf"
          style={{ animation: "voda-ray 6s ease-in-out infinite" }}
          x1={200 + Math.cos((deg * Math.PI) / 180) * 62}
          y1={112 + Math.sin((deg * Math.PI) / 180) * 62}
          x2={200 + Math.cos((deg * Math.PI) / 180) * 76}
          y2={112 + Math.sin((deg * Math.PI) / 180) * 76}
          stroke={ACCENT}
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}

      <circle
        cx="200"
        cy="112"
        r="44"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2.5"
      />
      <circle
        cx="200"
        cy="112"
        r="40"
        fill={ACCENT}
        opacity="0.035"
        style={{ animation: "voda-bulb-glow 6s ease-in-out infinite" }}
      />

      <path
        d="M188,150 L188,132 C188,119 195,117 200,127 C205,117 212,119 212,132 L212,150"
        fill="none"
        stroke={ACCENT}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 110,
          animation: "voda-filament 6s ease-in-out infinite",
        }}
      />

      <line x1="188" y1="150" x2="212" y2="150" stroke={ACCENT} strokeWidth="2.5" />
      <rect x="184" y="158" width="32" height="8" rx="4" fill={ACCENT} opacity="0.9" />
      <rect x="189" y="170" width="22" height="8" rx="4" fill={ACCENT} opacity="0.55" />
      <rect x="195" y="182" width="10" height="6" rx="3" fill={ACCENT} opacity="0.3" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   02. 성장 — 계단 오르기 (3칸)
───────────────────────────────────────────── */
function StairsViz() {
  return (
    <svg viewBox="0 0 400 280" className="h-56 w-full" aria-hidden="true">
      <path
        d="M70,224 L150,224 L150,168 L230,168 L230,112 L310,112"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />

      <circle
        className="voda-tf"
        style={{ animation: "voda-climb 6s cubic-bezier(0.45, 0, 0.25, 1) infinite" }}
        cx="110"
        cy="212"
        r="10"
        fill={ACCENT}
      />

      <g style={{ animation: "voda-summit-arrow 6s ease-in-out infinite" }}>
        <line
          x1="320"
          y1="92"
          x2="320"
          y2="60"
          stroke={ACCENT}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M308,72 L320,60 L332,72"
          fill="none"
          stroke={ACCENT}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   03. 연결 — 체인 링크 결합 (진짜로 꿰어지는 구조)
   · 두 링크 모두 흰색 케이싱(테두리 여백)을 깔아
     겹치는 지점에서 선이 분리되어 보임 → 알약 융합 느낌 제거
   · 위빙(weaving): 위쪽 교차점은 B가 A 위로,
     아래쪽 교차점은 A가 B 위로 지나가도록 오버레이 아크 추가
     → 실제 사슬처럼 서로 꿰어진 상태로 읽힘
───────────────────────────────────────────── */
function LinkViz() {
  // 링크 형태: 100 x 58 캡슐 링, 대각선(-45°) 축
  const RING = { x: -50, y: -29, w: 100, h: 58, rx: 29 };

  return (
    <svg viewBox="0 0 400 280" className="h-56 w-full" aria-hidden="true">
      {/* 링크 A (좌하단) — 케이싱 + 본체 */}
      <g style={{ animation: "voda-link-a 6s ease-in-out infinite" }}>
        <rect
          {...{ x: RING.x, y: RING.y, width: RING.w, height: RING.h, rx: RING.rx }}
          fill="none"
          stroke="#ffffff"
          strokeWidth="18"
          transform="translate(174 166) rotate(-45)"
        />
        <rect
          {...{ x: RING.x, y: RING.y, width: RING.w, height: RING.h, rx: RING.rx }}
          fill="none"
          stroke={ACCENT}
          strokeWidth="12"
          transform="translate(174 166) rotate(-45)"
        />
      </g>

      {/* 링크 B (우상단) — 케이싱 + 본체 (교차점에서 A 위를 지남) */}
      <g style={{ animation: "voda-link-b 6s ease-in-out infinite" }}>
        <rect
          {...{ x: RING.x, y: RING.y, width: RING.w, height: RING.h, rx: RING.rx }}
          fill="none"
          stroke="#ffffff"
          strokeWidth="18"
          transform="translate(226 114) rotate(-45)"
        />
        <rect
          {...{ x: RING.x, y: RING.y, width: RING.w, height: RING.h, rx: RING.rx }}
          fill="none"
          stroke={ACCENT}
          strokeWidth="12"
          transform="translate(226 114) rotate(-45)"
        />
      </g>

      {/* 위빙 오버레이 — A의 오른쪽 캡 아래 사분 아크만 B 위에 다시 그림
          (A와 동일한 애니메이션으로 함께 움직임) */}
      <g style={{ animation: "voda-link-a 6s ease-in-out infinite" }}>
        <path
          d="M 50,0 A 29,29 0 0 1 21,29"
          fill="none"
          stroke="#ffffff"
          strokeWidth="18"
          strokeLinecap="butt"
          transform="translate(174 166) rotate(-45)"
        />
        <path
          d="M 50,0 A 29,29 0 0 1 21,29"
          fill="none"
          stroke={ACCENT}
          strokeWidth="12"
          strokeLinecap="butt"
          transform="translate(174 166) rotate(-45)"
        />
      </g>

      {/* 결합 순간의 리플 */}
      <circle
        className="voda-tf"
        style={{ animation: "voda-joint-ripple 6s ease-out infinite" }}
        cx="200"
        cy="140"
        r="36"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
    </svg>
  );
}
