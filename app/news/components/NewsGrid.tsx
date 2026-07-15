import { cards } from "../data";
import NewsCard from "./NewsCard";

export default function NewsGrid() {
  return (
    <section style={{ marginBottom: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {cards.map((card) => (
          <NewsCard key={card.id} badge={card.badge} date={card.date} title={card.title} />
        ))}
      </div>
    </section>
  );
}