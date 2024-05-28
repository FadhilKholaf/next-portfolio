import LinkButton from "@/components/LinkButton";
import PulseStar from "@/components/PulseStar";
import StarSvg from "@/components/StarSvg";
import SkillIcon from "@/components/icons/SkillIcon";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

export default function About() {
  const parallaxBackground = useParallax<HTMLImageElement>({
    easing: "easeInOutSine",
    speed: -15,
  });

  const ParallaxImage = (speed?: number, opacity?: [number, number]) => {
    const parallax = useParallax<HTMLImageElement>({
      speed,
      opacity,
      easing: "easeInOutSine",
    });
    return parallax.ref;
  };

  const ParallaxText = (
    speed?: number,
    opacity?: [number, number],
    translateX?: [number, number],
    translateY?: [number, number],
  ) => {
    const parallax = useParallax<HTMLHeadingElement>({
      speed,
      opacity,
      translateX,
      translateY,
      easing: "easeInOutSine",
    });
    return parallax.ref;
  };

  return (
    <section
      id="about"
      className={
        "flex min-h-screen w-full flex-col px-4 py-4 transition-all duration-300 lg:px-20"
      }
    >
      <PulseStar
        className="left-[15%] z-10 md:left-[50%]"
        translateY={[3500, 1000]}
        dataAos={"fade-up"}
        dataAosDelay={700}
      />
      <PulseStar
        className="right-[15%] z-10"
        translateY={[3000, 500]}
        dataAos={"fade-up"}
        dataAosDelay={900}
      />
      <Image
        ref={parallaxBackground.ref}
        src="/night-village.jpg"
        alt="Night village"
        width={5184}
        height={3456}
        className="absolute left-0  mt-[200px] h-full object-cover brightness-[.3]"
      />
      <div className="flex w-full justify-between p-[6px] ">
        <div className="flex items-center gap-4">
          <Image
            data-aos="fade-up"
            src="https://avatars.githubusercontent.com/u/110389260?v=4"
            alt="Logo"
            width={226}
            height={223}
            className="z-10 w-[40px] rounded-full"
          />
          <p
            data-aos-delay={100}
            data-aos="fade-up"
            className="z-10 text-lg text-white md:text-2xl"
          >
            About
          </p>
        </div>
        <LinkButton
          dataAosDelay={200}
          dataAos="fade-up"
          href="https://www.instagram.com/fadhilkholaf/"
          title="Instagram"
          className="z-30 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] font-medium text-black"
        />
      </div>
      <div className="absolute h-[300px] w-[300px] translate-y-[30vh] animate-pulse-slow self-center bg-gradient-to-br from-[#FFD49C]/50 to-[#7A87FB]/50 blur-[150px] md:left-1/4 md:self-start"></div>
      <div className=" mb-[15vh] flex h-[85vh] flex-col items-center justify-center gap-10 md:flex-row">
        <div ref={ParallaxImage(9, [0, 3])} className=" z-10">
          <StarSvg className="absolute left-3 top-3 z-[11]" />
          <Image
            loading="lazy"
            src="https://avatars.githubusercontent.com/u/110389260?v=4"
            alt="My Profile"
            width={226}
            height={223}
            className="h-[200px] w-[200px] rounded-lg object-cover brightness-75 md:h-[300px] md:w-[300px]"
          />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div
            ref={ParallaxText(6)}
            className="flex flex-wrap  gap-x-4 text-3xl text-white"
          >
            <p data-aos="fade-up">Muhammad</p>
            <p data-aos="fade-up" data-aos-delay="100">
              Fadhil
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Kholaf
            </p>
          </div>
          <p
            className="-translate-y-16 text-sm text-white md:translate-y-0"
            ref={ParallaxText(9, [0, 3])}
          >
            Just an ordinary boy who have interest in technology. Have a skills
            in fullstack web developing with Javascript. Currently learning Next
            Js.
          </p>
        </div>
      </div>
      <div
        ref={ParallaxText(undefined, undefined, undefined, [-10, 0])}
        className="mb-[25vh] flex h-fit w-full flex-col flex-wrap justify-between gap-y-20 md:flex-row"
      >
        <div className="w-full p-4 md:w-1/2">
          <div className="flex gap-5">
            <h1 className="text-3xl text-white">Tech Stack</h1>
            <Image
              src="/star-2.svg"
              alt=""
              width={30}
              height={30}
              className="animate-pulse-slow"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-8">
            <SkillIcon
              src="/techstack/html.png"
              title="HTML"
              imgClass="bg-white"
            />
            <SkillIcon src="/techstack/css.png" title="CSS" />
            <SkillIcon
              src="/techstack/javascript.png"
              title="Javascript"
              imgClass="bg-white"
            />
            <SkillIcon src="/techstack/nextjs.svg" title="Next Js" />
            <SkillIcon
              src="/techstack/nestjs.webp"
              title="Nest Js"
              imgClass="p-2"
            />
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2">
          <div className="flex gap-5">
            <h1 className="text-3xl text-white">Education</h1>
            <Image
              src="/star-2.svg"
              alt=""
              width={30}
              height={30}
              className="animate-pulse-slow"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <div className="flex items-start justify-start">
              <div>
                <div className="absolute z-[1] h-[40px] w-[40px] bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] opacity-75 blur-xl"></div>
                <Image
                  src="/pac.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="z-[2] w-[40px] -rotate-90"
                />
              </div>
              <div className="mb-5 flex flex-col p-2">
                <h1 className="text-xl text-white">SDI Al Munawwar</h1>
                <div>
                  <p className="absolute text-neutral-300">2013 - 2019</p>
                </div>
              </div>
            </div>
            <div className="mb-5 ml-5 h-[5rem] w-[2px] rounded-md bg-gradient-to-b from-[#7A87FB] to-[#FFD49C]"></div>
            <div className="flex items-start justify-start">
              <div>
                <div className="absolute z-[1] h-[40px] w-[40px] bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] opacity-75 blur-xl"></div>
                <Image
                  src="/pac.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[40px]"
                />
              </div>
              <div className="mb-5 flex flex-col p-2">
                <h1 className="text-xl text-white">MTsN 1 Tulungagung</h1>
                <div>
                  <p className="absolute text-neutral-300">2019 - 2022</p>
                </div>
              </div>
            </div>
            <div className="mb-5 ml-5 h-[5rem] w-[2px] rounded-md bg-gradient-to-b from-[#7A87FB] to-[#FFD49C]"></div>
            <div className="flex items-start justify-start">
              <div>
                <div className="absolute z-[1] h-[40px] w-[40px] bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] opacity-75 blur-xl"></div>
                <Image
                  src="/pac.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[40px] rotate-90"
                />
              </div>
              <div className="flex flex-col p-2">
                <h1 className="text-xl text-white">SMK Telkom Malang</h1>
                <div>
                  <p className="absolute text-neutral-300">
                    2022 - 2025, Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
