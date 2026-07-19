"use client";

import { useEffect, useRef, useState } from "react";
import { Cloud, Cpu, ShieldCheck, Sparkles } from "lucide-react";
import { courses, categoryColors, type Course, type CourseCategory } from "./data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";

// Unlike useScrollReveal (one-shot), this re-triggers every time the row re-enters the viewport.
function useRepeatingReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const categoryIcons: Record<CourseCategory, typeof Cpu> = {
  "AI/AX 과정": Cpu,
  "보안 과정": ShieldCheck,
  "클라우드 과정": Cloud,
  "생성형AI 과정": Sparkles,
};

function CourseText({ course, align }: { course: Course; align: "left" | "right" }) {
  const colors = categoryColors[course.category];
  const isRight = align === "right";

  return (
    <div
      className={`flex flex-col items-start text-left ${
        isRight ? "min-[821px]:items-end min-[821px]:text-right" : ""
      }`}
    >
      <span
        className="font-bold leading-none mb-[14px]"
        style={{
          fontSize: "52px",
          color: colors.color,
          opacity: 0.28,
        }}
      >
        {course.number}
      </span>
      <h3 className="text-[30px] font-bold text-[#111827] leading-[1.3]">{course.title}</h3>
      <p
        className="text-[14.5px] text-[#6B7280] mt-3 leading-[1.6] break-keep whitespace-pre-line"
        style={{ maxWidth: "340px" }}
      >
        {course.description}
      </p>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const colors = categoryColors[course.category];
  const Icon = categoryIcons[course.category];

  return (
    <div className="relative rounded-2xl border border-[#E5E7EB] bg-white p-6 pt-7 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1" style={{ background: colors.color }} />

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl flex-shrink-0"
          style={{ background: colors.bg }}
        >
          <Icon className="h-4 w-4" style={{ color: colors.color }} />
        </span>
        <span className="text-[13px] font-medium text-[#374151]">{course.duration}</span>
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: colors.bg, color: colors.color }}
        >
          {course.badge}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="text-[12px] font-medium px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#374151]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function CourseRow({ course, index }: { course: Course; index: number }) {
  const { ref, isVisible } = useRepeatingReveal();
  const isCardLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 min-[821px]:grid-cols-2 gap-10 items-center"
    >
      <div className={isCardLeft ? "min-[821px]:order-2" : "min-[821px]:order-1"}>
        <CourseText course={course} align={isCardLeft ? "left" : "right"} />
      </div>
      <div
        className={`transition-all duration-700 ease-out ${
          isCardLeft ? "min-[821px]:order-1" : "min-[821px]:order-2"
        }`}
        style={{
          transform: isVisible ? "translateX(0)" : `translateX(${isCardLeft ? "-48px" : "48px"})`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <CourseCard course={course} />
      </div>
    </div>
  );
}

export default function CourseList() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white pt-[80px] pb-[160px] min-h-[860px] flex flex-col justify-center relative z-20 -mt-10">
      <div
        ref={ref}
        className="transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="max-w-[1100px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
          <h2 className="text-[32px] font-bold leading-[1.3] text-[#111827]">
            교육 과정
          </h2>
          <p className="text-[15px] text-[#6B7280] mt-5">
            다양한 기업 협력 과정을 운영합니다.
          </p>
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col mt-16" style={{ gap: "110px" }}>
            {courses.map((course, i) => (
              <CourseRow key={course.title} course={course} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
