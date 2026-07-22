"use client";

import { Activity, Target, FileText } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { dashboardFeatures, domainScores, reportSample } from "../data";

const ICONS = [Activity, Target, FileText];

function ReportCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(13,27,64,0.08)]">
      <div className="flex items-center gap-1.5 border-b border-[#F1F3F7] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
        <span className="ml-3 text-[12px] text-[#9CA3AF]">AI 역량 리포트</span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[15px] font-bold text-[#111827]">{reportSample.name}</p>
            <p className="text-[12px] text-[#9CA3AF]">{reportSample.role}</p>
          </div>
          <div className="text-right">
            <p className="text-[28px] font-extrabold leading-none text-[#00163A]">
              {reportSample.totalScore}
              <span className="ml-1 text-[13px] font-medium text-[#9CA3AF]">/ 100</span>
            </p>
            <span className="mt-1 inline-block rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-bold text-[#2563EB]">
              {reportSample.level}
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {domainScores.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <span className="w-24 shrink-0 truncate text-[12px] text-[#4B5563]">{d.label}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F1F3F7]">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#93C5FD]"
                  style={{ width: `${d.score}%` }}
                />
              </div>
              <span className="w-6 shrink-0 text-right text-[12px] font-semibold text-[#6B7280]">
                {d.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-[80px] relative">
      <div
        ref={ref}
        className="max-w-[1100px] mx-auto px-6 transition-all duration-500 ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(12px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <h2 className="text-[32px] font-bold leading-[1.3] text-[#00163A]">
          한눈에 보는 AI 역량 리포트
        </h2>
        <p className="text-[15px] text-[#6B7280] mt-3 max-w-[640px] leading-[1.7] break-keep">
          도메인별 점수와 종합 레벨을 하나의 리포트에서 확인하고, 조직의 AI 역량 현황을
          데이터로 파악합니다.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center">
          <ReportCard />

          <div className="divide-y divide-[#E5E7EB]">
            {dashboardFeatures.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <div key={item.title} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#0D1B40] flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-[#111827]">{item.title}</p>
                    <p className="text-[13px] text-[#6B7280] mt-1 leading-[1.7]">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
