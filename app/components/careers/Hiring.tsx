"use client";

import { useState } from "react";
import { jobsByTeam, teams, type TeamTab } from "./data";
import FillHeading from "@/app/components/shared/FillHeading";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";

export default function Hiring() {
  const [activeTeam, setActiveTeam] = useState<TeamTab>("기술지원 팀");
  const jobs = jobsByTeam[activeTeam];
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative z-20 -mt-10 shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          HIRING
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          함께할 팀원을 찾습니다
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          현재 모집 중인 포지션을 확인하고 지원해 보세요.
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {teams.map((team) => (
            <button
              key={team}
              onClick={() => setActiveTeam(team)}
              className={`text-[14px] font-medium px-[18px] py-2 rounded-full transition-colors ${
                activeTeam === team
                  ? "bg-[#111827] text-white"
                  : "border border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB]"
              }`}
            >
              {team}
            </button>
          ))}
        </div>

        <div className="mt-6 border border-[#E5E7EB] rounded-xl overflow-hidden">
          {jobs.map((job, i) => (
            <a
              key={job.title}
              href={job.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-6 h-14 hover:bg-[#F9FAFB] transition-colors ${
                i < jobs.length - 1 ? "border-b border-[#E5E7EB]" : ""
              } ${job.url ? "cursor-pointer" : "cursor-default"}`}
            >
              <span className="text-[15px] font-semibold text-[#111827]">
                {job.title}
              </span>
              {job.open ? (
                <span className="text-[12px] font-semibold bg-[#ECFDF5] text-[#16A34A] px-2.5 py-0.5 rounded-full">
                  모집 중
                </span>
              ) : (
                <span className="text-[12px] font-semibold bg-[#F9FAFB] text-[#9CA3AF] px-2.5 py-0.5 rounded-full border border-[#E5E7EB]">
                  모집 마감
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
