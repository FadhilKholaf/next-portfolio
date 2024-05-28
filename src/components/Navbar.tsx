import LinkButton from "./LinkButton";

export default function Navbar() {
  const NavItems: { href: string; title: string }[] = [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
  ];
  return (
    <nav
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      className="fixed mt-[90vh] z-20 flex w-full justify-center p-4 md:mt-[0vh]"
    >
      <div className="flex w-full justify-between rounded-full border-2 border-white bg-gradient-to-r from-[#FFD49C]/5 to-[#7A87FB]/5 px-2 py-1 backdrop-blur md:w-1/2">
        {NavItems &&
          NavItems.map((item, index: number) => (
            <LinkButton
              key={index}
              href={item.href}
              title={item.title}
              className="text-white"
            />
          ))}
      </div>
    </nav>
  );
}
