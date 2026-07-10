"use client";

import { useState } from "react";
import SubNav, { type Track } from "./SubNav";
import Ideology from "./Ideology";
import LearningMethod from "./LearningMethod";
import CourseList from "./CourseList";
import FieldOfEducation from "./FieldOfEducation";
import Partners from "./Partners";
import CTA from "./CTA";

export default function CurriculumContent() {
  const [track, setTrack] = useState<Track>("정부 교육");

  return (
    <>
      <SubNav track={track} onChange={setTrack} />

      {track === "정부 교육" ? (
        <>
          <Ideology />
          <LearningMethod />
          <CourseList />
          <FieldOfEducation />
          <Partners />
          <CTA />
        </>
      ) : (
        <section className="bg-white py-[100px]">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <p className="text-[16px] text-[#6B7280]">콘텐츠 준비 중입니다.</p>
          </div>
        </section>
      )}
    </>
  );
}
