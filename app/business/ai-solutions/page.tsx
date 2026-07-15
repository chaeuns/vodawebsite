import type { Metadata } from "next";
import "./ai-solutions.css";
import Hero from "./components/Hero";
import KeySolutions from "./components/KeySolutions";
import DevelopmentProcess from "./components/DevelopmentProcess";
import TechStack from "./components/TechStack";
import RelatedSolutions from "./components/RelatedSolutions";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "AI 솔루션 | VODA",
  description: "빠르게 변하는 디지털 환경에 최적화된 VODA의 AI 솔루션 개발 서비스입니다.",
};

export default function AiSolutionsPage() {
  return (
    <div className="ai-solutions-page">
      <Hero />
      <KeySolutions />
      <DevelopmentProcess />
      <TechStack />
      <RelatedSolutions />
      <CTA />
    </div>
  );
}
