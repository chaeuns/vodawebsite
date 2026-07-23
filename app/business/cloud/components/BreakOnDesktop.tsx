import { Fragment } from "react";

// Splits on the "\n" markers already baked into the copy (tuned for the wider desktop
// card widths) and only renders them as <br> from `md` up. Mobile cards are narrower and
// stack full-width, so those desktop line breaks land mid-sentence and read oddly — this
// lets mobile wrap naturally instead.
export default function BreakOnDesktop({ text }: { text: string }) {
  const parts = text.split("\n");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <br className="hidden md:inline" />}
        </Fragment>
      ))}
    </>
  );
}
