"use client";

import Image from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function PulseStar({
  className,
  translateY,
  dataAos,
  dataAosDelay,
}: {
  className: string;
  translateY: [number, number];
  dataAos: string;
  dataAosDelay: number;
}) {
  return (
    <Parallax
      translateY={translateY}
      className={"absolute w-6 animate-pulse md:w-[31px] " + className}
    >
      <Image
        data-aos={dataAos}
        data-aos-delay={dataAosDelay}
        loading="lazy"
        src="/star.svg"
        alt="star"
        width={31}
        height={31}
      />
    </Parallax>
  );
}
