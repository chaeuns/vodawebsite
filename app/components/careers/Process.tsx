"use client";

import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";

const steps = [
  {
    step: "STEP 1",
    title: "서류 접수",
    body: "서류를 넣어주시면 검토 후 안내드립니다.",
  },
  {
    step: "STEP 2",
    title: "면접 / 인터뷰",
    body: "역할 수행 능력과 팀 적합성을 확인합니다.",
  },
  {
    step: "STEP 3",
    title: "최종 합격",
    body: "처우 협의 후 최종 채용 확정됩니다.",
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-white py-[80px] relative -mt-6 transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          PROCESS
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          채용 프로세스
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          최종 합격까지의 과정을 명확하게 안내하며,
          <br />
          투명하고 신뢰할 수 있는 절차를 통해 가장 적합한 인재와 함께 성장해 나가고자 합니다.
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center gap-4">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="flex-1 flex flex-col md:flex-row items-center gap-4"
            >
              <div className="flex-1 w-full bg-white border border-[#E5E7EB] rounded-xl p-10 text-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-[#2563EB]/30 cursor-default">
                <p className="text-[12px] font-semibold text-[#2563EB] uppercase">
                  {s.step}
                </p>
                <p className="text-[22px] font-bold text-[#111827] mt-3">{s.title}</p>
                <p className="text-[15px] text-[#6B7280] mt-2.5 leading-[1.7]">
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span className="text-[24px] text-[#D1D5DB] flex-shrink-0 rotate-90 md:rotate-0">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
