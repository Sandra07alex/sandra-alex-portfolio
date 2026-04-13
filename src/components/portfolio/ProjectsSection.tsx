import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-32 md:py-40">
      <div ref={ref} className="mx-auto max-w-4xl">
        <h2
          className={`text-sm tracking-widest uppercase text-muted-foreground font-medium mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group rounded-lg border border-border p-6 transition-all duration-500 ease-out hover:border-foreground/30 hover:shadow-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
