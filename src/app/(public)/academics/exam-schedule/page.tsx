import { PageBanner } from "@/components/layout/PageBanner";
import { ExamScheduleTable } from "@/components/academic/ExamScheduleTable";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export default function ExamSchedulePage() {
  return (
    <main className="w-full font-sans bg-slate-50 min-h-screen">
      <PageBanner
        title="📅 Exam Schedule"
        subtitle="Filter exam timetables by class, academic year, and term."
        breadcrumb={[{ name: "Academics", href: "/academics" }, { name: "Exam Schedule" }]}
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920"
      />
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <ExamScheduleTable />
      </section>
      <AdmissionsCTA
        title="Need Academic Support or Assistance?"
        description="Our faculty provides remedial sessions and examination guidance."
        buttonLabel="Contact Academic Office"
        buttonLink="/contact"
      />
    </main>
  );
}
