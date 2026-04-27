import RevealSection from "./RevealSection";

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    company: "CourtClick, Kochi",
    period: "Jun 2025 — Present",
    points: [
      "Developed real-world web applications using Next.js and MongoDB",
      "Improved responsive UI and deployment workflows",
      "Worked in agile development environments",
    ],
  },
  {
    role: "Interest Group Management Intern",
    company: "GTech MuLearn",
    period: "Jun 2024 — Apr 2025",
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
      <div className="mx-auto max-w-4xl">
        <RevealSection>
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground font-medium mb-16">
            Experience
          </h2>
        </RevealSection>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <RevealSection key={exp.role} delay={i * 0.15}>
              <div className="flex flex-col md:flex-row md:gap-12">
                <span className="text-sm text-muted-foreground font-medium md:w-40 shrink-0 mb-2 md:mb-0">
                  {exp.period}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent-blue mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-muted-foreground/50"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
