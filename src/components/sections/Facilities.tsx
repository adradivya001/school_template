"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Monitor, FlaskConical, Library, Dumbbell, Mic, Bus, Star } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { SectionHeading } from "../common/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Library: <Library className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Mic: <Mic className="w-6 h-6" />,
  Bus: <Bus className="w-6 h-6" />,
};

// Map of facility types to representative images
const facilityImages: Record<string, string> = {
  Classrooms: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
  Laboratories: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
  Library: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200",
  "Sports Complex": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200",
  Auditorium: "https://images.unsplash.com/photo-1507676184212-d0330a151f84?auto=format&fit=crop&q=80&w=1200",
  Transport: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
};

const defaultImage = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200";

export function Facilities() {
  const { data: { school: schoolData } } = useTemplate();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFacility = schoolData.facilities[activeIndex];
  const activeImage = facilityImages[activeFacility?.title] || defaultImage;

  return (
    <AnimatedSection className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="World-Class Campus Facilities" 
          subtitle="Our campus is designed to provide students with the best resources for academic and extracurricular excellence."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <StaggerContainer className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-4">
            {schoolData.facilities.map((facility, index) => {
              const isActive = index === activeIndex;
              return (
                <StaggerItem key={index} className="w-full">
                  <button
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={cn(
                      "w-full text-left p-6 md:p-8 rounded-[2rem] transition-all duration-500 flex items-start gap-6 group",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-2xl scale-[1.02]" 
                        : "bg-white hover:bg-muted border border-border/50 hover:shadow-lg"
                    )}
                  >
                    <div className={cn(
                      "w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-500",
                      isActive ? "bg-white/20 text-white" : "bg-primary/5 text-primary group-hover:bg-primary/10"
                    )}>
                      {iconMap[facility.icon] ? (
                        <div className="[&_svg]:w-7 [&_svg]:h-7">
                          {iconMap[facility.icon]}
                        </div>
                      ) : (
                        <Star className="w-7 h-7" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h3 className={cn(
                        "font-bold text-xl md:text-2xl mb-2 transition-colors duration-500",
                        isActive ? "text-white" : "text-foreground"
                      )}>{facility.title}</h3>
                      <p className={cn(
                        "text-sm md:text-base transition-colors duration-500 font-medium",
                        isActive ? "text-white/80" : "text-muted-foreground"
                      )}>{facility.description}</p>
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          
          <AnimatedSection delay={0.2} className="order-1 lg:order-2 lg:col-span-7 relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 w-full h-full bg-muted">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeIndex}
                  src={activeImage} 
                  alt={activeFacility?.title || "Campus Facilities"}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Subtle overlay gradient to ensure the button pops if it overlaps */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <Link href="/campus" className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-secondary text-secondary-foreground font-black text-lg hover:scale-110 transition-transform duration-500 shadow-2xl group border-4 border-white">
                <span className="flex flex-col items-center">
                  Explore <br />Campus
                  <ArrowRight className="mt-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </Link>
            </div>
            
            <div className="mt-8 flex justify-center lg:hidden">
              <Link href="/campus">
                <AnimatedButton size="lg" className="font-bold text-lg h-14 px-8 rounded-xl shadow-xl">
                  Explore Our Campus <ArrowRight className="ml-2 h-5 w-5" />
                </AnimatedButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}
