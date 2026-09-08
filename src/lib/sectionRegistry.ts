import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { AboutSchool } from "@/components/sections/AboutSchool";
import { PrincipalMessage } from "@/components/sections/PrincipalMessage";
import { Academics } from "@/components/sections/Academics";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Facilities } from "@/components/sections/Facilities";
import { Achievements } from "@/components/sections/Achievements";
import { EventsNews } from "@/components/sections/EventsNews";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { ContactSection } from "@/components/sections/ContactSection";

import { VisionMission } from "@/components/sections/VisionMission";

export const sectionRegistry: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  highlights: Highlights,
  aboutPreview: AboutPreview,
  about: AboutSchool,
  principal: PrincipalMessage,
  visionMission: VisionMission,
  academics: Academics,
  whyChooseUs: WhyChooseUs,
  facilities: Facilities,
  achievements: Achievements,
  events: EventsNews,
  gallery: Gallery,
  testimonials: Testimonials,
  admissionsCTA: AdmissionsCTA,
  contact: ContactSection,
};
