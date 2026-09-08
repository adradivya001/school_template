"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTemplate } from "@/context/TemplateContext";
import { ReactNode } from "react";

export function StaggerContainer({ children, className }: { children: ReactNode, className?: string }) {
  const { data: { animation } } = useTemplate();
  const shouldReduceMotion = useReducedMotion();

  if (!animation.globalEnabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: animation.stagger,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode, className?: string }) {
  const { data: { animation } } = useTemplate();
  const shouldReduceMotion = useReducedMotion();

  if (!animation.globalEnabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const distance = animation.intensity === "high" ? 50 : 20;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, transition: { duration: animation.duration, ease: "easeOut" } }
      }}
    >
      {children}
    </motion.div>
  );
}
