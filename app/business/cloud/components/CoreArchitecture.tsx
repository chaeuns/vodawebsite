"use client";

import { designPrinciples } from "../data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import Container from "@/app/components/Container";

const HUB = { x: 200, y: 200 };

const NODES = [
  { x: 200, y: 60, image: "/icons/security.webp", pillFill: "#E6F1FB", pillText: "#0C447C" },
  { x: 333, y: 157, image: "/icons/availability.webp", pillFill: "#E1F5EE", pillText: "#085041" },
  { x: 282, y: 313, image: "/icons/scalability.webp", pillFill: "#EEEDFE", pillText: "#3C3489" },
  { x: 118, y: 313, image: "/icons/cost.webp", pillFill: "#FAEEDA", pillText: "#633806" },
  { x: 67, y: 157, image: "/icons/resilience.webp", pillFill: "#FAECE7", pillText: "#712B13" },
].map((node, i) => ({ ...node, label: designPrinciples[i].title }));

const NODE_ICON_IMAGE_SIZE = 44; // ~65% of the node circle's 68px diameter

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
const OUTER_RING_RADIUS = 140;

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

// Same idea for the pentagon outline: trim each edge back from the node's edge
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

// The outer decorative ring passes directly through every node (nodes sit exactly on it),
// so it's drawn as 5 arcs with a gap at each node instead of one unbroken circle. This lives
// inside the rotating group so the gaps stay lined up with the nodes as they orbit.
function getGappedRingPath(
  radius: number,
  nodes: { x: number; y: number }[],
  nodeRadius: number,
  center: { x: number; y: number }
) {
  const gapHalfAngle = Math.asin(nodeRadius / radius);
  const angles = nodes
    .map((n) => Math.atan2(n.y - center.y, n.x - center.x))
    .sort((a, b) => a - b);

  return angles
    .map((angle, i) => {
      const startAngle = angle + gapHalfAngle;
      const endAngle = (i + 1 < angles.length ? angles[i + 1] : angles[0] + Math.PI * 2) - gapHalfAngle;
      const x0 = center.x + radius * Math.cos(startAngle);
      const y0 = center.y + radius * Math.sin(startAngle);
      const x1 = center.x + radius * Math.cos(endAngle);
      const y1 = center.y + radius * Math.sin(endAngle);
      return `M${x0},${y0} A${radius},${radius} 0 0 1 ${x1},${y1}`;
    })
    .join(" ");
}

const PENTAGON_PATH = getPentagonPath(NODES, NODE_RADIUS);
const OUTER_RING_PATH = getGappedRingPath(OUTER_RING_RADIUS, NODES, NODE_RADIUS, HUB);

export default function CoreArchitecture() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section className="bg-white py-[90px] relative">
      <Container>
        <div className="pl-20 pr-20">
          <div className="grid grid-cols-1 min-[881px]:grid-cols-2 gap-x-16">
            <div>
              <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
              <h2
                className="font-extrabold font-suit text-[#0e1b52]"
                style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
              >
                핵심 아키텍처
              </h2>
              <p className="text-[14px] text-[#6B7280] leading-[1.7] mt-4 whitespace-pre-line">
                {"보안, 무중단 운영, 자동 스케일링, 비용 최적화, 재해 복구까지\n하나의 구조 안에서 유기적으로 연결된 클라우드 인프라를 제공합니다."}
              </p>
              <div className="border border-[#E3E7EE] rounded-[14px] bg-white py-[22px] px-6 mt-6">
                <p className="text-[17px] font-bold text-[#0D1B40] leading-[1.5] whitespace-pre-line">
                  {"견고한 클라우드 서비스를 위해 필요한 다섯 가지 핵심 요소를 기반으로\n아키텍처를 설계합니다"}
                </p>
              </div>
            </div>

            <div
              ref={ref}
              className="mt-10 min-[881px]:mt-0 flex items-center justify-center rounded-3xl p-5"
              style={{
                background: "radial-gradient(circle at 50% 40%, #EEF3FC 0%, #DCE5F6 100%)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.85)",
                transition:
                  "opacity 0.6s cubic-bezier(.22,1,.36,1), transform 0.6s cubic-bezier(.22,1,.36,1)",
              }}
            >
              <svg viewBox="0 0 400 400" className="w-full h-auto max-w-[420px]">
                <defs>
                  <linearGradient id="cloudHubGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#3B7BF0" />
                    <stop offset="1" stopColor="#1D4ED8" />
                  </linearGradient>
                  <filter id="cloudNodeShadow" x="-60%" y="-60%" width="220%" height="220%">
                    <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#0D1B40" floodOpacity="0.14" />
                  </filter>
                </defs>

                <circle cx={HUB.x} cy={HUB.y} r={90} fill="none" stroke="#FFFFFF" opacity={0.5} />

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${HUB.x} ${HUB.y}`}
                    to={`360 ${HUB.x} ${HUB.y}`}
                    dur="60s"
                    repeatCount="indefinite"
                  />

                  {/* Outer ring lives in the rotating group (not as a static background circle)
                      so its per-node gaps stay aligned with the nodes as they orbit. */}
                  <path d={OUTER_RING_PATH} fill="none" stroke="#FFFFFF" opacity={0.35} />

                  <path d={PENTAGON_PATH} fill="none" stroke="#C7CEDD" strokeDasharray="3 5" opacity={0.7} />

                  {NODES.map((node) => {
                    const { x1, y1, x2, y2 } = getConnectorLine(node);
                    return (
                      <line
                        key={`line-${node.label}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#B9C1D6"
                        strokeWidth={2}
                      />
                    );
                  })}

                  {NODES.map((node) => (
                    <g key={node.label} transform={`translate(${node.x},${node.y})`}>
                      <g>
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 0 0"
                          to="-360 0 0"
                          dur="60s"
                          repeatCount="indefinite"
                        />
                        <circle
                          r={34}
                          fill="rgba(255,255,255,0.55)"
                          stroke="rgba(255,255,255,0.9)"
                          strokeWidth={1.5}
                          filter="url(#cloudNodeShadow)"
                        />
                        <image
                          href={node.image}
                          x={-NODE_ICON_IMAGE_SIZE / 2}
                          y={-NODE_ICON_IMAGE_SIZE / 2}
                          width={NODE_ICON_IMAGE_SIZE}
                          height={NODE_ICON_IMAGE_SIZE}
                        />

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
