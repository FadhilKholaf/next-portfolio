import Link from "next/link";

interface LinkButtonProps {
  className?: string;
  dataAos?: string;
  dataAosDelay?: number;
  href: string;
  title: string;
}

export default function LinkButton({
  className,
  href,
  title,
  dataAos,
  dataAosDelay,
}: LinkButtonProps) {
  return (
    <Link
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      href={href}
      className={`flex w-fit items-center p-2 text-sm transition duration-500 ease-in-out hover:-translate-y-2 lg:text-lg ${className}`}
    >
      {title}
    </Link>
  );
}
