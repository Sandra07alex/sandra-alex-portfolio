import RevealSection from "./RevealSection";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:sandra@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const ContactSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-2xl text-center">
        <RevealSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's build something meaningful.
          </h2>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="flex justify-center gap-6 mt-10">
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
        </RevealSection>

        <RevealSection delay={0.3}>
          <p className="mt-20 text-xs text-muted-foreground">
            © 2026 Sandra Alex. Crafted with care.
          </p>
        </RevealSection>
      </div>
    </section>
  );
};

export default ContactSection;
