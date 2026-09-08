"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { SectionHeading } from "../common/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";

export function Gallery() {
  const { data: { school: schoolData } } = useTemplate();
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(schoolData.gallery.map(img => img.category)))];

  const filteredGallery = filter === "All" 
    ? schoolData.gallery.slice(0, 6) 
    : schoolData.gallery.filter(img => img.category === filter).slice(0, 6);

  return (
    <AnimatedSection className="py-20 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Life at Campus" 
          subtitle="Glimpses of our vibrant community and state-of-the-art facilities."
        />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat ? "text-primary-foreground" : "text-muted-foreground hover:text-primary bg-muted/50 hover:bg-muted"
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 min-h-[500px] auto-rows-min">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((image, index) => {
              // Create an asymmetric pattern
              const getGridClasses = (i: number) => {
                const pattern = [
                  "col-span-2 row-span-2 h-[300px] md:h-[500px]", // Large
                  "col-span-1 row-span-1 h-[140px] md:h-[240px]", // Small
                  "col-span-1 row-span-1 h-[140px] md:h-[240px]", // Small
                  "col-span-2 row-span-1 h-[140px] md:h-[240px]", // Wide
                  "col-span-1 row-span-1 h-[140px] md:h-[240px]", // Small
                  "col-span-1 row-span-1 h-[140px] md:h-[240px]", // Small
                ];
                return pattern[i % pattern.length];
              };
              
              const gridClasses = getGridClasses(index);

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={image.url} 
                  onClick={() => setSelectedImage(image.url)}
                  className={`group relative rounded-[2rem] overflow-hidden shadow-sm cursor-pointer ${gridClasses}`}
                >
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-secondary text-xs md:text-sm font-bold mb-2 uppercase tracking-widest">{image.category}</div>
                    <div className="text-white font-bold text-lg md:text-xl leading-tight drop-shadow-md">{image.caption}</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        <AnimatedSection delay={0.2} className="mt-12 flex justify-center">
          <Link href="/gallery">
            <AnimatedButton className="bg-muted text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors group px-8 py-6 rounded-md">
              View Full Gallery <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
          </Link>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
