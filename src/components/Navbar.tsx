import { MoonStar } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex fixed w-full justify-between items-center px-8 py-8 font-bold backdrop-blur-md lg:px-28 horizontal:py-6">
      <h1 className="font-semibold text-lg lg:text-2xl">José Victor</h1>
      <div className="hidden items-center space-x-20 text-xl md:flex">
        <div className="space-x-4 md:text-base lg:text-xl">
          <a href="#home">Home</a>
          <a className="text-slate-700" href="#about-me">
            About me
          </a>
          <a className="text-slate-700" href="#works">
            Works
          </a>
          <a className="text-slate-700" href="#contact">
            Contact
          </a>
        </div>
        <button>
          <MoonStar />
        </button>
      </div>
    </nav>
  );
}
