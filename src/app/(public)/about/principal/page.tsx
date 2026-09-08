import { PageBanner } from "@/components/layout/PageBanner";
import { PrincipalMessage } from "@/components/sections/PrincipalMessage";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export default function PrincipalPage() {
  return (
    <main className="w-full font-sans bg-slate-50 min-h-screen">
      <PageBanner
        title="Principal's Message"
        subtitle="Insights and leadership guidance from Dr. Ananya Sharma."
        breadcrumb={[{ name: "About", href: "/about" }, { name: "Principal's Message" }]}
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920"
      />
      <PrincipalMessage />
      <AdmissionsCTA
        title="Experience Excellence Firsthand"
        description="Schedule a personal campus interaction or reach out to our admissions office."
        buttonLabel="Begin Admission"
        buttonLink="/admissions/apply"
      />
    </main>
  );
}
