"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ideologies } from "./data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import Container from "@/app/components/Container";

const positionClasses = [
  "left-[50%] top-[26%] lg:top-[14%]", // top vertex
  "left-[27%] lg:left-[6%] top-[74%]", // bottom-left vertex
  "left-[73%] lg:left-[94%] top-[74%]", // bottom-right vertex
];

// "\n" breaks on all breakpoints, "|" breaks on mobile only.
function renderBreaks(text: string, keyPrefix: string) {
  return text.split(/(\n|\|)/).map((part, i) => {
    if (part === "\n") return <br key={`${keyPrefix}-${i}`} />;
    if (part === "|") return <br key={`${keyPrefix}-${i}`} className="md:hidden" />;
    return part;
  });
}

export default function Ideology() {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [entranceDone, setEntranceDone] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setEntranceDone(true), 1400);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <section className="bg-white py-[80px] relative">
      <div
        ref={ref}
        className="transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(100px)",
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
              교육 이념
            </h2>
            <p className="text-[15px] text-[#5a6895] mt-3">
              VODA는 세 가지 핵심 가치를 바탕으로 <br className="md:hidden" />
              교육을 설계합니다.
            </p>
          </div>
        </Container>

        <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative w-[340px] h-[460px] sm:w-[520px] sm:h-[480px] md:w-[680px] md:h-[520px] lg:w-[920px] lg:h-[640px] mx-auto mt-12 mb-6">
          {/* center glow */}
          <div
            className="absolute flex items-center justify-center transition-all duration-700 ease-out"
            style={{
              left: "50%",
              top: "50%",
              transform: isVisible
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -50%) scale(0.7)",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div
              className="absolute w-[220px] h-[220px] sm:w-[290px] sm:h-[290px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[480px] rounded-full blur-2xl"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, #2563EB 0%, #60A5FA 30%, #BFDBFE 55%, rgba(219,234,254,0.4) 75%, rgba(219,234,254,0) 100%)",
              }}
            />
            <Image
              src="/voda-logo-white.svg"
              alt="VODA Campus"
              width={1973}
              height={338}
              className="relative w-[130px] sm:w-[170px] md:w-[210px] lg:w-[280px] h-auto"
            />
          </div>

          {/* satellite cards at triangle vertices */}
          {ideologies.map((item, i) => (
            <div
              key={item.ko}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`absolute ${positionClasses[i]} w-[150px] sm:w-[190px] md:w-[210px] lg:w-[315px] rounded-[24px] lg:rounded-[32px] flex flex-col items-center justify-center text-center px-3 sm:px-4 py-4 sm:py-5 lg:px-6 lg:py-7 border border-white/70 shadow-[0_8px_32px_rgba(31,41,55,0.1)] hover:shadow-xl hover:shadow-blue-500/5 ease-out`}
              style={{
                transform: isVisible
                  ? `translate(-50%, calc(-50% - ${hoveredIndex === i ? 4 : 0}px)) scale(${hoveredIndex === i ? 1.05 : 1})`
                  : "translate(-50%, -50%) scale(0.7)",
                opacity: isVisible ? 1 : 0,
                transition: `transform ${
                  isVisible && !entranceDone ? "700ms" : "300ms"
                } ease-out ${isVisible && !entranceDone ? `${0.2 + i * 0.15}s` : "0s"}, opacity 700ms ease-out ${
                  isVisible && !entranceDone ? `${0.2 + i * 0.15}s` : "0s"
                }, box-shadow 300ms ease-out`,
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <p className="text-[15px] sm:text-[17px] lg:text-[22px] font-bold text-[#111827] leading-[1.3]">
                {item.ko}
              </p>
              <p className="text-[12px] sm:text-[13px] lg:text-[15px] text-[#6B7280] mt-2 lg:mt-3 leading-[1.6]">
                {(() => {
                  const [before, after] = item.body.split(item.highlight);
                  return (
                    <>
                      {renderBreaks(before, "before")}
                      <span className="text-[#1D4ED8]">{item.highlight}</span>
                      {renderBreaks(after, "after")}
                    </>
                  );
                })()}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
