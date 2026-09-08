import { PageBanner } from "@/components/layout/PageBanner";
import { Gallery } from "@/components/sections/Gallery";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export default function CampusGalleryPage() {
  return (
    <main className="w-full font-sans bg-slate-50 min-h-screen">
      <PageBanner
        title="Campus Gallery"
        subtitle="Filter campus photos by classrooms, science labs, library, and sports grounds."
        breadcrumb={[{ name: "Campus", href: "/campus" }, { name: "Gallery" }]}
        image="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920"
      />
      <Gallery />
      <AdmissionsCTA
        title="Experience the Campus in Person"
        description="Schedule a weekend tour to visit our laboratories, classrooms, and grounds."
        buttonLabel="Campus Visit"
        buttonLink="/admissions/campus-visit"
      />
    </main>
  );
}
