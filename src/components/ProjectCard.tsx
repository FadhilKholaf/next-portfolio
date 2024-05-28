import Image from "next/image";
import { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import LinkButton from "./LinkButton";

export default function ProjectCard({
  image,
  title,
  description,
  github,
  preview,
}: {
  image: string;
  title: string;
  description: string;
  github: string;
  preview?: string;
}) {
  const [position, setPosition] = useState<number>(0);

  const parallax: any = useParallax({
    onProgressChange(progress) {
      setPosition(progress);
    },
  });

  let centered = position >= 0.4 && position <= 0.6;

  return (
    <div
      ref={parallax.ref}
      className="group relative flex w-full flex-col items-center justify-center overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className={`${centered && "brightness-[.3] lg:-translate-x-[13rem] lg:brightness-[1]"} z-[1] h-[13rem] w-full rounded-lg border border-white object-cover transition-all delay-150 duration-500 ease-in-out md:w-[25rem] lg:brightness-[.5]`}
      />
      <div className="absolute z-[2] h-[13rem] w-[15rem] p-2 text-white md:w-[25rem] lg:z-[0]">
        <h1
          className={`${centered && "translate-y-[0rem] lg:translate-x-[13rem]"} translate-y-60 text-xl transition-all delay-[100ms] duration-500 ease-in-out md:text-3xl lg:translate-y-0`}
        >
          {title}
        </h1>
        <p
          className={`${centered && "translate-y-[0rem] lg:translate-x-[13rem]"} translate-y-60 text-mobile-sm transition-all delay-[200ms] duration-500 ease-in-out md:text-sm lg:translate-y-0`}
        >
          {description}
        </p>
        <div
          className={`${centered && "translate-y-[0rem] lg:translate-x-[13rem]"} absolute bottom-2 flex translate-y-60 gap-8 transition-all delay-[300ms] duration-500 ease-in-out lg:translate-y-0`}
        >
          <LinkButton
            href={github}
            title="Github"
            className="rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] font-medium text-black"
          />
          {preview && (
            <LinkButton
              href={preview}
              title="Preview"
              className="rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] font-medium text-black"
            />
          )}
        </div>
      </div>
    </div>
  );
}
