"use client";

import { Briefcase, User, Code2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { audiences } from "../data";

const ICONS = [Briefcase, User, Code2];

const ACCENT_CLASSES = [
  "border-t-[#2563EB] hover:border-t-[#5B8DEF]",
  "border-t-[#0F9E75] hover:border-t-[#34C9A3]",
  "border-t-[#D85A30] hover:border-t-[#E8825F]",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Audience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-16 md:py-[100px] relative transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          AUDIENCE
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          교육 대상
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          직급과 직무에 맞는 과정으로 구분해 운영합니다.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {audiences.map((audience, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={audience.title}
                variants={cardVariants}
                className={`border border-[#E5E7EB] border-t-[3px] rounded-2xl p-10 min-h-[420px] flex flex-col items-center justify-center text-center transition-[transform,box-shadow,border-top-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] ${ACCENT_CLASSES[i]}`}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={24} className="text-[#2563EB]" />
                </div>
                <span className="inline-block text-[12px] font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full mt-4">
                  {audience.badge}
                </span>
                <p className="text-[20px] font-bold text-[#111827] mt-3">{audience.title}</p>
                <p className="text-[14px] text-[#6B7280] mt-2 leading-[1.7] max-w-[560px] mx-auto break-keep">
                  {audience.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
