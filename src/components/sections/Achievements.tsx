"use client";

import { useTemplate } from "@/context/TemplateContext";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { CountUp } from "@/components/animations/CountUp";

export function Achievements() {
  const { data: { school: schoolData } } = useTemplate();

  const achievementsList = [
    { value: 98, suffix: "%", label: "Board Examination Success" },
    { value: 150, suffix: "+", label: "Competition Awards" },
    { value: 5, suffix: "+", label: "Years of Excellence" },
    { value: 100, suffix: "+", label: "Olympiad Medals" },
  ];

  return (
    <AnimatedSection className="py-16 md:py-24 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <StaggerContainer className="flex flex-col items-center text-center mb-16">
          <StaggerItem>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-0.5 bg-emerald-600 rounded-full"></span>
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs sm:text-sm">Institutional Credibility</span>
              <span className="w-10 h-0.5 bg-emerald-600 rounded-full"></span>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight font-sans">
              A Legacy of <span className="text-emerald-600">Excellence</span>
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal">
              A testament to the hard work, dedication, and holistic success of the {schoolData.schoolName} family.
            </p>
          </StaggerItem>
        </StaggerContainer>
        
        {/* Clean Minimal Statistic Blocks (No large blue backgrounds) */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsList.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-slate-50/60 border border-slate-200/80 rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight leading-none mb-3 font-sans">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <h4 className="text-base font-bold text-slate-800 leading-snug">{item.label}</h4>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
