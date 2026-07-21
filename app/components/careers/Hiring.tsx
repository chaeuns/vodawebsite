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
              채용 중
            </span>
          ) : (
            <span className="text-[12px] font-semibold bg-[#F9FAFB] text-[#9CA3AF] px-2.5 py-0.5 rounded-full border border-[#E5E7EB]">
              채용 마감
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

export default function Hiring() {
  const [activeTeam, setActiveTeam] = useState<TeamTab>(teams[0]);
  const [displayTeam, setDisplayTeam] = useState<TeamTab>(teams[0]);
  const [visible, setVisible] = useState(true);
  const { ref, isVisible } = useRepeatingReveal(0.1);

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

  return (
    <div className="relative z-20 -mt-40">
      <section
        ref={ref}
        className="bg-white py-[80px]"
      >
        <div
          className="transition-all duration-[900ms] ease-out"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(80px)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <Container>
            <div className="pl-20 pr-20">
              <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
              <h2
                className="font-extrabold font-suit text-[#0e1b52]"
                style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
              >
                함께할 팀원을 찾습니다
              </h2>
              <p className="text-[15px] text-[#5a6895] mt-3">
                현재 모집 중인 포지션을 확인하고 지원해 보세요.
              </p>
            </div>

            <div className="pl-20 pr-20 grid grid-cols-[220px_1fr] gap-8 mt-8 max-[720px]:grid-cols-1 max-[720px]:gap-4">
              <div className="self-start flex flex-col gap-1 max-[720px]:static max-[720px]:flex-row max-[720px]:overflow-x-auto max-[720px]:gap-2 max-[720px]:pb-1">
                {teams.map((team) => (
                  <button
                    key={team}
                    onClick={() => goTo(team)}
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
        </div>
      </section>
    </div>
  );
}
