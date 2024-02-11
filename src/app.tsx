import * as HoverCard from "@radix-ui/react-hover-card";
import {
  AppWindow,
  BadgePlus,
  ChevronUpCircle,
  CircleUserRound,
  Component,
  Download,
  GaugeCircle,
  Github,
  Linkedin,
  Notebook,
  Settings2,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Navbar />
      <Section>
        <div className="w-1/2 space-y-4">
          <h2 className="font-normal text-slate-600 text-2xl ml-6">
            HI, MY NAME IS JOSÉ.
          </h2>
          <h1 className="font-bold text-4xl text-center">
            Front-end Developer, Computer Engineering graduate and a Design
            Enthusiast.{" "}
            <span className="text-slate-600">
              Currently learning more about React and Typescript.
            </span>
          </h1>
          <div className="flex w-full text-slate-500 justify-center space-x-1">
            <button>
              <Github />
            </button>
            <button>
              <Linkedin />
            </button>
          </div>
        </div>
      </Section>
      <section
        id="about-me"
        className="flex flex-col w-full h-screen justify-center space-y-24"
      >
        <div className="px-28 space-y-4">
          <h1 className="font-bold text-3xl text-slate-400">About me</h1>
          <p className="font-medium text-2xl text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            ipsum ut leo varius vulputate ac quis nulla. Maecenas eu nibh
            mauris. Fusce sem ante, ullamcorper dapibus nisi quis, volutpat
            molestie ligula. Duis ullamcorper fringilla lacinia. Nunc ex justo,
            sollicitudin eget turpis sit amet, bibendum tristique dui. Etiam
            fringilla est ut mi pellentesque sagittis. Phasellus facilisis velit
            lacinia, consectetur est ut, maximus ex. Donec quis aliquam arcu,
            non ornare odio. Mauris id urna libero. Donec tristique pretium
            molestie. Integer sit amet purus ut nunc aliquet dictum. Etiam
            suscipit bibendum eros, eu vulputate libero cursus nec.
          </p>
          <button className="flex items-center space-x-2 bg-slate-200 p-3 rounded-2xl">
            <Download className="text-zinc-900" />
            <p className="font-bold text-xl text-zinc-900">Resume.pdf</p>
          </button>
        </div>
        <div className="px-28 space-y-4">
          <h1 className="font-bold text-3xl text-slate-400">
            Skills and Tools
          </h1>
          <ul className="flex w-full justify-between text-xl text-slate-500">
            <li>HTML5 and CSS3</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Figma</li>
            <li>UI Design</li>
            <li>Adobe Photoshop</li>
            <li>Prototyping</li>
            <li>Power BI</li>
          </ul>
        </div>
      </section>
      <section
        id="works"
        className="flex flex-col w-full h-screen justify-center space-y-24"
      >
        <div className="px-28 space-y-4 text-slate-400">
          <h1 className="font-bold text-3xl">Works</h1>
          <ul className="grid grid-cols-3 gap-3 w-full justify-between text-xl">
            <li>
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <div className="flex items-center cursor-pointer bg-zinc-800 w-full p-8 space-x-4 rounded-2xl">
                    <svg
                      xlinkTitle="Scasys Logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-8"
                    >
                      <title>Scasys Logo</title>
                      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    <h2 className="font-bold text-2xl">Scasys</h2>
                  </div>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content
                    className="bg-zinc-200 flex flex-col items-center w-96 shadow-md rounded-2xl p-5"
                    side="bottom"
                    sideOffset={5}
                  >
                    <img
                      className="size-20"
                      src="/scasys_logo.svg"
                      alt="Scasys logo"
                    />
                    <p className="py-2 px-4 font-bold text-md text-center text-slate-900">
                      An Open-Source Software to simplify the calculus of the
                      quimic impact process in nature.{" "}
                      <a
                        className="text-sky-600 underline"
                        href="https://github.com/Cauatn/scasys"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to see the repository.
                      </a>
                    </p>
                    <HoverCard.Arrow className="fill-zinc-200" />
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
            </li>
            <li>
              <div className="flex items-center bg-zinc-800 w-full space-x-4 p-8 rounded-2xl">
                <CircleUserRound className="font-bold size-8" />
                <h2 className="font-bold text-2xl">Personal Page</h2>
              </div>
            </li>
            <li>
              <div className="flex items-center bg-zinc-800 space-x-4 w-full p-8 rounded-2xl">
                <Notebook className="font-bold size-8" />
                <h2 className="font-bold text-2xl">Notes app</h2>
              </div>
            </li>
          </ul>
        </div>
        <div className="px-28 space-y-4 text-slate-400">
          <h1 className="font-bold text-3xl">How can i help you?</h1>
          <ul className="grid grid-cols-3 gap-3 w-full justify-between text-xl">
            <li>
              <div className="flex items-center bg-zinc-800 w-full p-8 space-x-4 rounded-2xl">
                <ChevronUpCircle className="font-bold size-8" />
                <h2 className="font-bold text-2xl">Improve your website</h2>
              </div>
            </li>
            <li>
              <div className="flex items-center bg-zinc-800 w-full space-x-4 p-8 rounded-2xl">
                <BadgePlus className="font-bold size-8" />
                <h2 className="font-bold text-2xl">Create a new website</h2>
              </div>
            </li>
            <li>
              <div className="flex items-center bg-zinc-800 space-x-4 w-full p-8 rounded-2xl">
                <Component className="font-bold size-8" />
                <h2 className="font-bold text-2xl">
                  Design and/or refactor UI
                </h2>
              </div>
            </li>
            <li>
              <div className="flex items-center bg-zinc-800 space-x-4 w-full p-8 rounded-2xl">
                <AppWindow className="font-bold size-8" />
                <h2 className="font-bold text-2xl">Create a web app</h2>
              </div>
            </li>
            <li>
              <div className="flex items-center bg-zinc-800 space-x-4 w-full p-8 rounded-2xl">
                <GaugeCircle className="font-bold size-8" />
                <h2 className="font-bold text-2xl">Create a dashboard</h2>
              </div>
            </li>
            <li>
              <div className="flex items-center bg-zinc-800 space-x-4 w-full p-8 rounded-2xl">
                <Settings2 className="font-bold size-8" />
                <h2 className="font-bold text-2xl">Edit photos and posts</h2>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
