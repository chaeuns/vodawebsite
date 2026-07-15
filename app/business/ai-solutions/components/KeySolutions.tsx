"use client";

import { Bot, Users, Lock, Cog, FileText, GraduationCap } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { solutions } from "../data";

const ICONS = [Bot, Users, Lock, Cog, FileText, GraduationCap];

const ACCENTS: Record<string, string> = {
  "Enterprise AI": "#2563EB",
  Groupware: "#7F77DD",
  sLLM: "#1D9E75",
  "Physical AI": "#D85A30",
  EdTech: "#D4537E",
  Platform: "#B8860B",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function KeySolutions() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative overflow-hidden transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 relative">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          KEY SOLUTIONS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          주요 솔루션
        </FillHeading>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solutions.map((solution, i) => {
            const Icon = ICONS[i];
            const accent = ACCENTS[solution.category] ?? "#2563EB";

            return (
              <motion.div key={solution.title} variants={cardVariants} className="group relative">
                {/* gradient border glow, fades in on hover */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-px rounded-[20px] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70"
                  style={{ background: `linear-gradient(135deg, ${accent}, transparent 70%)` }}
                />

                <div
                  className="relative rounded-[20px] border border-white/60 p-6 h-full transition-all duration-300 group-hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: "0 4px 24px rgba(31,41,55,0.06)",
                  }}
                >
                  <span
                    className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide"
                    style={{
                      color: accent,
                      background: `color-mix(in srgb, ${accent} 12%, white)`,
                    }}
                  >
                    {solution.category}
                  </span>

                  <div
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mt-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${accent} 0%, color-mix(in srgb, ${accent} 65%, white) 100%)`,
                    }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>

                  <p className="text-[17px] font-bold text-[#111827] mt-3">{solution.title}</p>
                  <p className="text-[14px] text-[#6B7280] mt-1.5 leading-[1.7]">
                    {solution.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
