import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageTitle from "./components/Titles/PageTitle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Webb *",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} p-3 py-1 sm:p-8 grid items-center w-screen h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
