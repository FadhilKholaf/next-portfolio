import LinkButton from "@/components/LinkButton";
import PulseStar from "@/components/PulseStar";
import { useParallax } from "react-scroll-parallax";

export default function Home() {
  const parallaxBg = useParallax<any>({ opacity: [3, 0] });

  return (
    <section
      id="home"
      className="min-h-screen w-full px-4 pt-4 backdrop-brightness-[.4] lg:px-20"
    >
      <PulseStar
        className="right-[25%] top-[30%]"
        translateY={[1500, -1000]}
        dataAos="fade-left"
        dataAosDelay={200}
      />
      <PulseStar
        className="right-[80%] top-[35%]"
        translateY={[1000, -1000]}
        dataAos="fade-right"
        dataAosDelay={0}
      />
      <PulseStar
        className="right-[10%] top-[60%]"
        translateY={[500, -1000]}
        dataAos="fade-left"
        dataAosDelay={400}
      />
      <PulseStar
        className="right-[60%] top-[75%]"
        translateY={[0, -1000]}
        dataAos="fade-right"
        dataAosDelay={600}
      />
      <div className="flex h-[80vh] w-full flex-col justify-center gap-8 md:items-center">
        <div
          ref={parallaxBg.ref}
          data-aos="zoom-in"
          className="absolute z-0 h-[40%] w-[60%] -translate-y-4 translate-x-4  rounded-full bg-gradient-to-br from-[#FFD49C]/30 to-[#7A87FB]/30 blur-3xl"
        ></div>
        <h1 className="z-10 text-3xl text-white md:text-5xl">
          Muhammad Fadhil Kholaf
        </h1>
        <p className=" z-10 text-xs text-white md:text-xl">
          Backend Developer | Programming Enthusiast
        </p>
        <div className="flex gap-5">
          {/* <LinkButton
            href="https://linktr.ee/fadhilkholaf"
            title="Resume"
            className="z-10 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] text-black "
          /> */}
          <LinkButton
            href="https://www.linkedin.com/in/muhammad-fadhil-kholaf-7b1a7a270/"
            title="LinkedIn"
            className="z-10 rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] px-4 py-[6px] text-black "
          />
        </div>
      </div>
    </section>
  );
}
