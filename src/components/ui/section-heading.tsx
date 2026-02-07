import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  light = false,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wider mb-2",
            light ? "text-white/80" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-heading font-bold tracking-tight",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/90" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
