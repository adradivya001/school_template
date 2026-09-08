import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function CompetitionsPage() {
  return (
    <StandardInfoPage
      title="Competitions & Olympiads"
      subtitle="Preparing students for state, national, and international contests."
      breadcrumb={[{ name: "Student Life", href: "/student-life" }, { name: "Competitions" }]}
      heroImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920"
      introduction="Our mentors guide students to participate and excel in national science fairs, Olympiads, and hackathons."
      sections={[
        {
          heading: "Competitive Arenas",
          description: "Over 100+ medals won annually in academic and co-curricular arenas.",
          cards: [
            { title: "Science & Math Olympiads", description: "IMO, NSO, Cyber Olympiad, and KVPY coaching.", badge: "Academic Olympiads" },
            { title: "National STEAM Hackathons", description: "Inter-school coding, robotics challenges, and innovation expos.", badge: "STEM Contests" },
            { title: "Model United Nations (MUN)", description: "Debating global diplomacy, geopolitics, and international relations.", badge: "Oratory & MUN" },
          ]
        }
      ]}
      ctaTitle="Nurturing Competitive Spirit"
      ctaDescription="Learn how our curriculum prepares students for national competitions."
      ctaButtonLabel="Explore Achievements"
      ctaButtonLink="/about/achievements"
    />
  );
}
