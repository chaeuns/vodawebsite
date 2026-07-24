"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "./data";
import Container from "@/app/components/Container";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-[80px] relative z-30 mt-16"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
      }}
    >
      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            자주 묻는 질문
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto mt-10 border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={i < faqs.length - 1 ? "border-b border-[#E5E7EB]" : ""}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="cursor-pointer w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F9FAFB] transition-colors"
              >
                <span className="text-[15px] font-semibold text-[#111827]">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <ChevronUp size={16} className="text-[#9CA3AF] flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown size={16} className="text-[#9CA3AF] flex-shrink-0 ml-4" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-[14px] text-[#6B7280] leading-[1.7] whitespace-pre-line">
                    {i === 0 ? (
                      <>
                        채용 공고 페이지에서 이력서와 포트폴리오를{" "}
                        <br className="md:hidden" />
                        자유 형식으로 첨부해 온라인 지원 가능합니다.{" "}
                        <br className="md:hidden" />
                        경력 사항과 프로젝트 경험을 구체적으로{" "}
                        <br className="md:hidden" />
                        작성하면 검토에 유리합니다.
                      </>
                    ) : i === 2 ? (
                      <>
                        네, 가능합니다. 공고별로 요구 경력 수준이 다르니{" "}
                        <br className="md:hidden" />
                        상세 요건을 확인해 주세요. 실무 경험이 없더라도{" "}
                        <br className="md:hidden" />
                        관련 프로젝트나 학습 경험을 어필해 주시면 좋습니다.
                      </>
                    ) : i === 3 ? (
                      <>
                        대부분의 포지션은 상시 채용으로 운영되며, 채용이{" "}
                        <br className="md:hidden" />
                        마감되면 공고에서 자동으로 안내됩니다.
                      </>
                    ) : (
                      faq.a
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
