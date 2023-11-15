import { languages } from "@/app/data/languageData";

export default function Marquee() {
  return (
    <>
      {languages.map((language, i) => (
        <div
          key={language.name}
          className={`keen-slider__slide number-slide${i++}`}
        >
          <img src={language.src} alt="" />
          {language.name}
        </div>
      ))}
    </>
  );
}
