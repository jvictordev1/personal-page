import {
  AppWindow,
  BadgePlus,
  ChevronUpCircle,
  Component,
  Download,
  GaugeCircle,
  Github,
  Linkedin,
  Settings2,
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
        <ChevronUpCircle className="font-bold group-hover:text-slate-50 size-8" />
      ),
    },
    {
      title: "Create a new website",
      icon: (
        <BadgePlus className="font-bold group-hover:text-slate-50 size-8" />
      ),
    },
    {
      title: "Design and/or refactor UI",
      icon: (
        <Component className="font-bold group-hover:text-slate-50 size-8" />
      ),
    },
    {
      title: "Create a web app",
      icon: (
        <AppWindow className="font-bold group-hover:text-slate-50 size-8" />
      ),
    },
    {
      title: "Create a dashboard",
      icon: (
        <GaugeCircle className="font-bold group-hover:text-slate-50 size-8" />
      ),
    },
    {
      title: "Edit photos and posts",
      icon: (
        <Settings2 className="font-bold group-hover:text-slate-50 size-8" />
      ),
    },
  ];
  return (
    <>
      <Navbar />
      <Section id="home">
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
            <a
              href="https://github.com/jvictordev1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-50 transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-victor-cruz-rebou%C3%A7as-230057256/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-50 transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </Section>
      <Section id="about-me">
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
        <div className="px-28 space-y-4 w-full">
          <h1 className="font-bold text-3xl text-slate-400">
            Skills and Tools
          </h1>
          <ul className="flex w-full justify-between text-xl text-slate-500">
            {skillsAndTools.map((item: string) => {
              return (
                <li
                  key={item}
                  className="hover:text-sky-600 transition font-medium cursor-default"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
      <Section id="works">
        <div className="w-full px-28 space-y-4 text-slate-400">
          <h1 className="font-bold text-3xl">Works</h1>
          <ul className="grid  grid-cols-3 gap-3 w-full justify-between text-xl">
            {works.map((work: Work) => {
              return <WorkCard key={work.title} {...work} />;
            })}
          </ul>
        </div>
        <div className="w-full px-28 space-y-4 text-slate-400">
          <h1 className="font-bold text-3xl">How can i help you?</h1>
          <ul className="grid grid-cols-3 gap-3 w-full justify-between text-xl">
            {helps.map((help: Helps) => {
              return (
                <li key={help.title}>
                  <div className="flex items-center group cursor-default bg-zinc-800 w-full space-x-4 p-8 rounded-2xl">
                    {help.icon}
                    <h2 className="font-bold group-hover:text-slate-50 transition text-2xl">
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
        <div className="flex w-full justify-between px-28">
          <div className="flex flex-col w-80 text-slate-400 space-y-4">
            <h1 className="font-bold text-3xl">Lets work!</h1>
            <p className="font-medium text-2xl text-slate-500">
              Let's connect, chat about your project, or simply stay in touch.
            </p>
            <h3 className="font-bold text-xl">Email</h3>
            <p className="text-medium text-slate-500">
              josevictorcruzrb@gmail.com
            </p>
          </div>
          <form action="#" className="w-1/2">
            <div className="w-full space-y-4 text-xl font-bold text-slate-400">
              <h1>Your name</h1>
              <Input placeholder="Joe Jones" />
              <h1>Email address</h1>
              <Input placeholder="you@your_domain.com" />
              <h1>Message</h1>
              <textarea
                placeholder="How can i help?"
                className="w-full bg-transparent p-2 font-normal text-xl text-slate-50 placeholder:text-zinc-700 border-slate-500 border-2 rounded-lg outline-none"
              />
              <button
                type="button"
                className="w-full bg-transparent p-2 text-xl hover:border-zinc-50 hover:text-zinc-50 transition placeholder:text-zinc-700 border-slate-500 border-2 rounded-lg outline-none"
              >
                Send!
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}

export default App;
