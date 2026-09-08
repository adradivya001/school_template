"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { HoverCard } from "@/components/animations/HoverCard";

export function PrincipalMessage() {
  const { data: { school: schoolData } } = useTemplate();

  return (
    <AnimatedSection className="py-20 md:py-32 bg-[#F5F8FA] relative overflow-hidden font-sans" id="principal">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Column */}
          <AnimatedSection delay={0.2} className="lg:col-span-5 relative">
            <div className="relative z-10 w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
              <HoverCard className="w-full h-full">
                <img 
                  src={schoolData.principal.image}
                  alt={schoolData.principal.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </HoverCard>
            </div>
            {/* Subtle Accent Outline */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-emerald-600/30 rounded-3xl -z-10 hidden sm:block"></div>
          </AnimatedSection>
          
          {/* Content Column */}
          <StaggerContainer className="lg:col-span-7 flex flex-col justify-center">
            <StaggerItem>
              <div className="relative">
                <Quote className="text-emerald-600/10 h-28 w-28 absolute -top-12 -left-8 z-0 rotate-180 pointer-events-none" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 relative z-10 font-sans tracking-tight">
                  Message from the <span className="text-emerald-600">Principal</span>
                </h2>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="relative z-10 mb-8">
                <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed italic border-l-4 border-emerald-600 pl-6">
                  &quot;{schoolData.principal.message}&quot;
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{schoolData.principal.name}</h3>
                  <p className="text-emerald-600 font-semibold uppercase tracking-wider text-xs">{schoolData.principal.designation}</p>
                </div>
                <Link href="/about">
                  <AnimatedButton variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 h-11 px-6 font-bold rounded-full border-2">
                    <span>Read Full Message</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </div>
    </AnimatedSection>
  );
}
