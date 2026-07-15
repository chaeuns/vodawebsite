export const categories = ["전체", "공지", "파트너십", "교육 현장", "수료 소식"];

export const badges: Record<string, { bg: string; color: string }> = {
  "공지": { bg: "#F9FAFB", color: "#374151" },
  "파트너십": { bg: "#EFF6FF", color: "#2563EB" },
  "교육 현장": { bg: "#F0FDF4", color: "#16A34A" },
  "수료 소식": { bg: "#FFF7ED", color: "#EA580C" },
};

export const cards = [
  { id: 1, badge: "파트너십", date: "2026.05.30", title: "VODA Campus 2기 수강생 1,200명 돌파" },
  { id: 2, badge: "교육 현장", date: "2026.05.10", title: "VODA × LG CNS, 기업 DX 교육 MOU 체결" },
  { id: 3, badge: "수료 소식", date: "2026.04.22", title: "AI·ML 트랙 1기 수료식 성황리에 마무리" },
  { id: 4, badge: "공지", date: "2026.04.10", title: "2026 하반기 KDT 교육과정 모집 시작" },
  { id: 5, badge: "파트너십", date: "2026.03.28", title: "VODA, NIA와 AI 교육 혁신 MOU 체결" },
  { id: 6, badge: "교육 현장", date: "2026.03.15", title: "클라우드 트랙 현장 실습 현장을 소개합니다" },
];