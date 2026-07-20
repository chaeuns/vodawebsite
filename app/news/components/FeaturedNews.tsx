import Link from "next/link";
import Badge from "./Badge";
import { getFeaturedCard } from "../data";

export default function FeaturedNews({
  activeCategory,
  cards,
}: {
  activeCategory: string;
  cards: any[];
}) {
  if (activeCategory !== "전체") return null;

  const featuredCard = getFeaturedCard(cards);
  if (!featuredCard) return null;

  return (
    <section style={{ marginBottom: 40 }}>
      <div
        style={{
          display: "flex",
          background: "#fff",
          border: "1px solid #E5E7EB",
          borderRadius: 12,
          overflow: "hidden",
          height: 300,
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ position: "relative", width: "45%", background: "#E9EAEC", flexShrink: 0 }}>
          {featuredCard.thumbnail ? (
            <img
              src={featuredCard.thumbnail}
              alt={featuredCard.title}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                color: "#9CA3AF",
              }}
            >
              이미지 자리
            </div>
          )}
          <div style={{ position: "absolute", top: 16, left: 16 }}>
            <Badge label={featuredCard.badge} />
          </div>
        </div>

        <div style={{ padding: 36, display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#2563EB", letterSpacing: "1px", margin: 0 }}>
            FEATURED
          </p>
          <p style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6, marginBottom: 0 }}>{featuredCard.date}</p>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.4,
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            {featuredCard.title}
          </h3>
          <Link
            href={`/news/${featuredCard.id}`}
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#2563EB",
              marginTop: 20,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            자세히 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
