import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function LearningStagesPage() {
  return (
    <StandardInfoPage
      title="Learning Stages"
      subtitle="Nurturing development from Early Childhood through Senior Secondary graduation."
      breadcrumb={[{ name: "Academics", href: "/academics" }, { name: "Learning Stages" }]}
      heroImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1920"
      introduction="Each stage of growth requires tailored pedagogy, dedicated mentors, and specialized learning environments."
      sections={[
        {
          heading: "Four Key Stages of Growth",
          description: "Age-appropriate learning frameworks designed to maximize engagement and comprehension.",
          cards: [
            { title: "Early Years (Nursery – UKG)", description: "Play-based learning focusing on sensory development, language acquisition, and social interaction.", badge: "Ages 3–5", list: ["Sensory Play", "Phonical Literacy", "Motor Skills"] },
            { title: "Primary School (Grades 1 – 5)", description: "Building strong foundations in reading, mathematics, environmental science, and creative arts.", badge: "Ages 6–10", list: ["Conceptual Maths", "EVS Exploration", "Reading Clubs"] },
            { title: "Middle School (Grades 6 – 8)", description: "Fostering independent research, subject specialization, lab experiments, and team projects.", badge: "Ages 11–13", list: ["Science Labs", "Debate & Oratory", "STEAM Projects"] },
            { title: "Senior Secondary (Grades 9 – 12)", description: "Rigorous preparation for CBSE board exams, NEET/JEE entrance tests, and career counseling.", badge: "Ages 14–17", list: ["Board Mastery", "Competitive Prep", "Career Guidance"] },
          ]
        }
      ]}
      ctaTitle="Find the Right Stage for Your Child"
      ctaDescription="Contact our academic advisors to discuss grade placement and curriculum structure."
      ctaButtonLabel="Begin Admission"
      ctaButtonLink="/admissions/apply"
    />
  );
}
