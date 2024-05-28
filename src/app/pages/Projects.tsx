import LinkButton from "@/components/LinkButton";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

export default function Projects() {
  const Parallax = (speed: number) => {
    const parallaxBg = useParallax<any>({
      speed,
    });
    return parallaxBg.ref;
  };

  return (
    <section
      id="projects"
      className="relative flex min-h-screen w-full flex-col px-4 py-4 lg:px-20"
    >
      <Image
        ref={Parallax(-25)}
        loading="lazy"
        src="/dark-sky.png"
        alt="Dark Sky"
        width={5000}
        height={3000}
        className="absolute left-0 h-full object-cover brightness-75"
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
            Projects
          </p>
        </div>
        <LinkButton
          dataAosDelay={200}
          dataAos="fade-up"
          href="https://github.com/FadhilKholaf"
          title="Github"
          className="z-30 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] font-medium text-black"
        />
      </div>
      <div className="flex min-h-[85vh] flex-col justify-center gap-y-16">
        <ProjectCard
          image="/projects/personal-web.png"
          title="Personal Website"
          description="Latest version of My personal website(static)"
          github="https://github.com/FadhilKholaf/next-portfolio"
        />
      </div>
    </section>
  );
}
