export type Client = {
  name: string;
  /** Logo published by Devavi Media. When null, an editorial wordmark is rendered instead. */
  logo: string | null;
  /** Pixel width of the logo at 140px height, used to size it proportionally. */
  logoWidth?: number;
};

export const clients: Client[] = [
  { name: "GOAT Life", logo: "/clients/goatlife.webp", logoWidth: 272 },
  { name: "Fix My Curls", logo: "/clients/fixmycurls.webp", logoWidth: 156 },
  { name: "Ekatra", logo: "/clients/ekatra.webp", logoWidth: 271 },
  { name: "A Toddler Thing", logo: "/clients/toddlerthing.webp", logoWidth: 186 },
  { name: "Suvaa", logo: "/clients/suvaa.webp", logoWidth: 600 },
  { name: "Born Plus", logo: "/clients/bornplus.webp", logoWidth: 245 },
  { name: "Angel & Rocket", logo: "/clients/angelrocket.webp", logoWidth: 1674 },
  { name: "Aquave", logo: null },
];
