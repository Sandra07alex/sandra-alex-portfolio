import RevealSection from "./RevealSection";

const experiences = [
  {
    role: "IEEE Student Branch — Technical Lead",
    period: "2023 — Present",
    description:
      "Leading technical workshops and mentoring peers in AI/ML concepts and web development practices.",
  },
  {
    role: "HackathonX — Finalist",
    period: "2024",
    description:
      "Built an AI-powered accessibility tool in 36 hours, earning a spot in the top 5 teams out of 200+.",
  },
  {
    role: "CS Department — Teaching Assistant",
    period: "2023 — 2024",
    description:
      "Assisted in Data Structures and Algorithms courses, helping 100+ students with coursework and labs.",
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
                <span className="text-sm text-muted-foreground font-medium md:w-40 shrink-0 mb-1 md:mb-0">
                  {exp.period}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
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
