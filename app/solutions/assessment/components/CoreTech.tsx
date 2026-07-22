"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Brain, Layers3 } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { coreTech } from "../data";

const ICONS = [Brain, Layers3];
const QUERY = "AI가 만드는 새로운 평가 기준";
const SUBMIT_DELAY_MS = 700;
const REVEAL_DELAY_MS = 600;

function nextTypeDelay(prevChar: string) {
  const jitter = Math.random() * 90;
  const pauseAfterSpace = prevChar === " " ? 90 : 0;
  return 70 + jitter + pauseAfterSpace;
}

type Phase = "idle" | "typing" | "submitted" | "revealed";

export default function CoreTech() {
  const { ref, isVisible } = useScrollReveal(0.9);
  const [phase, setPhase] = useState<Phase>("idle");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (isVisible && phase === "idle") setPhase("typing");
  }, [isVisible, phase]);

  useEffect(() => {
    if (phase !== "typing") return;
    if (charCount >= QUERY.length) {
      const t = setTimeout(() => setPhase("submitted"), SUBMIT_DELAY_MS);
      return () => clearTimeout(t);
    }
    const delay = nextTypeDelay(QUERY[charCount - 1] ?? "");
    const t = setTimeout(() => setCharCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [phase, charCount]);

  useEffect(() => {
    if (phase !== "submitted") return;
    const t = setTimeout(() => setPhase("revealed"), REVEAL_DELAY_MS);
    return () => clearTimeout(t);
  }, [phase]);

  const typedText = QUERY.slice(0, charCount);
  const isSubmitted = phase === "submitted" || phase === "revealed";
  const isRevealed = phase === "revealed";

  return (
    <section className="relative z-10 bg-white" style={{ height: "240vh" }}>
      <div ref={ref} className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <motion.div
            className="mx-auto flex max-w-[90%] sm:max-w-[560px] items-center gap-3 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 sm:py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            animate={
              isRevealed
                ? { opacity: 0, y: -24, scale: 0.94 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Search size={18} className="shrink-0 text-[#93C5FD]" />
            <p className="flex-1 min-w-0 truncate text-left text-[15px] sm:text-[18px] font-bold text-[#00163A]">
              {typedText.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 6, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="inline-block"
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
              <motion.span
                aria-hidden
                className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 bg-[#2563EB] align-middle"
                animate={
                  isSubmitted
                    ? { opacity: 0 }
                    : { opacity: [1, 1, 0, 0] }
                }
                transition={
                  isSubmitted
                    ? { duration: 0.2 }
                    : { duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }
                }
              />
            </p>
            <motion.div
              className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]"
              animate={
                isSubmitted
                  ? { scale: [1, 1.15, 1], backgroundColor: "#2563EB", color: "#FFFFFF" }
                  : { scale: 1, backgroundColor: "#EFF6FF", color: "#2563EB" }
              }
              transition={{ duration: 0.4 }}
            >
              <Search size={14} />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="w-full max-w-[900px] mx-auto overflow-hidden rounded-3xl relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {coreTech.map((item, i) => {
                const Icon = ICONS[i];
                return (
                  <motion.div
                    key={item.number}
                    className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 sm:p-7"
                    initial={{ opacity: 0, y: 30, scale: 0.92 }}
                    animate={
                      isRevealed
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 30, scale: 0.92 }
                    }
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: isRevealed ? 0.25 + i * 0.18 : 0,
                    }}
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
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-white"
              initial={{ x: 0 }}
              animate={{ x: isRevealed ? "-100%" : 0 }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-white"
              initial={{ x: 0 }}
              animate={{ x: isRevealed ? "100%" : 0 }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
