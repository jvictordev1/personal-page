import { MoonStar, SunMedium } from "lucide-react";
import { Sections } from "../shared/Sections";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

export default function Navbar({
  toggleTheme,
  theme,
}: NavbarProps) {
  const currentSections: Sections[] = [
    {
      label: "Home",
      id: "home",
      href: "#home",
      active: true,
    },
    {
      label: "About me",
      id: "about-me",
      href: "#about-me",
      active: false,
    },
    {
      label: "Works",
      id: "works",
      href: "#works",
      active: false,
    },
    {
      label: "Contact",
      id: "contact",
      href: "#contact",
      active: false,
    },
  ];
  return (
    <nav className="flex fixed w-full max-h-52 justify-between items-center px-8 py-8 font-bold backdrop-blur-md lg:px-28 horizontal:py-6">
      <h1 className="font-semibold text-zinc-950 text-lg lg:text-2xl dark:text-slate-50">
        José Victor
      </h1>
      <div className="hidden items-center space-x-20 text-xl md:flex">
        <div className="space-x-4 text-zinc-500 md:text-base lg:text-xl dark:text-slate-700">
          {currentSections.map((section) => {
            return (
              <a
                key={section.label}
                href={section.href}
                data-to-scrollspy-id={section.id}
              >
                {section.label}
              </a>
            );
          })}
        </div>
        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <SunMedium className="size-7" />
          ) : (
            <MoonStar className="size-6 text-zinc-950" />
          )}
        </button>
      </div>
    </nav>
  );
}
