// 유리 표면 굴절 효과를 위한 SVG filter.
// 레이아웃 최상단(app/layout.tsx)에서 딱 한 번만 렌더링하고,
// 모든 GlassCard가 url(#glass-distortion)으로 재사용합니다.

export default function GlassFilterDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", overflow: "hidden" }}
    >
      <defs>
        <filter
          id="glass-distortion"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          {/* 유리 표면의 미세한 불규칙성 */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          {/* 노이즈를 살짝 부드럽게 (너무 거친 굴절 방지) */}
          <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
          {/* 실제 굴절 적용, scale 10~20 권장 범위 내 16 */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}