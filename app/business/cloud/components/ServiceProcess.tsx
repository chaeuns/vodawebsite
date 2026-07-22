"use client";

import { Fragment } from "react";
import { Search, PenTool, Rocket, ShieldCheck, LineChart, ChevronRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { serviceProcessSteps } from "../data";
import Container from "@/app/components/Container";

const ICONS = [Search, PenTool, Rocket, ShieldCheck, LineChart];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiceProcess() {
  return (
    <section className="py-[80px] relative bg-white">
      <Container>
        <div className="pl-20 pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            도입 프로세스
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            현황 진단부터 운영 안정화까지, 5단계 검증된 프로세스로 안전하게 전환합니다.
          </p>
        </div>
      </Container>

      <div className="max-w-[1100px] mx-auto px-6">
        {/* Desktop: steps connected with arrows */}
        <motion.div
          className="hidden md:flex items-stretch gap-1.5 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceProcessSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Fragment key={step.step}>
                <motion.div
                  variants={cardVariants}
                  className="group flex-1 border border-[#E5E7EB] rounded-xl bg-white p-7 min-h-[200px] flex flex-col items-center justify-start text-center shadow-none hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)] hover:border-[#2563EB]/30 transition-[box-shadow,border-color] duration-200 ease-out"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="w-14 h-14 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center transition-colors duration-200 ease-out group-hover:bg-[#2563EB]">
                    <Icon size={24} className="text-[#2563EB] transition-colors duration-200 ease-out group-hover:text-white" />
                  </div>
                  <p className="text-[13px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                  <p className="text-[18px] font-bold text-[#111827] mt-1">{step.title}</p>
                  <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
                </motion.div>
                {i < serviceProcessSteps.length - 1 && (
                  <div className="flex items-center justify-center text-[#2563EB] shrink-0">
                    <ChevronRight className="w-[28px] h-[28px]" />
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
          {serviceProcessSteps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className="group border border-[#E5E7EB] rounded-xl bg-white p-8 min-h-[180px] flex flex-col items-center justify-start text-center shadow-none hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)] hover:border-[#2563EB]/30 transition-[box-shadow,border-color] duration-200 ease-out"
              >
                <div className="w-14 h-14 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center transition-colors duration-200 ease-out group-hover:bg-[#2563EB]">
                  <Icon size={24} className="text-[#2563EB] transition-colors duration-200 ease-out group-hover:text-white" />
                </div>
                <p className="text-[13px] font-bold text-[#2563EB] mt-3">{step.step}</p>
                <p className="text-[18px] font-bold text-[#111827] mt-1">{step.title}</p>
                <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.6]">{step.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
