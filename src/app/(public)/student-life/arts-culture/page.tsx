import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function ArtsCulturePage() {
  return (
    <StandardInfoPage
      title="Arts & Cultural Life"
      subtitle="Music, classical & contemporary dance, theater drama, and fine arts."
      breadcrumb={[{ name: "Student Life", href: "/student-life" }, { name: "Arts & Culture" }]}
      heroImage="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920"
      introduction="Creative expression is nurtured through professional art studios, music academies, and theater productions."
      sections={[
        {
          heading: "Creative Disciplines",
          description: "Encouraging artistic talent through exhibitions, annual showcases, and stage performances.",
          cards: [
            { title: "Music & Vocal Ensemble", description: "Indian classical vocals, western choir, keyboard, guitar, and drum academy.", badge: "Music Academy" },
            { title: "Dance & Theater Academy", description: "Classical Bharatanatyam, contemporary dance, and annual drama productions.", badge: "Performing Arts" },
            { title: "Fine Arts & Sculpture", description: "Watercolors, acrylic canvas painting, clay pottery, and digital graphic design.", badge: "Visual Arts" },
          ]
        }
      ]}
      ctaTitle="Celebrate Creativity at Green Valley"
      ctaDescription="Experience our vibrant annual day and cultural festivals."
      ctaButtonLabel="Explore Events"
      ctaButtonLink="/events"
    />
  );
}
