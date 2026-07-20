export default function Pagination({
  activePage,
  totalPages,
  setActivePage,
}: {
  activePage: number;
  totalPages: number;
  setActivePage: (updater: number | ((p: number) => number)) => void;
}) {
  const btnStyle = (active: boolean): React.CSSProperties => ({
    width: 36,
    height: 36,
    borderRadius: 8,
    border: `1px solid ${active ? "#111827" : "#E5E7EB"}`,
    background: active ? "#111827" : "#fff",
    color: active ? "#fff" : "#374151",
    fontSize: 14,
    fontWeight: active ? 600 : 400,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Pretendard, sans-serif",
    transition: "all 0.15s ease",
  });

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4, padding: "48px 0 64px" }}>
      <button onClick={() => setActivePage((p: number) => Math.max(1, p - 1))} style={btnStyle(false)}>‹</button>
      {pages.map((n) => (
        <button key={n} onClick={() => setActivePage(n)} style={btnStyle(n === activePage)}>
          {n}
        </button>
      ))}
      <button onClick={() => setActivePage((p: number) => Math.min(totalPages, p + 1))} style={btnStyle(false)}>›</button>
    </section>
  );
}
