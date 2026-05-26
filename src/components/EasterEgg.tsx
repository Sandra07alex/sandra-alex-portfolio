import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SECRET = "think";

const EasterEgg = () => {
  const [open, setOpen] = useState(false);
  const [buffer, setBuffer] = useState("");

  useEffect(() => {
    // Subtle console signature — for the curious devs peeking under the hood.
    const style = "color:#5b8def;font:600 13px/1.4 Inter,sans-serif";
    const dim = "color:#888;font:400 11px/1.4 Inter,sans-serif";
    // eslint-disable-next-line no-console
    console.log("%cHi, curious one.", style);
    // eslint-disable-next-line no-console
    console.log(
      "%cYou found the quiet door. Try typing %cthink%c anywhere on the page.",
      dim,
      "color:#5b8def;font-weight:600",
      dim,
    );
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key.length !== 1) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      const next = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
      setBuffer(next);
      if (next === SECRET) {
        setOpen(true);
        setBuffer("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [buffer]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-md px-6"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent-blue mb-6 font-medium">
              A quiet secret
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
              Machines learn.
              <br />
              <span className="text-accent-blue">Humans wonder.</span>
            </h2>
            <p className="mt-8 text-sm sm:text-base text-muted-foreground font-light italic">
              Thanks for being curious. That's where every good idea begins.
            </p>
            <p className="mt-10 text-[10px] tracking-[0.25em] uppercase text-muted-foreground/70">
              — Sandra • Press Esc to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
