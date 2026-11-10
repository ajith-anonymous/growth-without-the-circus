import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { primaryContactHref, site } from "@/data/site";
import { ArrowUpRight, Cta } from "./Cta";
import { Reveal, RevealLines } from "./Reveal";

export function CTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="relative overflow-hidden bg-signal text-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-36">
        <div className="flex items-center justify-between gap-6">
          <p className="eyebrow text-ink/70">(11) — Contact</p>
          <p className="eyebrow hidden text-ink/70 sm:block">{site.locationLine}</p>
        </div>

        <div className="mt-10 grid items-end gap-12 lg:grid-cols-12">
          <RevealLines
            id="cta-title"
            className="type-display text-mega lg:col-span-9"
            lines={["Ready to", "make your", <span key="n" className="text-snow">next move?</span>]}
          />
          <Reveal delay={0.2} className="flex justify-start lg:col-span-3 lg:justify-end">
            <a
              href={primaryContactHref()}
              {...(primaryContactHref().startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group relative grid aspect-square w-40 place-items-center rounded-full bg-ink text-paper transition-transform duration-700 ease-expo hover:scale-105 sm:w-56"
              aria-label="Let's talk growth"
            >
              <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                aria-hidden="true"
              >
                <defs>
                  <path id="cta-circle" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
                </defs>
                <text style={{ font: "700 13px var(--font-grotesk)", letterSpacing: "0.32em", textTransform: "uppercase" }} fill="var(--paper)">
                  <textPath href="#cta-circle">Let's talk growth · Let's talk growth · </textPath>
                </text>
              </motion.svg>
              <span className="text-5xl text-signal transition-transform duration-700 ease-expo group-hover:rotate-45 sm:text-6xl">
                <ArrowUpRight />
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-12">
          <p className="max-w-xl text-xl leading-relaxed text-ink/80 lg:col-span-6">
            Let's stop guessing and start building a growth strategy that moves your business forward.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            <Cta href={primaryContactHref()} variant="ink" size="lg">
              Let's talk growth <ArrowUpRight />
            </Cta>
            {site.linkedin && (
              <Cta href={site.linkedin} variant="outline-dark" size="lg">
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </Cta>
            )}
          </div>
        </Reveal>
        {site.email && (
          <a href={`mailto:${site.email}`} className="mt-10 inline-block type-wide text-2xl underline decoration-2 underline-offset-8 sm:text-4xl">
            {site.email}
          </a>
        )}
      </div>
    </section>
  );
}
