import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function LatestNewsPage() {
  return (
    <StandardInfoPage
      title="Latest News & Campus Updates"
      subtitle="Stay informed with stories, highlights, and press releases from Green Valley."
      breadcrumb={[{ name: "News & Events", href: "/news-events" }, { name: "Latest News" }]}
      heroImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920"
      introduction="Explore recent happenings, academic laurels, international exchanges, and campus achievements."
      sections={[
        {
          heading: "Top News Stories",
          description: "Recent headlines and feature stories from our school campus.",
          cards: [
            { title: "Green Valley Ranked #1 Eco-Friendly School", description: "Awarded top honors for solar power initiative, zero-plastic policy, and rainwater harvesting system.", badge: "Sept 2026" },
            { title: "Inauguration of New Robotics & AI Lab", description: "State-of-the-art facility featuring 3D printers, IoT kits, and humanoid robotics workstations.", badge: "Aug 2026" },
            { title: "100% Pass Percentage in CBSE Board Exams", description: "Our Grade 10 & 12 students deliver exceptional performance with 45+ students scoring above 95%.", badge: "July 2026" },
            { title: "International Student Exchange Program 2026", description: "Delegation of 15 students completes academic exchange tour to Singapore Science Center.", badge: "June 2026" }
          ]
        }
      ]}
      ctaTitle="Subscribe to Campus Newsletter"
      ctaDescription="Get monthly news and event updates delivered directly to your inbox."
      ctaButtonLabel="Subscribe Now"
      ctaButtonLink="/contact"
    />
  );
}
