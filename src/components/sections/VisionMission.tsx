"use client";

import { useTemplate } from "@/context/TemplateContext";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Target, Compass, HeartHandshake } from "lucide-react";

export function VisionMission() {
  const { data: { school: schoolData } } = useTemplate();

  return (
    <AnimatedSection className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden font-sans border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-3 inline-block">
            Guiding Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Vision, Mission & Core Values
          </h2>
          <p className="text-slate-600 text-base mt-3">
            The foundational principles driving learning and character growth at {schoolData.schoolName}.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <StaggerItem>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To inspire lifelong learners who act with integrity, embrace curiosity, and shape a better future with confidence and compassion in a rapidly evolving world.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Mission Card */}
          <StaggerItem>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide a nurturing, world-class educational environment that blends academic excellence, innovative thinking, and strong ethical values for every student.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Core Values Card */}
          <StaggerItem>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Core Values</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Integrity & Respect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Inquiry & Innovation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Global Empathy</span>
                  </li>
                </ul>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
