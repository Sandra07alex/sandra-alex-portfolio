import RevealSection from "./RevealSection";

const projects = [
  {
    title: "Neural Style Transfer",
    description:
      "A deep learning model that applies artistic styles to photographs using convolutional neural networks.",
  },
  {
    title: "Smart Campus Assistant",
    description:
      "An AI-powered chatbot that helps students navigate campus resources, schedules, and FAQs.",
  },
  {
    title: "Portfolio Analytics Dashboard",
    description:
      "A real-time analytics dashboard built with React and D3.js for tracking project performance.",
  },
  {
    title: "Sentiment Analysis API",
    description:
      "REST API that performs sentiment analysis on social media text using NLP techniques and transformers.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-4xl">
        <RevealSection>
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground font-medium mb-16">
            Projects
          </h2>
        </RevealSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <RevealSection key={project.title} delay={i * 0.1}>
              <div className="group rounded-lg border border-border p-6 transition-all duration-500 ease-out hover:border-foreground/30 hover:shadow-sm h-full">
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
