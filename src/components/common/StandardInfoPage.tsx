"use client";

import { PageBanner } from "@/components/layout/PageBanner";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { CheckCircle2 } from "lucide-react";

interface InfoCard {
  title: string;
  description: string;
  badge?: string;
  list?: string[];
}

interface StandardInfoPageProps {
  title: string;
  subtitle?: string;
  breadcrumb: Array<{ name: string; href?: string }>;
  heroImage?: string;
  introduction?: string;
  sections?: Array<{
    heading: string;
    description: string;
    cards?: InfoCard[];
  }>;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonLabel?: string;
  ctaButtonLink?: string;
}

export function StandardInfoPage({
  title,
  subtitle,
  breadcrumb,
  heroImage = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920",
  introduction,
  sections = [],
  ctaTitle = "Experience Our Community",
  ctaDescription = "Schedule a visit or begin your admission application today.",
  ctaButtonLabel = "Explore Admissions",
  ctaButtonLink = "/admissions",
}: StandardInfoPageProps) {
  return (
    <main className="w-full font-sans bg-slate-50 min-h-screen">
      <PageBanner title={title} subtitle={subtitle} breadcrumb={breadcrumb} image={heroImage} />

      {introduction && (
        <AnimatedSection className="py-12 md:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              {introduction}
            </p>
          </div>
        </AnimatedSection>
      )}

      {sections.map((sec, idx) => (
        <AnimatedSection key={idx} className="py-16 md:py-24 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="text-emerald-600 font-bold uppercase text-xs tracking-widest block mb-2">
                {title}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {sec.heading}
              </h2>
              <p className="text-slate-600 text-base mt-3 leading-relaxed">
                {sec.description}
              </p>
            </div>

            {sec.cards && sec.cards.length > 0 && (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {sec.cards.map((card, cardIdx) => (
                  <StaggerItem key={cardIdx}>
                    <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col justify-between">
                      <div>
                        {card.badge && (
                          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
                            {card.badge}
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {card.description}
                        </p>
                        {card.list && (
                          <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                            {card.list.map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
        </AnimatedSection>
      ))}

      <AdmissionsCTA
        title={ctaTitle}
        description={ctaDescription}
        buttonLabel={ctaButtonLabel}
        buttonLink={ctaButtonLink}
      />
    </main>
  );
}
