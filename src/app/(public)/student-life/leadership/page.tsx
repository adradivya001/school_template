import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function StudentLeadershipPage() {
  return (
    <StandardInfoPage
      title="Student Leadership & House System"
      subtitle="Fostering governance, discipline, and team responsibility through student council elections."
      breadcrumb={[{ name: "Student Life", href: "/student-life" }, { name: "Student Leadership" }]}
      heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920"
      introduction="Our house system and elected Student Prefect Council empower students to organize events, mentor juniors, and lead campus initiatives."
      sections={[
        {
          heading: "Leadership Bodies",
          description: "Structured student governance promoting responsibility and peer mentorship.",
          cards: [
            { title: "Student Council & Head Captains", description: "Head Boy, Head Girl, Sports Captain, and Cultural Secretaries.", badge: "Prefect Body" },
            { title: "Four Inter-House System", description: "Emerald, Ruby, Sapphire, and Topaz houses competing for annual trophies.", badge: "House System" },
            { title: "Community Service & Environment Cell", description: "Student-led social drives, blood donation camps, and literacy campaigns.", badge: "Social Responsibility" },
          ]
        }
      ]}
      ctaTitle="Empowering Tomorrow's Leaders"
      ctaDescription="Explore our holistic educational approach."
      ctaButtonLabel="Explore Admissions"
      ctaButtonLink="/admissions"
    />
  );
}
