import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Flame, Snowflake } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Gallery",
};

function GalleryItem({
  src,
  alt,
  town,
  className,
}: {
  src: string;
  alt: string;
  town: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-2 border-primary hover:border-secondary transition-colors group",
        className
      )}
    >
      <Image
        src={withBasePath(src)}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute bottom-0 right-0 bg-primary text-white py-1 px-3 font-body text-[10px] uppercase tracking-[0.1em] font-bold z-10">
        {town}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero Band */}
      <FadeIn>
        <section className="w-full bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[80px] leading-[1.0] tracking-[-0.02em] font-extrabold text-white uppercase mb-4">
              Project Gallery
            </h1>
            <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-white/80 max-w-2xl">
              A visual record of professional plumbing, heating, and air
              conditioning craftsmanship. No filters, no staged mockups—just
              real results for our neighbors across Central Massachusetts.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Plumbing Section */}
      <FadeIn>
        <section className="w-full bg-surface py-[48px] md:py-[80px] px-[20px] md:px-[40px]" id="plumbing">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-on-surface uppercase flex items-center gap-4">
              <Droplets className="w-8 h-8 text-primary" />
              Plumbing
            </h2>
            <div className="h-1 bg-primary w-full mt-2 mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[24px]">
              <GalleryItem
                src="/images/gallery/plumbing-auburn.jpg"
                alt="Professional plumbing"
                town="Auburn, MA"
                className="aspect-[16/10] md:aspect-square col-span-2 md:col-span-1"
              />
              <GalleryItem
                src="/images/gallery/pex-tubing-worcester.jpg"
                alt="PEX tubing"
                town="Worcester, MA"
                className="aspect-square"
              />
              <GalleryItem
                src="/images/gallery/vintage-radiator-shrewsbury.jpg"
                alt="Vintage radiator"
                town="Shrewsbury, MA"
                className="aspect-square"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Heating Section */}
      <FadeIn>
        <section
          className="w-full bg-surface-container py-[48px] md:py-[80px] px-[20px] md:px-[40px]"
          id="heating"
        >
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-on-surface uppercase flex items-center gap-4">
              <Flame className="w-8 h-8 text-primary" />
              Heating
            </h2>
            <div className="h-1 bg-primary w-full mt-2 mb-8" />
            <div className="grid grid-cols-2 gap-3 md:gap-[24px]">
              <GalleryItem
                src="/images/gallery/boiler-system-millbury.jpg"
                alt="Boiler system"
                town="Millbury, MA"
                className="aspect-[4/5] md:col-span-2"
              />
              <GalleryItem
                src="/images/gallery/furnace-control-grafton.jpg"
                alt="Furnace control"
                town="Grafton, MA"
                className="aspect-[4/5]"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Air Conditioning Section */}
      <FadeIn>
        <section className="w-full bg-surface py-[48px] md:py-[80px] px-[20px] md:px-[40px]" id="ac">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-on-surface uppercase flex items-center gap-4">
              <Snowflake className="w-8 h-8 text-primary" />
              Air Conditioning
            </h2>
            <div className="h-1 bg-primary w-full mt-2 mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[24px]">
              <GalleryItem
                src="/images/gallery/ac-condenser-holden.jpg"
                alt="AC condenser"
                town="Holden, MA"
                className="aspect-[16/10] md:aspect-square col-span-2 md:col-span-1"
              />
              <GalleryItem
                src="/images/gallery/mini-split-boylston.jpg"
                alt="Mini-split unit"
                town="Boylston, MA"
                className="aspect-square"
              />
              <GalleryItem
                src="/images/gallery/custom-ductwork-westborough.jpg"
                alt="Custom ductwork"
                town="Westborough, MA"
                className="aspect-square"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="w-full bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-center">
          <div className="max-w-[800px] mx-auto">
            <h3 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-white uppercase mb-6">
              Need Results Like These?
            </h3>
            <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-white/70 mb-10">
              We bring the same level of precision and mechanical integrity to
              every job site, large or small.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-secondary text-white px-10 py-4 font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold uppercase hover:opacity-90 transition-opacity"
              >
                Request Service
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="border-2 border-white text-white px-10 py-4 font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold uppercase hover:bg-white hover:text-primary transition-colors"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
