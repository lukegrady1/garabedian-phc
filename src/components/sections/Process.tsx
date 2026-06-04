import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    number: "1",
    title: "Call",
    description:
      "Describe your issue. We'll book a window that works for your schedule.",
  },
  {
    number: "2",
    title: "Diagnose",
    description:
      "Our technician arrives and performs a multi-point inspection of the problem.",
  },
  {
    number: "3",
    title: "Quote",
    description:
      "You get a clear, flat-rate quote. We don't start until you approve the price.",
  },
  {
    number: "4",
    title: "Fix",
    description:
      "We perform the repair, verify the fix with you, and clear all debris.",
  },
];

export function Process() {
  return (
    <section className="w-full bg-surface-variant px-[40px] py-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="font-headline text-[48px] leading-[1.1] font-bold text-primary uppercase mb-16 text-center">
            Our Process
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {steps.map((step, i) => (
            <FadeIn
              key={step.number}
              className="flex flex-col gap-4 border-2 border-outline bg-white p-8"
              delay={i * 0.1}
            >
              <span className="font-headline text-[80px] leading-none font-extrabold tracking-[-0.02em] text-primary">
                {step.number}
              </span>
              <h4 className="font-headline text-[24px] leading-[1.2] font-semibold uppercase">
                {step.title}
              </h4>
              <p className="font-body text-[16px] leading-[1.5] text-on-surface-variant">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
