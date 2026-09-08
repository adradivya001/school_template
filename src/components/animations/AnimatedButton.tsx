"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTemplate } from "@/context/TemplateContext";
import { ReactNode, ComponentProps } from "react";
import { Button } from "@/components/ui/button";

export function AnimatedButton({ children, className, ...props }: ComponentProps<typeof Button>) {
  const { data: { animation } } = useTemplate();
  const shouldReduceMotion = useReducedMotion();

  if (!animation.globalEnabled || !animation.hoverEffects || shouldReduceMotion) {
    return <Button className={className} {...props}>{children}</Button>;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block w-full sm:w-auto"
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
