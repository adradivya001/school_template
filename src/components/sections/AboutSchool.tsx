"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { HoverCard } from "@/components/animations/HoverCard";

export function AboutSchool() {
  const { data: { school: schoolData } } = useTemplate();

  return (
    <AnimatedSection className="py-20 md:py-32 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image with Floating Years Badge */}
          <AnimatedSection delay={0.2} className="lg:col-span-5 relative order-2 lg:order-1">
            <HoverCard className="relative z-10 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200" 
                alt="Students learning" 
                className="w-full h-full object-cover aspect-[4/5] transition-transform duration-700 hover:scale-105"
              />
            </HoverCard>
            
            {/* Clean White Floating Years Badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-200/80">
              <div className="flex flex-col gap-1">
                <p className="font-extrabold text-4xl text-emerald-600 font-sans">{new Date().getFullYear() - schoolData.establishedYear}+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Right Column: Story & Details */}
          <StaggerContainer className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <StaggerItem>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-emerald-600 rounded-full"></span>
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs sm:text-sm">About {schoolData.schoolName}</span>
              </div>
            </StaggerItem>
            
            <StaggerItem className="w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight font-sans">
                Where Knowledge Meets <span className="text-emerald-600">Character</span>
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                Founded in {schoolData.establishedYear}, {schoolData.schoolName} has been at the forefront of providing holistic education that balances academic rigor with character building, empathy, and leadership development.
              </p>
            </StaggerItem>
            
            <StaggerItem className="w-full">
              <div className="grid grid-cols-3 gap-6 mb-10 w-full pt-6 border-t border-slate-200/80">
                {[
                  { label: 'Board', value: schoolData.board },
                  { label: 'Type', value: 'Co-educational' },
                  { label: 'Campus', value: 'Modern Infrastructure' }
                ].map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <Link href="/about">
                <AnimatedButton size="lg" className="h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-600/20 group rounded-full border-none">
                  <span>Discover Our Story</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </AnimatedButton>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
