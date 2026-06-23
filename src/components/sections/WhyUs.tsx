import { FadeIn } from "@/components/motion/FadeIn";

const reasons = [
  {
    number: "01",
    title: "Honest Pricing",
    description:
      "Competitive hourly time and material or quoted job pricing to keep you informed about costs before the project starts.",
  },
  {
    number: "02",
    title: "Reliable",
    description:
      "We have a team of skilled technicians ready to dispatch every day so that we can respond to your call as quickly as possible.",
  },
  {
    number: "03",
    title: "Real People",
    description:
      "Both during and after office hours, you will speak to a local dispatcher who knows the area and the crew.",
  },
];

export function WhyUs() {
  return (
    <section className="w-full bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-on-primary border-y-4 border-primary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] items-center">
        <FadeIn>
          <h2 className="font-headline text-[32px] sm:text-[48px] md:text-[80px] leading-none font-extrabold tracking-[-0.02em] uppercase">
            Why we&apos;re the{" "}
            <span className="text-surface-variant">first call</span> in Central
            Mass.
          </h2>
        </FadeIn>
        <FadeIn className="flex flex-col gap-10" delay={0.2}>
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="flex gap-6 border-l-4 border-surface-variant pl-8"
            >
              <span className="font-headline text-[24px] leading-[1.2] font-semibold text-surface-variant shrink-0">
                {reason.number}
              </span>
              <div>
                <h4 className="font-headline text-[24px] leading-[1.2] font-semibold uppercase mb-2">
                  {reason.title}
                </h4>
                <p className="font-body text-[16px] leading-[1.5] text-on-primary/80">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
