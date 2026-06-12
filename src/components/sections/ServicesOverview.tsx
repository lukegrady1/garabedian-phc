import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { withBasePath } from "@/lib/base-path";

const services = [
  {
    label: "Plumbing",
    title: "Master Plumbing Services",
    description:
      "From emergency leaks to full residential repiping. We do the heavy lifting so you stay dry.",
    href: "/services/plumbing",
    image: "/images/home/plumbing-pipe-fitting.jpg",
    alt: "Hands expertly tightening a pipe fitting",
    colSpan: "md:col-span-8",
    height: "h-[400px]",
    titleSize: "font-headline text-[20px] md:text-[24px] lg:text-[48px] leading-[1.1] font-bold",
  },
  {
    label: "Heating",
    title: "Boilers & Furnaces",
    description:
      "Reliable heat for Worcester winters. Service, repair, and high-efficiency installs.",
    href: "/services/heating",
    image: "/images/home/industrial-boiler-system.jpg",
    alt: "Industrial boiler system",
    colSpan: "md:col-span-4 md:row-span-2",
    height: "h-[400px] md:h-auto",
    titleSize: "font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold",
  },
  {
    label: "Air Conditioning",
    title: "Cooling Systems",
    description:
      "Keep your home comfortable all summer with precision diagnostic and repair work.",
    href: "/services/air-conditioning",
    image: "/images/home/exterior-ac-unit.jpg",
    alt: "Exterior AC unit",
    colSpan: "md:col-span-8",
    height: "h-[350px]",
    titleSize: "font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold",
  },
  {
    label: "Commercial",
    title: "Commercial & Design-Build",
    description:
      "Concept to construction for commercial and industrial projects across Central Mass.",
    href: "/services/commercial",
    image: "/images/home/commercial-ac-repair.jpg",
    alt: "Commercial mechanical and HVAC work",
    colSpan: "md:col-span-12",
    height: "h-[300px]",
    titleSize: "font-headline text-[20px] md:text-[24px] lg:text-[48px] leading-[1.1] font-bold",
  },
];

export function ServicesOverview() {
  return (
    <section className="w-full bg-surface px-[20px] md:px-[40px] py-[48px] md:py-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-primary uppercase mb-8 md:mb-12">
            Core Services
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
          {services.map((service, i) => (
            <FadeIn
              key={service.label}
              className={`${service.colSpan} ${service.height}`}
              delay={i * 0.1}
            >
              <Link
                href={service.href}
                aria-label={`${service.title} — learn more`}
                className="group relative block w-full h-full min-h-[350px] border-2 border-primary overflow-hidden"
              >
                <Image
                  src={withBasePath(service.image)}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover grayscale-[0.3] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-8 flex flex-col gap-2">
                  <h3
                    className={`${service.titleSize} text-on-primary uppercase`}
                  >
                    {service.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.5] text-on-primary/90 max-w-lg">
                    {service.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 font-body text-[12px] tracking-[0.15em] font-bold uppercase text-surface-variant">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
