"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function FillHeading({
  children,
  className = "",
  fillGradient = "linear-gradient(to right, #1D4ED8 0%, #0EA5E9 50%, #22D3EE 100%)",
  duration = "2.2s",
}: {
  children: ReactNode;
  className?: string;
  fillGradient?: string;
  duration?: string;
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
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={ref} className={`relative inline-block ${className}`}>
      <span aria-hidden="true" className="text-[#D1D5DB]">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: fillGradient,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: `clip-path ${duration} ease-out`,
        }}
      >
        {children}
      </span>
      <span className="sr-only">{children}</span>
    </h2>
  );
}
