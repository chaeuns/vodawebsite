"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedNews from "./components/FeaturedNews";
import NewsGrid from "./components/NewsGrid";
import Pagination from "./components/Pagination";

export default function NewsPageClient({ cards }: { cards: any[] }) {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [activePage, setActivePage] = useState(1);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
      <Hero />
      <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <FeaturedNews activeCategory={activeCategory} cards={cards} />
      <NewsGrid activeCategory={activeCategory} cards={cards} />
      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}