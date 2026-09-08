"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { motion } from "framer-motion";

export function AboutPreview() {
  const { data: { school: schoolData } } = useTemplate();

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Strong School Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"
                alt="Green Valley Campus Life"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Holistic Development</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Compact Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-emerald-400 font-bold uppercase text-xs sm:text-sm tracking-widest mb-3">
              About {schoolData.schoolName}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight mb-5">
              More Than a School. <br />
              <span className="text-emerald-400">A Place to Belong.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Founded in {schoolData.establishedYear}, Green Valley International School provides a nurturing environment where students are inspired to explore their passions, build resilient character, and achieve academic excellence.
            </p>

            <Link href="/about">
              <AnimatedButton className="h-12 px-7 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full shadow-lg shadow-emerald-500/20 flex items-center gap-2 border-none">
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
