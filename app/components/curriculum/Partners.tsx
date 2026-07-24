"use client";

import Image from "next/image";
import { partners } from "./data";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import Container from "@/app/components/Container";

export default function Partners() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="bg-white py-[80px] min-h-[860px] flex flex-col justify-center relative z-40 -mt-10"
    >
      <div
        ref={ref}
        className="transition-all duration-[900ms] ease-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
      <Container>
        <div className="pl-6 pr-6 md:pl-20 md:pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", letterSpacing: "-0.03em" }}
          >
            함께 만드는 교육
          </h2>
          <p className="text-[15px] text-[#5a6895] mt-3">
            VODA는 주요 기업과 협력하여 현장 중심의 <br className="md:hidden" />
            교육 과정을 운영합니다.
          </p>
        </div>
      </Container>

      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[801px]:grid-cols-2 gap-7 mt-10">
          {partners.map((partner) => (
            <a
              key={partner.title}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="relative w-full aspect-[520/300] overflow-hidden bg-[#F3F4F6]">
                <Image
                  src={partner.image}
                  alt={partner.title}
                  fill
                  sizes="(min-width: 801px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>

              <div className="p-6">
                <span className="inline-block text-[12px] font-semibold text-[#2563EB] bg-[#EFF4FE] rounded-full px-3 py-1">
                  K-Digital Training
                </span>
                <p className="text-[19px] font-bold text-[#111827] mt-3">{partner.title}</p>
                <p className="text-[13.5px] text-[#6B7280] mt-2 leading-[1.5]">
                  {partner.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#2563EB] mt-4">
                  홈페이지 바로가기
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
