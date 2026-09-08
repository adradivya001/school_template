import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function CelebrationsPage() {
  return (
    <StandardInfoPage
      title="Celebrations & Festivals"
      subtitle="Annual Day, Independence Day, Cultural Fests, and Graduation ceremonies."
      breadcrumb={[{ name: "Student Life", href: "/student-life" }, { name: "Celebrations" }]}
      heroImage="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920"
      introduction="Life at Green Valley is filled with joyous celebrations that honor Indian culture, national heritage, and student achievements."
      sections={[
        {
          heading: "Annual Calendar Events",
          description: "Unforgettable campus gatherings uniting students, parents, and alumni.",
          cards: [
            { title: "Grand Annual Day", description: "Stage drama, orchestra performance, dance recitals, and prize distribution.", badge: "Annual Day" },
            { title: "National Day Ceremonies", description: "Flag hoisting, parade, patriotic songs, and student speeches on Aug 15 & Jan 26.", badge: "Patriotic Fests" },
            { title: "Graduation & Farewell Gala", description: "Honoring outgoing Grade 10 & 12 batches with valedictorian addresses.", badge: "Graduation" },
          ]
        }
      ]}
      ctaTitle="Join Our Vibrant Family"
      ctaDescription="View photos from our recent school events."
      ctaButtonLabel="Campus Gallery"
      ctaButtonLink="/campus/gallery"
    />
  );
}
