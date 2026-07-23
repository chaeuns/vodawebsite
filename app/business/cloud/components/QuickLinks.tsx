"use client";

import { ClipboardCheck, RefreshCw, ShieldCheck, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { quickLinks } from "../data";
import Container from "@/app/components/Container";
import BreakOnDesktop from "./BreakOnDesktop";

const ICONS = [ClipboardCheck, RefreshCw, ShieldCheck];

export default function QuickLinks() {
  return (
    <section
      className="pt-[80px] pb-[130px] relative"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)" }}
    >
      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            제공 서비스
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            인프라 진단부터 마이그레이션, 보안 컨설팅까지 — VODA가 클라우드 전환의 모든 단계를
            함께합니다.
          </p>
        </div>
      </Container>

      <div className="max-w-[1100px] mx-auto px-6 mt-10">
        <div className="quick-links-grid bg-white rounded-[20px] shadow-[0_2px_12px_-4px_rgba(13,27,64,0.08)] overflow-hidden border border-[#EEF0F4]">
          {quickLinks.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="quick-links-col group">
                <div className="quick-links-icon">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="text-[#2563EB] transition-colors duration-200 group-hover:text-white"
                  />
                </div>
                <span className="inline-block text-[11px] font-bold text-[#2563EB] bg-[rgba(37,99,235,0.08)] px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
                <p className="text-[16px] font-bold text-[#0D1B40] mt-3 mb-2">{item.title}</p>
                <p className="text-[13px] text-[#8891A5] leading-[1.6]">
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
        .quick-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .quick-links-col {
          display: block;
          padding: 40px 24px;
          text-align: center;
          transition: background 0.25s;
          border-right: 1px solid #EEF0F4;
        }
        .quick-links-col:last-child {
          border-right: none;
        }
        .quick-links-col:hover {
          background: #F5F8FF;
        }
        .quick-links-icon {
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
        .quick-links-col:hover .quick-links-icon {
          background: #2563EB;
          transform: translateY(-4px);
        }

        @media (max-width: 720px) {
          .quick-links-grid {
            grid-template-columns: 1fr;
          }
          .quick-links-col {
            border-right: none;
            border-bottom: 1px solid #EEF0F4;
          }
          .quick-links-col:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
