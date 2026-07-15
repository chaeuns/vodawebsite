"use client";

import { motion } from "framer-motion";

const NAVY = "#1a3570";
const BLUE = "#2d6bff";

const VALUES = [
  {
    title: "Innovation",
    statNum: "47+",
    statLabel: "개발 완료 프로젝트",
    align: "left" as const,
  },
  {
    title: "Growth",
    statNum: "12000+",
    statLabel: "수료 인원",
    align: "right" as const,
  },
  {
    title: "Connection",
    statNum: "230+",
    statLabel: "파트너 기업",
    align: "left" as const,
  },
];

function ValueBlock({
  title,
  statNum,
  statLabel,
  align,
  delay,
  showLine = true,
}: {
  title: string;
  statNum: string;
  statLabel: string;
  align: "left" | "right";
  delay: number;
  showLine?: boolean;
}) {
  const isRight = align === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={`flex flex-col ${isRight ? "self-end items-end text-right" : "self-start items-start text-left"}`}
    >
      <h3
        className="text-4xl sm:text-5xl font-black leading-none"
        style={{ color: NAVY, fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
      >
        {title}
        <span style={{ color: BLUE }}>.</span>
      </h3>

      <p className="mt-3 text-sm sm:text-base text-gray-500">
        <span className="font-bold" style={{ color: BLUE }}>
          {statNum}
        </span>{" "}
        {statLabel}
      </p>

      {showLine && (
        <div className={`mt-6 flex flex-col ${isRight ? "items-end" : "items-start"}`}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: BLUE }} />
          <span
            className="w-px h-20 sm:h-28"
            style={{ borderLeft: "1.5px dashed rgba(45,107,255,0.4)" }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function OurValues() {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-black text-center mb-16 sm:mb-20"
          style={{ color: NAVY, fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
        >
          Our <span style={{ color: BLUE }}>Values</span>
        </motion.h2>

        <div className="max-w-sm sm:max-w-xl mx-auto flex flex-col">
          <ValueBlock {...VALUES[0]} delay={0} />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full h-[260px] sm:h-[380px] -my-4"
          >
            <img
              src="/values-planet.png"
              alt=""
              aria-hidden="true"
              className="voda-values-float absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            />
          </motion.div>

          <ValueBlock {...VALUES[1]} delay={0.1} />

          <div className="h-16 sm:h-20" aria-hidden="true" />

          <ValueBlock {...VALUES[2]} delay={0.1} showLine={false} />
        </div>
      </div>

      <style>{`
        @keyframes voda-values-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .voda-values-float {
          animation: voda-values-float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
