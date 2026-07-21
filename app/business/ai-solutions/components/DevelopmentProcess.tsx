"use client";

import { Fragment } from "react";
import { ClipboardList, PenTool, Code2, Search, Rocket, ChevronRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { processSteps } from "../data";

const ICONS = [ClipboardList, PenTool, Code2, Search, Rocket];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DevelopmentProcess() {
  return (
    <section
      className="py-[80px] relative"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
        <h2
          className="font-extrabold font-suit text-[#0e1b52]"
          style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
        >
          개발 프로세스
        </h2>
        <p className="text-[15px] text-[#5a6895] mt-3">
          체계적이고 투명한 개발 프로세스로 고객의 요구사항을 정확히 반영한 맞춤형 솔루션을
          제공합니다.
        </p>

        {/* Desktop: steps connected with arrows */}
        <motion.div
          className="hidden md:flex items-stretch gap-1.5 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Fragment key={step.step}>
                <motion.div
                  variants={cardVariants}
                  className="group flex-1 border border-[#E5E7EB] rounded-xl bg-white p-10 min-h-[200px] flex flex-col items-center justify-start text-center shadow-none hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)] hover:border-[#2563EB]/30 transition-[box-shadow,border-color] duration-200 ease-out"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="w-14 h-14 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center transition-colors duration-200 ease-out group-hover:bg-[#2563EB]">
                    <Icon size={24} className="text-[#2563EB] transition-colors duration-200 ease-out group-hover:text-white" />
                  </div>
                  <p className="text-[13px] font-bold text-[#2563EB] mt-3 whitespace-pre-line">{step.step}</p>
                  <p className="text-[19px] font-bold text-[#111827] mt-1 whitespace-pre-line">{step.title}</p>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <div className="flex items-center justify-center text-[#2563EB] shrink-0">
                    <ChevronRight className="w-[35px] h-[35px]" />
                  </div>
                )}
              </Fragment>
            );
          })}
        </motion.div>

        {/* Mobile: stacked */}
        <motion.div
          className="md:hidden flex flex-col gap-4 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className="group border border-[#E5E7EB] rounded-xl bg-white p-10 min-h-[200px] flex flex-col items-center justify-start text-center shadow-none hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)] hover:border-[#2563EB]/30 transition-[box-shadow,border-color] duration-200 ease-out"
              >
                <div className="w-14 h-14 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center transition-colors duration-200 ease-out group-hover:bg-[#2563EB]">
                  <Icon size={24} className="text-[#2563EB] transition-colors duration-200 ease-out group-hover:text-white" />
                </div>
                <p className="text-[13px] font-bold text-[#2563EB] mt-3 whitespace-pre-line">{step.step}</p>
                <p className="text-[19px] font-bold text-[#111827] mt-1 whitespace-pre-line">{step.title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
