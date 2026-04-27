import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RevealSection from "./RevealSection";

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    company: "CourtClick",
    location: "Kochi",
    period: "Jun 2025 — Present",
    status: "Current",
    points: [
      "Developed real-world web applications using Next.js and MongoDB",
      "Improved responsive UI and deployment workflows",
      "Worked in agile development environments",
    ],
  },
  {
    role: "Interest Group Management Intern",
    company: "GTech MuLearn",
    location: "Remote",
    period: "Jun 2024 — Apr 2025",
    status: null,
    points: [
      "Led the Artificial Intelligence Interest Group across 100+ campuses",
      "Conducted AI Think Tank sessions and office hours",
      "Managed community learning and task validation",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <RevealSection>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
                ( 02 — Experience )
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
                Where I’ve <span className="text-accent-blue">worked.</span>
              </h2>
            </div>
          </div>
        </RevealSection>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <RevealSection key={exp.role} delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-secondary/40 ring-1 ring-border/40 p-8 md:p-10 transition-colors duration-500 hover:ring-accent-blue/40"
              >
                {/* Left accent rail */}
                <span
                  aria-hidden
                  className="absolute left-0 top-8 bottom-8 w-px bg-border/60 group-hover:bg-accent-blue/60 transition-colors duration-500"
                />

                <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                  {/* Meta column */}
                  <div className="md:w-44 shrink-0 mb-5 md:mb-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs tracking-wider uppercase text-muted-foreground font-medium">
                        {exp.period}
                      </span>
                      {exp.status && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-accent-blue">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-60 animate-ping" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-blue" />
                          </span>
                          {exp.status}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground/70">
                      {exp.location}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight leading-tight">
                          {exp.role}
                        </h3>
                        <p className="mt-1.5 text-sm text-accent-blue font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 shrink-0 transition-all duration-500 group-hover:text-accent-blue group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>

                    <ul className="mt-6 space-y-2.5">
                      {exp.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm text-muted-foreground leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-px before:bg-muted-foreground/40"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
