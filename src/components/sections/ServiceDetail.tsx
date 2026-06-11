import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";
import { FadeIn } from "@/components/motion/FadeIn";
import type { ServiceContent } from "@/lib/services-content";

export function ServiceDetail({ service }: { service: ServiceContent }) {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[360px] md:min-h-[460px] flex items-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={withBasePath(service.heroImage)}
            alt={service.heroImageAlt}
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
              {service.name}
            </h1>
            <div className="w-24 h-2 bg-secondary mb-6" />
            <p className="font-body text-[13px] md:text-[15px] leading-[1.4] tracking-[0.2em] font-bold uppercase text-surface-variant max-w-2xl">
              {service.tagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro split */}
      <FadeIn>
        <section className="w-full bg-surface py-[48px] md:py-[80px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="border-2 border-primary p-1">
                <div className="relative aspect-[3/2] sm:aspect-video md:aspect-[4/5]">
                  <Image
                    src={withBasePath(service.introImage)}
                    alt={service.introImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 flex flex-col gap-6">
              <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase text-primary">
                {service.name} Done Right, Since 1916
              </h2>
              {service.intro.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-[16px] md:text-[18px] leading-[1.7] text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Offerings grid */}
      <FadeIn>
        <section className="w-full bg-surface-variant py-[48px] md:py-[80px] px-[20px] md:px-[40px] border-t-2 border-primary">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-primary uppercase mb-8 md:mb-12">
              {service.offeringsHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {service.offerings.map((offering) => (
                <div
                  key={offering.title}
                  className="bg-surface border-2 border-primary p-6 md:p-8 hover:bg-primary transition-colors group"
                >
                  <h3 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary group-hover:text-white mb-3">
                    {offering.title}
                  </h3>
                  <p className="font-body text-[15px] md:text-[16px] leading-[1.6] text-on-surface-variant group-hover:text-white/80">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Signs you need service */}
      <FadeIn>
        <section className="w-full bg-primary text-white py-[48px] md:py-[80px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-4">
              {service.signsHeading}
            </h2>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.6] text-white/80 max-w-3xl mb-8 md:mb-12">
              {service.signsIntro}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-5">
              {service.signs.map((sign) => (
                <li
                  key={sign}
                  className="flex items-start gap-4 border-l-4 border-secondary pl-5"
                >
                  <Check className="w-6 h-6 text-surface-variant shrink-0 mt-0.5" />
                  <span className="font-body text-[16px] md:text-[18px] leading-[1.5]">
                    {sign}
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
            Ready for {service.name} You Can Trust?
          </h2>
          <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-primary mb-8 max-w-2xl mx-auto">
            Serving {siteConfig.serviceArea}. Get an honest, upfront estimate from
            a licensed pro — or call now for fast service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 md:px-12 py-4 md:py-5 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              {service.estimateLabel}
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
