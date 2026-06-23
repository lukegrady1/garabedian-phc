"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/motion/FadeIn";
import { reviews as allReviews, type Review } from "@/lib/reviews-data";

const half = Math.ceil(allReviews.length / 2);
const topRowReviews = allReviews.slice(0, half);
const bottomRowReviews = allReviews.slice(half);

const COPIES = 3;

function ReviewCard({ quote, name }: Review) {
  return (
    <div className="bg-surface border-2 border-primary p-4 md:p-8 flex flex-col w-[280px] md:w-[400px] h-[300px] md:h-[360px] shrink-0">
      <div className="flex gap-0.5 text-primary mb-3 md:mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
        ))}
      </div>
      <p className="font-body text-[14px] md:text-[16px] leading-[1.5] md:leading-[1.6] italic overflow-hidden line-clamp-9 md:line-clamp-8 text-primary">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary mt-auto pt-4">
        {name}
      </p>
    </div>
  );
}

function ScrollRow({
  reviews,
  direction,
}: {
  reviews: Review[];
  direction: "left" | "right";
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const copyWidth = () => el.scrollWidth / COPIES;
    // Start in the middle copy so there is room to scroll either way.
    el.scrollLeft = copyWidth();

    // Keep the scroll position within the middle copy for a seamless loop.
    const wrap = () => {
      const cw = copyWidth();
      if (cw === 0) return;
      if (el.scrollLeft >= cw * 2) el.scrollLeft -= cw;
      else if (el.scrollLeft <= 0) el.scrollLeft += cw;
    };

    const speed = 0.5 * (direction === "left" ? 1 : -1);
    let raf = 0;
    const tick = () => {
      if (!pausedRef.current) {
        el.scrollLeft += speed;
        wrap();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    el.addEventListener("scroll", wrap, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", wrap);
    };
  }, [direction]);

  const nudge = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      className="relative group/row"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto gap-[24px] px-[40px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: COPIES }).map((_, copyIdx) => (
          <div key={copyIdx} className="flex gap-[24px] shrink-0">
            {reviews.map((review) => (
              <ReviewCard key={`${copyIdx}-${review.name}`} {...review} />
            ))}
          </div>
        ))}
      </div>

      {/* Manual scroll controls */}
      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label="Scroll reviews left"
        className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/90 text-white border-2 border-white/20 hover:bg-primary transition-colors"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label="Scroll reviews right"
        className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/90 text-white border-2 border-white/20 hover:bg-primary transition-colors"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Rating Hero Band */}
      <FadeIn>
        <section className="w-full bg-primary text-white py-[48px] md:py-[80px] px-[20px] md:px-[40px] border-b-4 border-primary">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[24px]">
            <div className="text-center md:text-left">
              <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[80px] leading-[1.0] tracking-[-0.02em] font-extrabold uppercase mb-4 text-white">
                RELIABILITY
                <br />
                EARNED DAILY
              </h1>
              <p className="font-body text-[15px] md:text-[18px] leading-[1.6] opacity-80 max-w-xl text-white">
                Our reputation is built one home, one leak, and one furnace
                at a time. See why Worcester County trusts Garabedian.
              </p>
            </div>
            <div className="bg-primary/80 p-8 md:p-12 border-2 border-white/20 text-center flex flex-col items-center">
              <div className="flex gap-1 mb-4 text-white">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-current" />
                ))}
                <Star className="w-10 h-10 fill-current opacity-50" />
              </div>
              <span className="font-headline text-[64px] md:text-[100px] leading-none mb-2 text-white">
                {siteConfig.stats.rating}
              </span>
              <span className="font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold uppercase opacity-70 text-white">
                Based on {siteConfig.stats.projects} Google Reviews
              </span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Infinite Scrolling Reviews Section */}
      <section className="w-full bg-[#b3dcf1] py-[48px] md:py-[80px] overflow-hidden">
        <ScrollRow reviews={topRowReviews} direction="left" />
        <div className="h-[24px]" />
        <ScrollRow reviews={bottomRowReviews} direction="right" />

        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 max-w-[280px] sm:max-w-none mx-auto px-[20px] sm:px-0">
          <a
            href={siteConfig.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-headline text-[15px] md:text-[24px] leading-[1.2] font-semibold px-6 md:px-12 py-3 md:py-6 uppercase hover:opacity-90 transition-all flex items-center justify-center gap-2 md:gap-4"
          >
            Read More Reviews
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
          </a>
          <a
            href={siteConfig.googleWriteReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary font-headline text-[15px] md:text-[24px] leading-[1.2] font-semibold px-6 md:px-12 py-3 md:py-6 uppercase hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 md:gap-4"
          >
            Leave a Review
            <Star className="w-4 h-4 md:w-6 md:h-6" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="w-full bg-primary text-white py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-center border-t-4 border-primary">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-6 text-white">
              READY TO EXPERIENCE THE DIFFERENCE?
            </h2>
            <p className="font-body text-[15px] md:text-[18px] leading-[1.6] mb-12 opacity-80 text-white">
              Join the thousands of satisfied customers in Massachusetts.
              Contact us today for your plumbing, heating, or cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold px-10 py-5 uppercase hover:bg-surface-variant transition-colors"
              >
                Request Service
              </Link>
              <Link
                href="/emergency"
                className="bg-secondary text-white font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold px-10 py-5 uppercase hover:opacity-90 transition-all"
              >
                Emergency Help
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
