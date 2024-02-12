interface SectionProps {
  id: string;
  children: React.ReactNode;
  toggleBackground?: boolean;
  theme?: string;
}
export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      style={
        props.toggleBackground
          ? {
              backgroundImage: `url(${
                props.theme === "dark"
                  ? "images/dark-mode-wallpaper.png"
                  : "images/light-mode-wallpaper.jpg"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {}
      }
      className="w-full h-screen flex flex-col items-center justify-center space-y-6 lg:space-y-16"
    >
      {props.children}
    </section>
  );
}
