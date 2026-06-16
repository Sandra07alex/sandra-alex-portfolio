import RevealSection from "./RevealSection";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Heart,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

const contactNotes = [
  {
    icon: Mail,
    title: "Email Me",
    value: "sandraalexofficial@gmail.com",
    copyValue: "sandraalexofficial@gmail.com",
    href: "mailto:sandraalexofficial@gmail.com",
    external: false,
    copyable: true,
    rotate: "-rotate-2",
  },
  {
    icon: Phone,
    title: "Call Me",
    value: "+91 90378 46438",
    copyValue: "+919037846438",
    href: "tel:+919037846438",
    external: false,
    copyable: true,
    rotate: "rotate-1",
  },
  {
    icon: Github,
    title: "Explore My Code",
    value: "github.com/sandra07alex",
    href: "https://github.com/sandra07alex",
    external: true,
    copyable: false,
    rotate: "-rotate-1",
  },
  {
    icon: Linkedin,
    title: "Let's Connect",
    value: "linkedin.com/in/sandra07alex",
    href: "https://linkedin.com/in/sandra07alex",
    external: true,
    copyable: false,
    rotate: "rotate-2",
  },
];

const PushPin = () => (
  <span aria-hidden className="absolute left-1/2 -top-3 -translate-x-1/2 z-10">
    <span className="relative flex items-center justify-center">
      {/* Pin head shadow */}
      <span className="absolute top-1 left-1 h-5 w-5 rounded-full bg-black/10" />
      {/* Pin head */}
      <span className="relative block h-5 w-5 rounded-full bg-gradient-to-br from-[#60a5fa] to-[#2563eb] shadow-md" />
      {/* Pin highlight */}
      <span className="absolute top-0.5 left-1 h-1.5 w-1.5 rounded-full bg-white/40" />
      {/* Pin needle */}
      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-2 w-[2px] bg-neutral-400" />
    </span>
  </span>
);


const ContactSection = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (e: React.MouseEvent, text: string, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <RevealSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Let&apos;s build something meaningful{" "}
            <span className="text-accent-blue">together</span>
          </h2>
        </RevealSection>
        <RevealSection delay={0.1}>
          <p className="mx-auto mb-20 max-w-xl text-center text-base text-muted-foreground leading-relaxed">
            I&apos;m always excited to connect with amazing people, collaborate on
            ideas, or build impactful solutions together. Feel free to reach out!{" "}
            <Heart className="inline h-4 w-4 text-accent-blue fill-accent-blue" />
          </p>
        </RevealSection>

        <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4 max-w-4xl mx-auto">
          {contactNotes.map(
            (
              {
                icon: Icon,
                title,
                value,
                copyValue,
                href,
                external,
                copyable,
                rotate,
              },
              i
            ) => (
              <RevealSection key={title} delay={i * 0.1}>
                <motion.a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  whileHover={{ y: -6, rotate: 0, scale: 1.03 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`group relative flex flex-col items-center px-4 pt-10 pb-6 bg-[#fafafa] ${rotate} paper-shadow rounded-sm`}
                >
                  <PushPin />
                  <PaperCurl side="left" />
                  <PaperCurl side="right" />

                  <Icon className="h-6 w-6 text-foreground/80" strokeWidth={1.5} />

                  <h3
                    className="mt-3 text-xl font-semibold text-foreground/90"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    {title}
                  </h3>

                  {/* Two blue underlines like the reference */}
                  <div className="mt-1.5 flex flex-col items-center gap-1">
                    <span className="h-0 w-14 border-b-2 border-accent-blue/70" />
                    <span className="h-0 w-10 border-b border-dashed border-accent-blue/50" />
                  </div>

                  <div className="mt-auto flex w-full items-center justify-center gap-1.5 pt-5">
                    <p className="break-all text-center text-[11px] font-medium text-muted-foreground">
                      {value}
                    </p>
                    {copyable && (
                      <button
                        onClick={(e) => handleCopy(e, copyValue || value, title)}
                        className="shrink-0 rounded-md p-1 text-muted-foreground/60 transition-colors hover:bg-black/5 hover:text-accent-blue"
                        aria-label={`Copy ${title}`}
                      >
                        {copiedKey === title ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </button>
                    )}
                  </div>
                </motion.a>
              </RevealSection>
            )
          )}
        </div>

        <RevealSection delay={0.45}>
          <p
            className="mt-16 text-center text-2xl text-accent-blue"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
        </RevealSection>

        <RevealSection delay={0.55}>
          <footer className="group mt-16 border-t border-border/50 pt-8 sm:pt-10 text-center">
            <p className="translate-y-2 opacity-0 text-sm font-serif italic tracking-wide text-muted-foreground/75 leading-relaxed transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              Looking for footer? It&apos;s 2026.
            </p>
          </footer>
        </RevealSection>
      </div>
    </section>
  );
};

export default ContactSection;
