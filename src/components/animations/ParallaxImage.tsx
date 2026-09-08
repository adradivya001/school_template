"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useTemplate } from "@/context/TemplateContext";
import { useRef, ReactNode } from "react";

export function ParallaxImage({ 
  src, 
  alt, 
  className,
  overlay 
}: { 
  src: string, 
  alt?: string, 
  className?: string,
  overlay?: ReactNode
}) {
  const { data: { animation } } = useTemplate();
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  if (!animation.globalEnabled || !animation.parallaxEnabled || shouldReduceMotion) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        {overlay && <div className="absolute inset-0">{overlay}</div>}
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img 
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-[120%] object-cover origin-top"
        style={{ y, top: "-10%" }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {overlay && <div className="absolute inset-0 z-10">{overlay}</div>}
    </div>
  );
}
