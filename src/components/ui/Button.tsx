import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-primary text-white hover:opacity-90",
  emergency: "bg-secondary text-white hover:opacity-90",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  white:
    "border-2 border-white text-white hover:bg-white hover:text-primary",
  ghost: "text-primary underline hover:text-secondary",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-block uppercase font-headline tracking-widest rounded-none px-6 py-3 transition-colors",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
