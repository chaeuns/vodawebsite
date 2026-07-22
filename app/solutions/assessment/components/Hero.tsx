"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SCORE_BARS = [82, 75, 68, 90, 60, 78];

function ScoreMockup() {
  return (
    <motion.div
      className="mx-auto mt-10 w-full max-w-[640px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(13,27,64,0.12)]"
      initial={{ opacity: 0, y: 40, scale: 0.768 }}
      animate={{ opacity: 1, y: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-1.5 border-b border-[#F1F3F7] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
          <span className="ml-3 h-4 w-40 rounded-full bg-[#F3F4F6]" />
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="flex items-center gap-4 border-b border-[#F1F3F7] p-5 sm:w-40 sm:flex-col sm:items-start sm:border-b-0 sm:border-r sm:p-6">
            <span className="text-[34px] font-extrabold leading-none text-[#00163A]">
              75.5
            </span>
            <div>
              <span className="block text-[11px] text-[#9CA3AF]">/ 100점</span>
              <span className="mt-1 inline-block rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-bold text-[#2563EB]">
                Advanced
              </span>
            </div>
          </div>

          <div className="flex-1 p-5 sm:p-6">
            <div className="mb-3 h-4 w-28 rounded-full bg-[#EFF6FF]" />
            <div className="space-y-2.5">
              {SCORE_BARS.map((v, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2.5 w-16 shrink-0 rounded-full bg-[#E5E7EB]" />
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F1F3F7]">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#93C5FD]"
                      style={{ width: `${v}%` }}
                    />
                  </div>
                  <span className="w-6 shrink-0 text-right text-[11px] font-semibold text-[#6B7280]">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="sticky top-0 z-0 flex min-h-screen items-center justify-center overflow-hidden py-20 px-6 sm:px-10 lg:px-16"
      style={{ background: "linear-gradient(135deg, #E8EDF8 0%, #D6E0F5 100%)" }}
    >
      <div className="w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-bold leading-[1.35] text-[26px] md:text-[38px] text-[#00163A] break-keep mt-8 sm:mt-24"
        >
          AI 활용 역량평가 시스템
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          className="text-[15px] md:text-[16px] text-[#4B5563] mt-4 max-w-160 mx-auto break-keep leading-[1.7]"
        >
          데이터 기반 AI 역량평가 솔루션.
          <br className="hidden md:block" /> 객관적인 평가 체계로 조직의 AI 역량을 정확하게 측정합니다.
        </motion.p>

        <ScoreMockup />

        <motion.div
          className="mt-12 flex flex-col items-center gap-1 text-[#6B7280]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="text-[12px] font-semibold tracking-[1.5px]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
