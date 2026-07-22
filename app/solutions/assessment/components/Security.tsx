"use client";

import { UserCheck, Eye, ShieldAlert, Lock } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { securityFeatures } from "../data";

const ICONS = [UserCheck, Eye, ShieldAlert, Lock];

export default function Security() {
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
          신뢰할 수 있는 평가 환경
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {securityFeatures.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-6">
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
