"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, X, Compass } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { CountUp } from "@/components/animations/CountUp";
import { HeroConfig } from "@/types";

export function Hero() {
  const { data: { hero: customHero } } = useTemplate();

  const heroConfig: HeroConfig = {
    badgeText: customHero?.badgeText || "ADMISSIONS OPEN • 2026–27",
    eyebrowText: customHero?.eyebrowText || "",
    titleLine1: customHero?.titleLine1 || "Where Curiosity",
    titleLine2: customHero?.titleLine2 || "Becomes Confidence.",
    highlightedWord: customHero?.highlightedWord || "Confidence.",
    description:
      customHero?.description ||
      "An education that nurtures curiosity, builds character, and prepares every child for a changing world.",
    primaryCtaLabel: customHero?.primaryCtaLabel || "Explore Our School",
    primaryCtaLink: customHero?.primaryCtaLink || "/campus",
    secondaryCtaLabel: customHero?.secondaryCtaLabel || "Begin Admission",
    secondaryCtaLink: customHero?.secondaryCtaLink || "/admissions",
    watchTourLabel: customHero?.watchTourLabel || "Watch Campus Tour",
    campusTourVideoUrl:
      customHero?.campusTourVideoUrl ||
      "https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-41549-large.mp4",
    desktopVideoUrl:
      customHero?.desktopVideoUrl ||
      "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-walking-on-a-college-campus-41551-large.mp4",
    mobileVideoUrl:
      customHero?.mobileVideoUrl ||
      "https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-41549-large.mp4",
    posterImage:
      customHero?.posterImage ||
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=85&w=2000",
    mobilePosterImage:
      customHero?.mobilePosterImage ||
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=85&w=800",
    statistics: customHero?.statistics || [
      { value: 5, suffix: "+", label: "Years of Excellence" },
      { value: 1200, suffix: "+", label: "Students" },
      { value: 85, suffix: "+", label: "Educators" },
      { value: 40, suffix: "+", label: "Clubs & Activities" },
    ],
  };

  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  // Helper to render line 2 with highlighted word in green brand accent, no yellow underline
  const renderHighlightedTitle = () => {
    const text = heroConfig.titleLine2;
    const word = heroConfig.highlightedWord;

    if (!word || !text.includes(word)) {
      return text;
    }

    const parts = text.split(word);
    return (
      <>
        {parts[0]}
        <span className="text-emerald-400 font-extrabold">
          {word}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 pt-[146px] pb-6 md:pb-8 font-sans">
      {/* Background Image / Video with Subtle 1.035 Zoom Effect over 15 seconds */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: 1.035 }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          {/* Desktop Background Video with Classroom/Campus Image Poster */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroConfig.posterImage}
            className="w-full h-full object-cover hidden sm:block select-none pointer-events-none"
          >
            <source src={heroConfig.desktopVideoUrl} type="video/mp4" />
          </video>

          {/* Mobile Background Video / Poster */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroConfig.mobilePosterImage}
            className="w-full h-full object-cover sm:hidden select-none pointer-events-none"
          >
            <source src={heroConfig.mobileVideoUrl} type="video/mp4" />
          </video>
        </motion.div>

        {/* Dark Left-to-Right & Top Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-8 sm:px-14 md:px-20 lg:px-24 xl:px-28 flex-1 flex flex-col justify-between">
        {/* Upper-left Content Block with Precise Vertical Spacing */}
        <div className="my-auto max-w-[680px] flex flex-col items-start pt-2 pb-6">
          {/* Admissions Badge (Navbar to badge: ~60px, badge to heading: ~18px) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-[18px] shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{heroConfig.badgeText}</span>
          </motion.div>

          {/* Headline - Exactly 2 lines on desktop, Plus Jakarta Sans 72-80px font size, 700/800 weight, 0.98 line height */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[80px] font-extrabold text-white font-sans tracking-tight leading-[0.98] drop-shadow-xl"
            >
              {heroConfig.titleLine1}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[80px] font-extrabold text-white font-sans tracking-tight leading-[0.98] drop-shadow-xl"
            >
              {renderHighlightedTitle()}
            </motion.h1>
          </div>

          {/* Description - Heading to description: ~20px, max 2 lines */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-[20px] text-base sm:text-[17px] text-slate-300 font-normal max-w-[620px] leading-relaxed drop-shadow"
          >
            {heroConfig.description}
          </motion.p>

          {/* CTA Buttons - Description to buttons: ~26px */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-[26px] flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <Link href={heroConfig.primaryCtaLink} className="w-full sm:w-auto">
              <AnimatedButton
                size="lg"
                className="w-full sm:w-auto h-12 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base px-6 rounded-full shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group border-none"
              >
                <span>{heroConfig.primaryCtaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </AnimatedButton>
            </Link>

            {/* Secondary CTA */}
            <Link href={heroConfig.secondaryCtaLink} className="w-full sm:w-auto">
              <AnimatedButton
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 bg-white/10 hover:bg-white/20 text-white border-white/25 font-bold text-base px-6 backdrop-blur-md rounded-full transition-all flex items-center justify-center"
              >
                <span>{heroConfig.secondaryCtaLabel}</span>
              </AnimatedButton>
            </Link>
          </motion.div>

          {/* Watch Campus Tour Action - Buttons to tour: ~14px */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-[14px]"
          >
            <button
              onClick={() => setIsTourModalOpen(true)}
              className="text-slate-300 hover:text-white font-semibold text-sm flex items-center gap-2 transition-all group"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span className="group-hover:underline">
                {heroConfig.watchTourLabel}
              </span>
            </button>
          </motion.div>
        </div>

        {/* Translucent Glass Statistics Bar (36-42px stat values, count-up animation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full pt-2"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 sm:p-6 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 divide-y-0 divide-x-0 md:divide-x divide-white/10">
            {heroConfig.statistics.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center md:items-start justify-center px-2 sm:px-6 py-1 md:py-0 first:pl-2"
              >
                <div className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-none mb-1 font-sans">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs lg:text-[13px] text-slate-300 font-medium text-center md:text-left">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-Screen Campus Tour Video Modal */}
      <AnimatePresence>
        {isTourModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTourModalOpen(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/15 z-10 aspect-video flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm font-sans">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Green Valley Campus Virtual Tour</span>
                </div>
                <button
                  onClick={() => setIsTourModalOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Container */}
              <div className="relative flex-1 bg-black">
                <video
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                  src={heroConfig.campusTourVideoUrl}
                >
                  Your browser does not support HTML video.
                </video>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
