"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { jobsByTeam, teams, type TeamTab } from "./data";
import Container from "@/app/components/Container";

function useRepeatingReveal(threshold: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function JobList({ team }: { team: TeamTab }) {
  const jobs = jobsByTeam[team];

  return (
    <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
      {jobs.map((job, i) => (
        <a
          key={job.title}
          href={job.url ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between px-6 h-14 hover:bg-[#F9FAFB] transition-colors ${
            i < jobs.length - 1 ? "border-b border-[#E5E7EB]" : ""
          } ${job.url ? "cursor-pointer" : "cursor-default"}`}
        >
          <span className="text-[15px] font-semibold text-[#111827]">
            {job.title}
          </span>
          {job.open ? (
            <span className="text-[12px] font-semibold bg-[#ECFDF5] text-[#16A34A] px-2.5 py-0.5 rounded-full">
              모집 중
            </span>
          ) : (
            <span className="text-[12px] font-semibold bg-[#F9FAFB] text-[#9CA3AF] px-2.5 py-0.5 rounded-full border border-[#E5E7EB]">
              모집 마감
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

const PX_PER_STEP = 600;

export default function Hiring() {
  const [activeTeam, setActiveTeam] = useState<TeamTab>(teams[0]);
  const [displayTeam, setDisplayTeam] = useState<TeamTab>(teams[0]);
  const [visible, setVisible] = useState(true);
  const { ref, isVisible } = useRepeatingReveal(0.1);

  const spacerRef = useRef<HTMLDivElement>(null);
  const measureRefs = useRef<Partial<Record<TeamTab, HTMLDivElement | null>>>({});
  const [frameHeight, setFrameHeight] = useState<number | null>(null);
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLayoutEffect(() => {
    const heights = teams.map((t) => measureRefs.current[t]?.scrollHeight ?? 0);
    setFrameHeight(Math.max(...heights));
  }, []);

  const goTo = useCallback((team: TeamTab) => {
    setActiveTeam((prev) => {
      if (prev === team) return prev;
      setVisible(false);
      if (switchTimer.current) clearTimeout(switchTimer.current);
      switchTimer.current = setTimeout(() => {
        setDisplayTeam(team);
        setVisible(true);
      }, 280);
      return team;
    });
  }, []);

  useEffect(() => {
    const spacer = spacerRef.current;
    if (!spacer) return;

    const onScroll = () => {
      const rect = spacer.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / total));
      const index = Math.min(teams.length - 1, Math.floor(progress * teams.length));
      goTo(teams[index]);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [goTo]);

  const handleSelect = (team: TeamTab) => {
    const spacer = spacerRef.current;
    if (!spacer) return;

    const index = teams.indexOf(team);
    const total = spacer.getBoundingClientRect().height - window.innerHeight;
    const spacerTop = spacer.getBoundingClientRect().top + window.scrollY;
    const targetProgress = (index + 0.5) / teams.length;
    window.scrollTo({ top: spacerTop + targetProgress * total, behavior: "smooth" });
  };

  return (
    <div
      ref={spacerRef}
      className="relative z-20 -mt-10"
      style={{ height: `calc(100vh + ${(teams.length - 1) * PX_PER_STEP}px)` }}
    >
      <section
        ref={ref}
        className="sticky top-0 bg-white py-[80px] shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Container>
          <h2 className="text-[32px] font-bold leading-[1.3] text-[#111827]">
            함께할 팀원을 찾습니다
          </h2>
          <p className="text-[15px] text-[#6B7280] mt-5">
            현재 모집 중인 포지션을 확인하고 지원해 보세요.
          </p>

          <div className="grid grid-cols-[220px_1fr] gap-8 mt-8 max-[720px]:grid-cols-1 max-[720px]:gap-4">
            <div className="sticky top-[84px] self-start flex flex-col gap-1 max-[720px]:static max-[720px]:flex-row max-[720px]:overflow-x-auto max-[720px]:gap-2 max-[720px]:pb-1">
              {teams.map((team) => (
                <button
                  key={team}
                  onClick={() => handleSelect(team)}
                  className={`text-left px-4 py-3 rounded-md text-[14px] font-medium transition-colors border-l-[3px] whitespace-nowrap max-[720px]:rounded-full max-[720px]:border-l-0 max-[720px]:border ${
                    activeTeam === team
                      ? "bg-[#EEF3FE] border-l-[#2563EB] text-[#111827] max-[720px]:border-[#2563EB]"
                      : "border-l-transparent text-[#6B7280] hover:bg-[#F9FAFB] max-[720px]:border-[#E5E7EB]"
                  }`}
                >
                  {team}
                </button>
              ))}
            </div>

            <div
              className="relative"
              style={{ height: frameHeight !== null ? `${frameHeight}px` : undefined }}
            >
              <div
                className="absolute inset-0 top-0"
                style={{
                  opacity: visible ? 1 : 0,
                  transitionProperty: "opacity",
                  transitionDuration: "280ms",
                  transitionTimingFunction: "ease-out",
                }}
              >
                <JobList team={displayTeam} />
              </div>

              <div
                className="invisible absolute left-0 top-0 w-full pointer-events-none"
                aria-hidden="true"
              >
                {teams.map((team) => (
                  <div key={team} ref={(el) => { measureRefs.current[team] = el; }}>
                    <JobList team={team} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
