export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div
        className={`${className} rounded-2xl border border-white/50 w-100 h-[80vh] sm:h-[90vh]`}
      >
        {children}
      </div>
    </>
  );
}
