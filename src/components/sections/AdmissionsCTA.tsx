"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { motion } from "framer-motion";

interface AdmissionsCTAProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonLink?: string;
  badge?: string;
}

export function AdmissionsCTA({
  title = "Their Future Starts Here.",
  description = "Take the first step toward a transformative educational journey. Applications are now open for the upcoming academic year.",
  buttonLabel = "Begin Admission",
  buttonLink = "/admissions/apply",
  badge = "Admissions Open 2026–27",
}: AdmissionsCTAProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden font-sans">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-white tracking-tight mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            {description}
          </p>

          <Link href={buttonLink}>
            <AnimatedButton className="h-13 px-8 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base rounded-full shadow-2xl shadow-emerald-500/25 flex items-center gap-2 border-none hover:scale-105 transition-all">
              <span>{buttonLabel}</span>
              <ArrowRight className="w-5 h-5" />
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
