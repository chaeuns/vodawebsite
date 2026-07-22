"use client";

import { ClipboardList, BarChart3, LayoutDashboard } from "lucide-react";
import Container from "@/app/components/Container";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { adminFeatures } from "../data";

const ICONS = [ClipboardList, BarChart3, LayoutDashboard];

export default function AdminDashboard() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-[80px] relative">
      <div
        ref={ref}
        className="transition-all duration-500 ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(12px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Container>
          <div className="mb-10 pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              관리자를 위한 올인원 대시보드
            </h2>
            <p className="text-[15px] text-[#6B7280] mt-3 max-w-[640px] leading-[1.7] break-keep">
              과정 등록부터 출결·성적 관리까지, 운영에 필요한 모든 데이터를 하나의 대시보드에서
              확인하고 업무 효율을 높입니다.
            </p>
          </div>
        </Container>

        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {adminFeatures.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0D1B40] flex items-center justify-center">
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-[16px] font-bold text-[#111827] mt-4">{item.title}</p>
                <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.7]">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
