import { categories } from "../data";

export default function CategoryFilter({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}) {
  return (
    <section style={{ padding: "8px 0 24px", display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 13, color: "#9CA3AF", fontWeight: 500, marginRight: 4 }}>카테고리</span>
      {categories.map((cat) => {
        const isActive = cat === activeCategory;
        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "8px 20px",
              borderRadius: 20,
              fontSize: 14,
              fontWeight: isActive ? 600 : 400,
              background: isActive ? "#111827" : "#fff",
              color: isActive ? "#fff" : "#374151",
              border: `1px solid ${isActive ? "#111827" : "#E5E7EB"}`,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.15s ease",
            }}
          >
            {cat}
          </button>
        );
      })}
    </section>
  );
}