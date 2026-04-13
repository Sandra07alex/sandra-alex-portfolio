import RevealSection from "./RevealSection";

const categories = [
  {
    title: "AI / ML",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Scikit-learn"],
  },
  {
    title: "Web Development",
    skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "REST APIs"],
  },
  {
    title: "Problem Solving",
    skills: ["Data Structures", "Algorithms", "System Design", "Competitive Programming"],
  },
];

const SkillsSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-4xl">
        <RevealSection>
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground font-medium mb-16">
            Skills
          </h2>
        </RevealSection>

        <div className="grid gap-12 md:grid-cols-3">
          {categories.map((cat, i) => (
            <RevealSection key={cat.title} delay={i * 0.15}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
