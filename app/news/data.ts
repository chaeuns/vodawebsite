export const categories = ["전체", "공지", "파트너십", "교육 현장", "수료 소식"];

export const badges: Record<string, { bg: string; color: string }> = {
  "공지": { bg: "#DBEAFE", color: "#1D4ED8" },
  "파트너십": { bg: "#F3E8FF", color: "#7E22CE" },
  "교육 현장": { bg: "#DCFCE7", color: "#15803D" },
  "수료 소식": { bg: "#FFEDD5", color: "#C2410C" },
};

export { getNewsList as getCards } from "@/app/lib/notion";

// cards are already sorted by date (descending) via the Notion query, so no re-sort is needed here.
export function getFeaturedCard(cards: any[]) {
  if (!cards || cards.length === 0) return null;
  const featuredCards = cards.filter((card) => card.featured);
  return featuredCards[0] ?? cards[0];
}

// cards for the grid: featured card excluded (it has its own pinned banner) and filtered by category.
export function getFilteredCards(cards: any[], activeCategory: string) {
  const featuredCard = activeCategory === "전체" ? getFeaturedCard(cards) : null;
  const cardsExcludingFeatured = featuredCard
    ? cards.filter((card) => card.id !== featuredCard.id)
    : cards;

  return activeCategory === "전체"
    ? cardsExcludingFeatured
    : cardsExcludingFeatured.filter((card) => card.badge === activeCategory);
}