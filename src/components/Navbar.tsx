import { MoonStar } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex fixed w-full justify-between px-8 py-8 font-bold backdrop-blur-md lg:px-28">
      <h1 className="font-semibold text-2xl">José Victor</h1>
      <div className="hidden items-center space-x-20 text-xl lg:flex">
        <div className="space-x-4">
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
