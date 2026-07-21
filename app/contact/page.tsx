"use client";

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = [
  "정부 교육 사업",
  "기업 교육",
  "AI 자격인증",
  "AI 솔루션",
  "클라우드",
  "컨설팅",
  "기타",
];

const SCALE_OPTIONS = ["1~10명", "11~50명", "51~100명", "100명 이상", "미정"];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10";

const labelClass = "text-[14px] font-semibold text-[#111827]";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5F7FB] py-24 sm:py-28">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <p
          style={{ letterSpacing: "1.5px" }}
          className="text-[12px] font-bold text-[#2563EB]"
        >
          INQUIRY
        </p>
        <h1
          className="mt-3 text-[32px] sm:text-[38px] font-extrabold bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
        >
          문의하기
        </h1>
        <p className="mt-3 text-[14px] sm:text-[15px] text-[#6B7280]">
          아래 양식을 작성해주시면 담당자가 1~2 영업일 내에 연락드립니다.
        </p>
      </div>

      <div className="mx-auto max-w-[720px] px-6 mt-10">
        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-8 sm:p-10 shadow-[0_20px_50px_-20px_rgba(17,24,39,0.12)]">
          {submitted ? (
            <div className="py-10 text-center">
              <p className="text-[19px] font-bold text-[#111827]">
                문의가 접수되었습니다.
              </p>
              <p className="mt-2 text-[14px] text-[#6B7280]">
                담당자가 확인 후 1~2 영업일 내에 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2 text-left">
                  <label className={labelClass}>
                    회사명 <span className="text-[#2563EB]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="회사명을 입력하세요"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className={labelClass}>
                    담당자 <span className="text-[#2563EB]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="담당자 이름을 입력하세요"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className={labelClass}>
                    연락처 <span className="text-[#2563EB]">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="010-0000-0000"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className={labelClass}>
                    이메일 <span className="text-[#2563EB]">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email@company.com"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className={labelClass}>문의 분야</label>
                  <select defaultValue="" className={`${inputClass} appearance-none bg-white`}>
                    <option value="" disabled>
                      문의 분야를 선택하세요
                    </option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2 text-left">
                  <label className={labelClass}>예상 인원/규모</label>
                  <select defaultValue="" className={`${inputClass} appearance-none bg-white`}>
                    <option value="" disabled>
                      규모를 선택하세요
                    </option>
                    {SCALE_OPTIONS.map((scale) => (
                      <option key={scale} value={scale}>
                        {scale}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className={labelClass}>문의 내용</label>
                <textarea
                  rows={5}
                  placeholder="문의 목적, 희망 사항, 일정 등 자세한 내용을 입력해주세요."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <label className="flex items-start gap-2 text-[13px] text-[#6B7280]">
                <input required type="checkbox" className="mt-0.5 accent-[#2563EB]" />
                <span>
                  개인정보 수집 및 이용에 동의합니다. (문의 응대 목적이며 미동의 시 접수가
                  제한됩니다.){" "}
                  <span className="font-semibold text-[#2563EB]">자세히 보기</span>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#2563EB] text-white text-[15px] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-colors"
              >
                문의 접수하기 →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
