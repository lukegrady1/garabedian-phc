"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const items = [
  "4.2 Stars",
  "Family Owned Since 1916",
  "Licensed and Insured",
  "Upfront Flat-Rate Pricing",
  "24/7 Emergency Service",
];

export function TrustStrip() {
  return (
    <section className="w-full bg-primary py-4 lg:py-12 border-y-2 border-primary overflow-hidden">
      {/* Desktop: static row */}
      <div className="hidden lg:block max-w-[1200px] mx-auto px-[40px]">
        <FadeIn>
          <div className="flex flex-wrap justify-between items-center gap-y-6 text-on-primary">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-secondary fill-secondary" />
              <span className="font-headline text-[24px] leading-[1.2] font-semibold uppercase">
                {items[0]}
              </span>
            </div>
            {items.slice(1).map((item, i) => (
              <div key={item} className="flex items-center gap-6">
                <div className="h-8 w-px bg-white/20" />
                <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Mobile: scrolling ticker */}
      <div className="lg:hidden">
        <div className="flex animate-scroll-left [animation-duration:25s] w-max gap-8 text-on-primary">
          {[...Array(2)].map((_, copyIdx) => (
            <div key={copyIdx} className="flex items-center gap-8 shrink-0">
              {items.map((item, i) => (
                <div key={`${copyIdx}-${i}`} className="flex items-center gap-2 shrink-0">
                  {i === 0 && (
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                  )}
                  <span className="font-body text-[11px] leading-none tracking-[0.1em] font-bold uppercase whitespace-nowrap">
                    {item}
                  </span>
                  {i < items.length - 1 && (
                    <span className="ml-6 text-white/30">|</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
