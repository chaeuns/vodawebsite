export default function Hero() {
  return (
    <section
      className="relative flex items-center pt-16 bg-[#6B7280]"
      style={{ minHeight: 320 }}
    >
      <div className="max-w-[1100px] mx-auto px-6 py-[56px]">
        <p
          style={{ letterSpacing: "2px" }}
          className="text-white/80 text-[12px] font-semibold uppercase"
        >
          EDUCATION — 정부 교육 사업
        </p>

        <h1 className="font-bold mt-4 leading-[1.3] text-[28px] md:text-[38px] text-white break-keep">
          미래를 창조하는 
          <br />
          교육 혁신
        </h1>

        <p className="text-white/85 mt-4 leading-[1.6] text-[14px] md:text-[16px] max-w-[640px]">
          AI·보안·클라우드 등 실무 중심 커리큘럼으로 정부 지원 교육 과정을 운영합니다.
          수강생 개인의 성장을 데이터로 추적하고 취업까지 함께합니다.
        </p>
      </div>
    </section>
  );
}
