// app/business/consulting/page.tsx
// VODA · 컨설팅(Consulting) 페이지
// 구조: 01 히어로 → 02 4대 컨설팅 영역(겹치는 원형 다이어그램) → 03 프로세스 → 04 Bottom CTA
// 컬러: 히어로/프로세스는 네이비(#0B1130) + 블루(#3D5AFE), 02번 섹션만 밝은 그라데이션

const heroTags = ["AI·AX 전략 수립", "공공·정부 사업", "교육 체계 설계", "기술 도입 지원"];

const consultingAreas = [
  {
    no: "01",
    title: "AI·AX 전략 수립",
    desc: ["현황 진단 후", "로드맵 설계"],
    rgb: "61,90,254", // #3D5AFE — 프로세스 STEP 01과 동일 계열
    accent: "#3D5AFE",
    glow: "rgba(61,90,254,0.5)",
  },
  {
    no: "02",
    title: "공공·정부 사업",
    desc: ["기획·제안·", "수행 지원"],
    rgb: "43,63,224", // #2B3FE0 — 프로세스 STEP 02와 동일 계열
    accent: "#2B3FE0",
    glow: "rgba(43,63,224,0.5)",
  },
  {
    no: "03",
    title: "교육 체계 설계",
    desc: ["인재 양성 계획·", "커리큘럼"],
    rgb: "123,63,228", // #7B3FE4 — 프로세스 STEP 03과 동일 계열
    accent: "#7B3FE4",
    glow: "rgba(123,63,228,0.5)",
  },
  {
    no: "04",
    title: "기술 도입 지원",
    desc: ["AI·클라우드·LMS", "도입 지원"],
    rgb: "14,165,183", // #0EA5B7 — 프로세스 STEP 04와 동일 계열
    accent: "#0B7F8C",
    glow: "rgba(14,165,183,0.5)",
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
      <section className="relative overflow-hidden bg-[#0B1130] px-6 pt-20 pb-16 sm:px-10 lg:px-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 0%, rgba(61,90,254,0.35) 0%, rgba(11,17,48,0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#8FA6FF]">
            CONSULTING <span className="text-white/40">—</span> 컨설팅
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            컨설팅{" "}
            <span className="bg-gradient-to-r from-[#8FA6FF] to-white bg-clip-text text-transparent">
              (Consulting)
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            전략 수립부터 시스템 도입, 인재 양성까지. 성공적인 AI 전환(AX)을 위한
            토탈 솔루션
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
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
      </section>

      {/* 02. 4대 컨설팅 영역 — 겹치는 원형 다이어그램 */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">
            4 CONSULTING AREAS
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">
            4대 컨설팅 영역
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-10 sm:py-24">
          <div className="flex items-center justify-between gap-3 sm:gap-8 lg:gap-10">
            {consultingAreas.map((area, i) => (
              <div
                key={area.no}
                className={`flex h-24 w-24 flex-none flex-col items-center justify-center rounded-full bg-white text-center transition-transform duration-300 hover:scale-105 sm:h-40 sm:w-40 lg:h-52 lg:w-52 ${
                  i % 2 === 0
                    ? "-translate-y-4 sm:-translate-y-8 lg:-translate-y-10"
                    : "translate-y-4 sm:translate-y-8 lg:translate-y-10"
                }`}
                style={{
                  boxShadow: `0 24px 48px -16px ${area.glow}, 0 8px 20px -10px ${area.glow}`,
                }}
              >
                <p className="px-2 text-[11px] font-bold leading-tight text-[#0F1B4C] sm:px-4 sm:text-sm lg:text-base">
                  {area.title}
                </p>
                <p
                  className="mt-1.5 hidden px-4 text-xs leading-relaxed sm:block"
                  style={{ color: area.accent }}
                >
                  {area.desc[0]}
                  <br />
                  {area.desc[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. 프로세스 */}
      <section className="relative overflow-hidden bg-[#080C24] px-6 py-24 sm:px-10 lg:px-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 50% at 85% 10%, rgba(123,63,228,0.25) 0%, rgba(8,12,36,0) 60%), radial-gradient(50% 50% at 10% 90%, rgba(14,165,183,0.2) 0%, rgba(8,12,36,0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold tracking-widest text-[#8FA6FF]">PROCESS</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">프로세스</h2>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-4">
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
                <span
                  className="pointer-events-none absolute -top-6 right-3 select-none text-6xl font-black leading-none text-white/6"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

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
      </section>

      {/* 04. Bottom CTA — 기업 정보 입력 폼 */}
      <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(50% 50% at 85% 0%, rgba(123,63,228,0.16) 0%, rgba(255,255,255,0) 60%), radial-gradient(50% 50% at 8% 100%, rgba(14,165,183,0.14) 0%, rgba(255,255,255,0) 60%)",
          }}
        />

        <div
          className="relative mx-auto max-w-4xl rounded-4xl border border-[#E7EAF6] bg-white p-10 sm:p-14"
          style={{
            boxShadow:
              "0 32px 64px -28px rgba(61,90,254,0.3), 0 8px 24px -12px rgba(15,27,76,0.08)",
          }}
        >
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white"
            style={{
              background: "linear-gradient(135deg, #3D5AFE, #6C8CFF)",
              boxShadow: "0 10px 24px -8px rgba(61,90,254,0.55)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
              <path
                d="M4 6h16v12H4z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M4 7l8 6 8-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mt-5 text-center text-xs font-semibold tracking-widest text-[#3D5AFE]">
            CONTACT US
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-[#0F1B4C] sm:text-3xl">
            무료 컨설팅, 지금 신청하세요
          </h2>
          <p className="mt-3 text-center text-sm text-[#6A7290]">
            간단한 정보만 남겨주시면 담당자가 빠르게 연락드립니다.
          </p>

          <form className="mt-10 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="기업명"
                className="rounded-2xl border border-[#E7EAF6] px-4 py-3 text-sm text-[#0F1B4C] outline-none transition focus:border-[#3D5AFE] focus:ring-4 focus:ring-[#3D5AFE]/10"
              />
              <input
                type="text"
                placeholder="담당자명"
                className="rounded-2xl border border-[#E7EAF6] px-4 py-3 text-sm text-[#0F1B4C] outline-none transition focus:border-[#3D5AFE] focus:ring-4 focus:ring-[#3D5AFE]/10"
              />
              <input
                type="tel"
                placeholder="연락처"
                className="rounded-2xl border border-[#E7EAF6] px-4 py-3 text-sm text-[#0F1B4C] outline-none transition focus:border-[#3D5AFE] focus:ring-4 focus:ring-[#3D5AFE]/10"
              />
              <input
                type="email"
                placeholder="이메일"
                className="rounded-2xl border border-[#E7EAF6] px-4 py-3 text-sm text-[#0F1B4C] outline-none transition focus:border-[#3D5AFE] focus:ring-4 focus:ring-[#3D5AFE]/10"
              />
            </div>
            <textarea
              placeholder="문의 내용을 남겨주세요"
              rows={4}
              className="w-full rounded-2xl border border-[#E7EAF6] px-4 py-3 text-sm text-[#0F1B4C] outline-none transition focus:border-[#3D5AFE] focus:ring-4 focus:ring-[#3D5AFE]/10"
            />
            <button
              type="submit"
              className="mx-auto block rounded-full px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #3D5AFE, #6C8CFF)",
                boxShadow: "0 16px 32px -12px rgba(61,90,254,0.55)",
              }}
            >
              무료 컨설팅 상담 신청하기 →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
