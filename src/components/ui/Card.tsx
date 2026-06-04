import { cn } from "@/lib/cn";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
};

export function Card({ className, children, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "border-2 border-primary p-8",
        hover &&
          "transition-shadow hover:shadow-lg hover:-translate-y-1 transition-transform duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
