import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="inquiry" className="bg-[#0D1B40] py-[80px] relative">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <p className="text-white text-[26px] md:text-[30px] font-bold leading-[1.4]">
          지금 기업 맞춤 교육을 시작해보세요
        </p>
        <p className="text-[#93C5FD] text-[14px] md:text-[15px] mt-3">
          VODA의 전문 컨설턴트가 귀사에 최적화된 교육 솔루션을 제안드립니다.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1 bg-[#2563EB] text-white text-[14px] font-semibold px-8 py-3 rounded-full hover:bg-[#1d4ed8] transition-colors"
          >
            교육 상담 신청하기
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
