// app/business/consulting/page.tsx
// VODA · 컨설팅(Consulting) 페이지
// 구조: 01 히어로 → 02 4대 컨설팅 영역(겹치는 원형 다이어그램) → 03 프로세스 → 04 Bottom CTA
// 컬러: 히어로/프로세스는 네이비(#0B1130) + 블루(#3D5AFE), 02번 섹션만 밝은 그라데이션

const heroTags = ["AI·AX 전략 수립", "공공·정부 사업", "교육 체계 설계", "기술 도입 지원"];

const process = [
  { step: "STEP 01", title: "현황 진단" },
  { step: "STEP 02", title: "전략 및 설계" },
  { step: "STEP 03", title: "실행·도입" },
  { step: "STEP 04", title: "성과·사후관리" },
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
      <section className="bg-gradient-to-br from-[#EEF2FF] via-white to-[#F0F4FF] px-6 py-24 sm:px-10 lg:px-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">
            4 CONSULTING AREAS
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">
            4대 컨설팅 영역
          </h2>
        </div>

        <div className="relative mx-auto h-[540px] w-[640px] max-w-full">
  {/* 01 AI·AX 전략 수립 (좌상단) */}
  <div className="absolute left-[70px] top-[50px] z-10 flex h-60 w-60 flex-col items-center justify-center rounded-full border border-[#C7D2FE] bg-white p-6 text-center shadow-[0_20px_40px_-15px_rgba(61,90,254,0.25)]">
    <p className="text-sm font-bold text-[#0F1B4C]">AI·AX 전략 수립</p>
    <p className="mt-2 text-xs leading-relaxed text-[#3D5AFE]">
      현황 진단 후
      <br />
      로드맵 설계
    </p>
  </div>

  {/* 02 공공·정부 사업 (우상단) */}
  <div className="absolute left-[270px] top-[30px] z-20 flex h-60 w-60 flex-col items-center justify-center rounded-full border border-[#C7D2FE] bg-white p-6 text-center shadow-[0_20px_40px_-15px_rgba(61,90,254,0.25)]">
    <p className="text-sm font-bold text-[#0F1B4C]">공공·정부 사업</p>
    <p className="mt-2 text-xs leading-relaxed text-[#3D5AFE]">
      기획·제안·
      <br />
      수행 지원
    </p>
  </div>

  {/* 03 교육 체계 설계 (좌하단) */}
  <div className="absolute left-[160px] top-[260px] z-30 flex h-60 w-60 flex-col items-center justify-center rounded-full border border-[#3D5AFE]/40 bg-white p-6 text-center shadow-[0_25px_45px_-15px_rgba(61,90,254,0.35)]">
    <p className="text-sm font-bold text-[#0F1B4C]">교육 체계 설계</p>
    <p className="mt-2 text-xs leading-relaxed text-[#3D5AFE]">
      인재 양성 계획·
      <br />
      커리큘럼
    </p>
  </div>

  {/* 04 기술 도입 지원 (우하단) */}
  <div className="absolute left-[360px] top-[250px] z-10 flex h-60 w-60 flex-col items-center justify-center rounded-full border border-[#C7D2FE] bg-white p-6 text-center shadow-[0_20px_40px_-15px_rgba(61,90,254,0.25)]">
    <p className="text-sm font-bold text-[#0F1B4C]">기술 도입 지원</p>
    <p className="mt-2 text-xs leading-relaxed text-[#3D5AFE]">
      AI·클라우드·LMS
      <br />
      도입 지원
    </p>
  </div>
</div>
      </section>

      {/* 03. 프로세스 */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-24">
        <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">PROCESS</p>
        <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">프로세스</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              <div className="rounded-2xl bg-[#0B1130] px-6 py-8 text-center">
                <p className="text-xs font-semibold tracking-widest text-[#8FA6FF]">
                  {p.step}
                </p>
                <p className="mt-2 text-base font-bold text-white">{p.title}</p>
              </div>
              {i < process.length - 1 && (
                <span className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-[#D8DEEC] sm:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 04. Bottom CTA — 기업 정보 입력 폼 */}
      <section className="bg-[#F7F9FC] px-6 py-20 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-2xl rounded-[32px] bg-white p-10 shadow-sm sm:p-14">
          <h2 className="text-center text-2xl font-bold text-[#0F1B4C] sm:text-3xl">
            무료 컨설팅, 지금 신청하세요
          </h2>
          <p className="mt-3 text-center text-sm text-gray-500">
            간단한 정보만 남겨주시면 담당자가 빠르게 연락드립니다.
          </p>

          <form className="mt-10 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="기업명"
                className="rounded-xl border border-[#D8DEEC] px-4 py-3 text-sm text-[#0F1B4C] outline-none focus:border-[#3D5AFE]"
              />
              <input
                type="text"
                placeholder="담당자명"
                className="rounded-xl border border-[#D8DEEC] px-4 py-3 text-sm text-[#0F1B4C] outline-none focus:border-[#3D5AFE]"
              />
              <input
                type="tel"
                placeholder="연락처"
                className="rounded-xl border border-[#D8DEEC] px-4 py-3 text-sm text-[#0F1B4C] outline-none focus:border-[#3D5AFE]"
              />
              <input
                type="email"
                placeholder="이메일"
                className="rounded-xl border border-[#D8DEEC] px-4 py-3 text-sm text-[#0F1B4C] outline-none focus:border-[#3D5AFE]"
              />
            </div>
            <textarea
              placeholder="문의 내용을 남겨주세요"
              rows={4}
              className="w-full rounded-xl border border-[#D8DEEC] px-4 py-3 text-sm text-[#0F1B4C] outline-none focus:border-[#3D5AFE]"
            />
            <button
              type="submit"
              className="mx-auto block rounded-full bg-[#3D5AFE] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c46e0]"
            >
              무료 컨설팅 상담 신청하기 →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
