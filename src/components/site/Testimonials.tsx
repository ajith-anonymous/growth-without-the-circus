import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const AUTOPLAY_MS = 9000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const total = testimonials.length;
  const go = useCallback((dir: number) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, reduce, go]);

  const t = testimonials[index];

  return (
    <section aria-labelledby="testimonials-title" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel index="08" tone="light">In their words</SectionLabel>
            <RevealLines
              id="testimonials-title"
              className="mt-8 type-display text-huge"
              lines={["Trust is earned.", <span key="n" className="text-paper/35">Not marketed.</span>]}
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-14 w-14 place-items-center rounded-full border border-paper/20 transition-colors hover:border-signal hover:bg-signal hover:text-ink"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-14 w-14 place-items-center rounded-full bg-paper text-ink transition-colors hover:bg-signal"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="relative mt-16 grid min-h-[460px] gap-10 sm:min-h-[420px] lg:grid-cols-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-live="polite"
        >
          <span aria-hidden="true" className="type-display pointer-events-none absolute -left-2 -top-10 text-[12rem] leading-none text-signal sm:-top-16 sm:text-[18rem] lg:col-span-1">
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative lg:col-span-10 lg:col-start-2"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}`}
            >
              <blockquote className="font-grotesk text-[clamp(1.35rem,2.6vw,2.6rem)] font-medium leading-[1.25] tracking-tight">
                {t.quote}
              </blockquote>
              <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-paper/15 pt-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-signal font-grotesk text-sm font-bold text-ink">
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                  <div>
                    <p className="font-grotesk text-lg font-semibold">{t.name}</p>
                    <p className="text-sm text-paper/55">
                      {t.role}, {t.brand}
                    </p>
                  </div>
                </div>
                <a
                  href={t.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow text-paper/45 transition-colors hover:text-signal"
                >
                  {t.kind === "exact" ? "Verbatim" : "Summary"} · via {t.source.label} ↗
                </a>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 grid gap-2" style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${item.name}, ${item.brand}`}
              aria-current={i === index ? "true" : undefined}
              className="group py-3 text-left"
            >
              <span className="block h-[3px] overflow-hidden rounded-full bg-paper/15">
                <span
                  className={cn(
                    "block h-full origin-left bg-signal",
                    i < index && "scale-x-100",
                    i > index && "scale-x-0",
                  )}
                  style={
                    i === index
                      ? {
                          animation: paused || reduce ? "none" : `progress-fill ${AUTOPLAY_MS}ms linear forwards`,
                          transform: paused || reduce ? "scaleX(1)" : undefined,
                        }
                      : undefined
                  }
                />
              </span>
              <span className={cn("eyebrow mt-3 hidden truncate transition-colors md:block", i === index ? "text-paper" : "text-paper/35 group-hover:text-paper/70")}>
                {item.brand}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
