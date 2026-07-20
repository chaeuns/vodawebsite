"use client";

import Image from "next/image";
import { Sparkles, BarChart3, LayoutGrid, Shield } from "lucide-react";
import { useRepeatingReveal } from "../useRepeatingReveal";
import Container from "@/app/components/Container";

const FIELD_CATEGORIES = [
  {
    icon: Sparkles,
    title: "AI 활용",
    tags: ["생성형 AI · Copilot", "비개발자 AI 입문"],
    iconBg: "#EAF1FD",
    iconColor: "#3B7DDE",
    position: "n1",
  },
  {
    icon: BarChart3,
    title: "데이터·분석",
    tags: ["데이터 분석", "BI 구현"],
    iconBg: "#E4EDFC",
    iconColor: "#2F6BD1",
    position: "n2",
  },
  {
    icon: LayoutGrid,
    title: "업무 환경",
    tags: ["MS-Office 365", "협업툴 · IT 리터러시"],
    iconBg: "#DEE9FB",
    iconColor: "#255BC4",
    position: "n3",
  },
  {
    icon: Shield,
    title: "보안·전략",
    tags: ["사이버보안·개인정보", "DX 전략 수립"],
    iconBg: "#D6E2F8",
    iconColor: "#1B4CB3",
    position: "n4",
  },
];

export default function FieldTags() {
  const { ref, isVisible } = useRepeatingReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative transition-all duration-[900ms] ease-out"
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
            운영 가능한 교육 분야
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3 mb-16">
            아래 항목 외에도 기업 요청에 맞춰 새로운 주제를 구성할 수 있습니다.
          </p>
        </div>
      </Container>

      <Container>
        <div className="pl-20 pr-20">
        <div className="fields-map">
          <svg className="fields-connector" viewBox="0 0 880 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <path
              id="field-path-1"
              d="M440,230 Q440,150 262,150"
              fill="none"
              stroke="#BFD3F0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              id="field-path-2"
              d="M440,230 Q440,150 618,150"
              fill="none"
              stroke="#BFD3F0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              id="field-path-3"
              d="M440,230 Q440,310 262,310"
              fill="none"
              stroke="#BFD3F0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              id="field-path-4"
              d="M440,230 Q440,310 618,310"
              fill="none"
              stroke="#BFD3F0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {["field-path-1", "field-path-2", "field-path-3", "field-path-4"].map((id, i) => (
              <circle key={id} className="fields-flow-dot" r="3.5" fill="#b7d2fc">
                <animateMotion
                  dur="2.2s"
                  begin={`${i * 0.45}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${id}`} />
                </animateMotion>
              </circle>
            ))}
          </svg>

          <div className="fields-hub">
            <Image
              src="/images/corporate-education/field-hub.png"
              alt="교육 분야"
              width={136}
              height={136}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {FIELD_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className={`fields-node fields-${cat.position}`}>
                <div className="fields-node-icon" style={{ background: cat.iconBg }}>
                  <Icon size={22} color={cat.iconColor} strokeWidth={1.7} />
                </div>
                <p className="fields-node-title">{cat.title}</p>
                <div className="fields-node-divider" />
                <p className="fields-node-tags">
                  {cat.tags.map((tag, idx) => (
                    <span key={tag}>
                      {tag}
                      {idx < cat.tags.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
        </div>
      </Container>

      <style>{`
        .fields-map {
          position: relative;
          width: 100%;
          max-width: 960px;
          height: 500px;
          margin: 0 auto;
        }
        .fields-connector {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .fields-hub {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 136px;
          height: 136px;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(219, 234, 254, 0.55);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.12);
          animation: fields-float-hub 6.4s ease-in-out infinite 0.2s;
          z-index: 2;
        }
        .fields-node {
          position: absolute;
          width: 270px;
          text-align: center;
          background: #fff;
          border: 1px solid #BAE6FD;
          border-radius: 18px;
          padding: 22px 20px 20px;
          box-shadow: 0 8px 20px rgba(13, 27, 64, 0.06);
          z-index: 2;
        }
        .fields-node-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }
        .fields-node-title {
          font-size: 18px;
          font-weight: 700;
          color: #0D1B40;
          margin-bottom: 10px;
        }
        .fields-node-divider {
          height: 1px;
          background: #E7EAF1;
          margin: 0 auto 10px;
          width: 100%;
        }
        .fields-node-tags {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.7;
        }

        .fields-n1 { left: 1%;  top: 5%;    animation: fields-float-a 6s ease-in-out infinite; }
        .fields-n2 { right: 1%; top: 5%;    animation: fields-float-b 6.6s ease-in-out infinite 0.4s; }
        .fields-n3 { left: 1%;  bottom: 5%; animation: fields-float-c 6.2s ease-in-out infinite 0.8s; }
        .fields-n4 { right: 1%; bottom: 5%; animation: fields-float-d 6.8s ease-in-out infinite 1.2s; }

        @keyframes fields-float-hub { 0%, 100% { transform: translate(-50%, -50%) translateY(0); } 50% { transform: translate(-50%, -50%) translateY(-7px); } }
        @keyframes fields-float-a   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes fields-float-b   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes fields-float-c   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes fields-float-d   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

        .fields-flow-dot {
          filter: drop-shadow(0 0 3px rgba(59, 130, 246, 0.7));
        }

        @media (prefers-reduced-motion: reduce) {
          .fields-hub, .fields-n1, .fields-n2, .fields-n3, .fields-n4 { animation: none !important; }
          .fields-flow-dot { display: none; }
        }

        @media (max-width: 768px) {
          .fields-map { height: auto; }
          .fields-hub { position: static; transform: none; margin: 0 auto 24px; }
          .fields-node { position: static; width: 100%; margin-bottom: 14px; animation: none !important; }
          .fields-connector { display: none; }
        }
      `}</style>
    </section>
  );
}
