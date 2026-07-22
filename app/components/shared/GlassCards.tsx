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
      boxShadow: "0 24px 60px -12px rgba(10,30,90,0.35), 0 4px 12px rgba(10,30,90,0.15)",
    },
    hover: {
      y: -10,
      scale: 1.015,
      boxShadow: "0 36px 80px -12px rgba(10,30,90,0.45), 0 8px 20px rgba(10,30,90,0.2)",
    },
  }}
  transition={{ type: "spring", stiffness: 300, damping: 24 }}
>
      {/* 1. 블러만 — 채도는 살짝만, 뒷배경 색이 그대로 비쳐야 함 */}
      <div
        className="absolute inset-0 rounded-[24px]"
        style={{
          backdropFilter: "blur(18px) saturate(140%)",
          WebkitBackdropFilter: "blur(18px) saturate(140%)",
        }}
      />

      {/* 2. 채움은 아주 옅게 (거의 없다시피) */}
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{
          background: "linear-gradient(160deg, rgba(61,90,254,0.22), rgba(143,166,255,0.06))",
        }}
      />

      {/* 3. 테두리: 위는 밝게, 아래로 갈수록 거의 사라짐 (유리 단면의 빛 반사) */}
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{
          background:
            "linear-gradient(transparent, transparent) padding-box, " +
            "linear-gradient(160deg, rgba(255,255,255,0.95), rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.05)) border-box",
          border: "1px solid transparent",
        }}
      />

      {/* 4. 실제 유리 단면감을 주는 인셋 라인 — 상단 밝게, 하단 살짝 그림자 */}
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