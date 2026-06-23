import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <FadeIn>
        <section className="w-full bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[80px] leading-[1.0] tracking-[-0.02em] font-extrabold text-white uppercase mb-4">
              Services
            </h1>
            <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-white/80 max-w-2xl">
              Expert plumbing, heating, and cooling for homes and businesses
              across Worcester County and Central Massachusetts — backed by
              over 100 years of trusted, licensed craftsmanship.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Service 1: Plumbing */}
      <FadeIn>
        <section className="bg-surface-variant py-[48px] md:py-[80px] px-[20px] md:px-[40px] border-t-2 border-primary">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-5">
              <div className="border-2 border-current p-1 text-primary">
                <div className="relative aspect-[3/2] md:aspect-square">
                  <Image
                    src={withBasePath("/images/services/plumbing-work.jpg")}
                    alt="Plumbing Work"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col items-start">
              <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[80px] md:leading-[1.0] md:tracking-[-0.02em] font-bold md:font-extrabold uppercase text-primary mb-8">
                Plumbing
              </h2>
              <ul className="space-y-6 mb-10 w-full">
                <li className="flex gap-4 border-l-4 border-primary pl-6">
                  <div>
                    <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                      Water Heaters
                    </h4>
                    <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant">
                      Installation and service of all types of water heaters,
                      including tank-type, tankless, and indirect, as well as all
                      related water, gas, and exhaust piping.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 border-l-4 border-primary pl-6">
                  <div>
                    <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                      Repiping Specialists
                    </h4>
                    <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant">
                      We are prepared to work with a wide range of piping,
                      including pex, copper, PVC, ABS, cast iron, and steel for
                      all your water, drainage, venting, exhaust, and gas piping
                      needs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 border-l-4 border-primary pl-6">
                  <div>
                    <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                      Drain Work
                    </h4>
                    <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant">
                      Our technicians have the tools to clear local blockages in
                      sinks or toilets as well as to camera pipes and clear main
                      lines so that your drainage system can flow with ease.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 border-l-4 border-primary pl-6">
                  <div>
                    <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                      Gasfitting
                    </h4>
                    <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant">
                      We install pipe, valves, and fittings for new and existing
                      gas systems, including for gas stoves, fireplaces, pool
                      heaters, and more.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/plumbing"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-4 uppercase hover:opacity-90 transition-colors group"
                >
                  Explore Plumbing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-4 uppercase hover:bg-primary hover:text-white transition-all"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Service 2: Heating */}
      <FadeIn>
        <section className="bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-7 order-2 md:order-1 flex flex-col items-start">
              <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[80px] md:leading-[1.0] md:tracking-[-0.02em] font-bold md:font-extrabold uppercase text-white mb-8">
                Heating
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 w-full">
                <div className="bg-white/10 p-6 border-l-4 border-white">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                    Boiler Systems
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] opacity-80">
                    Expert installation and maintenance for steam and hydronic
                    systems, both high efficiency and legacy.
                  </p>
                </div>
                <div className="bg-white/10 p-6 border-l-4 border-white">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                    Furnaces
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] opacity-80">
                    Service and installation of furnaces running on natural gas,
                    propane, or oil.
                  </p>
                </div>
                <div className="bg-white/10 p-6 border-l-4 border-white">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                    Radiant Heat
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] opacity-80">
                    Underfloor hydronic heating solutions for consistent, premium
                    thermal comfort.
                  </p>
                </div>
                <div className="bg-white/10 p-6 border-l-4 border-white">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                    Upgrades
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] opacity-80">
                    Safe removal and disposal of older systems and provision of
                    new high-efficiency options.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/heating"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-4 uppercase hover:bg-surface-variant transition-colors group"
                >
                  Explore Heating
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-4 uppercase hover:bg-white hover:text-primary transition-all"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="border-2 border-current p-1 text-white">
                <div className="relative aspect-[3/2] md:aspect-[4/5]">
                  <Image
                    src={withBasePath("/images/services/heating-system.jpg")}
                    alt="Heating System"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Service 3: Air Conditioning */}
      <FadeIn>
        <section className="bg-surface-variant py-[48px] md:py-[80px] px-[20px] md:px-[40px] border-t-2 border-primary">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-5">
              <div className="border-2 border-current p-1 text-primary">
                <div className="relative aspect-[3/2] md:aspect-square">
                  <Image
                    src={withBasePath("/images/services/ac-condenser-unit.jpg")}
                    alt="Modern residential outdoor air conditioning condenser unit"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col items-start">
              <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[80px] md:leading-[1.0] md:tracking-[-0.02em] font-bold md:font-extrabold uppercase text-primary mb-8">
                Air Conditioning
              </h2>
              <div className="space-y-4 mb-10 w-full">
                <div className="border-2 border-primary p-6 hover:bg-primary hover:text-white transition-all group">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase group-hover:text-white">
                    Central Air Systems
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant group-hover:text-white/80">
                    Whole-home cooling solutions integrated with your existing
                    ductwork for maximum efficiency.
                  </p>
                </div>
                <div className="border-2 border-primary p-6 hover:bg-primary hover:text-white transition-all group">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase group-hover:text-white">
                    Ductless Mini-Splits
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant group-hover:text-white/80">
                    Zoned cooling for historic homes or additions without the
                    need for intrusive ducts.
                  </p>
                </div>
                <div className="border-2 border-primary p-6 hover:bg-primary hover:text-white transition-all group">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase group-hover:text-white">
                    Indoor Air Quality
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant group-hover:text-white/80">
                    UV air purifiers, HEPA filtration, and humidity control for a
                    healthier environment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/air-conditioning"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-4 uppercase hover:opacity-90 transition-colors group"
                >
                  Explore Air Conditioning
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-4 uppercase hover:bg-primary hover:text-white transition-all"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Service 4: Commercial */}
      <FadeIn>
        <section className="bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-7 order-2 md:order-1 flex flex-col items-start">
              <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[80px] md:leading-[1.0] md:tracking-[-0.02em] font-bold md:font-extrabold uppercase text-white mb-8">
                Commercial
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 w-full">
                <div className="bg-white/10 p-6 border-l-4 border-white">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                    Design-Build
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] opacity-80">
                    Concept to design and through construction with owners,
                    architects, engineers, and general contractors.
                  </p>
                </div>
                <div className="bg-white/10 p-6 border-l-4 border-white">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                    Gas &amp; Process Piping
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] opacity-80">
                    Low- and high-pressure gas and specialized process piping for
                    commercial and industrial facilities.
                  </p>
                </div>
                <div className="bg-white/10 p-6 border-l-4 border-white">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                    Commercial Kitchens
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] opacity-80">
                    Full plumbing and gasfitting installations for commercial
                    kitchens serving restaurants, housing facilities, and more.
                  </p>
                </div>
                <div className="bg-white/10 p-6 border-l-4 border-white">
                  <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                    Service &amp; Repair
                  </h4>
                  <p className="font-body text-[16px] leading-[1.5] opacity-80">
                    Fast, reliable service and repair that keeps your facility
                    running with minimal downtime.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/commercial"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-4 uppercase hover:bg-surface-variant transition-colors group"
                >
                  Explore Commercial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-4 uppercase hover:bg-white hover:text-primary transition-all"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="border-2 border-current p-1 text-white">
                <div className="relative aspect-[3/2] md:aspect-[4/5]">
                  <Image
                    src={withBasePath("/images/home/commercial-ac-repair.jpg")}
                    alt="Commercial mechanical and HVAC work"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Emergency CTA Band */}
      <FadeIn>
        <section className="bg-surface-container-highest py-10 md:py-16 px-[20px] md:px-[40px] text-center border-y-4 border-primary">
          <h3 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase text-primary mb-4">
            Emergency Service Available 24/7
          </h3>
          <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-primary mb-8 max-w-2xl mx-auto">
            When things go wrong, you need a name you can trust. Our experienced
            technicians are standing by.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-4 bg-secondary text-white px-8 md:px-12 py-4 md:py-5 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase tracking-wider hover:opacity-90"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              Call Now: {siteConfig.phone}
            </a>
            <Link
              href="/emergency"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 md:px-12 py-4 md:py-5 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase hover:bg-primary hover:text-white transition-all"
            >
              Emergency Info
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
