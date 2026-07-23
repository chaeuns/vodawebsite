"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
  className={`group relative rounded-[24px] ${className}`}
  whileHover="hover"
  initial="rest"
  animate="rest"
  variants={{
    rest: {
      y: 0,
      scale: 1,
      boxShadow: "0 24px 60px -16px rgba(10,30,90,0.3), 0 4px 12px rgba(10,30,90,0.12)",
    },
    hover: {
      y: -10,
      scale: 1.015,
      boxShadow: "0 32px 76px -16px rgba(10,30,90,0.38), 0 8px 20px rgba(10,30,90,0.16)",
    },
  }}
  transition={{ type: "spring", stiffness: 300, damping: 24 }}
>
      {/* 1. 블러만 — 채도는 살짝만, 뒷배경이 투명하게 비쳐야 함 */}
      <div
        className="absolute inset-0 rounded-[24px]"
        style={{
          backdropFilter: "blur(16px) saturate(150%)",
          WebkitBackdropFilter: "blur(16px) saturate(150%)",
        }}
      />

      {/* 2. 채움은 아주 옅게 — 뒷배경이 투명하게 비쳐야 함 */}
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{
          background: "linear-gradient(165deg, rgba(255,255,255,0.14) 0%, rgba(61,90,254,0.08) 100%)",
        }}
      />

      {/* 3. 테두리: 위는 밝게, 아래로 갈수록 거의 사라짐 (유리 단면의 빛 반사) */}
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{
          background:
            "linear-gradient(transparent, transparent) padding-box, " +
            "linear-gradient(160deg, rgba(255,255,255,1), rgba(255,255,255,0.25) 40%, rgba(255,255,255,0.05)) border-box",
          border: "1px solid transparent",
        }}
      />

      {/* 4. 실제 유리 단면감을 주는 인셋 라인 — 상단 하이라이트 + 하단 깊은 그림자 */}
      <motion.div
    className="absolute inset-0 rounded-[24px] pointer-events-none"
    variants={{
    rest: {
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -12px 20px -12px rgba(255,255,255,0.1)",
    },
    hover: {
      boxShadow: "inset 0 1px 0 rgba(255,255,255,1), inset 0 -12px 20px -12px rgba(255,255,255,0.2)",
    },
  }}
  transition={{ duration: 0.25 }}
/>

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}