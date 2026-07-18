// components/Container.tsx
export default function Container({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}