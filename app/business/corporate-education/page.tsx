import type { Metadata } from "next";
import "./corporate-education.css";
import Hero from "./components/Hero";
import WhyVoda from "./components/WhyVoda";
import Programs from "./components/Programs";
import Audience from "./components/Audience";
import Process from "./components/Process";
import FieldTags from "./components/FieldTags";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "기업 교육 | VODA",
  description: "기업의 성장과 개인의 역량 강화를 위한 VODA의 맞춤형 기업 교육 솔루션입니다.",
};

export default function CorporateEducationPage() {
  return (
    <div className="corporate-education-page">
      <Hero />
      <WhyVoda />
      <Programs />
      <Audience />
      <Process />
      <FieldTags />
      <CTA />
    </div>
  );
}
