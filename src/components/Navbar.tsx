import { MoonStar, SunMedium } from "lucide-react";
import { useState } from "react";
import { Sections } from "../shared/Sections";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
  toSectionChange: (section: string) => void;
}

export default function Navbar({ toggleTheme, theme, toSectionChange }: NavbarProps) {
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
  const [pageSections, setPageSections] = useState<Sections[]>(currentSections);

  const handleSectionChange = (sectionId: string) => {
    pageSections.forEach((item) => {
      if (item.id === sectionId) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setPageSections(pageSections);
    toSectionChange(sectionId)
  };
  return (
    <nav className="flex fixed w-full justify-between items-center px-8 py-8 font-bold backdrop-blur-md lg:px-28 horizontal:py-6">
      <h1 className="font-semibold text-zinc-950 text-lg lg:text-2xl dark:text-slate-50">
        José Victor
      </h1>
      <div className="hidden items-center space-x-20 text-xl md:flex">
        <div className="space-x-4 text-zinc-950 md:text-base lg:text-xl dark:text-slate-50">
          {pageSections.map((section) => {
            return (
              <a
                key={section.label}
                onClick={() => handleSectionChange(section.id)}
                href={section.href}
                style={
                  section.active ? { color: "#fafafa" } : { color: "#52525b" }
                }
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
