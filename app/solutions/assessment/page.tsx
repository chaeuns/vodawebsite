import type { Metadata } from "next";
import Hero from "./components/Hero";
import CoreTech from "./components/CoreTech";
import Domains from "./components/Domains";
import Dashboard from "./components/Dashboard";
import TechComponents from "./components/TechComponents";
import Security from "./components/Security";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "AI 활용 역량평가 시스템 | VODA",
  description:
    "데이터 기반 AI 역량평가 솔루션. 객관적인 평가 체계로 조직의 AI 역량을 정확하게 측정합니다.",
};

export default function AssessmentPage() {
  return (
    <div>
      <div className="relative">
        <Hero />
        <CoreTech />
      </div>
      <Domains />
      <Dashboard />
      <TechComponents />
      <Security />
      <CTA />
    </div>
  );
}
