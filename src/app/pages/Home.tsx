"use client";

import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full px-4 pt-4 backdrop-brightness-[.4] lg:px-28"
    >
      <Parallax
        easing={"easeInOutSine"}
        translateY={[1500, -1000]}
        className="absolute right-[25%] top-[30%] w-6 md:w-[31px] animate-pulse"
      >
        <Image
          data-aos="fade-left"
          data-aos-delay={200}
          src="/star.svg"
          alt="star"
          width={31}
          height={31}
        />
      </Parallax>
      <Parallax
        easing={"easeInOutSine"}
        translateY={[1000, -1000]}
        className="absolute right-[80%] top-[40%] w-6 md:w-[31px] animate-pulse"
      >
        <Image
          data-aos="fade-right"
          src="/star.svg"
          alt="star"
          width={31}
          height={31}
        />
      </Parallax>
      <Parallax
        easing={"easeInOutSine"}
        translateY={[500, -1000]}
        className="absolute right-[10%] top-[60%] w-6 md:w-[31px] animate-pulse"
      >
        <Image
          data-aos="fade-left"
          data-aos-delay={200}
          src="/star.svg"
          alt="star"
          width={31}
          height={31}
        />
      </Parallax>
      <Parallax
        easing={"easeInOutSine"}
        translateY={[0, -1000]}
        className="absolute right-[60%] top-[75%] w-6 md:w-[31px] animate-pulse"
      >
        <Image
          data-aos="fade-right"
          data-aos-delay={400}
          src="/star.svg"
          alt="star"
          width={31}
          height={31}
        />
      </Parallax>
      <div className="flex justify-between p-[6px]">
        <div className="flex items-center gap-4">
          <Image
            data-aos="fade-down"
            src="/dummy.jpeg"
            alt="Logo"
            width={226}
            height={223}
            className="z-10 w-[40px] rounded-full"
          />
          <p
            data-aos-delay={100}
            data-aos="fade-down"
            className="z-10 text-lg text-white md:text-2xl"
          >
            Fadhil
          </p>
        </div>
        <LinkButton
          dataAosDelay={200}
          dataAos="fade-down"
          href="#"
          title="LinkedIn"
          className="z-30 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] font-medium text-black"
        />
      </div>
      <div className="flex h-[80vh] w-full flex-col justify-center gap-8 md:items-center">
        <Parallax
          opacity={[3, 0]}
          data-aos="zoom-in"
          className="absolute z-0 h-[40%] w-[60%] -translate-y-4 translate-x-4  rounded-full bg-gradient-to-br from-[#FFD49C]/30 to-[#7A87FB]/30 blur-3xl"
        ></Parallax>
        <h1 className="z-10 text-3xl text-white md:text-5xl">
          Muhammad Fadhil Kholaf
        </h1>
        <p className=" z-10 text-xs text-white md:text-xl">
          Backend Engineer | Ambatucode | Sigma
        </p>
        <LinkButton
          href=""
          title="Follow me"
          className="z-10 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] text-black "
        />
      </div>
    </section>
  );
}
