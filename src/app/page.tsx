import Hero from "./components/Sections/Hero";
import Marquee from "./components/Sections/Marquee";
import Me from "./components/Sections/Me";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Me />
      <Marquee />
    </div>
  );
}
