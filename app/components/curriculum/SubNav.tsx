import Link from "next/link";

export default function SubNav() {
  return (
    <div className="bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <p className="text-[13px] text-[#6B7280]">
          <Link href="/business/curriculum" className="hover:text-[#111827] transition-colors">
            사업영역
          </Link>
          <span className="mx-1.5">·</span>
          <span className="text-[#111827] font-medium">정부 교육 사업</span>
        </p>

        <div className="flex items-center gap-6">
          <span className="text-[14px] font-medium pb-1 border-b-2 text-[#2563EB] border-[#2563EB]">
            정부 교육
          </span>
          <Link
            href="/business/corporate-education"
            className="text-[14px] font-medium pb-1 border-b-2 border-transparent text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            기업 교육
          </Link>
        </div>
      </div>
    </div>
  );
}
