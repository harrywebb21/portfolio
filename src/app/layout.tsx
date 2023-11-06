import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/app/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Webb*",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <img className="bg-texture" src="bg_texture.png" alt="" />
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
