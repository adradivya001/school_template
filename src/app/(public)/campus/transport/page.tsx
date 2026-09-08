import { StandardInfoPage } from "@/components/common/StandardInfoPage";

export default function TransportPage() {
  return (
    <StandardInfoPage
      title="Safe Transport Fleet"
      subtitle="GPS-enabled school bus network covering all major city routes."
      breadcrumb={[{ name: "Campus", href: "/campus" }, { name: "Transport" }]}
      heroImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1920"
      introduction="We operate a fleet of modern, air-conditioned buses ensuring safe commute for every child."
      sections={[
        {
          heading: "Safety & Tracking Standard",
          description: "Equipped with live GPS tracking, speed governors, CCTV cameras, and trained female attendants.",
          cards: [
            { title: "GPS Live Tracking", description: "Parents can track bus locations in real-time via mobile app.", badge: "Real-time Tracking" },
            { title: "Female Bus Attendants", description: "Every bus route has a dedicated female conductor to ensure student safety.", badge: "Child Safety" },
            { title: "Speed Governors & CCTV", description: "Buses are speed-locked under 40 km/h with 360-degree cameras.", badge: "Vehicle Safety" },
          ]
        }
      ]}
      ctaTitle="Inquire About Bus Routes"
      ctaDescription="Find pickup/drop timings and bus stop locations near your home."
      ctaButtonLabel="Contact Transport Cell"
      ctaButtonLink="/contact"
    />
  );
}
