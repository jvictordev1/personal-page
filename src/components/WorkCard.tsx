import * as HoverCard from "@radix-ui/react-hover-card";
import Work from "../shared/Work";

export default function WorkCard(work: Work) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <div className="flex group items-center cursor-pointer bg-zinc-800 w-full p-4 xl:p-8 space-x-4 rounded-2xl">
          <img className="size-6 xl:size-10" src={work.logo} alt={work.title} />
          <h2 className="font-bold text-slate-400 group-hover:text-slate-50 transition text-base lg:text-xl xl:text-2xl">{work.title}</h2>
        </div>
        <HoverCard.Portal>
          <HoverCard.Content
            className="bg-zinc-100 flex flex-col items-center w-96 shadow-md rounded-2xl p-5"
            side="bottom"
            sideOffset={5}
          >
            {work.logoDark ? (
              <img className="size-24" src={work.logoDark} alt={work.title} />
            ) : (
              <img className="size-24" src={work.logo} alt={work.title} />
            )}
            <p className="py-2 px-4 font-bold text-md text-center text-slate-900">
              {work.description}{" "}
              <a
                className="text-sky-600 underline"
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to see more.
              </a>
            </p>
            <HoverCard.Arrow className="fill-zinc-200" />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Trigger>
    </HoverCard.Root>
  );
}
