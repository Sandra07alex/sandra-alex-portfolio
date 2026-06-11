import RevealSection from "./RevealSection";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sandraalexoffical@gmail.com",
    href: "mailto:sandraalexoffical@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9037846438",
    href: "tel:+919037846438",
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sandra07alex",
    href: "https://github.com/sandra07alex",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sandra07alex",
    href: "https://linkedin.com/in/sandra07alex",
    external: true,
  },
];

const ContactSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-2xl text-center">
        <RevealSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12">
            Let&apos;s build something meaningful{" "}
            <span className="text-accent-blue">together</span>
          </h2>
        </RevealSection>

        <RevealSection delay={0.15}>
          <ul className="mx-auto max-w-md divide-y divide-border/40 text-left">
            {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 py-4 transition-colors"
                >
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-blue" />
                  <span className="w-20 shrink-0 text-xs uppercase tracking-widest text-muted-foreground/70">
                    {label}
                  </span>
                  <span className="min-w-0 flex-1 truncate font-medium text-foreground transition-colors group-hover:text-accent-blue">
                    {value}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-accent-blue" />
                </a>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection delay={0.3}>
          <footer className="group mt-20 border-t border-border/50 pt-8 sm:pt-10 text-center">
            <p className="translate-y-2 opacity-0 text-sm font-serif italic tracking-wide text-muted-foreground/75 leading-relaxed transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              Looking for footer? It’s 2026.
            </p>
          </footer>
        </RevealSection>
      </div>
    </section>
  );
};

export default ContactSection;
