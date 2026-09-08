import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function CampusVisitPage() {
  return (
    <StandardInfoPage
      title="Schedule a Campus Tour"
      subtitle="Experience our state-of-the-art facilities, vibrant classrooms, and green learning environment in person."
      breadcrumb={[{ name: "Admissions", href: "/admissions" }, { name: "Campus Visit" }]}
      heroImage="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920"
      introduction="We invite prospective parents and students to visit our campus. Our guided tours offer an insightful look into daily school life, science labs, sports infrastructure, and interactive classrooms."
      sections={[
        {
          heading: "Visit Timings & Guidelines",
          description: "Details to plan your visit effectively.",
          cards: [
            { title: "Visiting Hours", description: "Monday to Saturday: 9:00 AM – 3:30 PM (Prior appointment recommended).", badge: "Timings" },
            { title: "Guided Tour Duration", description: "Each tour takes approximately 45–60 minutes, guided by our admissions counsellors.", badge: "Duration" },
            { title: "Principal Interaction", description: "Interaction with our Academic Heads or Principal can be pre-scheduled on weekdays.", badge: "Meeting" },
            { title: "Safety Protocol", description: "Visitors must carry a valid government photo ID card for gate verification.", badge: "Security" }
          ]
        }
      ]}
      ctaTitle="Ready to Book Your Tour?"
      ctaDescription="Contact our admissions desk or call +91 98765 43210 to reserve your slot."
      ctaButtonLabel="Call Admissions Office"
      ctaButtonLink="tel:+919876543210"
    />
  );
}
