export default function Hero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 48 }}>
      <p
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: "#2563EB",
          letterSpacing: "1.5px",
          marginBottom: 12,
          textTransform: "uppercase",
        }}
      >
        NEWS
      </p>
      <h1 style={{ fontSize: 48, fontWeight: 700, color: "#111827", lineHeight: 1.2, margin: 0 }}>
        소식
      </h1>
      <p style={{ fontSize: 16, color: "#6B7280", marginTop: 12, fontWeight: 400 }}>
        VODA의 교육 프로그램과 최신 소식을 소개합니다.
      </p>
      <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginTop: 32 }} />
    </section>
  );
}