"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTemplate } from "@/context/TemplateContext";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  as?: any;
}

export function AnimatedSection({ children, className, id, delay = 0, as: Component = motion.section }: AnimatedSectionProps) {
  const { data: { animation } } = useTemplate();
  const shouldReduceMotion = useReducedMotion();
  
  if (!animation.globalEnabled || shouldReduceMotion) {
    const Tag = Component === motion.section ? 'section' : Component === motion.div ? 'div' : 'section';
    return <Tag id={id} className={className}>{children}</Tag>;
  }

  const getVariants = () => {
    const distance = animation.intensity === "high" ? 100 : animation.intensity === "low" ? 20 : 50;
    
    switch (animation.sectionReveal as string) {
      case "fadeUp": return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
      case "fadeDown": return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
      case "fadeLeft": return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
      case "fadeRight": return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
      case "fadeIn": default: return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={getVariants()}
      transition={{ duration: animation.duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Component>
  );
}
