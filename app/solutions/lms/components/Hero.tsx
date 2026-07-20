"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CHART_BARS = [38, 62, 48, 80, 56, 70];

function DashboardMockup() {
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

        <div className="flex">
          <div className="hidden w-14 flex-col items-center gap-4 border-r border-[#F1F3F7] py-6 sm:flex">
            <span className="h-7 w-7 rounded-lg bg-[#2563EB]" />
            <span className="h-7 w-7 rounded-lg bg-[#EFF6FF]" />
            <span className="h-7 w-7 rounded-lg bg-[#EFF6FF]" />
            <span className="h-7 w-7 rounded-lg bg-[#EFF6FF]" />
          </div>

          <div className="flex-1 p-5 sm:p-6">
            <div className="mb-4 h-4 w-28 rounded-full bg-[#EFF6FF]" />
            <div className="grid grid-cols-3 gap-3">
              {["#00163A", "#2563EB", "#93C5FD"].map((color) => (
                <div key={color} className="rounded-xl border border-[#F1F3F7] bg-[#F9FAFB] p-3">
                  <span className="block h-2 w-10 rounded-full" style={{ background: color }} />
                  <span className="mt-2 block h-3 w-14 rounded-full bg-[#E5E7EB]" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-20 items-end gap-2 rounded-xl border border-[#F1F3F7] bg-[#F9FAFB] p-3">
              {CHART_BARS.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-[#2563EB] to-[#93C5FD]"
                  style={{ height: `${h}%` }}
                />
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
          VODA LMS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          className="text-[15px] md:text-[16px] text-[#4B5563] mt-4 max-w-160 mx-auto break-keep leading-[1.7]"
        >
          K-Digital Training 특화 차세대 LMS. 교육생 선발부터 수료까지 전 과정을
          <br className="hidden md:block" /> 스마트하게 관리하는 AI 기반 올인원 교육 솔루션입니다.
        </motion.p>

        <DashboardMockup />

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
