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
    heroImage: "/images/services/plumbing-work.jpg",
    heroImageAlt: "Master plumber fitting copper pipe",
    tagline: "Licensed Master Plumbers Serving Worcester County",
    intro: [
      "From a dripping faucet to a full-house repipe, Garabedian has handled Worcester's plumbing for over 100 years. Our licensed master plumbers diagnose the real problem the first time and fix it to last — no guesswork, no upsell.",
      "Every job is backed by upfront flat-rate pricing, clean workmanship, and the same family name that has served Central Massachusetts since 1916. Whether it's an emergency leak at 2 a.m. or a planned bathroom upgrade, you get a pro who treats your home like their own.",
    ],
    introImage: "/images/home/plumbing-pipe-fitting.jpg",
    introImageAlt: "Hands expertly tightening a pipe fitting",
    offeringsHeading: "Our Plumbing Services",
    offerings: [
      {
        title: "Water Heaters",
        description:
          "Installation and repair of high-efficiency traditional and tankless systems, sized right for your household.",
      },
      {
        title: "Repiping & Pipe Repair",
        description:
          "Full-scale PEX and copper upgrades, plus fast leak and burst-pipe repair for homes and commercial buildings.",
      },
      {
        title: "Drain Cleaning",
        description:
          "High-pressure hydro-jetting and camera inspections that clear obstructed main lines and stubborn clogs.",
      },
      {
        title: "Fixtures & Faucets",
        description:
          "Sink, toilet, tub, and faucet installation and replacement with quality fixtures built to last.",
      },
      {
        title: "Sump Pumps & Backflow",
        description:
          "Sump pump installation and backflow prevention that protect your basement from flooding and contamination.",
      },
      {
        title: "Gas Line Services",
        description:
          "Safe gas line installation, extension, and leak detection performed by licensed master plumbers.",
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
    heroImage: "/images/services/heating-system.jpg",
    heroImageAlt: "Technician servicing a heating system",
    tagline: "Reliable Heat for Worcester Winters",
    intro: [
      "When the temperature drops, you need a heating contractor who answers the phone and shows up. Garabedian installs, services, and repairs boilers, furnaces, and radiant systems across Worcester County — keeping homes and businesses warm through the coldest New England nights.",
      "Our EPA-certified technicians right-size every system for efficiency and safety, so you spend less on fuel and never worry about a mid-winter breakdown. And if your heat ever fails, our 24/7 emergency crew is ready to restore it fast.",
    ],
    introImage: "/images/home/industrial-boiler-system.jpg",
    introImageAlt: "Industrial boiler system",
    offeringsHeading: "Our Heating Services",
    offerings: [
      {
        title: "Boiler Systems",
        description:
          "Expert installation and maintenance for high-pressure steam and hot water boiler configurations.",
      },
      {
        title: "Furnaces",
        description:
          "High-efficiency gas furnace installation, repair, and emergency heat-restoration services.",
      },
      {
        title: "Radiant Heat",
        description:
          "Underfloor hydronic heating solutions for consistent, even, premium thermal comfort.",
      },
      {
        title: "Oil-to-Gas Conversions",
        description:
          "Seamless conversions that modernize your property's heating and lower your monthly fuel costs.",
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
    heroImage: "/images/services/ac-condenser-unit.jpg",
    heroImageAlt: "Modern residential outdoor air conditioning condenser unit",
    tagline: "Stay Comfortable All Summer Long",
    intro: [
      "Worcester summers can turn brutal fast. Garabedian keeps your home cool with expertly installed central air, ductless mini-splits, and indoor air quality systems — plus fast, accurate repairs when the heat is on.",
      "We size and install every system for efficiency, quiet operation, and even cooling in every room. From historic homes that can't take ductwork to whole-building commercial systems, our technicians deliver comfort you can count on.",
    ],
    introImage: "/images/home/exterior-ac-unit.jpg",
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
          "Zoned cooling for historic homes and additions without the need for intrusive ductwork.",
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
          "High-efficiency systems that cool in summer and warm your home in the shoulder seasons.",
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
