"use client";

import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const displayValue = useTransform(springValue, (latest) => {
    return decimals > 0 ? latest.toFixed(decimals) : String(Math.round(latest));
  });

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        motionValue.set(target);
      } else {
        motionValue.set(target);
      }
    }
  }, [isInView, motionValue, target, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {decimals > 0 ? target.toFixed(decimals) : Math.round(target)}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
