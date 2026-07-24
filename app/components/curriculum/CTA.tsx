import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0D1B40] py-[80px] relative z-50 -mt-10 shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <p className="text-white text-[26px] md:text-[30px] font-bold leading-[1.4]">
          지금 교육과정을 확인해보세요
        </p>
        <p className="text-[#93C5FD] text-[14px] md:text-[15px] mt-3">
          VODA는 실무형 인재를 양성하는 정부지원 교육 과정을 <br className="md:hidden" />
          운영하고 있습니다.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 bg-[#2563EB] text-white text-[14px] font-semibold px-8 py-3 rounded-full hover:bg-[#1d4ed8] transition-colors"
          >
            수강 신청하기
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
