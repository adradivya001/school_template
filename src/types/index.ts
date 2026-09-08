export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  headingFont: string;
  bodyFont: string;
  borderRadius: string;
}

export interface SchoolConfig {
  schoolName: string;
  tagline: string;
  logo: string;
  favicon: string;
  establishedYear: number;
  board: string;
  location: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    website: string;
    workingHours: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
  };
  principal: {
    name: string;
    designation: string;
    message: string;
    image: string;
  };
  academics: Array<{
    id?: string;
    title: string;
    description: string;
    ageRange: string;
    image: string;
  }>;
  facilities: Array<{
    id?: string;
    title: string;
    description: string;
    icon: string;
  }>;
  achievements: Array<{
    id?: string;
    title: string;
    year: string;
  }>;
  events: Array<{
    id?: string;
    title: string;
    date: string;
    category: string;
    image: string;
    description: string;
  }>;
  gallery: Array<{
    id?: string;
    url: string;
    category: string;
    caption: string;
  }>;
  testimonials: Array<{
    id?: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    image?: string;
  }>;
  whyChooseUs: Array<{
    id?: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface SectionConfig {
  id: string;
  type: string;
  enabled: boolean;
  order: number;
  pageId: string;
  layout?: "default" | "editorial" | "cards" | "split" | "full-width" | "interactive";
  config?: Record<string, unknown>;
}

export interface PageConfig {
  id: string;
  title: string;
  slug: string;
  enabled: boolean;
  showInNavigation: boolean;
  order: number;
}

export interface NavigationSubItem {
  id: string;
  label: string;
  url: string;
  description?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  enabled: boolean;
  order: number;
  children?: NavigationSubItem[];
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
}

export interface ExamScheduleItem {
  subject: string;
  date: string;
  day: string;
  time: string;
  grade: string;
}

export interface FeeItem {
  grade: string;
  admissionFee: string;
  tuitionFee: string;
  transportFee: string;
  activityFee: string;
}

export interface SchoolClub {
  id: string;
  name: string;
  description: string;
  activities: string[];
  image: string;
}

export interface AnimationConfig {
  globalEnabled: boolean;
  intensity: "low" | "medium" | "high";
  sectionReveal: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";
  duration: number;
  stagger: number;
  parallaxEnabled: boolean;
  hoverEffects: boolean;
}

export interface HeroStatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface HeroConfig {
  badgeText: string;
  eyebrowText?: string;
  titleLine1: string;
  titleLine2: string;
  highlightedWord: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaLink: string;
  secondaryCtaLabel: string;
  secondaryCtaLink: string;
  watchTourLabel: string;
  campusTourVideoUrl: string;
  desktopVideoUrl: string;
  mobileVideoUrl: string;
  posterImage: string;
  mobilePosterImage: string;
  statistics: HeroStatItem[];
}

export interface TemplateData {
  theme: ThemeConfig;
  school: SchoolConfig;
  hero?: HeroConfig;
  animation: AnimationConfig;
  pages: PageConfig[];
  sections: SectionConfig[];
  navigation: NavigationItem[];
}
