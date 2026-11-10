export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Meta Ads",
    description:
      "Facebook and Instagram advertising designed to acquire customers, build demand, and scale profitable campaigns.",
    tags: ["Prospecting", "Retargeting", "Scaling"],
  },
  {
    number: "02",
    title: "Google Ads",
    description:
      "Capture high-intent demand through search, shopping, and performance-focused advertising strategies.",
    tags: ["Search", "Shopping", "PMax"],
  },
  {
    number: "03",
    title: "Performance Strategy",
    description:
      "A clear growth roadmap built around your business objectives, customer behaviour, market positioning, and acquisition economics.",
    tags: ["Roadmaps", "Unit economics"],
  },
  {
    number: "04",
    title: "Creative Strategy",
    description:
      "Creative concepts, messaging, ad angles, and experimentation that help brands stand out and convert.",
    tags: ["Angles", "Hooks", "Testing"],
  },
  {
    number: "05",
    title: "Analytics & Tracking",
    description:
      "Measure what matters. Build visibility into campaign performance, customer acquisition, conversion rates, and revenue.",
    tags: ["Pixel & CAPI", "Attribution"],
  },
  {
    number: "06",
    title: "Growth Optimisation",
    description:
      "Continuously analyse, experiment, refine, and scale campaigns to improve performance over time.",
    tags: ["Experiments", "CRO", "Iteration"],
  },
];
