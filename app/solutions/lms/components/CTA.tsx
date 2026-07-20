import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#0D1B40] py-[80px] relative">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[#60A5FA] text-[12px] font-semibold uppercase"
        >
          GET STARTED
        </p>
        <p className="text-white text-[26px] md:text-[30px] font-bold leading-[1.4] mt-3">
          지금 VODA LMS를 경험해보세요
        </p>
        <p className="text-[#93C5FD] text-[14px] md:text-[15px] mt-3">
          VODA 스마트 훈련 플랫폼(WSTS)의 다양한 기능을 직접 확인해보세요.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <Link
            href="/contact"
            className="bg-[#2563EB] text-white text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors"
          >
            LMS 문의하기
          </Link>
          <Link
            href="/solutions/assessment"
            className="border border-white/25 text-white text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            AI 역량평가 시스템 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
