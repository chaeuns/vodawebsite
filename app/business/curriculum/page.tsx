import type { Metadata } from "next";
import "./curriculum.css";
import Hero from "@/app/components/curriculum/Hero";
import CurriculumContent from "@/app/components/curriculum/CurriculumContent";

export const metadata: Metadata = {
  title: "교육과정 | VODA",
  description: "AI·보안·클라우드 등 실무 중심 커리큘럼으로 정부 지원 교육 과정을 운영합니다.",
};

export default function CurriculumPage() {
  return (
    <>
      <Hero />
      <CurriculumContent />
    </>
  );
}
