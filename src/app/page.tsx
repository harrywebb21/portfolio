import GradientButton from "./components/buttons/GradientButton";
import GlassCard from "./components/Cards/GlassCard";
import GlowLine from "./components/line/GlowLine";
import PageTitle from "./components/Titles/PageTitle";
import { robotoFlex } from "./fonts/fonts";

export default function Home() {
  return (
    <>
      <GlassCard className="p-8 bg-black flex flex-col justify-between items-center">
        <div className="flex items-center w-full">
          <PageTitle />
          <GlowLine />
        </div>
        <GradientButton className={robotoFlex.className} buttonName="ACCESS" />
        <GlowLine />
      </GlassCard>
    </>
  );
}
