import { getCards } from "./data";
import NewsPageClient from "./NewsPageClient";

export default async function NewsPage() {
  const cards = await getCards();
  return <NewsPageClient cards={cards} />;
}