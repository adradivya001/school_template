"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { motion } from "framer-motion";

export function EventsNews() {
  const { data: { school: schoolData } } = useTemplate();

  const items = schoolData.events.slice(0, 3);

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-emerald-400 font-bold uppercase text-xs sm:text-sm tracking-widest block mb-2">
              Campus Happenings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
              Latest News & Events
            </h2>
          </div>

          <Link href="/news-events" className="hidden sm:inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
            <span>View All News & Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Latest Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {items.map((event, idx) => (
            <motion.div
              key={event.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-950/80 rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-emerald-500/30 transition-all shadow-xl hover:-translate-y-1 duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {event.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <Link
                  href="/news-events"
                  className="text-emerald-400 font-bold text-sm flex items-center gap-1.5 hover:text-emerald-300 transition-colors mt-auto group/link"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center sm:hidden">
          <Link href="/news-events">
            <AnimatedButton className="h-12 px-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-full flex items-center gap-2">
              <span>View All News & Events</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
