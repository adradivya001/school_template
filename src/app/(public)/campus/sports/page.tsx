import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function CampusSportsPage() {
  return (
    <StandardInfoPage
      title="Sports & Athletic Infrastructure"
      subtitle="World-class indoor and outdoor sports facilities for physical excellence."
      breadcrumb={[{ name: "Campus", href: "/campus" }, { name: "Sports Facilities" }]}
      heroImage="https://images.unsplash.com/photo-1546410531-bea5aadcb6ce?auto=format&fit=crop&q=80&w=1920"
      introduction="Physical fitness and sportsmanship are integral to life at Green Valley."
      sections={[
        {
          heading: "Sports Infrastructure",
          description: "Olympic-standard courts, turfs, and professional coaching staff.",
          cards: [
            { title: "Basketball & Tennis Courts", description: "Synthetic acrylic courts with floodlights for evening practice.", badge: "Courts" },
            { title: "Cricket Pitch & Football Turf", description: "Full-sized lush green grass field with professional turf nets.", badge: "Field Sports" },
            { title: "Indoor Sports Complex", description: "Badminton courts, table tennis, gymnastics arena, and chess hall.", badge: "Indoor Complex" },
          ]
        }
      ]}
      ctaTitle="Come See Our Athletic Facilities"
      ctaDescription="Book a weekend campus tour to view our sports grounds."
      ctaButtonLabel="Schedule Campus Visit"
      ctaButtonLink="/admissions/campus-visit"
    />
  );
}
