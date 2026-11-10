export type Founder = {
  name: string;
  role: string;
  initials: string;
  /** Path to a verified portrait. Leave null to show the editorial placeholder. */
  photo: string | null;
  bio: string;
  focus: string[];
  linkedin: string | null;
};

export const founders: Founder[] = [
  {
    name: "Swastik Dubey",
    role: "Co-founder, Devavi Media",
    initials: "SD",
    photo: null,
    bio: "Swastik leads relationships, business development and agency operations. Before Devavi, he worked across operations, community management and client-facing roles at WeWork India, with earlier experience at enguru and PaperTrue.",
    focus: ["Client relationships", "Business development", "Agency operations", "Long-term partnerships"],
    linkedin: "https://www.linkedin.com/in/swastik-dubey-948604169",
  },
  {
    name: "Anushka Sirohi",
    role: "Co-founder, Devavi Media",
    initials: "AS",
    photo: null,
    bio: "Anushka leads performance marketing — Google Ads, campaign strategy and optimisation — and is known for explaining the reasoning behind every campaign decision. She previously led teams in performance marketing at AdYogi.",
    focus: ["Performance marketing", "Google Ads", "Campaign strategy", "Client education"],
    linkedin: "https://www.linkedin.com/in/anushka-sirohi",
  },
];

export type TeamMember = {
  name: string;
  /** Only set a role once verified as current. */
  role: string | null;
  linkedin: string | null;
  /** Toggle off for people who are no longer with the team. */
  visible: boolean;
};

export const teamMembers: TeamMember[] = [
  { name: "Saumitra Kalhans", role: null, linkedin: null, visible: true },
  { name: "Pranav Kamat", role: null, linkedin: null, visible: true },
  {
    name: "Aditya Singh Jhala",
    role: "Associate — Performance Marketing",
    linkedin: "https://in.linkedin.com/in/aditya-singh-jhala",
    visible: true,
  },
  // Public posts suggest Shreya has since moved on — enable if she is part of the current team.
  { name: "Shreya Sikaria", role: null, linkedin: null, visible: false },
  { name: "Rajdeep Kalita", role: null, linkedin: null, visible: true },
];
