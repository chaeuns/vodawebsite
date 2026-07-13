import Link from "next/link";

const TABS = [
  { label: "정부교육사업", href: "/business/curriculum" },
  { label: "기업교육", href: "/business/corporate-education" },
];

export default function SubNav() {
  return (
    <div className="bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <p className="text-[13px] text-[#6B7280]">
          <Link href="/business/curriculum" className="hover:text-[#111827] transition-colors">
            사업영역
          </Link>
          <span className="mx-1.5">·</span>
          <span className="text-[#111827] font-medium">기업 교육</span>
        </p>

        <div className="flex items-center gap-6">
          {TABS.map((tab) => {
            const isActive = tab.label === "기업교육";
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={`text-[14px] font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#2563EB] border-[#2563EB]"
                    : "text-[#6B7280] border-transparent hover:text-[#111827]"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
