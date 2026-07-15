// app/business/ai-certification/page.tsx
// VODA · AI 자격인증 상세 페이지
// 구조: 첨부 와이어프레임(사업영역 상세) 참고
// 컬러: VODA Campus 히어로 팔레트(네이비 + 블루) 참고

import Link from "next/link";

const track = [
  {
    eyebrow: "Scenario Based",
    title: "문제 해결형 평가",
    desc: "실제 비즈니스 시나리오를 기반으로 AI 도구 활용 능력을 측정합니다. 단순 지식이 아닌, 실무 문제 해결 역량을 객관적으로 평가합니다.",
    tags: ["시나리오 기반", "실무 적용", "문제 해결"],
  },
  {
    eyebrow: "Competency Diagnosis",
    title: "5대 영역 역량 진단",
    desc: "AI 활용의 5대 핵심 영역을 체계적으로 분석하여 개인별·조직별 역량 수준을 입체적으로 진단합니다.",
    tags: ["5대 영역", "역량 분석", "조직 진단"],
  },
];

const coreAreas = [
  { no: "01", title: "AI 이해", desc: "AI 기초 개념 및 원리 이해" },
  { no: "02", title: "AI 활용", desc: "실무 AI 도구 활용 능력" },
  { no: "03", title: "데이터 리터러시", desc: "데이터 해석·분석 역량" },
  { no: "04", title: "AI 윤리", desc: "AI 윤리 및 안전한 활용" },
  { no: "05", title: "문제 해결", desc: "AI 기반 비즈니스 문제 해결" },
];

const values = [
  {
    label: "Insight Report",
    title: "인사이트 리포트",
    desc: "개인·조직의 AI 역량을 다각도로 분석한 인사이트 리포트를 제공하여 데이터 기반의 역량 관리를 지원합니다.",
  },
  {
    label: "Verified Standard",
    title: "검증된 역량 스탠다드",
    desc: "자체 평가 알고리즘을 통한 인증 시스템으로 AI 활용 역량을 객관적으로 증명하고 조직의 디지털 전문성을 확립합니다.",
  },
  {
    label: "Talent Management",
    title: "인재 관리 효율화",
    desc: "채용·승진·배치 시 인증 결과를 활용하여 데이터 기반 의사결정을 지원합니다.",
  },
];

const process = [
  { step: "STEP 1", title: "도입 상담", desc: "조직 현황 파악 및 트랙 선택" },
  { step: "STEP 2", title: "평가 설계", desc: "맞춤형 평가 문항 및 시나리오 구성" },
  { step: "STEP 3", title: "평가 시행", desc: "온라인/오프라인 평가 진행" },
  { step: "STEP 4", title: "결과 리포트", desc: "인사이트 리포트 제공 및 인증서 발급" },
];

const getStarted = [
  {
    label: "Enterprise",
    title: "기업 도입 문의",
    desc: "전사적 AI 역량 진단이 필요한 기업을 위한 맞춤형 도입 상담을 제공합니다.",
  },
  {
    label: "Custom Design",
    title: "맞춤 설계 상담",
    desc: "직무·부서별 특화된 평가 기준이 필요한 경우 맞춤 설계 상담을 진행합니다.",
  },
  {
    label: "Pilot Program",
    title: "파일럿 프로그램",
    desc: "소규모 파일럿으로 먼저 경험해보고 전사 도입 여부를 결정하실 수 있습니다.",
  },
];

export default function AICertificationPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1130] px-6 py-24 sm:px-10 lg:px-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 0%, rgba(61,90,254,0.35) 0%, rgba(11,17,48,0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#8FA6FF]">
            AI CERTIFICATION <span className="text-white/40">—</span> AI 자격인증
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            AI 역량,{" "}
            <span className="bg-gradient-to-r from-[#8FA6FF] to-white bg-clip-text text-transparent">
              객관적으로 증명하다
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            실무 중심 AI 자격인증으로 개인과 조직의 AI 활용 역량을 정량화합니다.
            데이터 기반으로 역량을 증명하고 디지털 전문성을 확립하세요.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-gray-400 sm:px-10 lg:px-24">
        사업영역 <span className="mx-1">›</span>{" "}
        <span className="font-medium text-[#0F1B4C]">AI 자격인증</span>
      </div>

      {/* 인증 체계 */}
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-24">
        <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">
          CERTIFICATION SYSTEM
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">인증 체계</h2>
        <p className="mt-3 max-w-2xl text-sm text-gray-500">
          일률적인 평가 기준에서 벗어나 조직의 비즈니스 목적과 직무 특성에 최적화된
          평가 방식을 제안합니다.
        </p>

        <div className="mt-8 grid overflow-hidden rounded-2xl border border-dashed border-[#D8DEEC] sm:grid-cols-2">
          <div className="flex min-h-[220px] items-center justify-center bg-[#EEF2FF] text-sm text-[#3D5AFE]/60">
            인증 시스템 시각화 자리
          </div>
          <div className="p-8">
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
      </section>

      {/* 두 가지 인증 트랙 */}
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-24">
        <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">
          CERTIFICATION TRACK
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">두 가지 인증 트랙</h2>
        <p className="mt-3 text-sm text-gray-500">조직의 목적에 맞는 최적의 평가 방식을 선택하세요.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {track.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-dashed border-[#D8DEEC] p-8 transition hover:border-[#3D5AFE]/50"
            >
              <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">
                {t.eyebrow}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[#0F1B4C]">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{t.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-medium text-[#3D5AFE]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5대 핵심 영역 */}
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-24">
        <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">5 CORE AREAS</p>
        <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">
          AI 활용 5대 핵심 영역
        </h2>
        <p className="mt-3 text-sm text-gray-500">AI 역량의 5가지 핵심 영역을 체계적으로 진단합니다.</p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {coreAreas.map((a) => (
            <div
              key={a.no}
              className="rounded-xl border border-[#D8DEEC] p-5 text-center transition hover:bg-[#F7F9FC]"
            >
              <p className="text-xs font-semibold text-[#3D5AFE]">{a.no}</p>
              <p className="mt-1 text-sm font-bold text-[#0F1B4C]">{a.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 비즈니스 가치 */}
      <section className="bg-[#F7F9FC] px-6 py-16 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">BUSINESS VALUE</p>
          <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">
            인증이 만드는 비즈니스 가치
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">
                  {v.label}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#0F1B4C]">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인증 프로세스 */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-24">
        <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">PROCESS</p>
        <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">인증 프로세스</h2>

        <div className="mt-8 grid gap-6 rounded-2xl border border-dashed border-[#D8DEEC] p-8 sm:grid-cols-4">
          {process.map((p, i) => (
            <div key={p.step} className="relative text-center">
              <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">{p.step}</p>
              <p className="mt-2 text-base font-bold text-[#0F1B4C]">{p.title}</p>
              <p className="mt-2 text-xs text-gray-400">{p.desc}</p>
              {i < process.length - 1 && (
                <span className="absolute right-[-12px] top-2 hidden text-[#D8DEEC] sm:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Get Started */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-24">
        <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">GET STARTED</p>
        <h2 className="mt-2 text-2xl font-bold text-[#0F1B4C] sm:text-3xl">
          우리 조직에 맞는 인증 프로그램이 궁금하신가요?
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {getStarted.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-dashed border-[#D8DEEC] p-7 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-[#3D5AFE]">
                {g.label}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[#0F1B4C]">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{g.desc}</p>
              <button className="mt-5 rounded-full border border-[#3D5AFE] px-5 py-2 text-sm font-medium text-[#3D5AFE] transition hover:bg-[#3D5AFE] hover:text-white">
                자세히 보기 →
              </button>
            </div>
          ))}
        </div>
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
