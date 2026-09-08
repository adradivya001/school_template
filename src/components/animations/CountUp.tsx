"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useTemplate } from "@/context/TemplateContext";

export function CountUp({ end, suffix = "", className }: { end: number, suffix?: string, className?: string }) {
  const { data: { animation } } = useTemplate();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100,
  });
  
  const [displayValue, setDisplayValue] = useState(end);

  useEffect(() => {
    if (!animation?.globalEnabled) {
      setDisplayValue(end);
      return;
    }
    
    if (isInView) {
      motionValue.set(end);
    } else {
      // Set to end immediately as safety fallback
      setDisplayValue(end);
    }
  }, [isInView, end, animation?.globalEnabled, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (Math.abs(latest - end) < 0.5) {
        setDisplayValue(end);
      } else {
        setDisplayValue(Math.floor(latest));
      }
    });
  }, [springValue, end]);

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}
