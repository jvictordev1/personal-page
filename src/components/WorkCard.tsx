import * as HoverCard from "@radix-ui/react-hover-card";
import Work from "../shared/Work";
interface workCardProps {
  work: Work;
  theme: string;
}

export default function WorkCard({ work, theme }: workCardProps) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <a href={work.link} target="_blank" rel="noopener noreferrer">
          <div className="flex group items-center cursor-pointer bg-zinc-100 dark:bg-zinc-800 w-full p-4 xl:p-8 space-x-4 rounded-2xl horizontal:p-2">
            <img
              className="size-6 xl:size-10"
              src={theme === "dark" ? work.logo : work.logoDark}
              alt={work.title}
            />
            <h2 className="font-bold text-slate-950 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-slate-50 transition text-base lg:text-xl xl:text-2xl horizontal:text-sm">
              {work.title}
            </h2>
          </div>
        </a>
        <HoverCard.Portal>
          <HoverCard.Content
            className="bg-zinc-950 dark:bg-zinc-100 flex flex-col items-center w-96 shadow-md rounded-2xl p-5 HoverCardContent"
            side="bottom"
            sideOffset={5}
          >
            {theme === "dark" ? (
              <img className="size-24" src={work.logoDark} alt={work.title} />
            ) : (
              <img className="size-24" src={work.logo} alt={work.title} />
            )}
            <p className="py-2 px-4 font-bold text-md text-center text-slate-50 dark:text-slate-900">
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
            <HoverCard.Arrow className="fill-zinc-950 dark:fill-zinc-200" />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Trigger>
    </HoverCard.Root>
  );
}
