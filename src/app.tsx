import {
  AppWindow,
  BadgePlus,
  ChevronUpCircle,
  Component,
  Copyright,
  Download,
  GaugeCircle,
  Github,
  Linkedin,
  Settings2
} from "lucide-react";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import WorkCard from "./components/WorkCard";
import Work from "./shared/Work";

function App() {
  interface Helps {
    title: string;
    icon: React.ReactNode;
  }
  const skillsAndTools = [
    "HTML5 and CSS3",
    "Javascript",
    "Typescript",
    "React",
    "Figma",
    "UI Design",
    "Adobe Photoshop",
    "Prototyping",
    "Power BI",
  ];
  const works: Work[] = [
    {
      logo: "/scasys_logo.svg",
      logoDark: "/scasys_logo_black.svg",
      title: "Scasys",
      description:
        "A Open-Source Software to simplify the calculus of the quimic impact process in nature.",
      link: "https://github.com/Cauatn/scasys",
    },
    {
      logo: "/icon.svg",
      title: "Personal Page",
      description:
        "A personal website made with the purpose of learning more about React and Typescript.",
      link: "https://github.com/jvictordev1/personal-page",
    },
    {
      logo: "/nlw_logo.svg",
      title: "Notes app",
      description:
        "A note app developed at the Next Level Week event, made by Rocketseat.",
      link: "https://github.com/jvictordev1/nlw-expert-notesapp",
    },
  ];
  const helps: Helps[] = [
    {
      title: "Improve your website",
      icon: (
        <ChevronUpCircle className="font-bold group-hover:text-slate-50 size-6 lg:size-8 horizontal:size-5" />
      ),
    },
    {
      title: "Create a new website",
      icon: (
        <BadgePlus className="font-bold group-hover:text-slate-50 size-6 lg:size-8 horizontal:size-5" />
      ),
    },
    {
      title: "Design and/or refactor UI",
      icon: (
        <Component className="font-bold group-hover:text-slate-50 size-6 lg:size-8 horizontal:size-5" />
      ),
    },
    {
      title: "Create a web app",
      icon: (
        <AppWindow className="font-bold group-hover:text-slate-50 size-6 lg:size-8 horizontal:size-5" />
      ),
    },
    {
      title: "Create a dashboard",
      icon: (
        <GaugeCircle className="font-bold group-hover:text-slate-50 size-6 lg:size-8 horizontal:size-5" />
      ),
    },
    {
      title: "Edit photos and posts",
      icon: (
        <Settings2 className="font-bold group-hover:text-slate-50 size-6 lg:size-8 horizontal:size-5" />
      ),
    },
  ];
  return (
    <>
      <Navbar />
      <Section id="home" toggleBackground={true}>
        <div className="w-2/3 text-center space-y-4 lg:w-1/2">
          <h2 className="font-normal text-slate-600 text-base sm:text-2xl horizontal:text-sm">
            HI, MY NAME IS JOSÉ.
          </h2>
          <h1 className="font-bold text-2xl sm:text-4xl horizontal:text-2xl">
            Front-end Developer, Computer Engineering graduate and a Design
            Enthusiast.{" "}
            <span className="text-slate-600">
              Currently learning more about React and Typescript.
            </span>
          </h1>
          <div className="flex w-full text-slate-500 justify-center space-x-1">
            <a
              href="https://github.com/jvictordev1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-50 transition"
            >
              <Github className="horizontal:size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-victor-cruz-rebou%C3%A7as-230057256/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-50 transition"
            >
              <Linkedin className="horizontal:size-5" />
            </a>
          </div>
        </div>
      </Section>
      <Section id="about-me">
        <div className="px-8 space-y-4 lg:px-28">
          <h1 className="font-bold text-2xl lg:text-3xl text-slate-400 horizontal:text-xl">
            About me
          </h1>
          <p className="font-medium text-sm text-slate-500 lg:text-2xl horizontal:text-xs">
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
          <button className="flex items-center space-x-2 bg-slate-200 p-2 lg:p-3 rounded-2xl">
            <Download className="text-zinc-900 size-4 lg:size-6 horizontal:size-3" />
            <p className="font-bold text-sm lg:text-xl text-zinc-900 horizontal:text-xs">
              Resume.pdf
            </p>
          </button>
        </div>
        <div className="px-8 space-y-4 lg:px-28 w-full">
          <h1 className="font-bold text-2xl lg:text-3xl text-slate-400 horizontal:text-xl">
            Skills and Tools
          </h1>
          <ul className="grid grid-cols-2 justify-between text-sm md:grid-cols-3 lg:grid-cols-4 lg:text-xl text-slate-500 xl:flex xl:flex-row">
            {skillsAndTools.map((item: string) => {
              return (
                <li
                  key={item}
                  className="hover:text-sky-600 transition font-medium cursor-default horizontal:text-xs"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
      <Section id="works">
        <div className="w-full px-8 space-y-4 lg:px-28">
          <h1 className="font-bold text-2xl lg:text-3xl text-slate-400 horizontal:text-xl">
            Works
          </h1>
          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-3 w-full justify-between text-xl">
            {works.map((work: Work) => {
              return <WorkCard key={work.title} {...work} />;
            })}
          </ul>
        </div>
        <div className="w-full px-8 lg:px-28 space-y-4 text-slate-400">
          <h1 className="font-bold text-2xl lg:text-3xl text-slate-400 horizontal:text-xl">
            How can i help you?
          </h1>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full justify-between ">
            {helps.map((help: Helps) => {
              return (
                <li key={help.title}>
                  <div className="flex group items-center cursor-pointer bg-zinc-800 w-full h-full p-4 lg:p-8 space-x-4 rounded-2xl horizontal:p-2">
                    {help.icon}
                    <h2 className="font-bold group-hover:text-slate-50 transition text-xs lg:text-sm xl:text-2xl horizontal:text-xs">
                      {help.title}
                    </h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
      <Section id="contact">
        <div className="flex flex-col justify-between w-full px-8 space-y-4 lg:px-28 lg:flex md:flex-row">
          <div className="flex flex-col w-80 text-slate-400 space-y-4">
            <h1 className="font-bold text-2xl lg:text-3xl text-slate-400 horizontal:text-xl">
              Lets work!
            </h1>
            <p className="font-medium text-slate-500 text-xl lg:text-2xl horizontal:text-xs">
              Let's connect, chat about your project, or simply stay in touch.
            </p>
            <h3 className="font-bold text-xl horizontal:text-xl">Email</h3>
            <p className="text-medium text-slate-500 horizontal:text-xs">
              josevictorcruzrb@gmail.com
            </p>
          </div>
          <form action="#" className="w-full md:w-1/2">
            <div className="w-full space-y-4 text-xl font-bold text-slate-400">
              <h1 className="text-base lg:text-xl horizontal:text-xs">Your name</h1>
              <Input placeholder="Joe Jones" />
              <h1 className="text-base lg:text-xl horizontal:text-xs">Email address</h1>
              <Input placeholder="you@your_domain.com" />
              <h1 className="text-base lg:text-xl horizontal:text-xs">Message</h1>
              <textarea
                placeholder="How can i help?"
                className="w-full horizontal:text-xs bg-transparent p-2 font-normal text-xl text-slate-50 placeholder:text-zinc-700 border-slate-500 border-2 rounded-lg outline-none"
              />
              <button
                type="button"
                className="w-full horizontal:text-xs bg-transparent p-2 text-xl hover:border-zinc-50 hover:text-zinc-50 transition placeholder:text-zinc-700 border-slate-500 border-2 rounded-lg outline-none"
              >
                Send!
              </button>
            </div>
          </form>
        </div>
      </Section>
      <div className="flex space-x-2 px-8 text-xs lg:text-sm items-center lg:px-28 pb-5 text-slate-500 horizontal:text-xs">
        <Copyright className="size-4 lg:size-5 horizontal:size-3" />
        <p>2024, ALL RIGHTS RESERVED</p>
      </div>
    </>
  );
}

export default App;
