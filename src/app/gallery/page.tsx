import type { Metadata } from "next";
import Link from "next/link";
import { Wrench } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Gallery",
};

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
              A visual record of professional plumbing, heating, air
              conditioning, and commercial craftsmanship across Central
              Massachusetts.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Under Construction */}
      <FadeIn>
        <section className="w-full bg-surface py-[64px] md:py-[120px] px-[20px] md:px-[40px]">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center border-2 border-primary p-10 md:p-16">
            <Wrench
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] text-primary mb-8"
              strokeWidth={1}
            />
            <h2 className="font-headline text-[32px] sm:text-[40px] md:text-[56px] leading-[1.05] font-extrabold uppercase text-primary mb-4">
              Under Construction
            </h2>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant max-w-xl">
              Our project gallery is currently under construction. We&apos;ll be
              adding real photos of our work next month — check back soon.
            </p>
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
                className="bg-white text-primary px-10 py-4 font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold uppercase hover:bg-surface-variant transition-colors"
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
