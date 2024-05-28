"use client";
import About from "./pages/About";
import Home from "./pages/Home";
import { ParallaxBanner } from "react-scroll-parallax";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function page() {
  return (
    <main className=" transition-all ">
      <ParallaxBanner
        className="absolute h-screen w-screen"
        layers={[{ image: "/night-sky.jpg", translateY: [10, -20] }]}
      >
        <Home />
      </ParallaxBanner>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
