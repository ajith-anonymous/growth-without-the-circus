import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { site } from "@/data/site";

const title = "Privacy Policy | Devavi Media";
const description = "How Devavi Media handles information when you visit this website or get in touch with us.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    h: "Information we collect",
    p: "This website does not ask you to create an account. If you contact us — for example through LinkedIn or email — we receive the information you choose to share, such as your name, company and message. Our hosting provider may also process standard technical data like IP address, browser type and pages visited to keep the site secure and working.",
  },
  {
    h: "How we use it",
    p: "We use the information you share only to respond to your enquiry, understand your business needs and, if we work together, to deliver our services. We do not sell your personal information.",
  },
  {
    h: "Client data",
    p: "When we manage advertising accounts, analytics or tracking on behalf of a client, we access that data only as needed to deliver the agreed work, and handle it under the terms agreed with that client.",
  },
  {
    h: "Third-party services",
    p: "Links to platforms such as LinkedIn take you to services governed by their own privacy policies. We recommend reviewing them before sharing information there.",
  },
  {
    h: "Your choices",
    p: "You can ask us to access, correct or delete personal information you've shared with us at any time by contacting us through the channels listed on this website.",
  },
  {
    h: "Updates",
    p: "We may update this policy as our website and services evolve. The latest version will always be available on this page.",
  },
];

function Privacy() {
  return (
    <main className="bg-paper text-ink">
      <section className="bg-ink pb-16 pt-32 text-paper sm:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Link to="/" className="eyebrow inline-flex items-center gap-2 text-paper/55 hover:text-signal">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <h1 className="mt-10 type-display text-huge">
            Privacy <span className="text-signal">policy.</span>
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-ink/70">
            {site.name} respects your privacy. This page explains, in plain language, what information
            we handle when you visit this website or get in touch.
          </p>
          {sections.map((s) => (
            <div key={s.h} className="mt-12 border-t border-ink/15 pt-8">
              <h2 className="type-wide text-2xl sm:text-3xl">{s.h}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
