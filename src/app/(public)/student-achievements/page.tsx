import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function StudentAchievementsPage() {
  return (
    <StandardInfoPage
      title="Student Wall of Fame"
      subtitle="Celebrating outstanding triumphs in academics, Olympiads, sports, and creative arts."
      breadcrumb={[{ name: "News & Events", href: "/news-events" }, { name: "Student Achievements" }]}
      heroImage="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&q=80&w=1920"
      introduction="We take immense pride in our students' dedication, passion, and accomplishments on national and international stages."
      sections={[
        {
          heading: "Honors & Triumphs",
          description: "Recent awards won by our students across disciplines.",
          cards: [
            { title: "Gold Medal in National Science Olympiad", description: "Rohan Sharma (Grade 10) secured All-India Rank 1 with a perfect score in Physics & Chemistry.", badge: "Olympiad" },
            { title: "CBSE National Swimming Championship", description: "Ananya Verma (Grade 8) clinched 2 Gold and 1 Silver medal in 100m freestyle.", badge: "Sports" },
            { title: "First Prize at National Robotics Challenge", description: "School Robotics team 'GreenBots' won the innovation trophy for autonomous rescue rover.", badge: "STEAM & AI" },
            { title: "National Spell Bee Champion 2026", description: "Kavya Patel (Grade 6) crowned champion at the Grand Finale held in New Delhi.", badge: "Academics" }
          ]
        }
      ]}
      ctaTitle="Inspiring Tomorrow's Leaders"
      ctaDescription="Join Green Valley to nurture your talent and reach your full potential."
      ctaButtonLabel="Explore Admissions"
      ctaButtonLink="/admissions"
    />
  );
}
