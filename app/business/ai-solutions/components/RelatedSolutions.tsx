"use client";

import { BookOpen, BarChart3, Cloud, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { relatedSolutions } from "../data";
import BreakOnDesktop from "./BreakOnDesktop";

const ICONS = [BookOpen, BarChart3, Cloud];

export default function RelatedSolutions() {
  return (
    <section
      className="pt-[80px] pb-[130px] relative"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
        <h2
          className="font-extrabold font-suit text-[#0e1b52]"
          style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
        >
          관련 솔루션 바로가기
        </h2>
        <p className="text-[15px] text-[#5a6895] mt-3">
          AI 솔루션과 함께 살펴보면 좋은 VODA의 다른 서비스를 확인해보세요.
        </p>

        <div className="related-solutions-grid mt-10 bg-white rounded-[20px] shadow-[0_2px_12px_-4px_rgba(13,27,64,0.08)] overflow-hidden">
          {relatedSolutions.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="related-solutions-col group">
                <div className="related-solutions-icon">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="text-[#2563EB] transition-colors duration-200 group-hover:text-white"
                  />
                </div>
                <span className="inline-block text-[11px] font-bold text-[#2563EB] bg-[rgba(37,99,235,0.08)] px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
                <p className="text-[16px] font-bold text-[#0D1B40] mt-3 mb-2 whitespace-pre-line">{item.title}</p>
                <p className="text-[13px] text-[#8891A5] leading-[1.5]">
                  <BreakOnDesktop text={item.body} />
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#2563EB]"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} strokeWidth={2} />
      </motion.div>

      <style>{`
        .related-solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .related-solutions-col {
          display: block;
          padding: 40px 24px;
          text-align: center;
          transition: background 0.25s;
          border-right: 1px solid #EEF0F4;
        }
        .related-solutions-col:last-child {
          border-right: none;
        }
        .related-solutions-col:hover {
          background: #F5F8FF;
        }
        .related-solutions-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #EAF1FE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          transition: background 0.25s, transform 0.25s;
        }
        .related-solutions-col:hover .related-solutions-icon {
          background: #2563EB;
          transform: translateY(-4px);
        }

        @media (max-width: 720px) {
          .related-solutions-grid {
            grid-template-columns: 1fr;
          }
          .related-solutions-col {
            border-right: none;
            border-bottom: 1px solid #EEF0F4;
          }
          .related-solutions-col:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
