export default function Hero() {
  return (
    <section
      className="relative flex min-h-[460px] items-center justify-center overflow-hidden py-20 px-6 sm:px-10 lg:px-16"
      style={{ background: "linear-gradient(135deg, #E8EDF8 0%, #D6E0F5 100%)" }}
    >
      <div className="text-center">
        <h1 className="font-bold leading-[1.35] text-[26px] md:text-[38px] text-[#00163A] break-keep">
          AI 교육 현장에 최적화된
          <br className="hidden md:block" /> 통합 학습관리 시스템
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#4B5563] mt-4 max-w-[560px] mx-auto break-keep leading-[1.7]">
          교육생 모집부터 수료까지, VODA 스마트 훈련 플랫폼(WSTS)이 훈련 운영의 전 과정을 하나로
          연결합니다.
        </p>
      </div>
    </section>
  );
}
