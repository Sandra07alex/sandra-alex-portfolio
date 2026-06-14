import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import RevealSection from "./RevealSection";

const LeadershipTeaser = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-4xl">
        <RevealSection>
          <Link
            to="/leadership"
            className="group block rounded-2xl ring-1 ring-border/50 hover:ring-accent-blue/40 transition-colors duration-500 px-8 py-12 md:px-14 md:py-16"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
              ( Beyond Code )
            </span>
            <div className="mt-5 flex items-start justify-between gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                My leadership <span className="text-accent-blue">journey.</span>
              </h2>
              <ArrowUpRight className="mt-1 h-7 w-7 shrink-0 text-muted-foreground/40 transition-all duration-500 group-hover:text-accent-blue group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              If engineering taught me how to build systems, volunteering taught me how to understand
              people. Four years of communities, leadership, and service.
            </p>
          </Link>
        </RevealSection>
      </div>
    </section>
  );
};

export default LeadershipTeaser;
