"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/cn";
import { FadeIn } from "@/components/motion/FadeIn";

const faqs = [
  {
    question: "Do you charge by the hour?",
    answer:
      "Yes. We charge by the hour for service calls, but we can also provide estimates for some jobs upon request.",
  },
  {
    question: "Are you available on weekends?",
    answer:
      "Yes. We provide 24/7 emergency service for plumbing leaks, no-heat calls, and major system failures.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve the city of Worcester and the surrounding towns in Central Massachusetts, including Shrewsbury, Auburn, Holden, Grafton, Northborough, Millbury, Leicester, West Boylston, Princeton, Westborough, and Spencer.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-surface px-[20px] md:px-[40px] py-[48px] md:py-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-primary uppercase mb-8 md:mb-12">
            Common Questions
          </h2>
        </FadeIn>
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const isLast = i === faqs.length - 1;
            return (
              <FadeIn key={faq.question} delay={i * 0.1}>
                <div
                  className={cn(
                    "py-8 border-t-2 border-outline cursor-pointer",
                    isLast && "border-b-2"
                  )}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase">
                      {faq.question}
                    </h4>
                    {isOpen ? (
                      <Minus className="w-6 h-6 text-primary shrink-0" />
                    ) : (
                      <Plus className="w-6 h-6 text-primary shrink-0" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
