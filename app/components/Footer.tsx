// components/Footer.tsx
// VODA Works 푸터 — 화이트 배경, 얇은 구분선, 컴팩트 사이즈

import Image from "next/image";
import Container from "@/app/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-10">
        {/* 로고 + 멘트 */}
        <div className="mb-6">
          <Image
            src="/voda-logo-color.svg"
            alt="VODA Works"
            width={140}
            height={40}
            className="h-5 w-auto sm:h-6"
          />
          <p className="mt-2 text-sm text-gray-500">
            데이터의 가치로 미래를 봅니다.
          </p>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-100" />

        {/* 하단 정보 */}
        <div className="mt-6 flex flex-col gap-2 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VODA Works Inc. All rights reserved.</p>
          <p>
            서울특별시 중구 · 02-0000-0000 · contact@voda.works
          </p>
        </div>
     </Container>
    </footer>
  );
}