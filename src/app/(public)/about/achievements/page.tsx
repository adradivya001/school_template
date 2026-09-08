import { PageBanner } from "@/components/layout/PageBanner";
import { Achievements } from "@/components/sections/Achievements";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export default function AchievementsPage() {
  return (
    <main className="w-full font-sans bg-slate-50 min-h-screen">
      <PageBanner
        title="Achievements & Milestones"
        subtitle="Celebrating academic triumphs, Olympiad medals, and institutional milestones."
        breadcrumb={[{ name: "About", href: "/about" }, { name: "Achievements" }]}
        image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1920"
      />
      <Achievements />
      <AdmissionsCTA
        title="Be Part of Our Record-Breaking Legacy"
        description="Enroll your child in an environment where academic excellence is celebrated."
        buttonLabel="Begin Admission"
        buttonLink="/admissions/apply"
      />
    </main>
  );
}
