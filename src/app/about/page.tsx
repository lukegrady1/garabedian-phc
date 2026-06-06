import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Award, Leaf } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section / Bone Band */}
      <FadeIn>
        <section className="w-full bg-background py-12 md:py-20 px-[20px] md:px-[40px] border-b-2 border-surface-container-highest">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-7">
              <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[80px] leading-[1.0] tracking-[-0.02em] font-extrabold text-primary uppercase mb-8">
                About Garabedian <br /> Plumbing & Heating
              </h1>
              <div className="font-body text-[15px] md:text-[18px] leading-[1.6] text-primary max-w-2xl space-y-6">
                <p>
                  For more than 100 years, Garabedian Plumbing & Heating has
                  kept homes and businesses across Worcester County and Central
                  Massachusetts running smoothly. Founded in 1916 and now in our
                  third generation of family ownership, we{"'"}ve built our
                  reputation the old-fashioned way — by showing up, doing honest
                  work, and standing behind every job.
                </p>
                <p>
                  We handle it all, from a leaky faucet or clogged drain to full
                  heating system installations, boiler and water heater
                  replacements, gas piping, and large commercial design-build
                  projects. Our technicians are licensed, trained, and equipped
                  with modern diagnostic tools, but what really sets us apart is
                  how we treat people. When you call, you reach a real, live
                  member of our team — day or night. And when an emergency
                  strikes, our on-call technicians understand that time is of
                  the essence.
                </p>
                <p>
                  A century in business has taught us that comfort, safety, and
                  trust matter most. Whether we{"'"}re working in one of the
                  area{"'"}s oldest buildings or installing the latest
                  high-efficiency system, our goal is the same: to get the job
                  done right the first time and leave your home or business
                  better than we found it.
                </p>
                <p className="font-bold">
                  Family-owned since 1916. Licensed and insured. Always here
                  when you need us.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative border-[12px] border-primary aspect-[4/5] overflow-hidden">
                <Image
                  src={withBasePath("/images/about/family-crew-portrait.jpg")}
                  alt="A high-contrast, professional group portrait of a multi-generational family plumbing crew standing confidently in front of a heavy-duty white service van with bold red lettering."
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                  preload
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* By The Numbers - Deep Navy Band */}
      <FadeIn>
        <section className="w-full bg-primary text-white py-12 md:py-20 px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-8 border-b-2 border-white/20 pb-4">
                  By The Numbers
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-surface-variant flex-shrink-0" />
                    <div className="font-body text-[15px] md:text-[18px] leading-[1.6]">
                      <strong className="font-bold uppercase block text-sm tracking-wider opacity-70">
                        Established
                      </strong>
                      <span>Proudly serving Worcester since 1916.</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Award className="w-6 h-6 text-surface-variant flex-shrink-0" />
                    <div className="font-body text-[15px] md:text-[18px] leading-[1.6]">
                      <strong className="font-bold uppercase block text-sm tracking-wider opacity-70">
                        Certification
                      </strong>
                      <span>
                        {siteConfig.license} on every job site.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Leaf className="w-6 h-6 text-surface-variant flex-shrink-0" />
                    <div className="font-body text-[15px] md:text-[18px] leading-[1.6]">
                      <strong className="font-bold uppercase block text-sm tracking-wider opacity-70">
                        Standard
                      </strong>
                      <span>
                        {siteConfig.epa} for safe heating and cooling operations.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 p-5 md:p-8 border-2 border-white/20">
                <h3 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase mb-6">
                  Service Reach
                </h3>
                <div className="grid grid-cols-2 gap-4 font-body text-[16px] leading-[1.5]">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Worcester
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Auburn
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Shrewsbury
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Millbury
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Holden
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Grafton
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Leicester
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      West Boylston
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold uppercase opacity-70">
                    Emergency Service Available
                  </p>
                  <p className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-bold mt-2 text-white">
                    24 / 7 / 365
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Why Choose Us Section */}
      <FadeIn>
        <section className="w-full bg-[#b3dcf1] py-12 md:py-20 px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto text-center mb-10 md:mb-16">
            <h2 className="font-headline text-[36px] leading-[1.1] md:text-[48px] md:leading-[1.1] font-bold uppercase text-primary">
              Why Choose Garabedian
            </h2>
          </div>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <div className="bg-white border-2 border-primary p-5 md:p-8 flex flex-col gap-4">
              <span className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.0] font-extrabold text-primary">100+</span>
              <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                Years in Business
              </h4>
              <p className="font-body text-[16px] leading-[1.5] text-primary">
                Three generations of family ownership means we{"'"}re not going anywhere. We{"'"}ve been here since 1916 and we plan to keep it that way.
              </p>
            </div>

            <div className="bg-white border-2 border-primary p-5 md:p-8 flex flex-col gap-4">
              <span className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.0] font-extrabold text-primary">24/7</span>
              <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                Emergency Service
              </h4>
              <p className="font-body text-[16px] leading-[1.5] text-primary">
                When a pipe bursts at midnight or your heat goes out in January, our on-call technicians are ready. A real person answers every call.
              </p>
            </div>

            <div className="bg-white border-2 border-primary p-5 md:p-8 flex flex-col gap-4">
              <span className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.0] font-extrabold text-primary">100%</span>
              <h4 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                Licensed & Insured
              </h4>
              <p className="font-body text-[16px] leading-[1.5] text-primary">
                {siteConfig.license}. {siteConfig.epa}. Fully bonded and insured so you never have to worry.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <section className="bg-primary text-white py-10 md:py-16 px-[20px] md:px-[40px] text-center">
          <h3 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-8">
            Ready to experience the Garabedian standard?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-secondary text-white font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-5 uppercase hover:opacity-90 transition-all"
            >
              Request Service
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-5 uppercase hover:bg-white hover:text-primary transition-all"
            >
              View All Services
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
