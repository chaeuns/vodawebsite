function RichText({ richText }: { richText: any[] }) {
  if (!richText?.length) return null;

  return (
    <>
      {richText.map((text: any, i: number) => {
        const a = text.annotations ?? {};
        const style: React.CSSProperties = {
          fontWeight: a.bold ? 700 : undefined,
          fontStyle: a.italic ? "italic" : undefined,
          textDecoration:
            [a.strikethrough && "line-through", a.underline && "underline"]
              .filter(Boolean)
              .join(" ") || undefined,
          fontFamily: a.code ? "monospace" : undefined,
          background: a.code ? "#F1F3F9" : undefined,
          padding: a.code ? "2px 6px" : undefined,
          borderRadius: a.code ? 4 : undefined,
        };

        if (text.href) {
          return (
            <a
              key={i}
              href={text.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...style, color: "#3D5AFE", textDecoration: "underline" }}
            >
              {text.plain_text}
            </a>
          );
        }

        return (
          <span key={i} style={style}>
            {text.plain_text}
          </span>
        );
      })}
    </>
  );
}

function NotionBlock({ block }: { block: any }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p style={{ fontSize: 16, lineHeight: 1.8, color: "#374151", margin: "0 0 20px" }}>
          <RichText richText={block.paragraph.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0B1130", margin: "40px 0 16px" }}>
          <RichText richText={block.heading_1.rich_text} />
        </h2>
      );
    case "heading_2":
      return (
        <h3 style={{ fontSize: 22, fontWeight: 700, color: "#0B1130", margin: "32px 0 14px" }}>
          <RichText richText={block.heading_2.rich_text} />
        </h3>
      );
    case "heading_3":
      return (
        <h4 style={{ fontSize: 18, fontWeight: 700, color: "#0B1130", margin: "28px 0 12px" }}>
          <RichText richText={block.heading_3.rich_text} />
        </h4>
      );
    case "bulleted_list_item":
      return (
        <li style={{ fontSize: 16, lineHeight: 1.8, color: "#374151", marginBottom: 8 }}>
          <RichText richText={block.bulleted_list_item.rich_text} />
        </li>
      );
    case "numbered_list_item":
      return (
        <li style={{ fontSize: 16, lineHeight: 1.8, color: "#374151", marginBottom: 8 }}>
          <RichText richText={block.numbered_list_item.rich_text} />
        </li>
      );
    case "quote":
      return (
        <blockquote
          style={{
            borderLeft: "3px solid #3D5AFE",
            margin: "24px 0",
            padding: "4px 20px",
            color: "#4B5563",
            fontStyle: "italic",
            fontSize: 16,
          }}
        >
          <RichText richText={block.quote.rich_text} />
        </blockquote>
      );
    case "code":
      return (
        <pre
          style={{
            background: "#0B1130",
            color: "#E5E7EB",
            padding: 20,
            borderRadius: 8,
            overflowX: "auto",
            fontSize: 14,
            margin: "20px 0",
          }}
        >
          <code>{block.code.rich_text.map((t: any) => t.plain_text).join("")}</code>
        </pre>
      );
    case "image": {
      const src = block.image.type === "external" ? block.image.external.url : block.image.file.url;
      const caption = block.image.caption?.map((t: any) => t.plain_text).join("") ?? "";
      return (
        <figure style={{ margin: "28px 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={caption} style={{ width: "100%", borderRadius: 12, display: "block" }} />
          {caption && (
            <figcaption style={{ fontSize: 13, color: "#9CA3AF", marginTop: 8, textAlign: "center" }}>
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }
    case "divider":
      return <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: "32px 0" }} />;
    case "to_do":
      return (
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
          <input type="checkbox" checked={block.to_do.checked} readOnly style={{ marginTop: 5 }} />
          <span
            style={{
              fontSize: 16,
              color: "#374151",
              textDecoration: block.to_do.checked ? "line-through" : undefined,
            }}
          >
            <RichText richText={block.to_do.rich_text} />
          </span>
        </div>
      );
    default:
      return null;
  }
}

export default function NotionBlocks({ blocks }: { blocks: any[] }) {
  const groups: { type: string; items: any[] }[] = [];

  for (const block of blocks) {
    const last = groups[groups.length - 1];
    if (last && last.type === block.type && (block.type === "bulleted_list_item" || block.type === "numbered_list_item")) {
      last.items.push(block);
    } else {
      groups.push({ type: block.type, items: [block] });
    }
  }

  return (
    <div>
      {groups.map((group, i) => {
        if (group.type === "bulleted_list_item") {
          return (
            <ul key={i} style={{ margin: "0 0 20px", paddingLeft: 24 }}>
              {group.items.map((block) => (
                <NotionBlock key={block.id} block={block} />
              ))}
            </ul>
          );
        }
        if (group.type === "numbered_list_item") {
          return (
            <ol key={i} style={{ margin: "0 0 20px", paddingLeft: 24 }}>
              {group.items.map((block) => (
                <NotionBlock key={block.id} block={block} />
              ))}
            </ol>
          );
        }
        return <NotionBlock key={group.items[0].id} block={group.items[0]} />;
      })}
    </div>
  );
}
