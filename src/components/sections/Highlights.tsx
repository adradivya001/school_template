"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Consistent 100% board examination pass rates with rigorous CBSE curriculum.",
  },
  {
    icon: HeartHandshake,
    title: "Character & Values",
    description: "Nurturing empathy, leadership, and ethical responsibility in every child.",
  },
  {
    icon: Award,
    title: "Future-Ready Learning",
    description: "Smart classrooms, STEAM labs, robotics, and digital literacy programs.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Caring Campus",
    description: "24/7 security, lush green infrastructure, and dedicated pastoral support.",
  },
];

export function Highlights() {
  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-bold uppercase text-xs sm:text-sm tracking-widest block mb-3">
            Why Green Valley
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            Key Pillars of Our Educational Journey
          </h2>
        </div>

        {/* 4 Major Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-7 rounded-2xl flex flex-col items-start hover:border-emerald-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/about">
            <AnimatedButton className="h-12 px-7 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-full flex items-center gap-2 transition-all">
              <span>Discover What Makes Us Different</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
