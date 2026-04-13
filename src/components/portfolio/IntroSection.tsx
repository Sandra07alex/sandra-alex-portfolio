import { useScrollReveal } from "@/hooks/useScrollReveal";

const IntroSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="intro" className="flex items-center justify-center px-6 py-32 md:py-40">
      <div
        ref={ref}
        className={`max-w-2xl text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground font-light">
          I'm a Computer Science student passionate about{" "}
          <span className="font-medium text-accent-blue">artificial intelligence</span> and building
          impactful solutions. I love exploring the edge of technology — turning
          complex problems into elegant, working systems.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
