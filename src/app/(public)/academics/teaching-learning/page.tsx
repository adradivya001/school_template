import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function TeachingLearningPage() {
  return (
    <StandardInfoPage
      title="Teaching & Learning Approach"
      subtitle="Interactive, student-centered methodologies supported by digital smart classrooms."
      breadcrumb={[{ name: "Academics", href: "/academics" }, { name: "Teaching & Learning" }]}
      heroImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1920"
      introduction="We move beyond rote memorization to active inquiry, experiential learning, and digital collaboration."
      sections={[
        {
          heading: "Pedagogical Excellence",
          description: "Combining traditional mentor guidance with cutting-edge educational technology.",
          cards: [
            { title: "Experiential Learning", description: "Learning by doing through lab experiments, field trips, and real-world case studies.", badge: "Methodology" },
            { title: "Smart Classroom Tech", description: "Interactive touch panels, 3D visual simulations, and digital learning resources.", badge: "Tech Integration" },
            { title: "Differentiated Instruction", description: "Adapting teaching techniques to cater to visual, auditory, and kinesthetic learners.", badge: "Personalization" },
          ]
        }
      ]}
      ctaTitle="See Our Classrooms in Action"
      ctaDescription="Book a guided school tour to experience our teaching methods firsthand."
      ctaButtonLabel="Campus Visit"
      ctaButtonLink="/admissions/campus-visit"
    />
  );
}
