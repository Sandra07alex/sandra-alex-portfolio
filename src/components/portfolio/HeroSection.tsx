import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <h1 className="animate-fade-up text-5xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9]">
          I BUILD THINGS
          <br />
          THAT <span className="text-accent-blue">THINK.</span>
        </h1>
        <p className="mt-8 animate-fade-up text-base sm:text-lg text-muted-foreground font-light tracking-wide opacity-0 [animation-delay:0.3s]">
          Sandra Alex — AI/ML Enthusiast • Web Developer • Problem Solver
        </p>
      </div>

      <a
        href="#intro"
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-scroll-hint" />
      </a>
    </section>
  );
};

export default HeroSection;
