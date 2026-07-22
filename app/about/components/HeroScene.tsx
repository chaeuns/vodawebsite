"use client";

/* ═══════════════════════════════════════════════════════════
   VODA About — Hero Scene
   "WE TURN DATA INTO VISION." — U(글래스 GIF) / O(눈 이미지)
   ═══════════════════════════════════════════════════════════ */

import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function HeroScene() {
  return (
    <section className={`voda-hero-scene ${interTight.className}`}>
      <h1>
        <span className="line">
          WE T
          <span className="obj-slot glass-slot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/u-text.gif" alt="U" className="glass-gif glass-u" />
          </span>
          RN DATA
        </span>
        <span className="line">
          INTO VISI
          <span className="obj-slot wide">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/eyes.png" alt="O" className="eyes-img" />
          </span>
          N.
        </span>
      </h1>

      <style>{`
        .voda-hero-scene {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 4vw;
          overflow: hidden;
          background: #0F1224;
          color: #ffffff;
        }
        .voda-hero-scene h1 {
          font-weight: 600;
          font-size: clamp(58px, 10vw, 140px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
        }
        .voda-hero-scene h1 .line { display: block; white-space: nowrap; }
        .voda-hero-scene .obj-slot {
          display: inline-block;
          position: relative;
          width: 1.0em;
          height: 1.0em;
          vertical-align: -0.14em;
          margin: 0 0.02em;
        }
        .voda-hero-scene .obj-slot.wide { width: 1.4em; }
        .voda-hero-scene .obj-slot.glass-slot { margin: 0; }
        .voda-hero-scene .obj-slot .glass-gif,
        .voda-hero-scene .obj-slot .eyes-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          z-index: 1;
        }
        .voda-hero-scene .obj-slot .glass-gif {
          width: calc(100% + 5px);
          height: calc(100% + 5px);
          margin: auto;
        }
        .glass-u {
          transform: scale(1.15); /* 원하는 배율로 조절 */
        }
        .voda-hero-scene .obj-slot .eyes-img {
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          margin: auto;
          animation: eyes-float 4.2s ease-in-out infinite;
        }
        @keyframes eyes-float {
          0%   { transform: translateY(0) rotate(0deg); }
          50%  { transform: translateY(-0.045em) rotate(-0.6deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .voda-hero-scene .obj-slot .eyes-img { animation: none; }
        }
        @media (max-width: 680px) {
          .voda-hero-scene { height: auto; min-height: 100vh; overflow: auto; padding: 18vh 6vw; }
          .voda-hero-scene h1 .line { white-space: normal; }
        }
      `}</style>
    </section>
  );
}
