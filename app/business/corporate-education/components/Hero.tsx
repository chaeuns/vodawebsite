import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
              <span className="inline-flex items-center gap-1 align-middle text-[#00163A]">
                사업 영역
                <ChevronRight className="w-[13px] h-[13px] md:w-[15px] md:h-[15px]" strokeWidth={2.5} />
              </span>{" "}
              <span className="align-middle">기업 교육</span>
            </p>

            <h1 className="hero-fade-2 font-bold mt-4 leading-[1.3] text-[1.7rem] sm:text-[22px] md:text-[29px] lg:text-[43px] whitespace-normal md:whitespace-nowrap break-keep">
              <span className="text-[#00163A]">
                기업의 성장과 개인의 역량 강화
              </span>
            </h1>
          </div>

          <p className="hero-fade-3 text-[#111827] mt-4 leading-[1.6] text-[13px] md:text-[15px] max-w-[90%] md:max-w-[520px]">
            기업의 성장과 개인의 역량 강화를 위한 VODA의 맞춤형
            <br className="md:hidden" /> 교육 솔루션입니다.
            <br className="hidden md:inline" /> 현장 실무 중심의 커리큘럼으로
            <br className="md:hidden" /> 조직의 경쟁력을 함께 만들어갑니다.
          </p>
        </div>
      </section>
    </>
  );
}
