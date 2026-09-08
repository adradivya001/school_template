import { PageBanner } from "@/components/layout/PageBanner";
import { ClubsListing } from "@/components/student-life/ClubsListing";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export default function ClubsPage() {
  return (
    <main className="w-full font-sans bg-slate-50 min-h-screen">
      <PageBanner
        title="Clubs & Co-Curricular Activities"
        subtitle="Over 40 active student clubs fostering passion, leadership, and STEAM innovation."
        breadcrumb={[{ name: "Student Life", href: "/student-life" }, { name: "Clubs & Activities" }]}
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920"
      />
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-600 font-bold uppercase text-xs tracking-widest block mb-2">
            Nurturing Passions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Our Vibrant Student Clubs
          </h2>
          <p className="text-slate-600 text-base mt-3">
            From Robotics & Coding to MUN Debate and Shutterbugs Photography.
          </p>
        </div>
        <ClubsListing />
      </section>
      <AdmissionsCTA
        title="Ignite Your Child's Talent"
        description="Discover how our student life encourages creativity and confidence."
        buttonLabel="Begin Admission"
        buttonLink="/admissions/apply"
      />
    </main>
  );
}
