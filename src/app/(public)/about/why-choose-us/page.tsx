import { PageBanner } from "@/components/layout/PageBanner";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export default function WhyChooseUsPage() {
  return (
    <main className="w-full font-sans bg-slate-50 min-h-screen">
      <PageBanner
        title="Why Choose Us"
        subtitle="Discover what sets Green Valley International School apart."
        breadcrumb={[{ name: "About", href: "/about" }, { name: "Why Choose Us" }]}
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920"
      />
      <WhyChooseUs />
      <Testimonials />
      <AdmissionsCTA
        title="Ready to Give Your Child the Best Start?"
        description="Schedule a campus tour and interact with our principal and faculty."
        buttonLabel="Schedule Visit"
        buttonLink="/admissions/campus-visit"
      />
    </main>
  );
}
