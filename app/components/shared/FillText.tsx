"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function FillText({
  children,
  className = "",
  fillGradient = "linear-gradient(to right, #22D3EE 0%, #0EA5E9 25%, #1D4ED8 50%, #0EA5E9 75%, #22D3EE 100%)",
}: {
  children: ReactNode;
  className?: string;
  fillGradient?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
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
    <span ref={ref} className={`relative inline-block ${className}`}>
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
          clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 50% 0 50%)",
          transition: "clip-path 1.2s ease-out",
        }}
      >
        {children}
      </span>
      <span className="sr-only">{children}</span>
    </span>
  );
}
