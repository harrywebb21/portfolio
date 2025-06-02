export default function About() {
  return (
    <div className="h-full w-full flex flex-col ">
      <h1 className="text-8xl OffBit-101 text-white uppercase Grotesk-Wide text-end w-full">
        About me
      </h1>
      <div className="flex w-full h-full items-center relative">
        <p className="text-2xl text-neutral-200 text-left w-1/3 z-10">
          Hi there! I&apos;m Harry, a passionate software engineering student
          with a knack for building awesome websites. I love bringing ideas to
          life with code, especially by creating interactive and engaging
          experiences. Whether it&apos;s a sleek portfolio or a dynamic web app,
          I&apos;m all about crafting projects that are both functional and fun.{" "}
          <br /> <br />
          <span className=" italic">
            Let&apos;s make something amazing together!
          </span>
        </p>
      </div>
    </div>
  );
}
