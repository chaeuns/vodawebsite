"use client";

import { useEffect, useState } from "react";
import { Activity, Target, FileText, MousePointer2 } from "lucide-react";
import Container from "@/app/components/Container";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import { dashboardFeatures, domainScores, reportSample } from "../data";

const ICONS = [Activity, Target, FileText];

const DOMAIN_COLORS = ["#7C6CF6", "#3B82F6", "#14B8A6", "#F59E0B", "#F43F5E", "#06B6D4"];

const RADAR_SIZE = 240;
const RADAR_CENTER = RADAR_SIZE / 2;
const RADAR_RADIUS = 88;

function radarPoint(index: number, ratio: number) {
  const angle = (Math.PI / 180) * (index * 60 - 90);
  return {
    x: RADAR_CENTER + RADAR_RADIUS * ratio * Math.cos(angle),
    y: RADAR_CENTER + RADAR_RADIUS * ratio * Math.sin(angle),
  };
}

function polygonPoints(ratios: number[]) {
  return ratios.map((r, i) => `${radarPoint(i, r).x},${radarPoint(i, r).y}`).join(" ");
}

function RadarChart() {
  const ratios = domainScores.map((d) => d.score / 100);
  const rings = [1 / 3, 2 / 3, 1];

  return (
    <svg
      viewBox={`-100 -40 ${RADAR_SIZE + 200} ${RADAR_SIZE + 80}`}
      className="w-full max-w-[320px] mx-auto sm:max-w-none"
    >
      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#7C6CF6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7C6CF6" stopOpacity="0.05" />
        </radialGradient>
      </defs>

      {rings.map((r) => (
        <polygon
          key={r}
          points={polygonPoints(new Array(6).fill(r))}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={1}
        />
      ))}

      {domainScores.map((_, i) => {
        const p = radarPoint(i, 1);
        return (
          <line
            key={i}
            x1={RADAR_CENTER}
            y1={RADAR_CENTER}
            x2={p.x}
            y2={p.y}
            stroke="#E5E7EB"
            strokeWidth={1}
          />
        );
      })}

      <polygon points={polygonPoints(ratios)} fill="url(#radarFill)" stroke="#7C6CF6" strokeWidth={2} />

      {ratios.map((r, i) => {
        const p = radarPoint(i, r);
        return <circle key={i} cx={p.x} cy={p.y} r={3} fill="#7C6CF6" />;
      })}

      {domainScores.map((d, i) => {
        const p = radarPoint(i, 1.32);
        const anchor = p.x < RADAR_CENTER - 6 ? "end" : p.x > RADAR_CENTER + 6 ? "start" : "middle";
        return (
          <text
            key={d.label}
            x={p.x}
            y={p.y}
            textAnchor={anchor}
            dominantBaseline="middle"
            className="fill-[#6B7280]"
            style={{ fontSize: 11 }}
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}

function ReportCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(13,27,64,0.08)]">
      <div className="flex items-center gap-1.5 border-b border-[#F1F3F7] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
        <span className="ml-3 truncate text-[12px] text-[#9CA3AF]">
          AI 역량 리포트 — {reportSample.name} / {reportSample.role}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_1fr] gap-10 p-6 sm:p-9">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Competency Radar
            </span>
            <span className="text-[12px] text-[#9CA3AF]">
              총점{" "}
              <span className="text-[16px] font-extrabold text-[#00163A]">
                {reportSample.totalScore}
              </span>{" "}
              / 100
            </span>
          </div>
          <RadarChart />
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
            Domain Score
          </span>
          <div className="mt-4 space-y-3.5">
            {domainScores.map((d, i) => (
              <div key={d.label}>
                <div className="flex items-center justify-between text-[12px]">
                  <span className="font-medium text-[#374151]">{d.label}</span>
                  <span className="font-bold" style={{ color: DOMAIN_COLORS[i] }}>
                    {d.score}
                  </span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#F1F3F7]">
                  <span
                    className="block h-full rounded-full"
                    style={{ width: `${d.score}%`, background: DOMAIN_COLORS[i] }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 pt-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#06B6D4]" />
            <p className="text-[12px] text-[#4B5563]">
              현재 레벨: <span className="font-bold text-[#00163A]">{reportSample.level}</span>{" "}
              <span className="text-[#9CA3AF]">({reportSample.levelRange})</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CURSOR_START = { x: 8, y: 10 };
const CURSOR_END = { x: 100, y: 100 };
const APPEAR_MS = 500;
const DRAG_MS = 1300;

type Phase = "idle" | "appearing" | "dragging" | "revealed";

function AutoDragReveal({ onRevealed }: { onRevealed: () => void }) {
  const { ref, isVisible } = useScrollReveal(0.4);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (isVisible && phase === "idle") setPhase("appearing");
  }, [isVisible, phase]);

  useEffect(() => {
    if (phase !== "appearing") return;
    const t = setTimeout(() => setPhase("dragging"), APPEAR_MS);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "dragging") return;
    const t = setTimeout(() => {
      setPhase("revealed");
      onRevealed();
    }, DRAG_MS);
    return () => clearTimeout(t);
  }, [phase, onRevealed]);

  const point = phase === "dragging" || phase === "revealed" ? CURSOR_END : CURSOR_START;
  const clipRight = 100 - point.x;
  const clipBottom = 100 - point.y;

  const revealed = phase === "revealed";

  return (
    <div ref={ref} className="relative mx-auto">
      <div
        className="transition-opacity duration-500 ease-out"
        style={{ opacity: revealed ? 1 : 0 }}
      >
        <ReportCard />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-2"
        style={{
          borderColor: "#93C5FD",
          background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
          clipPath: `inset(0 ${clipRight}% ${clipBottom}% 0)`,
          opacity: revealed ? 0 : 1,
          transition:
            phase === "dragging"
              ? `clip-path ${DRAG_MS}ms cubic-bezier(0.65,0,0.35,1), opacity 0.4s ease`
              : "opacity 0.4s ease",
        }}
      />

      <div
        className="pointer-events-none absolute z-20"
        style={{
          left: `${point.x}%`,
          top: `${point.y}%`,
          transform: "translate(-50%, -50%)",
          opacity: phase === "idle" || phase === "revealed" ? 0 : 1,
          transition:
            phase === "dragging"
              ? `left ${DRAG_MS}ms cubic-bezier(0.65,0,0.35,1), top ${DRAG_MS}ms cubic-bezier(0.65,0,0.35,1), opacity 0.3s ease`
              : "opacity 0.3s ease",
        }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00163A] shadow-lg">
          <MousePointer2 size={16} className="text-white" fill="white" />
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { ref, isVisible } = useScrollReveal();
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="bg-white py-[80px] relative">
      <div
        ref={ref}
        className="transition-all duration-500 ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(12px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Container>
          <div className="mb-10 pl-20 pr-20">
            <span className="mb-3 block h-1 w-9 rounded-full bg-[#3566e8]" />
            <h2
              className="font-extrabold font-suit text-[#0e1b52]"
              style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
            >
              한눈에 보는 AI 역량 리포트
            </h2>
            <p className="text-[15px] text-[#6B7280] mt-3 max-w-[640px] leading-[1.7] break-keep">
              도메인별 점수와 종합 레벨을 하나의 리포트에서 확인하고, 조직의 AI 역량 현황을
              데이터로 파악합니다.
            </p>
          </div>
        </Container>

        <Container>
          <div className="pl-20 pr-20">
            <AutoDragReveal onRevealed={() => setRevealed(true)} />
          </div>

          <div className="pl-20 pr-20 grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            {dashboardFeatures.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 transition-all duration-700 ease-out"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(24px)",
                    transitionDelay: revealed ? "0.2s" : "0s",
                  }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0D1B40] flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="text-[16px] font-bold text-[#111827] mt-4">{item.title}</p>
                  <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.7]">{item.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
