import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function ResultsPage() {
  return (
    <StandardInfoPage
      title="Academic Results & Board Highlights"
      subtitle="Celebrating stellar CBSE Grade 10 & 12 board examination outcomes."
      breadcrumb={[{ name: "Academics", href: "/academics" }, { name: "Results" }]}
      heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      introduction="Green Valley International School consistently records 100% pass rates with top state ranks."
      sections={[
        {
          heading: "Board Exam Highlights (2025)",
          description: "Institutional credibility demonstrated through individual subject toppers and high school averages.",
          cards: [
            { title: "98% Pass Rate", description: "All registered candidates passed with First Class or Distinction.", badge: "Grade 10 CBSE" },
            { title: "School Topper: 98.4%", description: "Highest score achieved in Science & Mathematics Stream.", badge: "Grade 12 CBSE" },
            { title: "150+ Centum Scores", description: "Perfect 100/100 scores across Mathematics, Physics, and English.", badge: "Distinctions" },
          ]
        }
      ]}
      ctaTitle="Inspiring Academic Greatness"
      ctaDescription="Enroll your child in a school where achievement is consistently nurtured."
      ctaButtonLabel="Begin Admission"
      ctaButtonLink="/admissions/apply"
    />
  );
}
