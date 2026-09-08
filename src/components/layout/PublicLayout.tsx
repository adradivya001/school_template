"use client";

import { useTemplate } from "@/context/TemplateContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const { data } = useTemplate();
  const { theme } = data;

  return (
    <div
      style={{
        "--primary": theme.primaryColor,
        "--secondary": theme.secondaryColor,
        "--accent": theme.accentColor,
        "--radius": theme.borderRadius,
      } as React.CSSProperties}
      className="min-h-screen flex flex-col bg-background text-foreground"
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
