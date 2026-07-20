import type { Metadata } from "next";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import Features from "./components/Features";
import AdminDashboard from "./components/AdminDashboard";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "VODA LMS | VODA",
  description:
    "교육생 모집부터 수료까지, VODA 스마트 훈련 플랫폼(WSTS)이 훈련 운영의 전 과정을 하나로 연결하는 통합 학습관리 시스템입니다.",
};

export default function LmsPage() {
  return (
    <div>
      <div className="relative">
        <Hero />
        <ValueProps />
      </div>
      <Features />
      <AdminDashboard />
      <CTA />
    </div>
  );
}

