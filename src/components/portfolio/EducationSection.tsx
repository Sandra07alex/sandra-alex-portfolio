import RevealSection from "./RevealSection";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-2xl">
        <RevealSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Education
          </h2>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div className="border-t border-border/50 pt-10">
            <div className="flex items-start gap-5">
              <GraduationCap className="mt-1 h-7 w-7 shrink-0 text-accent-blue" />

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground/70">
                  2022 – 2026
                </p>

                <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                  B.Tech in Computer Science &amp; Design
                </h3>

                <p className="mt-2 text-base text-muted-foreground">
                  Government Engineering College Kozhikode (GEC KKD)
                </p>

                <p className="mt-6 inline-flex items-baseline gap-2 text-muted-foreground">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground/70">
                    CGPA
                  </span>
                  <span className="text-3xl font-bold text-accent-blue">8.66</span>
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default EducationSection;
