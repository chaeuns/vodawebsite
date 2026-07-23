import Image from "next/image";

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-1 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.1s forwards; }
        .hero-fade-2 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.3s forwards; }
        .hero-fade-3 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.5s forwards; }
      `}</style>

      <section
        className="relative flex items-center pt-16 overflow-hidden bg-[#0D1B40]"
        style={{ minHeight: 420 }}
      >
        <Image
          src="/images/Frame%205.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="relative max-w-[1100px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 py-6 md:py-8">
          <div className="-translate-y-5">
            <p
              className="hero-fade-1 text-[#0064DB] text-[13px] md:text-[15px] font-medium"
            >
              채용
            </p>

            <h1 className="hero-fade-2 font-bold mt-4 leading-[1.3] text-[1.7rem] sm:text-[22px] md:text-[29px] lg:text-[43px] whitespace-normal md:whitespace-nowrap break-keep">
              <span className="text-[#00163A]">
                기술로 배움의 한계를 넘어서는 여정, 당신을 기다립니다
              </span>
            </h1>
          </div>

          <p className="hero-fade-3 text-[#111827] mt-4 leading-[1.6] text-[13px] md:text-[15px] max-w-[90%] md:max-w-[520px]">
            AI와 교육 기술로 세상을 변화시키는
            <br />
            VODA에서 당신의 역량을 발휘해보세요.
          </p>
        </div>
      </section>
    </>
  );
}
