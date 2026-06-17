import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FACTS = [
  "Listens more than she talks.",
  "Impact matters more than crowd size.",
  "Strong, independent — quietly feminist.",
  "Eldest sister. Always the safety net.",
  "Believes curiosity is a superpower.",
];

const FloatingSpark = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Subtle console hint for the curious
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(
      "%cPsst — look for the little blue spark drifting on the side. Click it.",
      "color:#5b8def;font:600 12px/1.4 Inter,sans-serif",
    );
  }, []);

  // Track scroll for vertical drift
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { stiffness: 40, damping: 20, mass: 0.8 });
  // gentle horizontal sway tied to scroll
  const x = useTransform(smoothY, (v) => Math.sin(v / 180) * 12);

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      setScrollY(s);
      // Map scroll to a vertical position within the right rail
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight - vh;
      const progress = docH > 0 ? s / docH : 0;
      // travel between 20vh and 75vh
      y.set(vh * 0.2 + progress * vh * 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [y]);

  // Only show after the user has scrolled a bit, so it doesn't compete with the hero
  const visible = scrollY > 300;

  const handleClick = () => {
    setIdx((i) => (i + 1) % FACTS.length);
    setOpen(true);
  };

  // Auto-dismiss the bubble
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setOpen(false), 4200);
    return () => clearTimeout(t);
  }, [open, idx]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ y: smoothY, x }}
          className="pointer-events-none fixed right-6 top-0 z-40 hidden sm:block"
        >
          {/* Cute floating butterfly */}
          <motion.button
            onClick={handleClick}
            aria-label="A little something about Sandra"
            animate={{
              rotate: [-8, 8, -8],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.35, rotate: 0 }}
            className="pointer-events-auto relative text-2xl leading-none cursor-pointer select-none drop-shadow-[0_0_12px_hsl(var(--accent-blue)/0.5)]"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
              {/* Body */}
              <line x1="12" y1="8" x2="12" y2="17" />
              {/* Antennae */}
              <path d="M12 8C11 6.5 10 5.8 9.2 5.8" />
              <path d="M12 8C13 6.5 14 5.8 14.8 5.8" />
              {/* Left upper wing */}
              <path d="M12 9C10.5 8.5 7 8 5 10C3 12 3 15 5 17C7 18.5 10 18 12 16.5" />
              {/* Right upper wing */}
              <path d="M12 9C13.5 8.5 17 8 19 10C21 12 21 15 19 17C17 18.5 14 18 12 16.5" />
              {/* Left lower wing */}
              <path d="M12 15C10 15.5 8 16.5 8 18.5C8 20.5 10 21 11.5 20C12.5 19.5 12.5 17.5 12 15.5" />
              {/* Right lower wing */}
              <path d="M12 15C14 15.5 16 16.5 16 18.5C16 20.5 14 21 12.5 20C11.5 19.5 11.5 17.5 12 15.5" />
            </svg>
          </motion.button>


          {/* Fact bubble */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, x: 10, y: -4 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 w-56 text-right"
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-accent-blue mb-1.5 font-medium">
                  About me
                </p>
                <p className="text-sm font-light text-foreground italic leading-snug">
                  {FACTS[idx]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingSpark;
