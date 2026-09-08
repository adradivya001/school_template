import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function FieldTripsPage() {
  return (
    <StandardInfoPage
      title="Field Trips & Educational Tours"
      subtitle="Experiential learning beyond classroom walls through historical, ecological, and industrial visits."
      breadcrumb={[{ name: "Student Life", href: "/student-life" }, { name: "Field Trips" }]}
      heroImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920"
      introduction="Educational excursions connect classroom theories with real-world observations."
      sections={[
        {
          heading: "Excursion Highlights",
          description: "Curated itineraries designed for environmental awareness, historical heritage, and scientific exposure.",
          cards: [
            { title: "Science Center & Planetarium Visits", description: "Interactive visits to Regional Science Center and Space Observatories.", badge: "Scientific Trips" },
            { title: "Heritage & Historical Excursions", description: "Exploring ancient monuments, museums, and archaeological sites.", badge: "Heritage Tours" },
            { title: "Nature Trails & Eco Camping", description: "Overnight leadership camps, botany walks, and wildlife sanctuary tours.", badge: "Eco Expeditions" },
          ]
        }
      ]}
      ctaTitle="Learning Through Experience"
      ctaDescription="Discover our rich calendar of co-curricular student life activities."
      ctaButtonLabel="Explore Student Life"
      ctaButtonLink="/student-life"
    />
  );
}
