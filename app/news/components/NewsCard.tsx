import Link from "next/link";
import Badge from "./Badge";

export default function NewsCard({
  id,
  badge,
  date,
  title,
  thumbnail,
}: {
  id: string;
  badge: string;
  date: string;
  title: string;
  thumbnail?: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", height: 180, background: "#E9EAEC", flexShrink: 0 }}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
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
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <Badge label={badge} />
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <p style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 8, fontWeight: 400 }}>{date}</p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#111827",
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            margin: 0,
          }}
        >
          {title}
        </p>
        <Link
          href={`/news/${id}`}
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#2563EB",
            marginTop: 12,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          자세히 보기 →
        </Link>
      </div>
    </div>
  );
}