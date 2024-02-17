"use client";

import Model from "@/app/lib/components/Model";
import MyCanvas from "@/app/lib/components/MyCanvas";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-white">About page</h1>

      <MyCanvas>
        <group
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          onClick={() => router.push("/")}
        >
          <Model scale={[0.1, 0.1, 0.1]} className=" hover:cursor-pointer" />
        </group>
      </MyCanvas>
    </div>
  );
}
