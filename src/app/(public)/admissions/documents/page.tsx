import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function RequiredDocumentsPage() {
  return (
    <StandardInfoPage
      title="Required Documents Checklist"
      subtitle="Ensure a hassle-free admission process by keeping these essential documents ready."
      breadcrumb={[{ name: "Admissions", href: "/admissions" }, { name: "Required Documents" }]}
      heroImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1920"
      introduction="Please prepare original copies and self-attested photocopies of the following documents during final verification."
      sections={[
        {
          heading: "Mandatory Documents for All Applicants",
          description: "Documents required at the time of application submission.",
          cards: [
            { title: "Birth Certificate", description: "Official birth certificate issued by Municipal Corporation or Panchayat.", badge: "Mandatory" },
            { title: "Passport Photographs", description: "6 recent passport-sized color photographs of the student and 2 of each parent.", badge: "Mandatory" },
            { title: "Identity & Address Proof", description: "Aadhaar Card, Passport, or Electricity Bill of parents/guardian.", badge: "Mandatory" },
            { title: "Transfer Certificate (TC)", description: "Original TC countersigned by the education department for Grade 2 and above.", badge: "Grade 2+" },
            { title: "Previous Marksheets", description: "Report cards of the last two academic years.", badge: "Grade 2+" },
            { title: "Medical Record", description: "Completed immunization card and doctor fitness certificate.", badge: "Mandatory" },
          ]
        }
      ]}
      ctaTitle="Ready to Submit Documents?"
      ctaDescription="You can upload digital scans directly in our online application portal."
      ctaButtonLabel="Apply Online Now"
      ctaButtonLink="/admissions/apply"
    />
  );
}
