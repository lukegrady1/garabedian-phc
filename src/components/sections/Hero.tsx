import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="w-full bg-surface px-[20px] md:px-[40px] pt-6 pb-7 md:py-[80px] border-b-2 border-outline">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-[24px] items-center">
        <FadeIn className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-12 bg-primary shrink-0" />
              <span className="font-body text-[11px] md:text-[13px] leading-none tracking-[0.2em] font-bold uppercase text-primary/80">
                Master Plumber &middot; Family-Owned Since 1916
              </span>
            </div>
            <h1 className="font-headline text-[33px] sm:text-[52px] lg:text-[82px] text-primary leading-[0.95] lg:leading-[0.9] uppercase font-extrabold tracking-[-0.02em] text-balance">
              Worcester{"'"}s Trusted Plumbing, Heating &amp; Cooling Experts.
            </h1>
          </div>
          <p className="font-body text-[15px] md:text-[18px] leading-[1.5] md:leading-[1.6] text-on-surface-variant max-w-xl">
            Garabedian Plumbing has served Worcester County for over 100 years.
            Three generations of licensed professionals serving homes and
            businesses across Central Massachusetts.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mt-1 md:mt-4 max-w-[260px] sm:max-w-none">
            <Link
              href="/contact"
              className="border-2 border-transparent bg-primary text-white text-center px-8 py-3 md:px-10 md:py-4 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase hover:opacity-90 transition-colors"
            >
              Request Service
            </Link>
            <Link
              href="/emergency"
              className="border-2 border-secondary text-secondary text-center px-8 py-3 md:px-10 md:py-4 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase hover:bg-secondary hover:text-white transition-colors"
            >
              Emergency Service
            </Link>
          </div>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 mt-2"
          >
            <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold text-primary uppercase opacity-70">
              Immediate Dispatch:
            </span>
            <span className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold text-primary">
              {siteConfig.phone}
            </span>
          </a>
        </FadeIn>
        <FadeIn className="lg:col-span-5 w-full max-w-[440px] lg:max-w-none mx-auto" delay={0.2}>
          <div className="border-[6px] md:border-[12px] border-primary w-full aspect-[4/3] relative bg-surface-variant overflow-hidden">
            <Image
              src={withBasePath("/images/fleet/garabedian-plumbing-heating-van-worcester-ma.jpg")}
              alt="Garabedian Plumbing &amp; Heating service van in Worcester, MA"
              fill
              sizes="(max-width: 1024px) 440px, 42vw"
              preload={true}
              className="object-cover grayscale-[0.2]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
