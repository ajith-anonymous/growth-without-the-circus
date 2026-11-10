export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  brand: string;
  /** "exact" = verbatim from a published source. "summary" = paraphrased, clearly labelled. */
  kind: "exact" | "summary";
  source: { label: string; url: string };
};

const DEVAVI_SITE = { label: "devavimedia.com", url: "https://devavimedia.com/" };

export const testimonials: Testimonial[] = [
  {
    quote:
      "I genuinely think getting Swastik and Anushka onboard was one of the earliest and best decisions we made at Goat Life. The reason it worked from day one is because we were aligned in how we think — execution first, everything else later. Truly grateful to have you guys on the same boat.",
    name: "Yash Kalra",
    role: "Founder",
    brand: "GOAT Life",
    kind: "exact",
    source: DEVAVI_SITE,
  },
  {
    quote:
      "We spent ₹1.8 lakhs on Meta. We did ₹31 lakhs in revenue. I thought I understood performance marketing. Turns out I'd never seen it done like this.",
    name: "Lakshya Jain",
    role: "Founder",
    brand: "Lecrec",
    kind: "exact",
    source: {
      label: "LinkedIn post",
      url: "https://www.linkedin.com/posts/lakshya-jain-a78727239_18x-roas-on-a-brand-new-watch-brand-but-activity-7475894128929701888-ufwA",
    },
  },
  {
    quote:
      "It's been great working with Anushka on Google Ads for ATT. She brings clarity in planning and consistently delivers realistic, feasible strategies aligned with our objectives and budget. What stands out is how she ensures we understand the context behind each campaign. We've been able to see real-time improvements.",
    name: "Ashwanth Suresh Babu",
    role: "Founder",
    brand: "A Toddler Thing",
    kind: "exact",
    source: DEVAVI_SITE,
  },
  {
    quote:
      "Working with Devavi has been one of the best decisions for Ekatra. We've seen a clear shift from stagnant ROAS to consistent, measurable growth. Beyond performance, what stands out is their energy and ownership. They don't just execute — they guide, challenge our thinking, and truly care about long-term brand building. It feels less like an agency and more like an extended growth team.",
    name: "Aishwarya Jhawar",
    role: "Founder",
    brand: "Ekatra",
    kind: "exact",
    source: DEVAVI_SITE,
  },
  {
    quote:
      "It's been an absolute pleasure working with Swastik and Anushka. The warmth, focus, and humour you bring make every interaction memorable. Truly appreciate the way you approach things with clarity and intent. Always rooting for Devavi, onwards and upwards! :)",
    name: "Jayant Shah",
    role: "Head of Business",
    brand: "Fix My Curls",
    kind: "exact",
    source: DEVAVI_SITE,
  },
  {
    quote:
      "We partnered with Devavi to scale our sales through paid media, and their expertise has been evident from day one. They understand the brand and its nuances extremely well. We've seen a clear uptick in sales and are glad to have them as partners early in our journey. Sundar aur suvidha waali partnership hai yeh.",
    name: "Chhaya Dabas",
    role: "Founder",
    brand: "Suvaa",
    kind: "exact",
    source: DEVAVI_SITE,
  },
];
