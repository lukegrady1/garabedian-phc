export type ServiceOffering = {
  title: string;
  description: string;
};

export type ServiceContent = {
  slug: "plumbing" | "heating" | "air-conditioning";
  /** Short name used in headings and buttons, e.g. "Plumbing" */
  name: string;
  /** Page <title> */
  metaTitle: string;
  metaDescription: string;
  /** Hero background image */
  heroImage: string;
  heroImageAlt: string;
  /** One-line eyebrow under the hero title */
  tagline: string;
  /**
   * Overrides the "{name}" portion of the "{name} Done Right, Since 1916"
   * intro heading. Defaults to `name` when omitted.
   */
  doneRightName?: string;
  /**
   * Fully overrides the intro heading text, replacing the
   * "{name} Done Right, Since 1916" template entirely.
   */
  introHeading?: string;
  /** Intro paragraphs shown beside the lead image */
  intro: string[];
  /** Lead image in the intro split */
  introImage: string;
  introImageAlt: string;
  /** Grid of specific services offered */
  offeringsHeading: string;
  offerings: ServiceOffering[];
  /** "Signs you need service" checklist */
  signsHeading: string;
  signsIntro: string;
  signs: string[];
  /** CTA button label, e.g. "Request Plumbing Estimate" */
  estimateLabel: string;
};

export const servicesContent: Record<ServiceContent["slug"], ServiceContent> = {
  plumbing: {
    slug: "plumbing",
    name: "Plumbing",
    metaTitle: "Plumbing, Worcester MA",
    metaDescription:
      "Licensed master plumbers in Worcester, MA. Water heaters, repiping, drain cleaning, fixtures, gas lines, and 24/7 emergency plumbing for Central Massachusetts.",
    heroImage: "/images/services/plumbing-work.webp",
    heroImageAlt: "Master plumber fitting copper pipe",
    tagline: "Plumbing & Gasfitting for Homes and Businesses",
    doneRightName: "Plumbing & Gasfitting",
    intro: [
      "From a dripping faucet to a full house repair, or full house re-pipe, Garabedian Plumbing has handled Worcester's gas and plumbing needs for over 100 years. Our technicians diagnose the real problem the first time and fix it to last. No guesswork, no upsell.",
      "Every job is backed by upfront and honest pricing, clean workmanship, and the same family name that has served Central Massachusetts since 1916. Whether it's an emergency leak at 2 a.m. or a planned bathroom upgrade, you get a pro who treats your home like their own.",
    ],
    introImage: "/images/home/plumbing-pipe-fitting.webp",
    introImageAlt: "Hands expertly tightening a pipe fitting",
    offeringsHeading: "Our Plumbing Services",
    offerings: [
      {
        title: "Water Heaters",
        description:
          "Installation and service of all types of water heaters, including tank-type, tankless, and indirect, as well as all related water, gas, and exhaust piping.",
      },
      {
        title: "Repiping & Pipe Repair",
        description:
          "We are prepared to work with a wide range of piping, including pex, copper, PVC, ABS, cast iron, and steel for all your water, drainage, venting, exhaust, and gas piping needs.",
      },
      {
        title: "Drain Work",
        description:
          "Our technicians have the tools to clear local blockages in sinks or toilets as well as to camera pipes and clear main lines so that your drainage system can flow with ease.",
      },
      {
        title: "Fixture Installation",
        description:
          "We can supply and install fixtures or install fixtures that you have purchased yourself, including faucets, garbage disposals, toilets, tubs, shower valves, and more.",
      },
      {
        title: "Sump Pumps & Flood Alarms",
        description:
          "Sump pump and flood alarm or leak detection systems which can help detect and prevent flooding and water damage in your home.",
      },
      {
        title: "Gasfitting",
        description:
          "We install pipe, valves, and fittings for new and existing gas systems, including for gas stoves, fireplaces, pool heaters, and more.",
      },
    ],
    signsHeading: "Signs You Need a Plumber",
    signsIntro:
      "Small plumbing issues rarely fix themselves. If you notice any of these, give us a call before it becomes an emergency.",
    signs: [
      "Persistent low water pressure",
      "Discolored, rusty, or smelly water",
      "Recurring clogs or slow drains",
      "Water stains, damp spots, or unexplained high bills",
      "No hot water or inconsistent temperatures",
      "Sewer odors or gurgling drains",
    ],
    estimateLabel: "Request Plumbing Estimate",
  },
  heating: {
    slug: "heating",
    name: "Heating",
    metaTitle: "Heating & Boilers, MA",
    metaDescription:
      "Worcester heating contractor for boilers, furnaces, radiant heat, and oil-to-gas conversions. EPA-certified installs, repairs, and 24/7 emergency heat in Central MA.",
    heroImage: "/images/services/heating-system.webp",
    heroImageAlt: "Technician servicing a heating system",
    tagline: "Reliable Heat for Worcester Winters",
    intro: [
      "When the temperature drops, you need a heating contractor who answers the phone and shows up. Garabedian installs, services, and repairs boilers, furnaces, and radiant systems across Worcester County — keeping homes and businesses warm through the coldest New England nights.",
      "We assess every system for efficiency and safety, so you spend less on fuel and never worry about a mid-winter breakdown. And if your heat ever fails, our 24/7 emergency crew is ready to restore it fast.",
    ],
    introImage: "/images/home/industrial-boiler-system.webp",
    introImageAlt: "Industrial boiler system",
    offeringsHeading: "Our Heating Services",
    offerings: [
      {
        title: "Boiler Systems",
        description:
          "Expert installation and maintenance for steam and hydronic systems, both high efficiency and legacy.",
      },
      {
        title: "Furnaces",
        description:
          "Service and installation of furnaces running on natural gas, propane, or oil.",
      },
      {
        title: "Radiant Heat",
        description:
          "Underfloor hydronic heating solutions for consistent, even, premium thermal comfort.",
      },
      {
        title: "Upgrades",
        description:
          "Safe removal and disposal of older systems and provision of new high-efficiency options.",
      },
      {
        title: "Heat Pumps",
        description:
          "Energy-efficient heat pump systems that heat in winter and cool in summer from one unit.",
      },
      {
        title: "Tune-Ups & Maintenance",
        description:
          "Seasonal inspections and tune-ups that keep your system safe, efficient, and breakdown-free.",
      },
    ],
    signsHeading: "Signs Your Heating Needs Service",
    signsIntro:
      "Don't wait for a freezing morning with no heat. These warning signs mean it's time for a tune-up or repair.",
    signs: [
      "Uneven heating or cold spots in the home",
      "Rising energy bills with no change in usage",
      "Banging, rattling, or whistling noises",
      "The system short-cycles on and off",
      "A yellow or flickering burner flame",
      "Your system is more than 15 years old",
    ],
    estimateLabel: "Request Heating Estimate",
  },
  "air-conditioning": {
    slug: "air-conditioning",
    name: "Air Conditioning",
    metaTitle: "Air Conditioning, MA",
    metaDescription:
      "Worcester AC and cooling experts. Central air, ductless mini-splits, indoor air quality, and fast AC repair for homes and businesses across Central Massachusetts.",
    heroImage: "/images/services/ac-condenser-unit.webp",
    heroImageAlt: "Modern residential outdoor air conditioning condenser unit",
    tagline: "Stay Comfortable All Summer Long",
    introHeading: "Air Conditioning Done Right,\nso You Stay Cool While It's Hot",
    intro: [
      "New England summers can turn brutal fast. Garabedian keeps your home cool with expertly installed central air, ductless mini-splits, and indoor air quality systems — plus fast, accurate repairs when the heat is on, and the AC isn't.",
      "We size and install every system for efficiency, quiet operation, and even cooling in every room. From historic homes that can't take ductwork to whole-building commercial systems, our technicians deliver comfort you can count on.",
    ],
    introImage: "/images/home/exterior-ac-unit.webp",
    introImageAlt: "Exterior air conditioning unit",
    offeringsHeading: "Our Air Conditioning Services",
    offerings: [
      {
        title: "Central Air Systems",
        description:
          "Whole-home cooling integrated with your existing ductwork for maximum efficiency and comfort.",
      },
      {
        title: "Ductless Mini-Splits",
        description:
          "Zoned cooling for historic homes and additions without the need for retrofitted ductwork.",
      },
      {
        title: "Indoor Air Quality",
        description:
          "UV air purifiers, HEPA filtration, and humidity control for a cleaner, healthier home.",
      },
      {
        title: "AC Repair & Diagnostics",
        description:
          "Fast, accurate troubleshooting and repair for systems that are failing or underperforming.",
      },
      {
        title: "Seasonal Maintenance",
        description:
          "Pre-summer tune-ups that extend equipment life and head off breakdowns before they start.",
      },
      {
        title: "Heat Pumps",
        description:
          "High-efficiency systems that cool your home in the summer and heat your home in the cooler months.",
      },
    ],
    signsHeading: "Signs Your AC Needs Service",
    signsIntro:
      "A struggling AC only gets worse — and more expensive — the longer you wait. Watch for these red flags.",
    signs: [
      "Warm or weak air coming from the vents",
      "Unusual noises or musty odors",
      "Lingering humidity you can't shake",
      "Spiking electric bills in cooling season",
      "Water leaks or ice on the unit",
      "Frequent cycling or a system that won't keep up",
    ],
    estimateLabel: "Request AC Estimate",
  },
};

export const serviceList = [
  servicesContent.plumbing,
  servicesContent.heating,
  servicesContent["air-conditioning"],
];
