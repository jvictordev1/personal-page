export default function Section(props: { children: React.ReactNode }) {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center space-y-4"
    >
      {props.children}
    </section>
  );
}
