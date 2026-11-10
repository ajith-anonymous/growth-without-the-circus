import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, primaryContactHref, site, type SectionId } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Cta } from "./Cta";
import { ScrollLink } from "./ScrollLink";

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId>("top");
  useEffect(() => {
    if (!enabled) return;
    const ids = navItems.map((n) => n.id);
    const onScroll = () => {
      const probe = window.innerHeight * 0.35;
      let current: SectionId = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);
  return active;
}

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const contact = primaryContactHref();

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 rounded-full border pl-5 pr-2 transition-all duration-500 ease-expo",
            scrolled || !isHome
              ? "border-paper/10 bg-ink/80 shadow-lift backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <ScrollLink to="top" className="group flex items-center gap-2.5 text-paper" onNavigate={() => setOpen(false)}>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:rotate-[-12deg]">
              <span className="type-display text-sm">
                D
              </span>
            </span>
            <span className="font-grotesk text-sm font-bold tracking-[0.18em]">
              DEVAVI<span className="text-signal">.</span>MEDIA
            </span>
          </ScrollLink>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 font-grotesk text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                      isActive ? "text-paper" : "text-paper/55 hover:text-paper",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full border border-signal/70"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </ScrollLink>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Cta href={contact} size="sm" className="hidden sm:inline-flex">
              Let's Talk Growth <ArrowUpRight />
            </Cta>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-12 w-12 place-items-center rounded-full bg-paper text-ink transition-transform hover:scale-105 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "circle(0% at calc(100% - 48px) 48px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 48px) 48px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 48px) 48px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-28 text-paper lg:hidden"
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ScrollLink
                    to={item.id}
                    onNavigate={() => setOpen(false)}
                    className={cn(
                      "flex items-baseline gap-4 py-2 type-display text-[clamp(2.4rem,11vw,4.5rem)] transition-colors",
                      isHome && active === item.id ? "text-signal" : "text-paper hover:text-signal",
                    )}
                  >
                    <span className="font-grotesk text-xs font-semibold tracking-[0.2em] text-paper/40">
                      0{i + 1}
                    </span>
                    {item.label}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 border-t border-paper/10 pt-6"
            >
              <Cta href={contact} size="lg" onClick={() => setOpen(false)}>
                Let's Talk Growth <ArrowUpRight />
              </Cta>
              <p className="eyebrow text-center text-paper/40">{site.tagline}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
