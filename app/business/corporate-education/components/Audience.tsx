"use client";

import { Briefcase, User, Code2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Container from "@/app/components/Container";
import { audiences } from "../data";

const ICONS = [Briefcase, User, Code2];

const ACCENT_CLASSES = [
  "border-t-[#2563EB] hover:border-t-[#5B8DEF]",
  "border-t-[#0F9E75] hover:border-t-[#34C9A3]",
  "border-t-[#D85A30] hover:border-t-[#E8825F]",
];

const ICON_ACCENTS = [
  { bg: "#EFF6FF", color: "#2563EB" },
  { bg: "#ECFDF5", color: "#0F9E75" },
  { bg: "#FDF1EC", color: "#D85A30" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Audience() {
  return (
    <section className="bg-white py-16 md:py-[100px] relative">
      <Container>
        <div className="pl-20 pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            교육 대상
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            직급과 직무에 맞는 과정으로 구분해 운영합니다.
          </p>
        </div>
      </Container>

      <Container>
        <div className="pl-20 pr-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {audiences.map((audience, i) => {
            const Icon = ICONS[i];
            const accent = ICON_ACCENTS[i];
            return (
              <motion.div
                key={audience.title}
                variants={cardVariants}
                className={`border border-[#E5E7EB] border-t-[3px] rounded-2xl p-10 min-h-[420px] flex flex-col items-center justify-center text-center transition-[transform,box-shadow,border-top-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] ${ACCENT_CLASSES[i]}`}
              >
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ background: accent.bg }}>
                  <Icon size={24} style={{ color: accent.color }} />
                </div>
                <span className="inline-block text-[12px] font-semibold px-3 py-1 rounded-full mt-4" style={{ color: accent.color, background: accent.bg }}>
                  {audience.badge}
                </span>
                <p className="text-[20px] font-bold text-[#111827] mt-3 whitespace-pre-line">{audience.title}</p>
                <p className="text-[14px] text-[#6B7280] mt-2 leading-[1.7] max-w-[560px] mx-auto break-keep whitespace-pre-line">
                  {audience.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
