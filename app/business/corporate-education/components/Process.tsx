"use client";

import { Fragment } from "react";
import { MessageSquare, PenTool, PlayCircle, TrendingUp, ChevronRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Container from "@/app/components/Container";
import { processSteps } from "../data";

const ICONS = [MessageSquare, PenTool, PlayCircle, TrendingUp];
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Process() {
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
      className="py-16 md:py-[100px] relative"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
      }}
    >
      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            교육 진행 프로세스
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            상담부터 성과 리포트까지 4단계로 진행됩니다.
          </p>
        </div>
      </Container>

      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
        {/* Desktop: steps connected with arrows */}
        <div className="hidden md:flex items-stretch gap-4 mt-10">
          {processSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Fragment key={step.step}>
                <motion.div
                  className="group flex-1 border border-[#E5E7EB] rounded-xl bg-white pt-24 pb-10 px-10 min-h-[420px] flex flex-col items-center justify-start text-center shadow-none hover:shadow-xl hover:shadow-blue-500/5 hover:border-[#2563EB]/30 transition-[box-shadow,border-color] duration-300 ease-out"
                  variants={cardVariants(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.3 } }}
                >
                  <div className="w-14 h-14 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                    <Icon size={24} className="text-[#2563EB]" />
                  </div>
                  <p className="text-[13px] font-bold text-[#2563EB] mt-3 whitespace-pre-line">{step.step}</p>
                  <p className="text-[19px] font-bold text-[#111827] mt-1 whitespace-pre-line">{step.title}</p>
                  <p className="text-[15px] text-[#6B7280] mt-2 leading-[1.6] whitespace-pre-line">{step.body}</p>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <motion.div
                    className="flex items-center justify-center text-[#2563EB] shrink-0"
                    variants={arrowVariants(i)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <ChevronRight className="w-[35px] h-[35px]" />
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
                className="group border border-[#E5E7EB] rounded-xl bg-white pt-8 pb-8 px-10 min-h-[220px] flex flex-col items-center justify-start text-center shadow-none hover:shadow-xl hover:shadow-blue-500/5 hover:border-[#2563EB]/30 transition-[box-shadow,border-color] duration-300 ease-out"
                variants={cardVariants(i)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.3 } }}
              >
                <div className="w-14 h-14 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={24} className="text-[#2563EB]" />
                </div>
                <p className="text-[13px] font-bold text-[#2563EB] mt-3 whitespace-pre-line">{step.step}</p>
                <p className="text-[19px] font-bold text-[#111827] mt-1 whitespace-pre-line">{step.title}</p>
                <p className="text-[15px] text-[#6B7280] mt-2 leading-[1.6] whitespace-pre-line">{step.body}</p>
              </motion.div>
            );
          })}
        </div>
        </div>
      </Container>
    </section>
  );
}
