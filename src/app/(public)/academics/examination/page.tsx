import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function ExaminationPage() {
  return (
    <StandardInfoPage
      title="Examination & Assessment"
      subtitle="Fair, comprehensive, and continuous evaluation framework."
      breadcrumb={[{ name: "Academics", href: "/academics" }, { name: "Examination & Assessment" }]}
      heroImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920"
      introduction="Our assessment pattern aligns with CBSE guidelines, focusing on conceptual understanding rather than rote recall."
      sections={[
        {
          heading: "Assessment Components",
          description: "A balanced mixture of internal assessments, term exams, and project evaluations.",
          cards: [
            { title: "Continuous Evaluation", description: "Regular unit tests, homework assignments, and class participation metrics.", badge: "Internal" },
            { title: "Term Examinations", description: "Comprehensive mid-term and annual exams assessing overall course mastery.", badge: "Term Exams" },
            { title: "Practical & Lab Tests", description: "Hands-on evaluation in science laboratories, computer labs, and viva voce.", badge: "Practicals" },
          ]
        }
      ]}
      ctaTitle="Check Exam Timetables"
      ctaDescription="Access grade-wise examination dates and download official schedule PDFs."
      ctaButtonLabel="Exam Schedule"
      ctaButtonLink="/academics/exam-schedule"
    />
  );
}
