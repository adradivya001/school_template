import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function ValuesPage() {
  return (
    <StandardInfoPage
      title="Our Core Values"
      subtitle="The moral foundation that guides student behavior, teaching, and community life."
      breadcrumb={[{ name: "About", href: "/about" }, { name: "Our Values" }]}
      heroImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920"
      introduction="We believe that true education develops not only intellect, but also moral character, empathy, and social responsibility."
      sections={[
        {
          heading: "What We Believe & Practice",
          description: "Our six core values form the ethical compass for all students and staff.",
          cards: [
            { title: "Integrity", description: "Acting with honesty, transparency, and high moral standards at all times.", badge: "Value 01" },
            { title: "Respect", description: "Valuing diversity, listening actively, and treating all individuals with dignity.", badge: "Value 02" },
            { title: "Responsibility", description: "Taking ownership of personal actions, academic commitments, and community impact.", badge: "Value 03" },
            { title: "Curiosity", description: "Encouraging open-minded inquiry, critical questioning, and lifelong exploration.", badge: "Value 04" },
            { title: "Creativity", description: "Fostering original thinking, artistic expression, and innovative problem solving.", badge: "Value 05" },
            { title: "Leadership", description: "Empowering students to lead by example with empathy, courage, and service.", badge: "Value 06" },
          ]
        }
      ]}
      ctaTitle="Inculcating Values for Life"
      ctaDescription="Join a community that places character building at the heart of learning."
      ctaButtonLabel="Explore Admissions"
      ctaButtonLink="/admissions"
    />
  );
}
