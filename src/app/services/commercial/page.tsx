import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Commercial Plumbing, MA",
  description:
    "Commercial and industrial plumbing and design-build in Worcester County. Gas and process piping, roof drainage, commercial kitchens, special waste, and service.",
};

// NOTE: images below are placeholders — swap for real commercial project photos.
const capabilities = [
  {
    title: "Design-Build",
    description:
      "Concept to plan & spec and through construction, working alongside owners, architects, engineers, and general contractors.",
  },
  {
    title: "Gas Piping",
    description:
      "Low- and high-pressure gas piping systems engineered and installed to code for commercial and industrial facilities.",
  },
  {
    title: "Process Piping",
    description:
      "Specialized process piping for manufacturing, laboratory, and industrial applications.",
  },
  {
    title: "Roof Drainage",
    description:
      "Engineered roof drainage systems that protect commercial structures from costly water damage.",
  },
  {
    title: "Commercial Kitchens",
    description:
      "Complete plumbing and gas fit-outs for restaurant, institutional, and commercial kitchens.",
  },
  {
    title: "Special Waste",
    description:
      "Acid, grease, and special-waste systems designed and installed for compliance and safety.",
  },
  {
    title: "Commercial Service & Repair",
    description:
      "Fast, reliable service and repair that keeps your facility running with minimal downtime.",
  },
  {
    title: "High-End Remodeling",
    description:
      "Premium residential remodeling — bathrooms, kitchens, and additions — built to commercial standards.",
  },
];

const industries = [
  "Manufacturing",
  "Medical Offices",
  "Breweries",
  "Schools",
  "Banks",
  "Automotive",
  "Pharmaceutical",
];

const clients = [
  "Alden Research Labs",
  "Allegro Microsystems, LLC",
  "Affordable Interior Systems (AIS)",
  "American Antiquarian Society",
  "Briarwood Community",
  "Central Coating",
  "Christopher Heights",
  "Christopher House",
  "Cold Chain Technologies",
  "Department of Conservation & Recreation (DCR)",
  "Department of Youth Services (DYS)",
  "Life Care of Auburn",
  "Mass State Police",
  "St Gobain",
  "Shrewsbury Village",
  "Sunbridge Healthcare",
  "Walmart",
  "Westborough State Hospital",
  "Worcester Business Center",
  "Worcester County Food Bank",
  "Worcester Fitness Center",
  "Worcester Polytechnic Institute",
  "United States Postal Service",
  "UMass Memorial Realty",
  "YMCA (Greendale & Central Branch)",
  "You Inc.",
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[360px] md:min-h-[460px] flex items-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={withBasePath("/images/services/hero-service-engineering.jpg")}
            alt="Commercial mechanical and piping systems"
            fill
            sizes="100vw"
            className="object-cover grayscale opacity-25"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[20px] md:px-[40px] py-[48px] md:py-[80px]">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-body text-[12px] tracking-[0.15em] font-bold uppercase text-surface-variant hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <h1 className="font-headline text-[40px] sm:text-[56px] md:text-[80px] leading-[1.0] tracking-[-0.02em] font-extrabold uppercase mb-4">
              Commercial &amp; Design-Build
            </h1>
            <div className="w-24 h-2 bg-secondary mb-6" />
            <p className="font-body text-[13px] md:text-[15px] leading-[1.4] tracking-[0.2em] font-bold uppercase text-surface-variant max-w-2xl">
              From Concept to Plan &amp; Spec and Through Construction
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Design-Build intro split */}
      <FadeIn>
        <section className="w-full bg-surface py-[48px] md:py-[80px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-5">
              <div className="border-2 border-primary p-1">
                <div className="relative aspect-[3/2] md:aspect-[4/5]">
                  <Image
                    src={withBasePath("/images/home/industrial-boiler-system.jpg")}
                    alt="Commercial mechanical room"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col gap-6">
              <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase text-primary">
                Design-Build From Concept to Completion
              </h2>
              <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-on-surface-variant">
                For over 100 years, Garabedian has taken commercial and
                industrial projects from concept to plan &amp; spec and through
                construction. Our design-build team works alongside owners,
                architects, engineers, and general contractors to bring complex
                projects to life — on spec, on code, and on schedule.
              </p>
              <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-on-surface-variant">
                From manufacturing facilities and medical offices to breweries,
                schools, and pharmaceutical plants, we partner with many of the
                region&apos;s best-known general contractors and service local
                businesses and industrial facilities across Central
                Massachusetts.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Capabilities grid */}
      <FadeIn>
        <section className="w-full bg-surface-variant py-[48px] md:py-[80px] px-[20px] md:px-[40px] border-t-2 border-primary">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-primary uppercase mb-8 md:mb-12">
              Commercial &amp; Industrial Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="bg-surface border-2 border-primary p-6 md:p-8 hover:bg-primary transition-colors group"
                >
                  <h3 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary group-hover:text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="font-body text-[15px] md:text-[16px] leading-[1.6] text-on-surface-variant group-hover:text-white/80">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Industries & Clients */}
      <FadeIn>
        <section className="w-full bg-primary text-white py-[48px] md:py-[80px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-6">
              Industries We Serve
            </h2>
            <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="border border-white/30 px-4 py-2 font-body text-[12px] md:text-[14px] tracking-[0.15em] font-bold uppercase"
                >
                  {industry}
                </span>
              ))}
            </div>
            <h3 className="font-headline text-[24px] sm:text-[28px] md:text-[36px] leading-[1.1] font-bold uppercase mb-2">
              Commercial Clients We&apos;ve Served
            </h3>
            <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-white/80 max-w-3xl mb-8 md:mb-10">
              Trusted by well-known institutions, manufacturers, and contractors
              across Worcester County and Central Massachusetts.
            </p>
            <ul className="columns-2 lg:columns-3 gap-x-6 md:gap-x-[24px]">
              {clients.map((client) => (
                <li
                  key={client}
                  className="flex items-start gap-2.5 mb-3 break-inside-avoid"
                >
                  <span className="mt-[7px] w-1.5 h-1.5 bg-secondary shrink-0" />
                  <span className="font-body text-[13px] md:text-[15px] leading-[1.4] text-white/85">
                    {client}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* CTA band */}
      <FadeIn>
        <section className="w-full bg-surface-container-highest py-10 md:py-16 px-[20px] md:px-[40px] text-center border-y-4 border-primary">
          <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase text-primary mb-4">
            Have a Commercial Project?
          </h2>
          <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-primary mb-8 max-w-2xl mx-auto">
            Serving {siteConfig.serviceArea}. Let our design-build team take your
            project from concept through construction — request a consultation or
            call to talk it through.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 md:px-12 py-4 md:py-5 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Request a Consultation
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary px-8 md:px-12 py-4 md:py-5 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase hover:bg-primary hover:text-white transition-all"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              {siteConfig.phone}
            </a>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
