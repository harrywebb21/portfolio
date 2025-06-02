"use client";

import MyCanvas from "@/app/lib/components/MyCanvas";

import HBubble from "./models/HBubble";

export default function HomeNavButton() {
  return (
    <>
      <MyCanvas>
        <HBubble className="hover:cursor-pointer" />
      </MyCanvas>
    </>
  );
}
