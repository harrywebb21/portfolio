import HomeNavButton from "../lib/components/HomeNavButton";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <body className="">
      <div className="flex flex-col items-center justify-center ">
        <HomeNavButton />
      </div>
      {children}
    </body>
  );
}
