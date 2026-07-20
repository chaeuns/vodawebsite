export const categories = ["전체", "공지", "파트너십", "교육 현장", "수료 소식"];

export const badges: Record<string, { bg: string; color: string }> = {
  "공지": { bg: "#F9FAFB", color: "#374151" },
  "파트너십": { bg: "#EFF6FF", color: "#2563EB" },
  "교육 현장": { bg: "#F0FDF4", color: "#16A34A" },
  "수료 소식": { bg: "#FFF7ED", color: "#EA580C" },
};

export { getNewsList as getCards } from "@/app/lib/notion";

// cards are already sorted by date (descending) via the Notion query, so no re-sort is needed here.
export function getFeaturedCard(cards: any[]) {
  if (!cards || cards.length === 0) return null;
  const featuredCards = cards.filter((card) => card.featured);
  return featuredCards[0] ?? cards[0];
}