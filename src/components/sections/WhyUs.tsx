import { FadeIn } from "@/components/motion/FadeIn";

const reasons = [
  {
    number: "01",
    title: "Flat-Rate Quotes",
    description:
      "No hourly surprises. You know the exact price before we pick up a tool.",
  },
  {
    number: "02",
    title: "Respect for your home",
    description:
      "Floor protectors, clean workspaces, and total cleanup. We leave it better than we found it.",
  },
  {
    number: "03",
    title: "Real person answers",
    description:
      "No automated loops. You get a local dispatcher who knows the area and the crew.",
  },
];

export function WhyUs() {
  return (
    <section className="w-full bg-primary py-[80px] px-[40px] text-on-primary border-y-4 border-primary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] items-center">
        <FadeIn>
          <h2 className="font-headline text-[80px] leading-none font-extrabold tracking-[-0.02em] uppercase">
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
