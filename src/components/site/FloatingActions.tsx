import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { primaryContactHref } from "@/data/site";
import { ArrowUpRight, Cta } from "./Cta";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const [nearContact, setNearContact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.9);
      const c = document.getElementById("contact");
      setNearContact(!!c && c.getBoundingClientRect().top < window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
        >
          <AnimatePresence>
            {!nearContact && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                <Cta href={primaryContactHref()} size="sm" className="shadow-signal">
                  Let's talk <ArrowUpRight />
                </Cta>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 bg-ink text-paper shadow-lift transition-colors hover:bg-signal hover:text-ink"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
