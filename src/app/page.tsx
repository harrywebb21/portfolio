import GradientButton from "./components/buttons/GradientButton";
import GlassCard from "./components/Cards/GlassCard";
import DrawingH from "./components/Icons/DrawingH";
import MiscBG from "./components/Icons/miscBG";
import GlowLine from "./components/line/GlowLine";
import PageTitle from "./components/Titles/PageTitle";
import { robotoFlex } from "./fonts/fonts";

export default function Home() {
  return (
    <>
      <GlassCard className="p-8 relative bg-black flex flex-col justify-between items-center">
        <div className="flex flex-col gap-4 sm:flex-row items-center w-full">
          <PageTitle />
          <GlowLine />
        </div>
        <GradientButton className={robotoFlex.className} buttonName="ACCESS" />
        <GlowLine />
        <MiscBG className="absolute top-1/2 left-10 -translate-y-1/5" />
        <DrawingH className="absolute bottom-10 right-10" />
      </GlassCard>
    </>
  );
}
