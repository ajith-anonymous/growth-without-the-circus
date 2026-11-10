import lecrec from "@/assets/work/lecrec.webp";
import goatlife from "@/assets/work/goatlife.webp";
import toddler from "@/assets/work/toddler.webp";
import ekatra from "@/assets/work/ekatra.webp";
import aquave from "@/assets/work/aquave.webp";

export type CaseStat = { label: string; value: string };

export type CaseStudy = {
  slug: string;
  brand: string;
  industry: string;
  platforms: string[];
  headline: string;
  challenge: string;
  strategy: string;
  outcome: string;
  /** Only verified, publicly reported figures. */
  stats?: CaseStat[];
  badge?: string;
  disclaimer?: string;
  testimonial?: { quote: string; name: string; role: string; sourceUrl: string };
  sources: { label: string; url: string }[];
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lecrec",
    brand: "Le Crec",
    industry: "Women's watches",
    platforms: ["Meta Ads"],
    headline: "A brand-new watch label, launched with conviction.",
    challenge:
      "Launch a brand-new women's watch label with no historical ad data, and make a limited first budget count from day one.",
    strategy:
      "Months of shared context from a previous partnership meant the plan was built before a single ad went live: a focused Meta launch, clear creative direction and tight feedback loops with the founder.",
    outcome:
      "The founder publicly reported ₹1.8 lakh in Meta spend and ₹31 lakh in revenue for the launch — roughly 17.2x on our own calculation, shared by the founder as 18x ROAS.",
    stats: [
      { label: "Meta ad spend", value: "₹1.8L" },
      { label: "Reported revenue", value: "₹31L" },
      { label: "Calculated ROAS", value: "≈17.2x" },
    ],
    badge: "18X ROAS reported by brand founder",
    disclaimer:
      "Figures are as publicly reported by the brand's founder. They are campaign figures, not independently audited financial results.",
    testimonial: {
      quote: "I thought I understood performance marketing. Turns out I'd never seen it done like this.",
      name: "Lakshya Jain",
      role: "Founder, Lecrec",
      sourceUrl:
        "https://www.linkedin.com/posts/lakshya-jain-a78727239_18x-roas-on-a-brand-new-watch-brand-but-activity-7475894128929701888-ufwA",
    },
    sources: [
      {
        label: "Founder's LinkedIn post",
        url: "https://www.linkedin.com/posts/lakshya-jain-a78727239_18x-roas-on-a-brand-new-watch-brand-but-activity-7475894128929701888-ufwA",
      },
    ],
    image: lecrec,
    imageAlt: "Art-directed still life of a minimal women's wristwatch with an orange ribbon",
  },
  {
    slug: "goat-life",
    brand: "GOAT Life",
    industry: "Nutrition & wellness",
    platforms: ["Google Ads", "Meta Ads"],
    headline: "Building an advertising presence from the ground up.",
    challenge:
      "GOAT Life was still fairly new in the online space and needed a partner hungry enough to take ownership of building paid acquisition from scratch.",
    strategy:
      "Build the brand's advertising presence across Google and Meta from zero — structure, tracking and creative direction — with an execution-first rhythm agreed in the very first meeting.",
    outcome:
      "A long-running partnership that began in early 2025 and continues to grow with the brand.",
    testimonial: {
      quote:
        "I genuinely think getting Swastik and Anushka onboard was one of the earliest and best decisions we made at Goat Life. The reason it worked from day one is because we were aligned in how we think — execution first, everything else later.",
      name: "Yash Kalra",
      role: "Founder, GOAT Life",
      sourceUrl: "https://devavimedia.com/",
    },
    sources: [{ label: "Devavi Media", url: "https://devavimedia.com/" }],
    image: goatlife,
    imageAlt: "Art-directed still life of a glass of milk and protein powder on dark stone",
  },
  {
    slug: "a-toddler-thing",
    brand: "A Toddler Thing",
    industry: "Children's products",
    platforms: ["Google Ads"],
    headline: "Google Ads with the reasoning on the table.",
    challenge:
      "Make Google Ads work harder within a defined budget, while keeping the founding team close to the why behind every campaign.",
    strategy:
      "Google Ads consulting and strategy built on realistic, feasible plans aligned with objectives and budget — and clear context for each campaign decision.",
    outcome: "The founder reports real-time improvements in performance.",
    testimonial: {
      quote:
        "She brings clarity in planning and consistently delivers realistic, feasible strategies aligned with our objectives and budget. What stands out is how she ensures we understand the context behind each campaign.",
      name: "Ashwanth Suresh Babu",
      role: "Founder, A Toddler Thing",
      sourceUrl: "https://devavimedia.com/",
    },
    sources: [{ label: "Devavi Media", url: "https://devavimedia.com/" }],
    image: toddler,
    imageAlt: "Art-directed still life of wooden toddler toys with a single orange block",
  },
  {
    slug: "ekatra",
    brand: "Ekatra",
    industry: "Fashion & lifestyle",
    platforms: ["Meta Ads", "Google Ads"],
    headline: "From stagnant ROAS to consistent growth.",
    challenge: "ROAS had plateaued, and growth had become hard to predict.",
    strategy:
      "Rebuild consistency through disciplined account structure, ownership of outcomes and a long-term view of brand building — challenging assumptions along the way.",
    outcome: "In the founder's words: a clear shift from stagnant ROAS to consistent, measurable growth.",
    testimonial: {
      quote:
        "We've seen a clear shift from stagnant ROAS to consistent, measurable growth. It feels less like an agency and more like an extended growth team.",
      name: "Aishwarya Jhawar",
      role: "Founder, Ekatra",
      sourceUrl: "https://devavimedia.com/",
    },
    sources: [{ label: "Devavi Media", url: "https://devavimedia.com/" }],
    image: ekatra,
    imageAlt: "Close-up of draped rust and ivory handwoven fabric",
  },
  {
    slug: "aquave",
    brand: "Aquave",
    industry: "Marine skincare",
    platforms: ["Meta Ads"],
    headline: "A partnership built on letting the strategy work.",
    challenge:
      "Aquave had already worked with several agencies without much to show for it, and trust in paid marketing was understandably low.",
    strategy:
      "Disciplined execution and transparent reasoning. Even through a slow first month, the brief stayed consistent and the strategy was given room to work — no sudden pivots.",
    outcome:
      "An editorial feature on what a strong client–agency relationship looks like. Detailed performance figures are not published.",
    sources: [
      {
        label: "Anushka Sirohi on LinkedIn",
        url: "https://www.linkedin.com/posts/anushka-sirohi_yash-had-already-been-through-five-agencies-activity-7500854801975455745-n8xV",
      },
    ],
    image: aquave,
    imageAlt: "Macro of clear ocean water over sea stones with a glass dropper",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
