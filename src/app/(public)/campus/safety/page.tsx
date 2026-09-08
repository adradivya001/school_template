import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function SafetyPage() {
  return (
    <StandardInfoPage
      title="Safety & Security System"
      subtitle="24/7 CCTV surveillance, RFID entry gates, and dedicated medical support."
      breadcrumb={[{ name: "Campus", href: "/campus" }, { name: "Safety & Security" }]}
      heroImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920"
      introduction="The safety of your child is our absolute priority. We maintain a secure, vigilant campus at all times."
      sections={[
        {
          heading: "Comprehensive Security Measures",
          description: "Protocols designed to guarantee child protection and peace of mind for parents.",
          cards: [
            { title: "24/7 CCTV & RFID Gates", description: "Over 200 HD cameras monitoring all entry points, corridors, and grounds.", badge: "Surveillance" },
            { title: "Full-Time Medical Infirmary", description: "Resident doctor and registered nurse on duty with emergency ambulance service.", badge: "Medical Care" },
            { title: "Strict Visitor Verification", description: "Visitor passes, biometric staff check-in, and parent identity cards.", badge: "Access Control" },
          ]
        }
      ]}
      ctaTitle="Your Child’s Safety First"
      ctaDescription="Tour our secure campus and inspect our safety infrastructure in person."
      ctaButtonLabel="Schedule Campus Visit"
      ctaButtonLink="/admissions/campus-visit"
    />
  );
}
