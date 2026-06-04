import { cn } from "@/lib/cn";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("max-w-[1200px] mx-auto px-[40px]", className)}>
      {children}
    </div>
  );
}
