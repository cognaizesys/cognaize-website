import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success";
  children: ReactNode;
}

export function Badge({ variant = "default", children, className, ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary text-white",
    outline: "border border-primary text-primary bg-transparent",
    success: "bg-green-600 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
