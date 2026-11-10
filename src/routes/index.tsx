import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies } from "@/components/site/CaseStudies";
import { ClientLogos } from "@/components/site/ClientLogos";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { GrowthSystems } from "@/components/site/GrowthSystems";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyDevavi } from "@/components/site/WhyDevavi";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";
import { site } from "@/data/site";

const title = "Devavi Media | Performance Marketing & Growth Partners";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: site.description },
      { property: "og:title", content: title },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: site.description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          slogan: site.tagline,
          description: site.description,
          areaServed: "IN",
          knowsAbout: services.map((s) => s.title),
          sameAs: [site.linkedin, site.instagram].filter(Boolean),
          founder: [
            { "@type": "Person", name: "Swastik Dubey" },
            { "@type": "Person", name: "Anushka Sirohi" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <ClientLogos />
      <Services />
      <GrowthSystems />
      <CaseStudies />
      <WhyDevavi />
      <Team />
      <Testimonials />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
