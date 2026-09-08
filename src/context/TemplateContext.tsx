"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { TemplateData, SchoolConfig, ThemeConfig, SectionConfig, NavigationItem, PageConfig, AnimationConfig } from "@/types";
import { defaultTemplateData } from "@/config/defaultData";

interface TemplateContextType {
  data: TemplateData;
  updateSchool: (school: Partial<SchoolConfig>) => void;
  updateTheme: (theme: Partial<ThemeConfig>) => void;
  updateAnimation: (animation: Partial<AnimationConfig>) => void;
  updateSection: (id: string, updates: Partial<SectionConfig>) => void;
  reorderSections: (pageId: string, newOrderIds: string[]) => void;
  updateNavigation: (id: string, updates: Partial<NavigationItem>) => void;
  updatePage: (id: string, updates: Partial<PageConfig>) => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<TemplateData>(defaultTemplateData);

  const updateSchool = (schoolUpdates: Partial<SchoolConfig>) => {
    setData((prev) => ({
      ...prev,
      school: { ...prev.school, ...schoolUpdates },
    }));
  };

  const updateTheme = (themeUpdates: Partial<ThemeConfig>) => {
    setData((prev) => ({
      ...prev,
      theme: { ...prev.theme, ...themeUpdates },
    }));
  };

  const updateAnimation = (animationUpdates: Partial<AnimationConfig>) => {
    setData((prev) => ({
      ...prev,
      animation: { ...prev.animation, ...animationUpdates },
    }));
  };

  const updateSection = (id: string, updates: Partial<SectionConfig>) => {
    setData((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    }));
  };

  const reorderSections = (pageId: string, newOrderIds: string[]) => {
    setData((prev) => {
      const pageSections = [...prev.sections.filter(s => s.pageId === pageId)];
      const otherSections = prev.sections.filter(s => s.pageId !== pageId);
      
      // Update order based on newOrderIds index
      const updatedPageSections = pageSections.map(section => {
        const order = newOrderIds.indexOf(section.id) + 1;
        return { ...section, order };
      });
      
      return {
        ...prev,
        sections: [...otherSections, ...updatedPageSections],
      };
    });
  };

  const updateNavigation = (id: string, updates: Partial<NavigationItem>) => {
    setData((prev) => ({
      ...prev,
      navigation: prev.navigation.map((n) => (n.id === id ? { ...n, ...updates } : n)),
    }));
  };

  const updatePage = (id: string, updates: Partial<PageConfig>) => {
    setData((prev) => ({
      ...prev,
      pages: prev.pages.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    }));
  };

  return (
    <TemplateContext.Provider
      value={{
        data,
        updateSchool,
        updateTheme,
        updateAnimation,
        updateSection,
        reorderSections,
        updateNavigation,
        updatePage,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
}
