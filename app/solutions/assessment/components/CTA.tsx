import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#0B1130] px-6 py-20 text-center sm:px-10 lg:px-24">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        VODA AI 활용 역량평가 시스템, 지금 도입하세요
      </h2>
      <p className="mt-4 text-sm text-white/60">
        VODA의 전문가가 조직의 규모와 목적에 맞는 AI 역량평가 체계를 제안해드립니다.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-full bg-[#3D5AFE] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c46e0]"
      >
        도입 문의하기 →
      </Link>
    </section>
  );
}
