import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function VisionMissionPage() {
  return (
    <StandardInfoPage
      title="Vision, Mission & Core Values"
      subtitle="Guiding principles that define our educational excellence."
      breadcrumb={[{ name: "About", href: "/about" }, { name: "Vision & Mission" }]}
      heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      introduction="Green Valley International School is committed to cultivating an atmosphere of intellectual curiosity, moral integrity, and global citizenship for every learner."
      sections={[
        {
          heading: "Our Foundational Pillars",
          description: "We strive to balance academic rigor with character building and emotional resilience.",
          cards: [
            {
              title: "Our Vision",
              description: "To inspire lifelong learners who act with integrity, embrace curiosity, and shape a better future with confidence and compassion.",
              badge: "Future Vision",
              list: ["Global Outlook", "Moral Courage", "Lifelong Learning"]
            },
            {
              title: "Our Mission",
              description: "To provide a nurturing, world-class educational environment that blends academic excellence, innovative thinking, and ethical values.",
              badge: "Core Mission",
              list: ["Academic Rigor", "STEAM Innovation", "Inclusive Community"]
            },
            {
              title: "Educational Philosophy",
              description: "Every child possesses unique potential. Our child-centric approach fosters self-discovery and critical problem-solving skills.",
              badge: "Philosophy",
              list: ["Experiential Learning", "Individual Mentorship", "Holistic Development"]
            }
          ]
        }
      ]}
      ctaTitle="Join Our Visionary Community"
      ctaDescription="Explore how your child can thrive at Green Valley International School."
      ctaButtonLabel="Explore Admissions"
      ctaButtonLink="/admissions"
    />
  );
}
