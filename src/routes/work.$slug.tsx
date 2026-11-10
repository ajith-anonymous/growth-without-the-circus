import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight, Cta } from "@/components/site/Cta";
import { Reveal, RevealLines } from "@/components/site/Reveal";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { primaryContactHref } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { slug: study.slug };
  },
  head: ({ loaderData }) => {
    const study = loaderData ? getCaseStudy(loaderData.slug) : undefined;
    if (!study) return { meta: [{ title: "Case study not found | Devavi Media" }, { name: "robots", content: "noindex" }] };
    const title = `${study.brand} — ${study.industry} | Devavi Media Work`;
    const description = `${study.headline} ${study.challenge}`.slice(0, 158);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-ink px-5 text-paper">
      <div className="text-center">
        <p className="type-display text-huge">Not found.</p>
        <Link to="/" hash="work" className="mt-6 inline-block text-signal underline underline-offset-4">
          Back to selected work
        </Link>
      </div>
    </main>
  ),
});

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-4 border-t border-ink/15 py-10 lg:grid-cols-12">
      <p className="eyebrow text-signal lg:col-span-3">{label}</p>
      <div className="font-grotesk text-xl leading-relaxed sm:text-2xl lg:col-span-9">{children}</div>
    </Reveal>
  );
}

function CaseStudyPage() {
  const { slug } = Route.useLoaderData();
  const study = getCaseStudy(slug)!;
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <main>
      <section className="bg-grid-ink pb-16 pt-32 text-paper sm:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Link to="/" hash="work" className="eyebrow inline-flex items-center gap-2 text-paper/55 transition-colors hover:text-signal">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <p className="eyebrow mt-10 text-paper/50">
            {study.industry} · {study.platforms.join(" + ")}
          </p>
          <RevealLines as="h1" animateOnMount className="mt-6 type-display text-mega" lines={[study.brand]} />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-3xl font-grotesk text-2xl font-medium leading-snug text-paper/80 sm:text-3xl">{study.headline}</p>
            {study.badge && (
              <p className="mt-8 inline-flex rounded-full bg-signal px-4 py-2 font-grotesk text-xs font-bold uppercase tracking-[0.16em] text-ink">
                {study.badge}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-4">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <figure className="overflow-hidden rounded-[2rem]">
            <img src={study.image} alt={study.imageAlt} width={1280} height={960} className="aspect-[16/8] w-full object-cover" />
          </figure>
          <p className="mt-3 text-xs text-paper/40">Art-directed editorial visual — not brand product photography.</p>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          {study.stats && (
            <Reveal className="mb-16">
              <dl className="grid gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-3">
                {study.stats.map((s) => (
                  <div key={s.label} className="bg-snow p-8">
                    <dt className="eyebrow text-ink/55">{s.label}</dt>
                    <dd className="mt-4 type-display text-6xl sm:text-7xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
              {study.disclaimer && <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/55">{study.disclaimer}</p>}
            </Reveal>
          )}
          <Block label="The challenge">{study.challenge}</Block>
          <Block label="The approach">{study.strategy}</Block>
          <Block label="The outcome">{study.outcome}</Block>
          {study.testimonial && (
            <Reveal className="mt-10 rounded-[2rem] bg-ink p-8 text-paper sm:p-14">
              <blockquote className="font-grotesk text-2xl font-medium leading-snug sm:text-4xl">
                <span className="text-signal">“</span>
                {study.testimonial.quote}
                <span className="text-signal">”</span>
              </blockquote>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6">
                <p>
                  <span className="font-grotesk font-semibold">{study.testimonial.name}</span>
                  <span className="text-paper/55"> — {study.testimonial.role}</span>
                </p>
                <a href={study.testimonial.sourceUrl} target="_blank" rel="noopener noreferrer" className="eyebrow text-paper/50 hover:text-signal">
                  Verbatim · Source ↗
                </a>
              </div>
            </Reveal>
          )}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/55">
            <span>Sources:</span>
            {study.sources.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-signal">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-signal text-ink">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-ink/70">Next case study</p>
            <Link to="/work/$slug" params={{ slug: next.slug }} className="group mt-4 flex items-center gap-6 type-display text-huge">
              {next.brand}
              <span className="text-[0.6em] transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
          <Cta href={primaryContactHref()} variant="ink" size="lg">
            Let's talk growth <ArrowUpRight />
          </Cta>
        </div>
      </section>
    </main>
  );
}
