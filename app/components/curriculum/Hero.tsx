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
              정부 교육 사업
            </p>

            <h1 className="hero-fade-2 font-bold mt-4 leading-[1.3] text-[18px] sm:text-[22px] md:text-[29px] lg:text-[43px] whitespace-normal md:whitespace-nowrap break-keep">
              <span className="text-[#00163A]">
                미래를 창조하는 교육 혁신
              </span>
            </h1>
          </div>

          <p className="hero-fade-3 text-[#111827] mt-4 leading-[1.6] text-[13px] md:text-[15px] max-w-[90%] md:max-w-[520px]">
            AI·보안·클라우드 등 실무 중심 커리큘럼으로 정부 지원 교육 과정을 운영합니다.
            <br />
            수강생 개인의 성장을 데이터로 추적하고 취업까지 함께합니다.
          </p>
        </div>
      </section>
    </>
  );
}
