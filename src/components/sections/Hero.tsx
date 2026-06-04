import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="w-full bg-surface px-[40px] py-[80px] border-b-2 border-outline">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
        <FadeIn className="md:col-span-7 flex flex-col gap-6">
          <h1 className="font-headline text-[64px] md:text-[80px] text-primary leading-none uppercase font-extrabold tracking-[-0.02em]">
            When it breaks, you call Garabedian.
          </h1>
          <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant max-w-xl">
            Plumbing, heating, and cooling for Worcester and Central Mass. A
            licensed family crew that shows up and does it right.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
            <Link
              href="/contact"
              className="bg-secondary text-on-secondary px-10 py-4 font-headline text-[24px] leading-[1.2] font-semibold uppercase hover:opacity-90 transition-colors"
            >
              Request Service
            </Link>
            <div className="flex flex-col">
              <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold text-primary uppercase opacity-70">
                Immediate Dispatch
              </span>
              <a
                href={siteConfig.phoneHref}
                className="font-headline text-[24px] leading-[1.2] font-semibold text-primary"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="md:col-span-5" delay={0.2}>
          <div className="border-[12px] border-primary w-full aspect-square relative bg-surface-variant overflow-hidden">
            <Image
              src="/images/home/hero-furnace-tech.jpg"
              alt="A professional plumbing technician inspecting a modern furnace"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              preload={true}
              className="object-cover grayscale-[0.2]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
