import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Award, ClipboardCheck } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
};

const fleet = [
  {
    src: "/images/fleet/garabedian-plumbing-heating-van-worcester-ma.webp",
    alt: "Garabedian Plumbing & Heating service van in Worcester, MA",
  },
  {
    src: "/images/fleet/garabedian-plumbing-heating-van-central-ma.webp",
    alt: "Garabedian Plumbing & Heating service van serving Central Massachusetts",
  },
  {
    src: "/images/fleet/garabedian-plumbing-heating-van-shrewsbury-ma.webp",
    alt: "Garabedian Plumbing & Heating service van in Shrewsbury, MA",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <FadeIn>
        <section className="w-full bg-primary py-[48px] md:py-[80px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[80px] leading-[1.0] tracking-[-0.02em] font-extrabold text-white uppercase mb-4">
              About Garabedian <br /> Plumbing, Heating & AC
            </h1>
            <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-white/80 max-w-2xl">
              Family-owned since 1916. Licensed and insured. Always here when
              you need us.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Story */}
      <FadeIn>
        <section className="w-full bg-background py-12 md:py-20 px-[20px] md:px-[40px] border-b-2 border-surface-container-highest">
          <div className="max-w-[1200px] mx-auto">
            <div className="font-body text-[15px] md:text-[18px] leading-[1.6] text-primary max-w-2xl space-y-6">
              <p>
                For more than 100 years, Garabedian Plumbing, Heating & AC has
                kept homes and businesses across Worcester County and Central
                Massachusetts running smoothly. Founded in 1916 and now in our
                fourth generation of family ownership, we{"'"}ve built our
                reputation the old-fashioned way — by showing up, doing honest
                work, and standing behind every job.
              </p>
              <p>
                We handle it all, from a leaky faucet or clogged drain to full
                heating system installations, boiler and water heater
                replacements, gas piping, and large commercial projects. Our
                technicians are equipped with the tools, training and support
                required to address all your plumbing, heating and cooling
                needs, but what really sets us apart is how we treat people.
                When you call, you reach a real, live member of our team — day
                or night. And whether your call is an emergency or not, we aim
                to provide solutions in as timely a manner as possible. We
                appreciate your business, and we want to express our gratitude
                by attending to your issue as quickly, efficiently and
                professionally as we can.
              </p>
              <p>
                A century in business has taught us that comfort, safety, and
                trust matter most. Whether we{"'"}re installing a garbage
                disposal in one of the area{"'"}s oldest buildings or installing
                the latest high-efficiency system in a newly constructed home,
                our goal is the same: to get the job done right the first time
                and leave your home or business better than we found it.
              </p>
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
                        Licensed
                      </strong>
                      <span>
                        Working under Massachusetts Master Plumber License
                        #8875-PL-M.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <ClipboardCheck className="w-6 h-6 text-surface-variant flex-shrink-0" />
                    <div className="font-body text-[15px] md:text-[18px] leading-[1.6]">
                      <strong className="font-bold uppercase block text-sm tracking-wider opacity-70">
                        Code Compliant
                      </strong>
                      <span>
                        Working closely with city and town inspectors to uphold
                        Massachusetts Code of Regulations 248-CMR.
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
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Holden
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Grafton
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Leicester
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      West Boylston
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Princeton
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Northborough
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Westborough
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-surface-variant" />
                      Spencer
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
                Four generations of family ownership means we{"'"}re not going anywhere. We{"'"}ve been here since 1916, and we plan to keep it that way.
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
                Working under Massachusetts Master Plumber License #8875-PL-M, and fully insured for your peace of mind.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Our Fleet */}
      <FadeIn>
        <section className="w-full bg-background py-12 md:py-20 px-[20px] md:px-[40px] border-t-2 border-surface-container-highest">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-headline text-[36px] leading-[1.1] md:text-[48px] md:leading-[1.1] font-bold uppercase text-primary">
                On The Road Since 1916
              </h2>
              <p className="font-body text-[15px] md:text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto mt-4">
                Our trucks are a familiar sight across Worcester County — fully
                stocked and ready to roll, day or night.
              </p>
            </div>
            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-[24px] overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-[20px] px-[20px] md:mx-0 md:px-0 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {fleet.map((van) => (
                <div
                  key={van.src}
                  className="snap-center shrink-0 w-[82%] sm:w-[55%] md:w-auto border-4 md:border-[6px] border-primary aspect-[4/3] relative bg-surface-variant overflow-hidden group"
                >
                  <Image
                    src={withBasePath(van.src)}
                    alt={van.alt}
                    fill
                    sizes="(max-width: 768px) 82vw, 33vw"
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            <p className="md:hidden text-center font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase text-on-surface-variant/70 mt-4">
              Swipe to see the fleet →
            </p>
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
              className="bg-white text-primary font-body text-[12px] leading-[1.0] tracking-[0.15em] font-bold px-10 py-5 uppercase hover:bg-surface-variant transition-colors"
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
