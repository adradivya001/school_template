import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function StudentLifeSportsPage() {
  return (
    <StandardInfoPage
      title="Sports Teams & Athletics"
      subtitle="Competitive house leagues, inter-school tournaments, and expert coaching."
      breadcrumb={[{ name: "Student Life", href: "/student-life" }, { name: "Sports" }]}
      heroImage="https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&q=80&w=1920"
      introduction="Our athletic program builds resilience, team spirit, and physical fitness through professional training."
      sections={[
        {
          heading: "Athletic Programs",
          description: "Inter-house sports cups, district leagues, and CBSE sports tournaments.",
          cards: [
            { title: "Basketball & Football Squads", description: "Regular training under NIS certified coaches with inter-school fixtures.", badge: "Team Sports" },
            { title: "Athletics & Track Events", description: "100m, 400m, high jump, long jump, and relay races.", badge: "Track & Field" },
            { title: "Indoor Sports & Chess", description: "State-level badminton, table tennis, and competitive chess instruction.", badge: "Indoor Games" },
          ]
        }
      ]}
      ctaTitle="Join Our Champion Sports Teams"
      ctaDescription="Explore our athletics program and sports facilities."
      ctaButtonLabel="Campus Visit"
      ctaButtonLink="/admissions/campus-visit"
    />
  );
}
