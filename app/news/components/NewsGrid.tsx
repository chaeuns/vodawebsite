import NewsCard from "./NewsCard";
import { getFeaturedCard } from "../data";

export default function NewsGrid({
  activeCategory,
  cards,
}: {
  activeCategory: string;
  cards: any[];
}) {
  const showsFeaturedSection = activeCategory === "전체" || activeCategory === "공지";
  const featuredCard = showsFeaturedSection ? getFeaturedCard(cards) : null;
  const cardsExcludingFeatured = featuredCard
    ? cards.filter((card) => card.id !== featuredCard.id)
    : cards;

  const filteredCards =
    activeCategory === "전체"
      ? cardsExcludingFeatured
      : cardsExcludingFeatured.filter((card) => card.badge === activeCategory);

  return (
    <section style={{ marginBottom: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {filteredCards.map((card) => (
          <NewsCard
            key={card.id}
            id={card.id}
            badge={card.badge}
            date={card.date}
            title={card.title}
            thumbnail={card.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}