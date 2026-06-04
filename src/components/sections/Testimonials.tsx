import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const testimonials = [
  {
    quote:
      "Garabedian showed up within 2 hours of my call about a burst pipe. Fast, clean, and the price was exactly what they quoted.",
    author: "Michael S.",
    location: "Grafton",
  },
  {
    quote:
      "Finally a crew that actually answers the phone. They fixed our A/C during a 95-degree week. True lifesavers.",
    author: "Sarah J.",
    location: "Worcester",
  },
  {
    quote:
      "Professional, licensed, and local. They've handled our plumbing for years and we wouldn't call anyone else.",
    author: "David L.",
    location: "Holden",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4 text-surface-variant">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="w-full bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-on-primary">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-10 md:mb-16 text-center">
            What Neighbors Say
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {testimonials.map((testimonial, i) => (
            <FadeIn
              key={testimonial.author}
              className="bg-primary/50 p-5 md:p-8 border-l-4 border-surface-variant"
              delay={i * 0.1}
            >
              <Stars />
              <p className="font-body text-[15px] md:text-[18px] leading-[1.6] italic mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase text-surface-variant">
                &mdash; {testimonial.author}, {testimonial.location}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
