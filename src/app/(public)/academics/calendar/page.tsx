import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function AcademicCalendarPage() {
  return (
    <StandardInfoPage
      title="Academic Calendar 2026–27"
      subtitle="Important dates for term openings, holidays, parent-teacher meetings, and sports meets."
      breadcrumb={[{ name: "Academics", href: "/academics" }, { name: "Calendar" }]}
      heroImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1920"
      introduction="Plan ahead with our official school calendar for the current academic session."
      sections={[
        {
          heading: "Key Term Highlights",
          description: "Major academic and co-curricular milestones throughout the school year.",
          cards: [
            { title: "Term I Opening", description: "School reopens for all grades on June 12, 2026.", badge: "June 2026" },
            { title: "Mid-Term Examinations", description: "October 12 – October 23, 2026 across all grades.", badge: "October 2026" },
            { title: "Annual Cultural Fest & Sports Meet", description: "November 15 & December 20, 2026.", badge: "Nov–Dec 2026" },
            { title: "Term II / Annual Exams", description: "March 10 – March 24, 2027.", badge: "March 2027" },
          ]
        }
      ]}
      ctaTitle="Download Full Calendar PDF"
      ctaDescription="Get a printable version of the 2026–27 academic calendar."
      ctaButtonLabel="Explore Exam Schedule"
      ctaButtonLink="/academics/exam-schedule"
    />
  );
}
