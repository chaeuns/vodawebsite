import Link from "next/link";

export type Track = "정부 교육" | "기업 교육";

export default function SubNav({
  track,
  onChange,
}: {
  track: Track;
  onChange: (track: Track) => void;
}) {
  const tracks: Track[] = ["정부 교육", "기업 교육"];

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
          {tracks.map((t) => (
            <button
              key={t}
              onClick={() => onChange(t)}
              className={`text-[14px] font-medium pb-1 border-b-2 transition-colors ${
                track === t
                  ? "text-[#2563EB] border-[#2563EB]"
                  : "text-[#6B7280] border-transparent hover:text-[#111827]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
