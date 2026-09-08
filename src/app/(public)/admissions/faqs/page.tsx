import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function AdmissionsFaqsPage() {
  return (
    <StandardInfoPage
      title="Admission Frequently Asked Questions"
      subtitle="Find answers to common questions about enrollment, eligibility, fees, and campus policies."
      breadcrumb={[{ name: "Admissions", href: "/admissions" }, { name: "FAQs" }]}
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920"
      introduction="We are here to clear all your doubts. Below are frequently asked questions regarding Green Valley International School admissions."
      sections={[
        {
          heading: "General Admission Queries",
          description: "Answers to common queries asked by prospective parents.",
          cards: [
            { title: "What curriculum does the school follow?", description: "We follow the CBSE (Central Board of Secondary Education) curriculum integrated with experiential learning and STEAM focus.", badge: "Curriculum" },
            { title: "Is mid-term admission permitted?", description: "Mid-term admissions are considered depending on seat availability and valid Transfer Certificate (TC) from a recognized board.", badge: "Mid-Term" },
            { title: "What is the teacher-student ratio?", description: "We maintain a 1:15 ratio in Early Years and 1:25 ratio in Primary & Secondary classes to ensure personalized care.", badge: "Class Size" },
            { title: "Does the school provide transport facilities?", description: "Yes, GPS-tracked, AC buses cover all major routes with dedicated female bus attendants and CCTV.", badge: "Transport" },
            { title: "Are there entry tests for pre-primary?", description: "No written tests for Nursery/LKG. Admission is based on an informal interaction with parents and child.", badge: "Pre-Primary" },
            { title: "How are fee installments scheduled?", description: "Fees are payable in 4 quarterly installments (April, July, October, January) via online portal or bank transfer.", badge: "Fees" }
          ]
        }
      ]}
      ctaTitle="Still Have Questions?"
      ctaDescription="Contact our admissions desk or visit our campus for a personal consultation."
      ctaButtonLabel="Book Campus Tour"
      ctaButtonLink="/admissions/campus-visit"
    />
  );
}
