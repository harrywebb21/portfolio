export default function MiscBG({ className }: { className?: string }) {
  return (
    <>
      <div
        className={`border w-fit flex items-center justify-center p-3 ${className}`}
      >
        <p className="text-white text-9xl rounded-lg w-full h-full">&lt;&gt;</p>
      </div>
    </>
  );
}
