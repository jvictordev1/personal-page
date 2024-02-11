interface SectionProps {
  id: string;
  children: React.ReactNode;
  toggleBackground?: boolean;
}
export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      style={
        props.toggleBackground
          ? {
              backgroundImage: "url(images/dark-mode-wallpaper.png)",
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
