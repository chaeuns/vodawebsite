import { getCards, getFeaturedCard, getFilteredCards } from "@/app/news/data";
import HomePageClient from "./HomePageClient";

export default async function Home() {
  const cards = await getCards();
  const featured = getFeaturedCard(cards);
  const rest = getFilteredCards(cards, "전체").slice(0, 2);
  const newsCards = featured ? [featured, ...rest] : cards.slice(0, 3);

  return <HomePageClient newsCards={newsCards} />;
}
