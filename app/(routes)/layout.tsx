import { Inter } from "next/font/google";
import HomeNavButton from "../lib/components/HomeNavButton";
const inter = Inter({ subsets: ["latin"] });
export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <body className={inter.className}>
      {/* <div className="flex flex-col items-center justify-center ">
        <HomeNavButton />
      </div> */}
      {children}
    </body>
  );
}
