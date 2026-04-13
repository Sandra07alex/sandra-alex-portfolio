import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:sandra@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-32 md:py-40">
      <div ref={ref} className="mx-auto max-w-2xl text-center">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let's build something meaningful.
        </h2>

        <div
          className={`flex justify-center gap-6 mt-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>

        <p
          className={`mt-20 text-xs text-muted-foreground transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          © 2026 Sandra Alex. Crafted with care.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
