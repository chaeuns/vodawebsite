import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsById } from "@/app/lib/notion";
import NotionBlocks from "../components/NotionBlocks";

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

  const { title, date, badge, blocks } = news;

  return (
    <div>
      <section style={{ background: "#0B1130", padding: "120px 40px 64px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link
            href="/news"
            style={{
              fontSize: 13,
              color: "#8FA6FF",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 24,
            }}
          >
            ← 목록으로
          </Link>

          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#3D5AFE",
              background: "rgba(61,90,254,0.12)",
              border: "1px solid rgba(61,90,254,0.3)",
              padding: "4px 12px",
              borderRadius: 20,
              letterSpacing: "0.2px",
              display: "inline-block",
            }}
          >
            {badge}
          </span>

          <h1
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.35,
              margin: "16px 0 0",
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: 14, color: "#9CA3AF", marginTop: 16 }}>{date}</p>
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
