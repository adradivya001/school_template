import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function EventsPage() {
  return (
    <StandardInfoPage
      title="Upcoming Events Calendar"
      subtitle="Discover upcoming sports meets, cultural fests, exhibitions, and parent workshops."
      breadcrumb={[{ name: "News & Events", href: "/news-events" }, { name: "Upcoming Events" }]}
      heroImage="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920"
      introduction="School life is vibrant with activities! Join us at our upcoming campus events and inter-school competitions."
      sections={[
        {
          heading: "Upcoming School Events (2026)",
          description: "Mark your calendar for these exciting events.",
          cards: [
            { title: "Annual Sports Meet 2026", description: "Track & field events, inter-house relays, gymnastics showcases, and march past.", badge: "Oct 15, 2026" },
            { title: "Inter-School Science & STEAM Expo", description: "Student-built working models, AI projects, and astronomy workshops open to public.", badge: "Nov 05, 2026" },
            { title: "Annual Cultural Fest 'Euphoria'", description: "Music, dance, theatrical plays, and art gallery exhibitions across 3 stages.", badge: "Dec 18, 2026" },
            { title: "Parent-Teacher Conference (PTC)", description: "Term-1 evaluation reviews and holistic growth discussions with class mentors.", badge: "Nov 22, 2026" }
          ]
        }
      ]}
      ctaTitle="Participate in Our Next Event"
      ctaDescription="External school delegations can register for inter-school competitions online."
      ctaButtonLabel="Event Registration"
      ctaButtonLink="/contact"
    />
  );
}
