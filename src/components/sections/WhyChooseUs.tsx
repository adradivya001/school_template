"use client";

import { BookOpen, Star, Users, ShieldCheck, Monitor, Globe } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
};

export function WhyChooseUs() {
  const { data: { school: schoolData } } = useTemplate();

  return (
    <AnimatedSection className="py-20 md:py-32 bg-slate-50 relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase text-xs sm:text-sm tracking-widest block mb-3">
            Why Parents Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight font-sans">
            The {schoolData.schoolName} <span className="text-emerald-600">Advantage</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
            We are committed to providing an environment that fosters academic rigor, character development, and future readiness.
          </p>
        </div>
        
        {/* 6 Clean White Advantage Cards (No blue backgrounds!) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {schoolData.whyChooseUs.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="bg-white border border-slate-200/80 p-7 sm:p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:border-emerald-300 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {iconMap[reason.icon] || <Star className="w-5 h-5" />}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 font-sans group-hover:text-emerald-600 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
