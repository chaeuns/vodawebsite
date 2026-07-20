"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedNews from "./components/FeaturedNews";
import NewsGrid from "./components/NewsGrid";
import Pagination from "./components/Pagination";
import { getFilteredCards } from "./data";

const PAGE_SIZE = 6;

export default function NewsPageClient({ cards }: { cards: any[] }) {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [activePage, setActivePage] = useState(1);

  const filteredCards = getFilteredCards(cards, activeCategory);
  const totalPages = Math.max(1, Math.ceil(filteredCards.length / PAGE_SIZE));
  const currentPage = Math.min(activePage, totalPages);
  const pageCards = filteredCards.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  useEffect(() => {
    setActivePage(1);
  }, [activeCategory]);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
      <Hero />
      <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <FeaturedNews activeCategory={activeCategory} cards={cards} />
      <NewsGrid cards={pageCards} />
      {filteredCards.length > PAGE_SIZE && (
        <Pagination activePage={currentPage} totalPages={totalPages} setActivePage={setActivePage} />
      )}
    </div>
  );
}
