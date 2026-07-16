// components/Container.tsx
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 ${className}`}
    >
      {children}
    </div>
  );
}