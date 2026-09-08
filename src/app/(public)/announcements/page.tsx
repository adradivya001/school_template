import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function AnnouncementsPage() {
  return (
    <StandardInfoPage
      title="Official Announcements & Circulars"
      subtitle="Important notices, administrative circulars, and official updates for parents and students."
      breadcrumb={[{ name: "News & Events", href: "/news-events" }, { name: "Announcements" }]}
      heroImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920"
      introduction="Access official school announcements, holiday notifications, examination guidelines, and transport schedules."
      sections={[
        {
          heading: "Recent Circulars & Notices",
          description: "Download and review official communications.",
          cards: [
            { title: "Circular: Term 1 Examination Datesheet", description: "Official timetable and syllabus blueprint released for Grades 6 to 12.", badge: "Circular #42" },
            { title: "Notice: Winter Uniform Transition", description: "All students are instructed to switch to winter uniform starting November 1st.", badge: "Circular #41" },
            { title: "Update: New School Bus Route Extensions", description: "Routes 14 & 18 extended to cover Eastern Bypass residential sectors.", badge: "Transport Notice" },
            { title: "CBSE Registration Form Verification", description: "Grade 9 & 11 parents must verify draft LOC details at administration office.", badge: "Board Notice" }
          ]
        }
      ]}
      ctaTitle="Need Administrative Support?"
      ctaDescription="Contact the school administrative desk for queries regarding circulars."
      ctaButtonLabel="Contact Helpdesk"
      ctaButtonLink="/contact"
    />
  );
}
