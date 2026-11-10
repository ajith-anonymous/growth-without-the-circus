import { Link } from "@tanstack/react-router";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./Cta";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function ExploreLabel({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-grotesk text-xs font-bold uppercase tracking-[0.18em]",
        tone === "light" ? "text-paper" : "text-ink",
      )}
    >
      <span className="relative">
        Explore case study
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-500 ease-expo group-hover:scale-x-100" />
      </span>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-signal text-ink transition-transform duration-500 group-hover:rotate-45">
        <ArrowUpRight />
      </span>
    </span>
  );
}

function Featured({ study }: { study: CaseStudy }) {
  return (
    <Reveal>
      <Link
        to="/work/$slug"
        params={{ slug: study.slug }}
        className="group grid overflow-hidden rounded-[2rem] bg-ink text-paper lg:grid-cols-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
          <img
            src={study.image}
            alt={study.imageAlt}
            loading="lazy"
            decoding="async"
            width={1280}
            height={960}
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-105"
          />
          <span className="eyebrow absolute left-5 top-5 rounded-full bg-ink/80 px-3 py-2 text-paper backdrop-blur">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 lg:p-14">
          <div>
            <p className="eyebrow text-paper/50">
              {study.industry} · {study.platforms.join(" + ")}
            </p>
            <h3 className="mt-5 type-display text-[clamp(3rem,7vw,6.5rem)]">{study.brand}</h3>
            {study.badge && (
              <p className="mt-6 inline-flex rounded-full bg-signal px-4 py-2 font-grotesk text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink">
                {study.badge}
              </p>
            )}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/65">{study.challenge}</p>
          </div>
          {study.stats && (
            <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-paper/10">
              {study.stats.map((s) => (
                <div key={s.label} className="bg-ink-soft p-4 sm:p-5">
                  <dt className="font-grotesk text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-paper/50 sm:text-[0.66rem]">
                    {s.label}
                  </dt>
                  <dd className="mt-2 type-wide text-2xl text-paper sm:text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="flex flex-col gap-6">
            {study.disclaimer && <p className="text-xs leading-relaxed text-paper/45">{study.disclaimer}</p>}
            <ExploreLabel tone="light" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function StudyCard({ study, wide, delay }: { study: CaseStudy; wide: boolean; delay: number }) {
  return (
    <Reveal delay={delay} className={wide ? "lg:col-span-7" : "lg:col-span-5"}>
      <Link
        to="/work/$slug"
        params={{ slug: study.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-snow transition-shadow duration-500 hover:shadow-lift"
      >
        <div className={cn("relative overflow-hidden", wide ? "aspect-[16/10]" : "aspect-[4/3.2]")}>
          <img
            src={study.image}
            alt={study.imageAlt}
            loading="lazy"
            decoding="async"
            width={1280}
            height={960}
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
            <span className="eyebrow rounded-full bg-paper/90 px-3 py-2 text-ink backdrop-blur">{study.industry}</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-8 p-7 sm:p-9">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="type-wide text-4xl sm:text-5xl">{study.brand}</h3>
              <p className="eyebrow text-ink/50">{study.platforms.join(" + ")}</p>
            </div>
            <p className="mt-4 font-grotesk text-xl font-medium leading-snug">{study.headline}</p>
            <p className="mt-3 leading-relaxed text-ink/60">{study.challenge}</p>
          </div>
          <ExploreLabel />
        </div>
      </Link>
    </Reveal>
  );
}

export function CaseStudies() {
  const [featured, ...rest] = caseStudies;
  return (
    <section id="work" aria-labelledby="work-title" className="bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="05">Selected work</SectionLabel>
            <RevealLines
              id="work-title"
              className="mt-8 type-display text-mega"
              lines={["The work", <span key="s" className="text-signal">speaks.</span>]}
            />
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-ink/65">
              Behind every number is a strategy, a hypothesis, and a team that made it happen.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-5">
          <Featured study={featured} />
          <div className="grid gap-5 lg:grid-cols-12">
            {rest.map((s, i) => (
              <StudyCard key={s.slug} study={s} wide={i === 0 || i === 3} delay={(i % 2) * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
