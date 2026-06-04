"use client";

import { Children } from "react";
import { cn } from "@/lib/cn";
import { FadeIn } from "./FadeIn";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function Stagger({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerProps) {
  return (
    <div className={cn(className)}>
      {Children.map(children, (child, index) => (
        <FadeIn delay={index * staggerDelay}>{child}</FadeIn>
      ))}
    </div>
  );
}
