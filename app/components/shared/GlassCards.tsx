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
      className={`group relative rounded-[20px] ${className}`}
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -8 },
      }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {/* Layer 1: 블러 + 채도 + SVG 왜곡 (backdrop-filter) */}
      <div
        className="absolute inset-0 rounded-[20px]"
        style={{
          // Chrome 계열: SVG 필터 체이닝 지원
          backdropFilter: "url(#glass-distortion) blur(20px) saturate(180%)",
          // Safari 등 url() 미지원 브라우저를 위한 폴백 (property가 달라 별도 적용됨)
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      />

      {/* Layer 2: 반투명 흰색 채움 + 그라디언트 보더 (이중 background-clip 트릭) */}
      <div
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) padding-box, " +
            "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1)) border-box",
          border: "1px solid transparent",
        }}
      />

      {/* Layer 3: 상단 하이라이트 라인 (평상시) */}
      <motion.div
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        variants={{
          rest: { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)" },
          hover: { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85)" },
        }}
        transition={{ duration: 0.25 }}
      />

      {/* 실제 콘텐츠 */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}