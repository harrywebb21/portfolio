import Clock from "../clock/Clock";
import BubbleH from "../Icons/BubbleH";
import GlowLine from "../line/GlowLine";
import Availability from "./Availability";

export default function Nav() {
  return (
    <>
      <div className="w-full flex items-center p-8">
        <BubbleH />
        <div className="w-full sm:gap-5 flex flex-col sm:flex-row items-end sm:items-center justify-between">
          <Clock />
          <GlowLine />
          <Availability />
        </div>
      </div>
    </>
  );
}
