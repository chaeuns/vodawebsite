"use client";

import { useEffect, useRef, useState } from "react";
import { courses, categoryColors, type Course } from "./data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import Container from "@/app/components/Container";

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

// "\n" breaks on all breakpoints, "|" breaks on mobile only, "^" breaks on desktop only.
function renderBreaks(text: string, keyPrefix: string) {
  return text.split(/(\n|\||\^)/).map((part, i) => {
    if (part === "\n") return <br key={`${keyPrefix}-${i}`} />;
    if (part === "|") return <br key={`${keyPrefix}-${i}`} className="md:hidden" />;
    if (part === "^") return <br key={`${keyPrefix}-${i}`} className="hidden md:block" />;
    return part;
  });
}

function CourseText({ course }: { course: Course }) {
  const colors = categoryColors[course.category];

  return (
    <div className="flex flex-col items-start text-left">
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
        className="text-[14.5px] text-[#6B7280] mt-3 leading-[1.6] break-keep"
        style={{ maxWidth: "340px" }}
      >
        {renderBreaks(course.description, `desc-${course.number}`)}
      </p>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const colors = categoryColors[course.category];

  return (
    <div className="relative rounded-2xl border border-[#E5E7EB] bg-white p-6 pt-7 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5">
      <div className="absolute inset-x-0 top-0 h-1" style={{ background: colors.color }} />

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: colors.bg, color: colors.color }}
        >
          {course.badge}
        </span>
        <span className="text-[13px] font-medium text-[#374151]">{course.duration}</span>
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

function CourseRow({ course }: { course: Course }) {
  const { ref, isVisible } = useRepeatingReveal();

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 min-[821px]:grid-cols-[0.85fr_1.15fr] gap-6 items-start"
    >
      <div className="min-[821px]:order-1 min-[821px]:pl-12">
        <CourseText course={course} />
      </div>
      <div
        className="min-[821px]:order-2 min-[821px]:mt-[66px] transition-all duration-700 ease-out"
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(48px)",
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
        <Container>
          <div className="pl-6 pr-6 md:pl-20 md:pr-20">
            <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              교육 과정
            </h2>
            <p className="text-[15px] text-[#5a6895] mt-3">
              다양한 기업 협력 과정을 운영합니다.
            </p>
          </div>
        </Container>

        <Container>
          <div className="pl-6 pr-6 md:pl-20 md:pr-20">
            <div className="flex flex-col mt-16 gap-[64px] md:gap-[110px]">
              {courses.map((course) => (
                <CourseRow key={course.title} course={course} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
