"use client";

import { useTemplate } from "@/context/TemplateContext";
import { sectionRegistry } from "@/lib/sectionRegistry";

export function PageRenderer({ pageId }: { pageId: string }) {
  const { data } = useTemplate();
  
  // Filter and sort sections
  const sectionsToRender = data.sections
    .filter((s) => s.pageId === pageId && s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      {sectionsToRender.map((section) => {
        const Component = sectionRegistry[section.type] as any;
        if (!Component) {
          console.warn(`Section type "${section.type}" not found in registry.`);
          return null;
        }
        
        return <Component key={section.id} config={section.config} />;
      })}
    </>
  );
}
