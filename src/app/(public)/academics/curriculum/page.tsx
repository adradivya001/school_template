import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function CurriculumPage() {
  return (
    <StandardInfoPage
      title="Curriculum & Subjects"
      subtitle="Comprehensive CBSE curriculum enriched with STEAM, coding, and global perspectives."
      breadcrumb={[{ name: "Academics", href: "/academics" }, { name: "Curriculum" }]}
      heroImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920"
      introduction="Our curriculum is designed to foster analytical thinking, creative expression, and practical application of knowledge."
      sections={[
        {
          heading: "Curriculum Framework",
          description: "Structured progressive learning from foundational skills to competitive exam mastery.",
          cards: [
            { title: "Core Academics", description: "Mathematics, Physics, Chemistry, Biology, English Literature, Social Sciences.", badge: "CBSE Core" },
            { title: "STEAM & Robotics", description: "Hands-on coding, 3D printing, electronics, and robotics lab integration.", badge: "Innovation" },
            { title: "Electives & Languages", description: "Computer Science, Economics, Business Studies, Hindi, French, and Fine Arts.", badge: "Electives" },
          ]
        }
      ]}
      ctaTitle="Explore Curriculum Details"
      ctaDescription="Download our grade-wise curriculum handbook or schedule an academic consultation."
      ctaButtonLabel="Explore Learning Stages"
      ctaButtonLink="/academics/learning-stages"
    />
  );
}
