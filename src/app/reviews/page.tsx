"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/motion/FadeIn";

const topRowReviews = [
  {
    quote:
      '"Garabedian showed up within an hour of my calling about a burst pipe in the basement. Professional, clean, and explained exactly what went wrong."',
    name: "Robert Harrison",
    location: "Auburn, MA",
  },
  {
    quote:
      '"Excellent HVAC installation. The team was punctual and very respectful of our home. Our new high-efficiency heating system is working perfectly."',
    name: "Sarah Jenkins",
    location: "Worcester, MA",
  },
  {
    quote:
      '"I\'ve been using Garabedian for years for both my rental properties and my own home. They are the only plumbers I trust."',
    name: "Mark Thompson",
    location: "Shrewsbury, MA",
  },
];

const bottomRowReviews = [
  {
    quote:
      '"Friendly service and very thorough. They diagnosed a furnace issue that two other companies missed. I can\'t thank them enough."',
    name: "Elizabeth Vance",
    location: "Holden, MA",
  },
  {
    quote:
      '"Best plumbing company in Central Mass. They handle everything from leaky faucets to complex commercial units with expertise."',
    name: "Gregory Chen",
    location: "Millbury, MA",
  },
  {
    quote:
      '"Professionalism at its finest. From the dispatcher to the technician, everyone was helpful and clear about costs."',
    name: "Linda Peters",
    location: "Leicester, MA",
  },
];

function ReviewCard({
  quote,
  name,
  location,
}: {
  quote: string;
  name: string;
  location: string;
}) {
  return (
    <div className="bg-surface border-2 border-primary p-4 md:p-8 flex flex-col w-[260px] md:w-[400px] shrink-0">
      <div className="flex gap-0.5 text-primary mb-3 md:mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
        ))}
      </div>
      <p className="font-body text-[14px] md:text-[18px] leading-[1.5] md:leading-[1.6] italic mb-4 md:mb-8 flex-grow text-primary">
        {quote}
      </p>
      <div>
        <p className="font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
          {name}
        </p>
        <p className="font-body text-[10px] md:text-[12px] leading-[1.0] tracking-[0.15em] font-bold uppercase opacity-60 text-primary">
          {location}
        </p>
      </div>
    </div>
  );
}

function ScrollRow({
  reviews,
  direction,
}: {
  reviews: typeof topRowReviews;
  direction: "left" | "right";
}) {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  // Right-scrolling row needs 3 copies so cards are visible at the -33% start position
  const copies = direction === "right" ? 3 : 2;

  return (
    <div className="pause-on-hover">
      <div className={`flex ${animationClass} w-max gap-[24px] px-[40px]`}>
        {Array.from({ length: copies }).map((_, copyIdx) => (
          <div key={copyIdx} className="flex gap-[24px]">
            {reviews.map((review) => (
              <ReviewCard key={`${copyIdx}-${review.name}`} {...review} />
            ))}
          </div>
        ))}
      </div>
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
                Our reputation is built on one home, one leak, and one furnace
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

        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={siteConfig.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold px-8 md:px-12 py-4 md:py-6 uppercase hover:opacity-90 transition-all flex items-center justify-center gap-4"
          >
            Read More Reviews
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href={siteConfig.googleWriteReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary font-headline text-[18px] md:text-[24px] leading-[1.2] font-semibold px-8 md:px-12 py-4 md:py-6 uppercase hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-4"
          >
            Leave a Review
            <Star className="w-5 h-5 md:w-6 md:h-6" />
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
                className="bg-secondary text-white font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold px-10 py-5 uppercase hover:opacity-90 transition-all"
              >
                Schedule Service
              </Link>
              <Link
                href="/emergency"
                className="border-2 border-white text-white font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold px-10 py-5 uppercase hover:bg-white hover:text-primary transition-all"
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
