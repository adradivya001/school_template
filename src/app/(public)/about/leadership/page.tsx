import { PageBanner } from "@/components/layout/PageBanner";
import { FacultyListing } from "@/components/about/FacultyListing";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export default function LeadershipPage() {
  return (
    <main className="w-full font-sans bg-slate-50 min-h-screen">
      <PageBanner
        title="Leadership & Faculty"
        subtitle="Meet the visionary educators and academic heads shaping our school."
        breadcrumb={[{ name: "About", href: "/about" }, { name: "Leadership & Faculty" }]}
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920"
      />
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-600 font-bold uppercase text-xs tracking-widest block mb-2">
            Academic Mentors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Dedicated Leadership Team
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Experienced educators holding master degrees and doctorate credentials, committed to student guidance.
          </p>
        </div>
        <FacultyListing />
      </section>
      <AdmissionsCTA
        title="Learn from Industry-Leading Educators"
        description="Discover how our passionate faculty nurtures talent in every classroom."
        buttonLabel="Explore Academics"
        buttonLink="/academics"
      />
    </main>
  );
}
