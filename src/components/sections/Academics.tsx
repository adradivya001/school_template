import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTemplate } from "@/context/TemplateContext";
import { SectionHeading } from "../common/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export function Academics() {
  const { data: { school: schoolData } } = useTemplate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AnimatedSection className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <SectionHeading 
              title="Learning Designed for Every Stage" 
              subtitle={`At ${schoolData.schoolName}, our curriculum is thoughtfully designed to support students at every stage of their educational journey.`}
              centered={false}
              className="mb-0"
            />
          </div>
          <Link href="/academics" className="hidden lg:inline-flex items-center text-primary font-bold hover:text-secondary transition-colors text-lg group">
            Explore Full Curriculum <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row h-[600px] gap-4 w-full">
          {schoolData.academics.map((program, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                layout
                initial={false}
                animate={{
                  flexGrow: isActive ? 5 : 1,
                  flexBasis: isActive ? "50%" : "12.5%",
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="relative h-full rounded-[2rem] overflow-hidden cursor-pointer group"
              >
                {/* Background Image */}
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  animate={{
                    scale: isActive ? 1 : 1.1,
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent" : "bg-black/40 group-hover:bg-black/30"
                  }`}
                ></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                      {program.ageRange}
                    </div>
                  </div>
                  
                  <motion.div layout="position">
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 whitespace-nowrap">
                      {program.title}
                    </h3>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      height: isActive ? "auto" : 0 
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/80 text-lg mb-6 max-w-md line-clamp-2 md:line-clamp-none">
                      {program.description}
                    </p>
                    <Link href="/academics" className="inline-flex items-center text-secondary font-bold hover:text-white transition-colors text-lg group/link">
                      Learn More <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-8 lg:hidden flex justify-center">
          <Link href="/academics" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors text-lg group">
            Explore Full Curriculum <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
