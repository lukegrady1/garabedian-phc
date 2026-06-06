import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="bg-primary text-white">
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] py-10 md:py-16">
          <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[80px] leading-[1] tracking-[-0.02em] font-extrabold uppercase">
            Privacy Policy
          </h1>
        </div>
      </header>

      <FadeIn>
        <section className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] py-[48px] md:py-[80px]">
          <div className="max-w-[800px] font-body text-[15px] md:text-[16px] leading-[1.8] text-primary space-y-8">
            <p>
              Garabedian Plumbing & Heating Inc{"'"}s Privacy Policy is below.
              Questions concerning this policy may be submitted to{" "}
              <a
                href="mailto:INFO@GARABEDIANPLUMBING.COM"
                className="text-secondary underline font-bold"
              >
                INFO@GARABEDIANPLUMBING.COM
              </a>
              .
            </p>

            <h2 className="font-headline text-[24px] md:text-[36px] leading-[1.2] font-bold uppercase text-primary">
              Privacy Policy
            </h2>

            <p>
              No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes. This includes
              text messaging originator opt-in data and consent. This
              information will not be shared with any third parties.
            </p>

            <p>
              We may collect email addresses, phone numbers, and names to send
              updates, newsletters, or fundraising alerts. All data is stored
              securely, and we do not sell your information. If you opt in, you
              may receive periodic messages; reply STOP to unsubscribe.
            </p>

            <h2 className="font-headline text-[24px] md:text-[36px] leading-[1.2] font-bold uppercase text-primary">
              SMS Privacy Policy
            </h2>

            <p>
              Peter Garabedian Plumbing, Inc will collect text messaging opt-in
              from customers on our web form, and we will also be collecting
              opt-in verbally from our customers. Our customers will be able to
              opt in by phone or in person to receive text messages. When a
              customer is registered for the first time, he or she is asked to
              provide his or her phone number, and staff is trained to ask
              whether the customer would like to opt in to SMS-based billing
              notifications, appointment reminders, dispatch notifications and
              job completion surveys. Customers will be verbally informed that
              message and data rates may apply, that message frequency may vary,
              and that they can text HELP for support or more information and
              STOP to unsubscribe at any time so that no further messages will
              be sent. Customers will also be informed that their information
              will not be shared with third parties.
            </p>

            <p>
              We reserve the right to amend this policy at any time. For
              questions, contact Garabedian Plumbing at{" "}
              <a
                href="tel:5087574803"
                className="text-secondary underline font-bold"
              >
                508-757-4803
              </a>{" "}
              or email us at{" "}
              <a
                href="mailto:info@garabedianplumbing.com"
                className="text-secondary underline font-bold"
              >
                info@garabedianplumbing.com
              </a>
              .
            </p>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
