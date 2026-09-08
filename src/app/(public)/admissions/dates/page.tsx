import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function ImportantDatesPage() {
  return (
    <StandardInfoPage
      title="Important Admission Dates (2026–27)"
      subtitle="Mark your calendar for key admission deadlines and events."
      breadcrumb={[{ name: "Admissions", href: "/admissions" }, { name: "Important Dates" }]}
      heroImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1920"
      introduction="Please keep track of key admission milestones for Academic Session 2026–2027. Early registration ensures priority in seat allocation."
      sections={[
        {
          heading: "Admission Calendar & Timelines",
          description: "Key dates for application forms, campus interaction sessions, and fee payments.",
          cards: [
            { title: "October 1, 2025", description: "Online & Offline Application Forms open for Nursery to Grade 11.", badge: "Forms Open" },
            { title: "December 15, 2025", description: "First Phase Application Submission Deadline.", badge: "Phase 1 Deadline" },
            { title: "January 10–15, 2026", description: "Interactive Assessment & Student Interaction Sessions.", badge: "Interviews" },
            { title: "January 25, 2026", description: "First Merit List Announcement & Email Notifications.", badge: "Results" },
            { title: "February 10, 2026", description: "Fee Submission & Seat Acceptance Deadline for First List.", badge: "Seat Lock" },
            { title: "April 2, 2026", description: "Academic Orientation & First Day of New Session.", badge: "Session Begins" }
          ]
        }
      ]}
      ctaTitle="Don't Miss the Deadline"
      ctaDescription="Start your child's application today before Phase 1 seats fill up."
      ctaButtonLabel="Submit Application Now"
      ctaButtonLink="/admissions/apply"
    />
  );
}
