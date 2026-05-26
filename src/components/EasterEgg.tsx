import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SECRET = "think";

const FACTS = [
  {
    title: "Listens more than she talks.",
    body: "Conversations teach more than monologues ever could.",
  },
  {
    title: "Impact > crowd size.",
    body: "One mind changed matters more than a thousand watching.",
  },
  {
    title: "Strong, independent, soft-spoken feminist.",
    body: "Quietly building a world where women don't have to ask twice.",
  },
  {
    title: "Eldest sister energy.",
    body: "Half mentor, half safety net — always the first to show up.",
  },
];

type Spark = { id: number; x: number; y: number; dx: number; dy: number };

const EasterEgg = () => {
  const [open, setOpen] = useState(false);
  const [buffer, setBuffer] = useState("");
  const [found, setFound] = useState<number[]>([]);
  const [activeFact, setActiveFact] = useState<number | null>(null);

  // Console hint
  useEffect(() => {
    const a = "color:#5b8def;font:600 13px/1.4 Inter,sans-serif";
    const b = "color:#888;font:400 11px/1.4 Inter,sans-serif";
    // eslint-disable-next-line no-console
    console.log("%cHi, curious one.", a);
    // eslint-disable-next-line no-console
    console.log("%cType %cthink%c anywhere — then chase the sparks.", b, "color:#5b8def;font-weight:600", b);
  }, []);

  // Key listener for secret + escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key.length !== 1) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const next = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
      setBuffer(next);
      if (next === SECRET) {
        setOpen(true);
        setBuffer("");
        setFound([]);
        setActiveFact(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [buffer]);

  // Sparks initial positions (in %)
  const sparks = useMemo<Spark[]>(
    () =>
      FACTS.map((_, i) => ({
        id: i,
        x: 15 + Math.random() * 70,
        y: 20 + Math.random() * 60,
        dx: (Math.random() - 0.5) * 8,
        dy: (Math.random() - 0.5) * 8,
      })),
    [open],
  );

  const catchSpark = (id: number) => {
    setActiveFact(id);
    setFound((f) => (f.includes(id) ? f : [...f, id]));
  };

  const allFound = found.length === FACTS.length;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] bg-background/92 backdrop-blur-md overflow-hidden"
        >
          {/* Header */}
          <div className="absolute top-8 left-0 right-0 text-center pointer-events-none px-6">
            <p className="text-[10px] tracking-[0.35em] uppercase text-accent-blue font-medium">
              A quiet secret
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Catch the sparks. Meet the maker.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-light">
              {found.length} / {FACTS.length} found
            </p>
          </div>

          {/* Sparks */}
          {sparks.map((s) => {
            const caught = found.includes(s.id);
            return (
              <motion.button
                key={s.id}
                onClick={() => catchSpark(s.id)}
                initial={{ left: `${s.x}%`, top: `${s.y}%` }}
                animate={
                  caught
                    ? { opacity: 0.25, scale: 0.8 }
                    : {
                        x: [0, s.dx * 12, -s.dx * 8, 0],
                        y: [0, s.dy * 12, -s.dy * 8, 0],
                        scale: [1, 1.15, 0.95, 1],
                      }
                }
                transition={
                  caught
                    ? { duration: 0.4 }
                    : { duration: 7 + s.id, repeat: Infinity, ease: "easeInOut" }
                }
                whileHover={{ scale: 1.4 }}
                className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue shadow-[0_0_24px_hsl(var(--accent-blue))] cursor-pointer"
                aria-label={`Spark ${s.id + 1}`}
              />
            );
          })}

          {/* Fact card */}
          <AnimatePresence mode="wait">
            {activeFact !== null && (
              <motion.div
                key={activeFact}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md text-center px-8"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {FACTS[activeFact].title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground font-light italic">
                  {FACTS[activeFact].body}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Completion */}
          <AnimatePresence>
            {allFound && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-20 left-0 right-0 text-center px-6"
              >
                <p className="text-base sm:text-lg text-accent-blue font-medium tracking-wide">
                  That's me — in four sparks. ✨
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Press Esc to close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
