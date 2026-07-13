"use client";

import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/app/components/shared/useScrollReveal";
import FillHeading from "@/app/components/shared/FillHeading";
import { educationTypes, groupSizes } from "../data";

const inputClass =
  "w-full text-[14px] text-[#111827] border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none transition-colors focus:border-[#2563EB] placeholder:text-[#9CA3AF]";

export default function InquiryForm() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="inquiry"
      ref={ref}
      className="bg-[#F9FAFB] py-[80px] relative scroll-mt-16 transition-all duration-[900ms] ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-semibold text-[#2563EB] uppercase"
        >
          INQUIRY
        </p>
        <FillHeading className="text-[32px] font-bold mt-2 leading-[1.3]">
          기업 교육 문의하기
        </FillHeading>
        <p className="text-[15px] text-[#6B7280] mt-2">
          아래 양식을 작성해주시면 담당자가 1~2 영업일 내에 연락드립니다.
        </p>

        {submitted ? (
          <div className="mt-10 bg-white border border-[#E5E7EB] rounded-2xl p-12">
            <p className="text-[20px] font-bold text-[#111827]">문의가 접수되었습니다.</p>
            <p className="text-[14px] text-[#6B7280] mt-3 leading-[1.7]">
              담당자가 확인 후 1~2 영업일 내로 입력하신 연락처 또는 이메일로 안내드리겠습니다.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[13px] font-semibold text-[#111827]">
                  회사명 <span className="text-[#2563EB]">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="회사명을 입력하세요"
                  className={`${inputClass} mt-2`}
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#111827]">
                  담당자 <span className="text-[#2563EB]">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="담당자 이름을 입력하세요"
                  className={`${inputClass} mt-2`}
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#111827]">
                  연락처 <span className="text-[#2563EB]">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="010-0000-0000"
                  className={`${inputClass} mt-2`}
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#111827]">
                  이메일 <span className="text-[#2563EB]">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="email@company.com"
                  className={`${inputClass} mt-2`}
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#111827]">교육 유형</label>
                <select defaultValue="" className={`${inputClass} mt-2`}>
                  <option value="" disabled>
                    교육 유형을 선택하세요
                  </option>
                  {educationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#111827]">교육 희망 인원</label>
                <select defaultValue="" className={`${inputClass} mt-2`}>
                  <option value="" disabled>
                    인원을 선택하세요
                  </option>
                  {groupSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-[13px] font-semibold text-[#111827]">
                교육 분야 및 요청사항
              </label>
              <textarea
                rows={4}
                placeholder="교육 목적, 희망 분야, 일정 등 자세한 내용을 입력해주세요."
                className={`${inputClass} mt-2 resize-none`}
              />
            </div>

            <p className="text-[12px] text-[#9CA3AF] mt-4 leading-[1.6]">
              개인정보 수집 및 이용에 동의합니다. (교육 상담 응대 목적이며 미동의 시 접수가
              제한됩니다.){" "}
              <a href="#" className="text-[#2563EB] hover:underline">
                자세히 보기
              </a>
            </p>

            <button
              type="submit"
              className="w-full mt-6 bg-[#2563EB] text-white text-[15px] font-semibold py-3.5 rounded-lg hover:bg-[#1d4ed8] transition-colors"
            >
              문의 접수하기 →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
