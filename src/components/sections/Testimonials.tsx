"use client";
import { useState, useRef } from "react";
import { Quote, Star, X } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const { data: { school: schoolData } } = useTemplate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const testimonials = schoolData.testimonials;

  if (!testimonials || testimonials.length === 0) return null;

  // Duplicate items for seamless infinite scroll
  const duplicated = [...testimonials, ...testimonials];

  const handleCardClick = (index: number) => {
    // Map duplicated index back to original
    const realIndex = index % testimonials.length;
    setActiveIndex(realIndex);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <AnimatedSection className="py-20 md:py-28 bg-gradient-to-b from-[hsl(204,100%,97%)] via-white to-[hsl(204,100%,97%)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-[hsl(204,90%,42%)]/5 blur-3xl" />
        <div className="absolute bottom-10 right-[10%] w-96 h-96 rounded-full bg-[hsl(199,89%,58%)]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[hsl(204,90%,42%)] mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[hsl(215,25%,15%)] mb-4"
          >
            What Parents{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(204,90%,42%)] to-[hsl(199,89%,58%)]">
              Say About Us
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[hsl(215,25%,15%)]/60 max-w-2xl mx-auto text-base md:text-lg"
          >
            Click on any card to read their story
          </motion.p>
        </div>

        {/* Flowing Marquee Track */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[hsl(204,100%,97%)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[hsl(204,100%,97%)] to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex gap-6 md:gap-8"
            style={{
              animation: `testimonialScroll ${testimonials.length * 6}s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
              width: "max-content",
            }}
          >
            {duplicated.map((testimonial, index) => {
              const isActive = activeIndex === (index % testimonials.length);
              return (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className={`
                    relative w-52 md:w-60 rounded-2xl overflow-hidden
                    bg-white shadow-lg border border-[hsl(204,90%,42%)]/10
                    transition-all duration-500
                    ${isActive ? "ring-2 ring-[hsl(204,90%,42%)] shadow-[hsl(204,90%,42%)]/20 shadow-xl" : "hover:shadow-xl hover:border-[hsl(204,90%,42%)]/25"}
                  `}>
                    {/* Image */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[hsl(204,90%,42%)] to-[hsl(199,89%,58%)] flex items-center justify-center">
                          <span className="text-white text-5xl font-black opacity-60">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}

                      {/* Gradient overlay at bottom of image */}
                      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Name & role overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="font-bold text-white text-sm md:text-base tracking-wide leading-tight">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mt-0.5">
                          {testimonial.role}
                        </p>
                      </div>

                      {/* Quote icon badge */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Quote size={14} className="text-white" />
                      </div>

                      {/* Stars badge */}
                      <div className="absolute top-3 left-3 flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={10} fill="hsl(45, 93%, 58%)" className="text-[hsl(45,93%,58%)]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expanded Testimonial Overlay */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[hsl(215,25%,15%)]/60 backdrop-blur-md"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Card */}
            <motion.div
              className="relative z-10 w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[hsl(204,90%,42%)]/15 overflow-hidden">
                {/* Top gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-[hsl(204,90%,42%)] via-[hsl(199,89%,58%)] to-[hsl(204,94%,34%)]" />

                <div className="p-8 md:p-10">
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[hsl(204,100%,97%)] hover:bg-[hsl(204,90%,42%)] text-[hsl(215,25%,15%)] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                    aria-label="Close testimonial"
                  >
                    <X size={16} />
                  </button>

                  {/* Author info */}
                  <div className="flex items-center gap-5 mb-6">
                    {testimonials[activeIndex].image ? (
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-18 h-18 md:w-20 md:h-20 rounded-2xl object-cover shadow-lg border-2 border-[hsl(204,90%,42%)]/20"
                      />
                    ) : (
                      <div className="w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[hsl(204,90%,42%)] to-[hsl(199,89%,58%)] flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-black">
                          {testimonials[activeIndex].name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-xl md:text-2xl text-[hsl(215,25%,15%)]">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-sm text-[hsl(204,90%,42%)] font-semibold uppercase tracking-widest">
                        {testimonials[activeIndex].role}
                      </p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <Star key={i} size={14} fill="hsl(45, 93%, 58%)" className="text-[hsl(45,93%,58%)]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-1 w-8 h-8 text-[hsl(204,90%,42%)]/15 rotate-180" />
                    <p className="text-[hsl(215,25%,15%)]/80 text-lg md:text-xl leading-relaxed font-medium pl-8 italic">
                      &ldquo;{testimonials[activeIndex].content}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </AnimatedSection>
  );
}
