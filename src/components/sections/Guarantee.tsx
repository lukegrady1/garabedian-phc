import { ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function Guarantee() {
  return (
    <section className="w-full bg-white px-[20px] md:px-[40px] py-[48px] md:py-[80px] border-b-2 border-outline">
      <FadeIn className="max-w-[1200px] mx-auto border-4 border-primary p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
        <div className="shrink-0">
          <ShieldCheck className="w-[120px] h-[120px] text-primary" strokeWidth={0.75} />
        </div>
        <div>
          <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-primary uppercase mb-4">
            The Garabedian Guarantee
          </h2>
          <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl">
            We stand by our work. Our labor and any materials that we supply are
            warrantied by Garabedian Plumbing, Heating &amp; AC for one year
            after installation, and we are fully licensed and insured.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
