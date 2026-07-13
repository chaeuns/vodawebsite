"use client";

import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { techStack } from "../data";

export default function TechStack() {
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
          TECH STACK
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          기술 스택
        </FillHeading>

        <div className="flex flex-col gap-4 mt-10">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border border-[#E5E7EB] rounded-xl p-5"
            >
              <div className="sm:w-[180px] shrink-0">
                <p className="text-[11px] font-bold text-[#2563EB] tracking-wide uppercase">
                  {group.category}
                </p>
                <p className="text-[14px] font-semibold text-[#111827] mt-0.5">{group.label}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] font-medium text-[#374151] bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
