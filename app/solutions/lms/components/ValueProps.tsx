"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Sparkles, Globe2 } from "lucide-react";
import { valueProps } from "../data";

const ICONS = [Layers, Sparkles, Globe2];

const TITLE_WORDS = "왜 VODA LMS인가요?".split(" ");
const SPLIT_INDEX = Math.ceil(TITLE_WORDS.length / 2);
const TITLE_LEFT = TITLE_WORDS.slice(0, SPLIT_INDEX).join(" ");
const TITLE_RIGHT = TITLE_WORDS.slice(SPLIT_INDEX).join(" ");

export default function ValueProps() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const titleBlurValue = useTransform(scrollYProgress, [0, 0.35], [0, 10]);
  const titleFilter = useTransform(titleBlurValue, (v) => `blur(${v}px)`);
  const titleLeftX = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const titleRightX = useTransform(scrollYProgress, [0, 0.4], [0, 60]);

  const ringScale = useTransform(scrollYProgress, [0, 0.6], [1, 2.4]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.15, 0.55], [0.5, 0.5, 0]);

  const cardsOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const cardsScale = useTransform(scrollYProgress, [0.35, 0.65], [0.92, 1]);
  const cardsY = useTransform(scrollYProgress, [0.35, 0.65], [40, 0]);

  return (
    <section ref={wrapperRef} className="relative bg-white" style={{ height: "220vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.span
          aria-hidden
          className="absolute left-1/2 top-1/2 rounded-full border border-[#BFDBFE]"
          style={{ width: 220, height: 220, x: "-50%", y: "-50%", scale: ringScale, opacity: ringOpacity }}
        />
        <motion.span
          aria-hidden
          className="absolute left-1/2 top-1/2 rounded-full border border-[#DBEAFE]"
          style={{ width: 380, height: 380, x: "-50%", y: "-50%", scale: ringScale, opacity: ringOpacity }}
        />
        <motion.span
          aria-hidden
          className="absolute left-1/2 top-1/2 rounded-full border border-[#EFF6FF]"
          style={{ width: 540, height: 540, x: "-50%", y: "-50%", scale: ringScale, opacity: ringOpacity }}
        />

        <motion.h2
          className="pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center gap-x-3 px-6 text-center text-[26px] sm:text-[34px] md:text-[40px] font-bold text-[#00163A]"
          style={{ opacity: titleOpacity, filter: titleFilter }}
        >
          <motion.span style={{ x: titleLeftX }}>{TITLE_LEFT}</motion.span>
          <motion.span style={{ x: titleRightX }}>{TITLE_RIGHT}</motion.span>
        </motion.h2>

        <motion.div
          className="absolute inset-0 flex items-center justify-center px-6"
          style={{ opacity: cardsOpacity }}
        >
          <motion.div className="w-full max-w-[1100px] mx-auto" style={{ y: cardsY, scale: cardsScale }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {valueProps.map((item, i) => {
                const Icon = ICONS[i];
                return (
                  <div
                    key={item.number}
                    className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 sm:p-7"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[13px] font-extrabold text-[#93C5FD]">
                        {item.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                        <Icon size={18} className="text-[#2563EB]" />
                      </div>
                    </div>
                    <p className="text-[16px] sm:text-[17px] font-bold text-[#111827] mt-4">
                      {item.title}
                    </p>
                    <p className="text-[13px] sm:text-[14px] text-[#6B7280] mt-2 leading-[1.7]">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
