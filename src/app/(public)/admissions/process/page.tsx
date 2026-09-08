import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function AdmissionProcessPage() {
  return (
    <StandardInfoPage
      title="Step-by-Step Admission Process"
      subtitle="Transparent, seamless, and supportive enrollment journey for parents."
      breadcrumb={[{ name: "Admissions", href: "/admissions" }, { name: "Admission Process" }]}
      heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      introduction="We aim to make the admissions experience smooth and welcoming. Below is our 5-step application timeline."
      sections={[
        {
          heading: "5 Simple Admission Steps",
          description: "From initial online inquiry to final admission confirmation.",
          cards: [
            { title: "01. Online Enquiry", description: "Submit an online form or visit our campus admissions cell.", badge: "Step 01" },
            { title: "02. Application Form", description: "Fill out student details and upload supporting documents online.", badge: "Step 02" },
            { title: "03. Interactive Assessment", description: "Friendly interaction for early years or basic evaluation for senior grades.", badge: "Step 03" },
            { title: "04. Document Verification", description: "Verification of birth certificate, previous report cards, and TC.", badge: "Step 04" },
            { title: "05. Admission Confirmation", description: "Payment of admission fee and welcome kit issuance.", badge: "Step 05" },
          ]
        }
      ]}
      ctaTitle="Ready to Begin Step 1?"
      ctaDescription="Fill out the official online application form now."
      ctaButtonLabel="Apply Online"
      ctaButtonLink="/admissions/apply"
    />
  );
}
