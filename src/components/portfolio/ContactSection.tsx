import RevealSection from "./RevealSection";
import { Mail, Github, Linkedin, Phone, ExternalLink } from "lucide-react";

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
          <div className="mx-auto max-w-md space-y-4 text-left">
            {/* Email */}
            <a
              href="mailto:sandraalexoffical@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-sm text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
            >
              <Mail className="h-4 w-4 shrink-0 text-accent-blue" />
              <span className="font-medium text-foreground">sandraalexoffical@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919037846438"
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-sm text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
            >
              <Phone className="h-4 w-4 shrink-0 text-accent-blue" />
              <span className="font-medium text-foreground">9037846438</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sandra07alex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-sm text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
            >
              <Github className="h-4 w-4 shrink-0 text-accent-blue" />
              <span className="min-w-0 flex-1 truncate font-medium text-foreground">
                github.com/sandra07alex
              </span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-50" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sandra07alex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-sm text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4 shrink-0 text-accent-blue" />
              <span className="min-w-0 flex-1 truncate font-medium text-foreground">
                linkedin.com/in/sandra07alex
              </span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-50" />
            </a>
          </div>
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
