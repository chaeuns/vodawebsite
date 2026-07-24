"use client";

import { ClipboardList, GraduationCap, BarChart3, Layers } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRepeatingReveal } from "../useRepeatingReveal";
import Container from "@/app/components/Container";
import { strengths } from "../data";

const ICONS = [ClipboardList, GraduationCap, BarChart3, Layers];

export default function WhyVoda() {
  const { ref, isVisible } = useRepeatingReveal();
  const shouldReduceMotion = useReducedMotion();

  const rowVariants = (direction: "left" | "right"): Variants =>
    shouldReduceMotion
      ? { hidden: { opacity: 1, x: 0, y: 0 }, visible: { opacity: 1, x: 0, y: 0 } }
      : {
          hidden: { opacity: 0, y: 20, x: direction === "left" ? -30 : 30 },
          visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        };

  const numberVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
      };

  const contentVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.12 } },
      };

  const borderVariants: Variants = shouldReduceMotion
    ? { hidden: { scaleX: 1 }, visible: { scaleX: 1 } }
    : {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } },
      };

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            왜 VODA 기업교육인가
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            기업 교육에 필요한 네 가지 핵심 경쟁력을
            <br className="md:hidden" /> 갖췄습니다.
          </p>
        </div>
      </Container>

      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20 mt-6">
          {strengths.map((strength, i) => {
            const Icon = ICONS[i];
            const isReversed = i % 2 === 1;
            const isLast = i === strengths.length - 1;
            return (
              <motion.div
                key={strength.title}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 py-14 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
                variants={rowVariants(isReversed ? "right" : "left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.span
                  variants={numberVariants}
                  className={`shrink-0 md:w-[160px] text-center text-[40px] md:text-[92px] font-extrabold leading-none ${
                    isReversed ? "" : "md:text-left"
                  }`}
                  style={{
                    backgroundImage: "linear-gradient(135deg, #2563EB, #6EA0F5)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>

                <motion.div
                  variants={contentVariants}
                  className={`flex-1 flex flex-col items-center text-center ${
                    isReversed ? "md:items-end md:text-right" : "md:items-start md:text-left"
                  }`}
                >
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                    <Icon size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-[19px] md:text-[22px] font-bold text-[#111827] mt-3">
                    {strength.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280] mt-2 leading-[1.7] whitespace-pre-line">
                    {i === 0 ? (
                      <>
                        기업의 업종, 직무, 수준에 따라 커리큘럼을
                        <br className="md:hidden" /> 처음부터 맞춤 설계합니다.
                        <br /> 표준화된 교육이 아닌 귀사만을 위한
                        <br className="md:hidden" /> 교육을 세팅합니다.
                      </>
                    ) : i === 1 ? (
                      <>
                        IT 현업 경력 10년 이상의 전문 강사진이
                        <br className="md:hidden" /> 직접 교육합니다.
                        <br className="hidden md:inline" /> 이론이 아닌 실무 중심의
                        <br className="md:hidden" /> 교육으로 즉시 현장 적용이 가능합니다.
                      </>
                    ) : i === 2 ? (
                      <>
                        교육 전·후 역량 측정 및 수료 후 데이터 기반
                        <br className="md:hidden" /> 성과 리포트를 제공합니다.
                        <br /> 교육 ROI를 수치로 확인할 수 있습니다.
                      </>
                    ) : i === 3 ? (
                      <>
                        집합교육, 원격교육, 메타버스 교육 등
                        <br className="md:hidden" /> 다양한 방식으로 운영합니다.
                        <br /> 기업 상황에 맞는 교육 방식을 선택할 수 있습니다.
                      </>
                    ) : (
                      strength.body
                    )}
                  </p>
                </motion.div>

                {!isLast && (
                  <motion.div
                    variants={borderVariants}
                    style={{ transformOrigin: "left" }}
                    className={`absolute bottom-0 left-0 w-full h-px bg-[#E5E7EB] ${
                      isReversed ? "md:w-[calc(100%-200px)]" : "md:left-[200px] md:w-[calc(100%-200px)]"
                    }`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
