import { motion } from "framer-motion";
import { primaryContactHref } from "@/data/site";
import { services } from "@/data/services";
import { ArrowUpRight, Cta } from "./Cta";
import { GrowthVisual } from "./GrowthVisual";
import { Marquee } from "./Marquee";
import { RevealLines } from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-grid-ink text-paper">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-glow" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto max-w-[1400px] px-5 pb-28 pt-32 sm:px-8 sm:pt-40 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-12"
        >
          <p className="eyebrow inline-flex items-center gap-3 rounded-full border border-paper/15 px-4 py-2 text-paper/80">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-signal" />
            Built for brands ready to scale.
          </p>
          <p className="eyebrow hidden text-paper/40 md:block">Performance marketing — Meta &amp; Google</p>
        </motion.div>

        <RevealLines
          as="h1"
          animateOnMount
          delay={0.35}
          className="type-display text-hero"
          lines={[
            <span key="1" className="text-hero-gradient">We don't</span>,
            <span key="2" className="text-hero-gradient">just run ads.</span>,
            <span key="3" className="block pl-[8%] sm:pl-[18%]">
              <span className="text-outline-light">We</span> build
            </span>,
            <span key="4" className="block pl-[8%] text-signal sm:pl-[18%]">
              growth.
            </span>,
          ]}
        />
        <span id="hero-title" className="sr-only">
          We don't just run ads. We build growth.
        </span>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1 }}
            className="lg:col-span-6"
          >
            <p className="font-grotesk text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Turning attention into acquisition.{" "}
              <span className="text-paper/45">Acquisition into revenue.</span>
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/65 sm:text-lg">
              We partner with ambitious brands to create performance marketing systems that drive
              measurable growth. No unnecessary noise. No vanity metrics. Just thoughtful strategy,
              relentless execution, and results that matter.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Cta href={primaryContactHref()} size="lg">
                Let's build something <ArrowUpRight />
              </Cta>
              <Cta href="#work" variant="outline-light" size="lg">
                Explore our work <span aria-hidden="true">↓</span>
              </Cta>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.7 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <GrowthVisual />
          </motion.div>
        </div>

        <a
          href="#about"
          className="group absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
          aria-label="Scroll to learn more"
        >
          <span className="eyebrow text-paper/40 transition-colors group-hover:text-paper">Scroll</span>
          <span className="relative h-10 w-px overflow-hidden bg-paper/15">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-signal" />
          </span>
        </a>
      </div>

      <div className="relative z-10 -mb-6 -rotate-[1.5deg] scale-[1.03] border-y-2 border-ink bg-signal py-4 text-ink sm:py-5">
        <Marquee duration={36} trackClassName="gap-8 pr-8" ariaLabel="What we do">
          {[...services.map((s) => s.title), "Full-funnel growth"].map((t) => (
            <span key={t} className="flex items-center gap-8 type-display text-2xl sm:text-4xl">
              {t}
              <span aria-hidden="true" className="text-ink/70">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
