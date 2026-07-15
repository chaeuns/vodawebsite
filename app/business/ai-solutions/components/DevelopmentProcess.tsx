"use client";

import { Fragment } from "react";
import { ClipboardList, PenTool, Code2, Search, Rocket, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-[80px] relative transition-all duration-[900ms] ease-out"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          DEVELOPMENT PROCESS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          개발 프로세스
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          체계적이고 투명한 개발 프로세스로 고객의 요구사항을 정확히 반영한 맞춤형 솔루션을
          제공합니다.
        </p>

        {/* Desktop: steps connected with arrows */}
        <motion.div
          className="hidden md:flex items-stretch gap-3 mt-10"
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
                  className="relative flex-1 flex flex-col min-h-[210px] border border-[#E5E7EB] rounded-xl bg-white p-5 text-center"
                >
                  <div className="w-11 h-11 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                    <Icon size={20} className="text-[#2563EB]" />
                  </div>
                  <p className="text-[11px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                  <p className="text-[15px] font-bold text-[#111827] mt-1">{step.title}</p>
                  <p className="text-[12px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <div className="flex items-center justify-center text-[#93C5FD] shrink-0">
                    <ArrowRight size={16} />
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
                className="border border-[#E5E7EB] rounded-xl bg-white p-6 text-center"
              >
                <div className="w-11 h-11 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <p className="text-[11px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                <p className="text-[15px] font-bold text-[#111827] mt-1">{step.title}</p>
                <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
