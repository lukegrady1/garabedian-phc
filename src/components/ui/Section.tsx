import { cn } from "@/lib/cn";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ className, children, id }: SectionProps) {
  return (
    <section id={id} className={cn("w-full px-[40px] py-[80px]", className)}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}
