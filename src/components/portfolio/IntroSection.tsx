import RevealSection from "./RevealSection";

const IntroSection = () => {
  return (
    <section id="intro" className="flex items-center justify-center px-6 py-32 md:py-40">
      <RevealSection className="max-w-2xl text-center">
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground font-light">
          I'm a Computer Science student passionate about{" "}
          <span className="font-medium text-accent-blue">artificial intelligence</span> and building
          impactful solutions. I love exploring the edge of technology — turning
          complex problems into elegant, working systems.
        </p>
      </RevealSection>
    </section>
  );
};

export default IntroSection;
