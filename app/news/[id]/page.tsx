import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsById } from "@/app/lib/notion";
import NotionBlocks from "../components/NotionBlocks";
import Badge from "../components/Badge";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let news;
  try {
    news = await getNewsById(id);
  } catch {
    notFound();
  }

  const { title, date, badge, thumbnail, blocks } = news;

  return (
    <div>
      <section style={{ padding: "120px 40px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link
            href="/news"
            style={{
              fontSize: 13,
              color: "#6B7280",
              textDecoration: "none",
              display: "block",
              marginBottom: 40,
            }}
          >
            ← 목록으로
          </Link>

          <Badge label={badge} />

          <p style={{ fontSize: 14, color: "#6B7280", fontWeight: 500, marginTop: 16 }}>{date}</p>

          <h1
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.35,
              margin: "12px 0 0",
            }}
          >
            {title}
          </h1>

          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              style={{
                width: "100%",
                borderRadius: 16,
                marginTop: 32,
                display: "block",
              }}
            />
          )}
        </div>
      </section>

      <section style={{ padding: "56px 40px 120px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <NotionBlocks blocks={blocks} />
        </div>
      </section>
    </div>
  );
}
