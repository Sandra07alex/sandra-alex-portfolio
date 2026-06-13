import RevealSection from "./RevealSection";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Heart,
  Star,
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
    corner: Heart,
    note: "bg-[#162544]",
    ink: "text-[#93c5fd]",
    rule: "border-[#3b82f6]",
    rotate: "-rotate-2",
    pin: "tape",
  },
  {
    icon: Phone,
    title: "Call Me",
    value: "+91 90378 46438",
    copyValue: "+919037846438",
    href: "tel:+919037846438",
    external: false,
    copyable: true,
    corner: Heart,
    note: "bg-[#1a2f55]",
    ink: "text-[#a5d8ff]",
    rule: "border-[#60a5fa]",
    rotate: "rotate-1",
    pin: "tape-blue",
  },
  {
    icon: Github,
    title: "Explore My Code",
    value: "github.com/sandra07alex",
    href: "https://github.com/sandra07alex",
    external: true,
    copyable: false,
    corner: Star,
    note: "bg-[#122040]",
    ink: "text-[#bfdbfe]",
    rule: "border-[#4f8ef7]",
    rotate: "-rotate-1",
    pin: "tape-dark",
  },
  {
    icon: Linkedin,
    title: "Let's Connect",
    value: "linkedin.com/in/sandra07alex",
    href: "https://linkedin.com/in/sandra07alex",
    external: true,
    copyable: false,
    corner: Heart,
    note: "bg-[#0f1e3a]",
    ink: "text-[#7dd3fc]",
    rule: "border-[#3b82f6]",
    rotate: "rotate-2",
    pin: "pin-blue",
  },
];

const Pin = ({ kind }: { kind: string }) => {
  if (kind.startsWith("tape")) {
    return (
      <span
        aria-hidden
        className={`absolute left-1/2 -top-2.5 h-5 w-14 -translate-x-1/2 -rotate-3 rounded-[2px] ${
          kind === "tape-blue"
            ? "bg-[#3b82f6]/40"
            : kind === "tape-dark"
            ? "bg-[#1e40af]/50"
            : "bg-[#60a5fa]/30"
        } shadow-sm`}
      />
    );
  }
  return (
    <span aria-hidden className="absolute left-1/2 -top-2.5 -translate-x-1/2">
      <span className="block h-3.5 w-3.5 rounded-full bg-[#3b82f6] shadow-md" />
      <span className="mx-auto block h-2 w-[2px] bg-foreground/30" />
    </span>
  );
};

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
            ideas, or build impactful solutions together. Feel free to reach out!
          </p>
        </RevealSection>

        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4 max-w-4xl mx-auto">
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
                corner: Corner,
                note,
                ink,
                rule,
                rotate,
                pin,
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
                  className={`group relative flex aspect-[3/4] flex-col items-center px-4 pt-9 pb-5 ${note} ${rotate} shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] rounded-sm`}
                >
                  <Pin kind={pin} />

                  <Icon className={`h-9 w-9 ${ink}`} strokeWidth={1.6} />

                  <h3
                    className={`mt-5 text-3xl font-semibold ${ink}`}
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    {title}
                  </h3>

                  <span
                    className={`mt-2 h-0 w-20 border-b-2 ${rule}`}
                    aria-hidden
                  />
                  <span
                    className={`mt-3 h-0 w-28 border-b border-dashed ${rule} opacity-60`}
                    aria-hidden
                  />

                  <div className="mt-auto flex w-full items-center justify-center gap-1.5 pt-6">
                    <p className="break-all text-center text-sm font-medium text-foreground/80">
                      {value}
                    </p>
                    {copyable && (
                      <button
                        onClick={(e) => handleCopy(e, copyValue || value, title)}
                        className={`shrink-0 rounded-md p-1 text-foreground/40 transition-colors hover:bg-black/5 hover:${ink}`}
                        aria-label={`Copy ${title}`}
                      >
                        {copiedKey === title ? (
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    )}
                  </div>

                  <Corner
                    className={`absolute bottom-4 right-4 h-4 w-4 ${ink} opacity-70`}
                    strokeWidth={1.6}
                  />
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
              Looking for footer? It’s 2026.
            </p>
          </footer>
        </RevealSection>
      </div>
    </section>
  );
};

export default ContactSection;
