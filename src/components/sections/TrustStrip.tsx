import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function TrustStrip() {
  return (
    <section className="w-full bg-primary py-12 border-y-2 border-primary">
      <div className="max-w-[1200px] mx-auto px-[40px]">
        <FadeIn>
          <div className="flex flex-wrap justify-between items-center gap-y-6 text-on-primary">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-secondary fill-secondary" />
              <span className="font-headline text-[24px] leading-[1.2] font-semibold">
                4.9 STARS
              </span>
            </div>
            <div className="h-8 w-px bg-white/20 hidden md:block" />
            <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase">
              Family owned since 1978
            </span>
            <div className="h-8 w-px bg-white/20 hidden md:block" />
            <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase">
              Licensed and insured
            </span>
            <div className="h-8 w-px bg-white/20 hidden md:block" />
            <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase">
              Upfront flat-rate pricing
            </span>
            <div className="h-8 w-px bg-white/20 hidden md:block" />
            <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase">
              24/7 emergency service
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
