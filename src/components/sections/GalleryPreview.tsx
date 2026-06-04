import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { withBasePath } from "@/lib/base-path";

const projects = [
  {
    image: "/images/home/tankless-water-heater-install.jpg",
    alt: "Tankless water heater install",
    location: "Shrewsbury, MA",
    title: "Water Heater Install",
  },
  {
    image: "/images/home/bathroom-fixture-upgrade.jpg",
    alt: "Bathroom upgrade",
    location: "Worcester, MA",
    title: "Fixture Upgrade",
  },
  {
    image: "/images/home/furnace-maintenance.jpg",
    alt: "Furnace maintenance",
    location: "Auburn, MA",
    title: "Furnace Tune-Up",
  },
  {
    image: "/images/home/commercial-ac-repair.jpg",
    alt: "Commercial AC repair",
    location: "Northborough, MA",
    title: "Commercial A/C Repair",
  },
];

export function GalleryPreview() {
  return (
    <section className="w-full bg-surface px-[20px] md:px-[40px] py-[48px] md:py-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-primary uppercase">
              Recent Work
            </h2>
            <Link
              href="/gallery"
              className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase border-b-2 border-primary text-primary pb-1"
            >
              View Full Gallery
            </Link>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px]">
          {projects.map((project, i) => (
            <FadeIn key={project.title} className="relative group" delay={i * 0.1}>
              <div className="aspect-square md:aspect-[3/4] border-2 md:border-4 border-primary overflow-hidden relative">
                <Image
                  src={withBasePath(project.image)}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale-[0.1]"
                />
              </div>
              <div className="mt-2 md:mt-4">
                <span className="bg-primary text-on-primary px-2 md:px-3 py-1 font-body text-[10px] md:text-[12px] leading-none tracking-[0.1em] md:tracking-[0.15em] font-bold uppercase">
                  {project.location}
                </span>
                <p className="mt-1 md:mt-2 font-headline text-[14px] md:text-[24px] leading-[1.2] font-semibold uppercase">
                  {project.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
