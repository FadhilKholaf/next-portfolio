import LinkButton from "@/components/LinkButton";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-4 lg:px-20 "
    >
      <div className="absolute top-0 mt-6 flex w-full justify-between px-4 lg:px-20">
        <div className="flex items-center gap-4 ">
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
            Contact
          </p>
        </div>
        <LinkButton
          dataAosDelay={200}
          dataAos="fade-up"
          href="https://linktr.ee/fadhilkholaf"
          title="Social Media"
          className="z-30 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] font-medium text-black"
        />
      </div>
      <div
        data-aos="zoom-in"
        className="absolute z-0 h-[40%] w-[90%] -translate-y-4 translate-x-4 rounded-full bg-gradient-to-br from-[#FFD49C]/15 to-[#7A87FB]/15 blur-3xl"
      ></div>
      <div className="flex w-full flex-wrap items-center justify-center gap-8 lg:justify-between">
        <div className="flex flex-col gap-y-8 text-white">
          <div className="flex gap-5">
            <h1 className="text-xl md:text-3xl">Have idea about project?</h1>
            <Image
              src="/star-2.svg"
              alt=""
              width={30}
              height={30}
              className="animate-pulse-slow"
            />
          </div>
          <p className="text-sm md:text-base">
            Or is there anything I can help you with?
          </p>
          <LinkButton
            dataAosDelay={200}
            dataAos="fade-up"
            href="https://www.instagram.com/fadhilkholaf/"
            title="DM Me on Instagram"
            className="z-30 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] px-4 py-[6px] font-medium text-black"
          />
        </div>
        <Image
          src="/contact-deco.png"
          alt="Graph"
          loading="lazy"
          width={400}
          height={400}
          className="w-[300px] lg:w-[400px]"
        />
      </div>
    </section>
  );
}
