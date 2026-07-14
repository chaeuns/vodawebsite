"use client";

import { Sparkles, BarChart3, LayoutGrid, Shield } from "lucide-react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";

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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          FIELDS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          운영 가능한 교육 분야
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2 mb-16">
          아래 항목 외에도 기업 요청에 맞춰 새로운 주제를 구성할 수 있습니다.
        </p>

        <div className="fields-map">
          <svg className="fields-connector" viewBox="0 0 880 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <path
              d="M440,230 Q440,150 262,150"
              fill="none"
              stroke="#8FA6D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 8"
            />
            <path
              d="M440,230 Q440,150 618,150"
              fill="none"
              stroke="#8FA6D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 8"
            />
            <path
              d="M440,230 Q440,310 262,310"
              fill="none"
              stroke="#8FA6D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 8"
            />
            <path
              d="M440,230 Q440,310 618,310"
              fill="none"
              stroke="#8FA6D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 8"
            />
          </svg>

          <div className="fields-hub">
            <span>교육 분야</span>
          </div>

          {FIELD_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className={`fields-node fields-${cat.position}`}>
                <div className="fields-node-icon" style={{ background: cat.iconBg }}>
                  <Icon size={18} color={cat.iconColor} strokeWidth={1.7} />
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

      <style>{`
        .fields-map {
          position: relative;
          width: 100%;
          max-width: 880px;
          height: 460px;
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
          width: 118px;
          height: 118px;
          border-radius: 50%;
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
        .fields-hub span {
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          text-align: center;
          padding: 0 8px;
        }
        .fields-node {
          position: absolute;
          width: 232px;
          text-align: center;
          background: #fff;
          border: 1px solid #E7EAF1;
          border-radius: 16px;
          padding: 18px 18px 16px;
          box-shadow: 0 8px 20px rgba(13, 27, 64, 0.06);
          z-index: 2;
        }
        .fields-node-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }
        .fields-node-title {
          font-size: 15px;
          font-weight: 700;
          color: #0D1B40;
          margin-bottom: 8px;
        }
        .fields-node-divider {
          height: 1px;
          background: #E7EAF1;
          margin: 0 auto 8px;
          width: 100%;
        }
        .fields-node-tags {
          font-size: 12px;
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

        @media (prefers-reduced-motion: reduce) {
          .fields-hub, .fields-n1, .fields-n2, .fields-n3, .fields-n4 { animation: none !important; }
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
