"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
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
  resetData: () => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);
const STORAGE_KEY = "school_template_data_v1";

export function TemplateProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<TemplateData>(defaultTemplateData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved configuration from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData(parsed);
      }
    } catch (e) {
      console.warn("Failed to load template data from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save changes to localStorage whenever data changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.warn("Failed to save template data to localStorage", e);
      }
    }
  }, [data, isLoaded]);

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
      const pageSections = [...prev.sections.filter((s) => s.pageId === pageId)];
      const otherSections = prev.sections.filter((s) => s.pageId !== pageId);

      const updatedPageSections = pageSections.map((section) => {
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

  const resetData = () => {
    setData(defaultTemplateData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
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
        resetData,
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
