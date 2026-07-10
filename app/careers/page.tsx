import type { Metadata } from "next";
import "./careers.css";
import Hero from "@/app/components/careers/Hero";
import Process from "@/app/components/careers/Process";
import OurValues from "@/app/components/careers/OurValues";
import Hiring from "@/app/components/careers/Hiring";
import FAQ from "@/app/components/careers/FAQ";

export const metadata: Metadata = {
  title: "채용 | VODA",
  description: "AI와 교육 기술로 세상을 변화시키는 VODA에서 당신의 역량을 발휘해보세요.",
};

export default function CareersPage() {
  return (
    <>
      <Hero />
      <Process />
      <OurValues />
      <Hiring />
      <FAQ />
    </>
  );
}