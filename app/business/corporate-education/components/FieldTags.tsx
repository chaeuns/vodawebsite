"use client";

import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { fieldTags } from "../data";

export default function FieldTags() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          FIELDS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          운영 가능한 교육 분야
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          아래 항목 외에도 기업 요청에 맞춰 새로운 주제를 구성할 수 있습니다.
        </p>

        <div className="flex flex-wrap gap-2.5 mt-8">
          {fieldTags.map((tag) => (
            <span
              key={tag}
              className="text-[13px] font-medium text-[#2563EB] bg-[#EFF6FF] border border-[#2563EB]/15 px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
