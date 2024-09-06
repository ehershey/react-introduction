interface SectionProps {
  title: string;
}

function Section({ title, children }: React.PropsWithChildren<SectionProps>) {
  return (
    <section>
      <h1>{title}</h1>
      <main>{children}</main>
    </section>
  );
}

export { Section };
