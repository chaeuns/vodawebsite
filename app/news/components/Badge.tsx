import { badges } from "../data";

export default function Badge({ label }: { label: string }) {
  const style = badges[label] ?? { bg: "#F9FAFB", color: "#374151" };
  return (
    <span
      style={{
        background: style.bg,
        color: style.color,
        fontSize: 12,
        fontWeight: 500,
        padding: "4px 12px",
        borderRadius: 20,
        border: "1px solid #E5E7EB",
        letterSpacing: "0.2px",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}