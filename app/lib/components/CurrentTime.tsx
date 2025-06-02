"use client";
import { useCurrentTime } from "../hooks/useCurrentTime";

export default function CurrentTime() {
  const currentTime = useCurrentTime();
  return <p className="text-white w-16 ">{currentTime}</p>;
}
