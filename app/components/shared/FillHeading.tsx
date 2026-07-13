"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function FillHeading({
  children,
  className = "",
  fillGradient = "linear-gradient(to right, #1D4ED8 0%, #0EA5E9 50%, #22D3EE 100%)",
  duration = "2.2s",
  loop = false,
  loopInterval = 4,
}: {
  children: ReactNode;
  className?: string;
  fillGradient?: string;
  duration?: string;
  loop?: boolean;
  loopInterval?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!loop) observer.unobserve(el);
        } else if (loop) {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loop]);

  return (
    <h2 ref={ref} className={`relative inline-block ${className}`}>
      <span aria-hidden="true" className="text-[#D1D5DB]">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={
          loop
            ? {
                backgroundImage: fillGradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                clipPath: isVisible ? undefined : "inset(0 100% 0 0)",
                animation: isVisible
                  ? `fill-heading-loop ${loopInterval}s ease-in-out infinite`
                  : "none",
              }
            : {
                backgroundImage: fillGradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                transition: `clip-path ${duration} ease-out`,
              }
        }
      >
        {children}
      </span>
      <span className="sr-only">{children}</span>
      {loop && (
        <style>{`
          @keyframes fill-heading-loop {
            0% { clip-path: inset(0 100% 0 0); }
            35% { clip-path: inset(0 0 0 0); }
            65% { clip-path: inset(0 0 0 0); }
            100% { clip-path: inset(0 100% 0 0); }
          }
        `}</style>
      )}
    </h2>
  );
}
