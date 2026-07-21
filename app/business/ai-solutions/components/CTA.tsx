"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#0D1B40] py-[80px] relative">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[#60A5FA] text-[12px] font-semibold uppercase"
        >
          LET&apos;S BUILD TOGETHER
        </p>
        <p className="text-white text-[26px] md:text-[30px] font-bold leading-[1.4] mt-3">
          프로젝트를 시작할 준비가 되셨나요?
        </p>
        <p className="text-[#93C5FD] text-[14px] md:text-[15px] mt-3">
          VODA의 AI 솔루션 전문가가 귀사에 최적화된 솔루션을 함께 설계합니다.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <Link
            href="/contact"
            className="bg-[#2563EB] text-white text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors"
          >
            개발 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
