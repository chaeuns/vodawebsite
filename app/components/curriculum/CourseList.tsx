"use client";

import { useState } from "react";
import { courses, courseFilters, type CourseFilter } from "./data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";

export default function CourseList() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<CourseFilter>("전체");

  const visibleCourses =
    activeFilter === "전체" ? courses : courses.filter((c) => c.category === activeFilter);

  return (
    <section
      ref={ref}
      className="bg-white pt-[80px] pb-[160px] min-h-[860px] flex flex-col justify-center relative z-20 -mt-10 shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          CURRICULUM
        </p>
        <FillHeading loop className="text-[32px] font-bold mt-2 leading-[1.3]">
          교육 과정
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          다양한 기업 협력 과정을 운영합니다.
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {courseFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[14px] font-medium px-[18px] py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? "bg-[#111827] text-white"
                  : "border border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {visibleCourses.map((course) => (
            <div
              key={course.title}
              className="border border-[#E5E7EB] rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30"
            >
              <p className="text-[18px] font-bold text-[#111827]">{course.title}</p>
              <p className="text-[13px] font-medium text-[#2563EB] mt-1">{course.duration}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {course.curriculum.map((item) => (
                  <li key={item} className="text-[14px] text-[#374151] flex items-start gap-2">
                    <span className="text-[#9CA3AF] mt-[2px]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
