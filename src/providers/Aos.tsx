"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import React, { Fragment, useEffect } from "react";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      easing:"ease-out-sine",
      duration: 1000,
      anchorPlacement: "top-top",
    });
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
