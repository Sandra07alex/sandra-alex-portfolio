import RevealSection from "./RevealSection";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

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
          <div className="relative rounded-2xl border border-border/60 bg-card/40 p-8 md:p-10 backdrop-blur-sm transition-colors hover:bg-card/60">
            {/* Accent line */}
            <div className="absolute left-0 top-8 h-12 w-1 rounded-full bg-accent-blue/70" />

            <div className="flex items-start gap-5 pl-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10">
                <GraduationCap className="h-6 w-6 text-accent-blue" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                  B.Tech in Computer Science &amp; Design
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    Government Engineering College Kozhikode (GEC KKD)
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    2022 – 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5" />
                    CGPA: 8.66
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default EducationSection;
