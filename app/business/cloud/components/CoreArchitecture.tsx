"use client";

import { Lock, Clock, Zap, DollarSign, RefreshCw } from "lucide-react";
import { designPrinciples } from "../data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import Container from "@/app/components/Container";
import BreakOnDesktop from "./BreakOnDesktop";

const HUB = { x: 200, y: 200 };

// Same icon set, same order (Security/Availability/Scalability/Cost/Resilience) as DesignPrinciples.
const NODE_ICONS = [Lock, Clock, Zap, DollarSign, RefreshCw];

const NODES = [
  { x: 200, y: 60, pillFill: "#E6F1FB", pillText: "#0C447C" },
  { x: 333, y: 157, pillFill: "#E1F5EE", pillText: "#085041" },
  { x: 282, y: 313, pillFill: "#EEEDFE", pillText: "#3C3489" },
  { x: 118, y: 313, pillFill: "#FAEEDA", pillText: "#633806" },
  { x: 67, y: 157, pillFill: "#FAECE7", pillText: "#712B13" },
].map((node, i) => ({
  ...node,
  label: designPrinciples[i].title,
  Icon: NODE_ICONS[i],
  iconColor: designPrinciples[i].accent,
}));

const NODE_ICON_SIZE = 24;

const PILL_FONT_SIZE = 12;
const PILL_PADDING_X = 10;
const PILL_HEIGHT = 20;
// A couple of px past the node's own edge (r=34) for a visible gap. Kept tight overall so that
// even at the bottom of its 140-radius orbit (worst case), the pill still lands inside the
// 400×400 viewBox.
const PILL_TOP_Y = 36;

// No live text measurement inside a rotating SVG group, so the pill width is estimated from
// character count instead: CJK glyphs render close to a full em, Latin/digits/space narrower.
function estimatePillWidth(label: string) {
  let width = 0;
  for (const ch of label) {
    const isWide = /[ㄱ-힝一-鿿]/.test(ch);
    width += PILL_FONT_SIZE * (isWide ? 1.02 : 0.58);
  }
  return width + PILL_PADDING_X * 2;
}

const HUB_RADIUS = 50;
const NODE_RADIUS = 34;

// Trim the hub→node connector to where it actually meets each circle's edge,
// instead of drawing it center-to-center (which shows through the node's translucent fill).
function getConnectorLine(node: { x: number; y: number }) {
  const dx = node.x - HUB.x;
  const dy = node.y - HUB.y;
  const dist = Math.hypot(dx, dy);
  const ux = dx / dist;
  const uy = dy / dist;

  return {
    x1: HUB.x + ux * HUB_RADIUS,
    y1: HUB.y + uy * HUB_RADIUS,
    x2: node.x - ux * NODE_RADIUS,
    y2: node.y - uy * NODE_RADIUS,
  };
}

// Trim the pentagon outline back from each node's edge
// rather than drawing it corner-to-corner through the node's center.
function getPentagonPath(nodes: { x: number; y: number }[], radius: number) {
  return nodes
    .map((node, i) => {
      const next = nodes[(i + 1) % nodes.length];
      const dx = next.x - node.x;
      const dy = next.y - node.y;
      const dist = Math.hypot(dx, dy);
      const ux = dx / dist;
      const uy = dy / dist;
      const x1 = node.x + ux * radius;
      const y1 = node.y + uy * radius;
      const x2 = next.x - ux * radius;
      const y2 = next.y - uy * radius;
      return `M${x1},${y1} L${x2},${y2}`;
    })
    .join(" ");
}

const PENTAGON_PATH = getPentagonPath(NODES, NODE_RADIUS);

export default function CoreArchitecture() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section className="bg-white py-[90px] relative">
      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <div className="grid grid-cols-1 min-[881px]:grid-cols-2 gap-x-16">
            <div>
              <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
              <h2
                className="font-extrabold font-suit text-[#0e1b52]"
                style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
              >
                핵심 아키텍처
              </h2>
              <p className="text-[14px] text-[#6B7280] leading-[1.7] mt-4">
                <BreakOnDesktop text={"보안, 무중단 운영, 자동 스케일링, 비용 최적화, 재해 복구까지\n하나의 구조 안에서 유기적으로 연결된 클라우드 인프라를 제공합니다."} />
              </p>
              <div className="border border-[#E3E7EE] rounded-[14px] bg-white py-[22px] px-6 mt-6">
                <p className="text-[17px] font-bold text-[#0D1B40] leading-[1.5]">
                  <BreakOnDesktop text={"견고한 클라우드 서비스를 위해 필요한 다섯 가지 핵심 요소를 기반으로\n아키텍처를 설계합니다"} />
                </p>
              </div>
            </div>

            <div
              ref={ref}
              className="mt-10 min-[881px]:mt-0 flex items-center justify-center rounded-3xl p-5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.85)",
                transition:
                  "opacity 0.6s cubic-bezier(.22,1,.36,1), transform 0.6s cubic-bezier(.22,1,.36,1)",
              }}
            >
              <svg viewBox="0 0 400 400" className="w-full h-auto max-w-[420px]">
                <defs>
                  {/* userSpaceOnUse (not the default objectBoundingBox) — a purely vertical or
                      horizontal stroke has a zero-width/height bounding box, which makes an
                      objectBoundingBox gradient degenerate and fail to render (e.g. the Security
                      connector, directly above the hub). Fixed coordinates avoid that entirely. */}
                  <linearGradient
                    id="cloudHubGradient"
                    gradientUnits="userSpaceOnUse"
                    x1={HUB.x - 50}
                    y1={HUB.y - 50}
                    x2={HUB.x + 50}
                    y2={HUB.y + 50}
                  >
                    <stop offset="0" stopColor="#3B7BF0" />
                    <stop offset="1" stopColor="#1D4ED8" />
                  </linearGradient>
                  <filter id="cloudNodeShadow" x="-60%" y="-60%" width="220%" height="220%">
                    <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#0D1B40" floodOpacity="0.14" />
                  </filter>
                </defs>

                <g>
                  {/* Static pentagon layout — Security (NODES[0]) sits at (200,60), the top vertex. */}
                  <path
                    d={PENTAGON_PATH}
                    fill="none"
                    stroke="url(#cloudHubGradient)"
                    strokeDasharray="3 5"
                    opacity={0.7}
                  />

                  {NODES.map((node) => {
                    const { x1, y1, x2, y2 } = getConnectorLine(node);
                    return (
                      <line
                        key={`line-${node.label}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#cloudHubGradient)"
                        strokeDasharray="3 5"
                        opacity={0.7}
                      />
                    );
                  })}

                  {NODES.map((node) => (
                    <g key={node.label} transform={`translate(${node.x},${node.y})`}>
                      <g>
                        <circle
                          r={34}
                          fill="rgba(255,255,255,0.55)"
                          stroke="rgba(255,255,255,0.9)"
                          strokeWidth={1.5}
                          filter="url(#cloudNodeShadow)"
                        />
                        <g transform={`translate(${-NODE_ICON_SIZE / 2},${-NODE_ICON_SIZE / 2})`}>
                          <node.Icon width={NODE_ICON_SIZE} height={NODE_ICON_SIZE} color={node.iconColor} />
                        </g>

                        {(() => {
                          const pillWidth = estimatePillWidth(node.label);
                          return (
                            <>
                              <rect
                                x={-pillWidth / 2}
                                y={PILL_TOP_Y}
                                width={pillWidth}
                                height={PILL_HEIGHT}
                                rx={PILL_HEIGHT / 2}
                                fill={node.pillFill}
                                filter="url(#cloudNodeShadow)"
                              />
                              <text
                                y={PILL_TOP_Y + PILL_HEIGHT / 2}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize={PILL_FONT_SIZE}
                                fontWeight={600}
                                fill={node.pillText}
                              >
                                {node.label}
                              </text>
                            </>
                          );
                        })()}
                      </g>
                    </g>
                  ))}
                </g>

                <circle cx={HUB.x} cy={HUB.y} r={50} fill="url(#cloudHubGradient)" filter="url(#cloudNodeShadow)" />
                <g transform={`translate(${HUB.x},${HUB.y}) scale(0.75) translate(-70,-70)`}>
                  <path
                    d="M48 78a12 12 0 0 1 2-23.8 15 15 0 0 1 28.6-5.6A13 13 0 0 1 96 61a11 11 0 0 1-2 17H48a12 12 0 0 1 0-.2z"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <text
                  x={HUB.x}
                  y={HUB.y + 22}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#FFFFFF"
                  fontSize={13}
                  fontWeight={700}
                  style={{ letterSpacing: "1px" }}
                >
                  CLOUD
                </text>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
