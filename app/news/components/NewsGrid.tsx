import NewsCard from "./NewsCard";

export default function NewsGrid({ cards }: { cards: any[] }) {
  return (
    <section style={{ marginBottom: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {cards.map((card) => (
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
