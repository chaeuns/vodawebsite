"use client";

import { Lock, Clock, Zap, DollarSign, RefreshCw } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { designPrinciples } from "../data";
import Container from "@/app/components/Container";
import BreakOnDesktop from "./BreakOnDesktop";

const ICONS = [Lock, Clock, Zap, DollarSign, RefreshCw];

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CARD_SHADOW = "0 10px 28px rgba(13,27,64,0.08)";
const LINE_COLOR = "#A9B9DD";

export default function DesignPrinciples() {
  return (
    <section
      className="pt-[80px] relative"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)" }}
    >
      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            핵심 설계 원칙
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">모든 인프라 설계의 출발점은 보안입니다.</p>
        </div>
      </Container>

      <div className="max-w-[1100px] mx-auto px-6 mt-16">
        <div className="relative pb-20">
          {/* center timeline spine — extends past the last card to the section's end, fading
              out toward the bottom (mask-image, since a dashed border-color can't be gradiented). */}
          <div
            className="absolute top-0 bottom-0 left-1/2 max-[760px]:left-5 -translate-x-1/2 max-[760px]:translate-x-0 w-[1.5px] pointer-events-none"
            style={{
              // repeating-linear-gradient instead of border-dashed — CSS's dashed border style
              // doesn't expose a dash/gap length knob, this does.
              backgroundImage: `repeating-linear-gradient(to bottom, ${LINE_COLOR} 0px, ${LINE_COLOR} 6px, transparent 6px, transparent 16px)`,
              // Fixed pixel offset (not a %) so the fade always spans from roughly the last
              // card's dot down to the section's bottom, regardless of how tall the stack is.
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0, black calc(100% - 190px), transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 0, black calc(100% - 190px), transparent 100%)",
            }}
          />

          {designPrinciples.map((principle, i) => {
            const Icon = ICONS[i];
            const isLeft = i % 2 === 0;

            return (
              <div
                key={principle.number}
                className={`relative flex mb-[50px] last:mb-0 max-[760px]:pl-12 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* short connector from the card's inner edge to the center spine */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-[1.5px] max-[760px]:hidden"
                  style={{ background: LINE_COLOR, left: isLeft ? "44%" : "50%", width: "6%" }}
                />
                <span
                  className="absolute top-1/2 left-1/2 max-[760px]:left-5 -translate-x-1/2 max-[760px]:translate-x-0 -translate-y-1/2 rounded-full bg-white"
                  style={{ width: 10, height: 10, border: "2px solid #2563EB" }}
                />

                <motion.div
                  className="w-[44%] max-[760px]:w-full min-h-[210px] bg-white rounded-[18px] p-6 flex flex-col"
                  style={{ boxShadow: CARD_SHADOW }}
                  variants={isLeft ? leftVariants : rightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <p className="text-[12px] font-bold text-[#2563EB] tracking-wider uppercase text-left">
                    {principle.number} · {principle.tag}
                  </p>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: principle.accentBg }}
                      >
                        <Icon size={20} style={{ color: principle.accent }} />
                      </div>
                      <p className="text-[20px] font-bold text-[#0D1B40]">{principle.title}</p>
                    </div>
                    <p className="text-[15px] text-[#6B7280] mt-3 leading-[1.6]">
                      <BreakOnDesktop text={principle.body} />
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
