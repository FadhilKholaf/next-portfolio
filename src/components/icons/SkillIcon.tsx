import Image from "next/image";

export default function SkillIcon({
  src,
  imgClass,
  title,
}: {
  src: string;
  imgClass?: string;
  title: string;
}) {
  return (
    <div className="group relative flex h-[40px] w-[40px] items-center justify-center rounded-md border-2 border-white sm:h-[60px] sm:w-[60px]">
      <Image
        loading="lazy"
        src={src}
        alt={title}
        width={100}
        height={100}
        className={
          "absolute z-[2] h-full w-full rounded-md bg-black transition-all duration-300 md:group-hover:brightness-[.3] " +
          imgClass
        }
      />
      <h1 className="z-1 absolute bottom-0 scale-0 text-nowrap text-white transition-all duration-300 ease-out group-hover:-bottom-7 group-hover:scale-100">
        {title}
      </h1>
    </div>
  );
}
