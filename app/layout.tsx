import type { Metadata } from "next";
import { GbaProvider } from "react-gbajs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Webb",
  description: "Personal website of Harry Webb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="icon" href="/hbubble.ico" />
      </head>
      <body className={`${inter.className} h-svh`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
