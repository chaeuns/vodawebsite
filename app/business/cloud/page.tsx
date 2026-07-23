import type { Metadata } from "next";
import "./cloud.css";
import Hero from "./components/Hero";
import CoreArchitecture from "./components/CoreArchitecture";
import DesignPrinciples from "./components/DesignPrinciples";
import ServiceProcess from "./components/ServiceProcess";
import QuickLinks from "./components/QuickLinks";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "클라우드 | VODA",
  description: "보안 최우선 설계와 24/7 무중단 운영 환경으로 비즈니스 연속성을 보장하는 VODA의 클라우드 인프라 서비스입니다.",
};

export default function CloudPage() {
  return (
    <div className="cloud-page">
      <Hero />
      <CoreArchitecture />
      <DesignPrinciples />
      <ServiceProcess />
      <QuickLinks />
      <CTA />
    </div>
  );
}
