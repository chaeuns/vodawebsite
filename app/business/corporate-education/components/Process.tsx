"use client";

import { Fragment } from "react";
import { MessageSquare, PenTool, PlayCircle, TrendingUp, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { processSteps } from "../data";

const ICONS = [MessageSquare, PenTool, PlayCircle, TrendingUp];
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Process() {
  const { ref, isVisible } = useScrollReveal();
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = (i: number): Variants =>
    shouldReduceMotion
      ? { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0 } }
      : {
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0, transition: { duration: 1.8, ease: EASE, delay: i * 0.35 } },
        };

  const arrowVariants = (i: number): Variants =>
    shouldReduceMotion
      ? { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0 } }
      : {
          hidden: { opacity: 0, x: -6 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.4, ease: EASE, delay: i * 0.35 + 0.4 },
          },
        };

  return (
    <section
      ref={ref}
      className="py-16 md:py-[100px] relative transition-all duration-[900ms] ease-out"
      style={{
        background: "linear-gradient(160deg, #E8EDF8 0%, #D6E0F5 45%, #EAF0FB 100%)",
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          PROCESS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          교육 진행 프로세스
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          상담부터 성과 리포트까지 4단계로 진행됩니다.
        </p>

        {/* Desktop: steps connected with arrows */}
        <div className="hidden md:flex items-stretch gap-4 mt-10">
          {processSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Fragment key={step.step}>
                <motion.div
                  className="group flex-1 border border-[#E5E7EB] rounded-xl bg-white p-10 min-h-[420px] flex flex-col items-center justify-center text-center shadow-none hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)] hover:border-[#2563EB]/30 transition-[box-shadow,border-color] duration-200 ease-out"
                  variants={cardVariants(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="w-11 h-11 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center transition-colors duration-200 ease-out group-hover:bg-[#2563EB]">
                    <Icon size={20} className="text-[#2563EB] transition-colors duration-200 ease-out group-hover:text-white" />
                  </div>
                  <p className="text-[11px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                  <p className="text-[15px] font-bold text-[#111827] mt-1">{step.title}</p>
                  <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <motion.div
                    className="flex items-center justify-center text-[#93C5FD] shrink-0"
                    variants={arrowVariants(i)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-4 mt-10">
          {processSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={step.step}
                className="group border border-[#E5E7EB] rounded-xl bg-white p-10 min-h-[420px] flex flex-col items-center justify-center text-center shadow-none hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)] hover:border-[#2563EB]/30 transition-[box-shadow,border-color] duration-200 ease-out"
                variants={cardVariants(i)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={shouldReduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
              >
                <div className="w-11 h-11 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center transition-colors duration-200 ease-out group-hover:bg-[#2563EB]">
                  <Icon size={20} className="text-[#2563EB] transition-colors duration-200 ease-out group-hover:text-white" />
                </div>
                <p className="text-[11px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                <p className="text-[15px] font-bold text-[#111827] mt-1">{step.title}</p>
                <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
