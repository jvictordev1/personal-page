interface SectionProps {
  id: string;
  children: React.ReactNode;
}
export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      className="w-full h-screen flex flex-col items-center justify-center space-y-16"
    >
      {props.children}
    </section>
  );
}
