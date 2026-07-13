import Badge from "./Badge";

export default function FeaturedNews() {
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
          <div style={{ position: "absolute", top: 16, left: 16 }}>
            <Badge label="공지" />
          </div>
        </div>

        <div style={{ padding: 36, display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#2563EB", letterSpacing: "1px", margin: 0 }}>
            FEATURED
          </p>
          <p style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6, marginBottom: 0 }}>2026.06.20</p>
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
            VODA, 과학기술정보통신부 AI 교육 혁신 과제 선정
          </h3>
          <p
            style={{
              fontSize: 15,
              color: "#6B7280",
              marginTop: 12,
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            짧은 설명 텍스트 자리 (1~2줄). VODA가 정부 주도 AI 교육 혁신 프로젝트의 핵심 파트너로 선정되어 국내 AI 인재 양성에 기여합니다.
          </p>
          <a
            href="#"
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
          </a>
        </div>
      </div>
    </section>
  );
}