import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function EligibilityPage() {
  return (
    <StandardInfoPage
      title="Admission Eligibility & Criteria"
      subtitle="Age criteria and entry requirements for academic enrollment across all grade levels."
      breadcrumb={[{ name: "Admissions", href: "/admissions" }, { name: "Eligibility" }]}
      heroImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920"
      introduction="Green Valley International School welcomes students from diverse backgrounds. Admissions are granted subject to age eligibility and seat availability."
      sections={[
        {
          heading: "Age Criteria (As of June 31st of Admission Year)",
          description: "Minimum age requirements for entry into early childhood and primary classes.",
          cards: [
            { title: "Nursery", description: "3 years completed by June 31st.", badge: "Early Years" },
            { title: "LKG", description: "4 years completed by June 31st.", badge: "Early Years" },
            { title: "UKG", description: "5 years completed by June 31st.", badge: "Early Years" },
            { title: "Grade 1", description: "6 years completed by June 31st.", badge: "Primary" },
          ]
        },
        {
          heading: "Senior & High School Entry Criteria",
          description: "Requirements for grades 2 through 12.",
          cards: [
            { title: "Grades 2 to 9", description: "Successful completion of previous grade from a recognized board, along with basic proficiency evaluation.", badge: "Middle & High" },
            { title: "Grade 11 (Science / Commerce / Arts)", description: "Provisional admission based on Class 10 Pre-Board marks, finalized upon CBSE/State Board results.", badge: "Senior Secondary" }
          ]
        }
      ]}
      ctaTitle="Have Questions About Eligibility?"
      ctaDescription="Reach out to our admissions team for personalized guidance."
      ctaButtonLabel="Contact Admissions"
      ctaButtonLink="/contact"
    />
  );
}
