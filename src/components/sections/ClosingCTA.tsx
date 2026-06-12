import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/motion/FadeIn";

export function ClosingCTA() {
  return (
    <section className="w-full bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-on-primary border-t-4 border-primary">
      <FadeIn className="max-w-[1200px] mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="font-headline text-[32px] sm:text-[48px] md:text-[80px] leading-none font-extrabold tracking-[-0.02em] uppercase max-w-4xl">
          No heat, no cooling, or no water? Call the crew that shows up.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 w-full max-w-[280px] md:max-w-[600px] mx-auto">
          <Link
            href="/contact"
            className="w-full text-center bg-white text-primary px-8 py-3 md:px-12 md:py-4 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase hover:bg-surface-variant transition-colors"
          >
            Request Service
          </Link>
          <Link
            href="/emergency"
            className="w-full text-center bg-secondary text-white px-8 py-3 md:px-12 md:py-4 font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase hover:opacity-90 transition-all"
          >
            24/7 Emergency Help
          </Link>
        </div>
        <div className="flex flex-col items-center mt-2">
          <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase opacity-70">
            Call a Licensed Pro
          </span>
          <a
            href={siteConfig.phoneHref}
            className="font-headline text-[36px] sm:text-[48px] md:text-[64px] leading-none text-surface-variant font-extrabold tracking-[-0.02em]"
          >
            {siteConfig.phone}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
