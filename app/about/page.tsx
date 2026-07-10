"use client";

import { ArrowRight, MapPin, Phone, Train, ChevronRight } from "lucide-react";


const NAVY = "#1a3570";
const BLUE = "#2d6bff";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Noto Sans KR', 'Outfit', sans-serif" }}>
      
{/* ── 01. COMPANY HERO ────────────────────────────── */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
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

        <div className="max-w-7xl mx-auto px-6">
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
      <div className="max-w-7xl mx-auto px-6">
        <hr style={{ borderColor: "rgba(26,53,112,0.08)" }} />
      </div>

      {/* ── 02. CEO GREETING ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
                "새로운 이름 VODA와 함께
                <br />더 넓은 세상과 가치를 바라봅니다."
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

      {/* ── 03. PARTNERSHIP ─────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: "#f7f9ff" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: BLUE, letterSpacing: "0.15em" }}
            >
              Partnership
            </span>
            <h2
              className="text-3xl md:text-4xl font-black mb-4 leading-tight"
              style={{ color: NAVY, letterSpacing: "-0.025em" }}
            >
              VODA와 함께할 파트너를 찾습니다
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              개발 제휴, 교육 연계, 공간 협업 등 VODA는 언제나
              열려있습니다.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "AI · DX 기술 제휴",
                tag: "Works 제휴",
                desc: "공동 솔루션 개발, 클라우드 인프라 구축, AI 역량 평가 시스템 도입 및 비즈니스 협업을 함께합니다.",
                icon: "⚙️",
              },
              {
                num: "02",
                title: "교육 사업 및 채용 연계",
                tag: "Campus 제휴",
                desc: "기업 맞춤형 출강 위탁, KDT/SeSAC 우수 수강생 인턴십 및 취업 연계 파트너십을 제공합니다.",
                icon: "🎓",
              },
              {
                num: "03",
                title: "공공 · 기관 협력 (MOU)",
                tag: "MOU / 기타",
                desc: "정부 지원 사업 공동 참여, 교육 공간(대관) 인프라 제휴 및 기타 사업 협력 문의를 환영합니다.",
                icon: "🤝",
              },
            ].map((area) => (
              <div
                key={area.num}
                className="group p-8 rounded-3xl border bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                style={{ borderColor: "rgba(26,53,112,0.08)" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-2xl"
                    role="img"
                    aria-label={area.title}
                  >
                    {area.icon}
                  </span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(45,107,255,0.08)",
                      color: BLUE,
                    }}
                  >
                    {area.tag}
                  </span>
                </div>
                <p
                  className="font-black text-lg mb-3 leading-tight"
                  style={{
                    color: NAVY,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {area.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {area.desc}
                </p>
                <div
                  className="mt-6 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: BLUE }}
                >
                  자세히 보기 <ChevronRight size={13} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`,
                color: "#fff",
              }}
            >
              제휴 및 협력 제안하기
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

     
     {/* ── 04. DIRECTIONS ──────────────────────────────── */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
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
      className="w-full rounded-3xl mb-10 overflow-hidden"
      style={{ height: 420 }}
    >
      <img
        src="/voda_map.png"
        alt="VODA 오시는 길 지도"
        className="w-full h-full object-cover"
      />
    </div>

    {/* 하단 정보: 지하철 / 버스 / 자차 */}
    <div className="space-y-6">
      {[
        {
          icon: <Train size={18} />,
          label: "지하철 이용 시",
          lines: [
            "신당역 6번 출구에서 도보 4분",
            "청구역 2번 출구에서 도보 5분",
          ],
        },
        {
          icon: <MapPin size={18} />,
          label: "버스 이용 시",
          lines: [
            "142번, 147번 : 신당누리센터.신당동떡볶이타운 하차 후 도보 2분",
            "202번 : 신당역 1번 출구.서울중앙시장 하차 후 도보 8분",
          ],
        },
        {
          icon: <Phone size={18} />,
          label: "자차 이용 시",
          lines: ["네비게이션에 '서울 중구 다산로36길 11' 입력"],
        },
      ].map((block, i) => (
        <div
          key={block.label}
          className="p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-start gap-4"
          style={{
            borderColor: "rgba(26,53,112,0.08)",
            background: "#fafbff",
          }}
        >
          <div className="flex items-center gap-2 sm:w-48 shrink-0">
            <span style={{ color: BLUE }}>{block.icon}</span>
            <p className="text-sm font-bold" style={{ color: NAVY }}>
              {block.label}
            </p>
          </div>
          <div className="space-y-1">
            {block.lines.map((line, j) => (
              <p key={j} className="text-sm text-gray-600 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── 05. BOTTOM CTA ──────────────────────────────── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #1e4db7 50%, ${BLUE} 100%)`,
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #ffffff, transparent)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #ffffff, transparent)",
            transform: "translate(50%, 50%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p
            className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ letterSpacing: "0.15em" }}
          >
            Get Started
          </p>
          <h2
            className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight"
            style={{ letterSpacing: "-0.025em" }}
          >
            VODA와 함께 비즈니스의
            <br className="hidden sm:block" />
            새로운 시야를 열어보세요.
          </h2>
          <button
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold bg-white transition-all hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            style={{ color: NAVY }}
          >
            프로젝트 및 제휴 문의하기
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
      
    </div>
  );
}