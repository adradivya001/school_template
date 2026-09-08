import { TemplateData } from "@/types";

export const defaultTemplateData: TemplateData = {
  theme: {
    primaryColor: "hsl(204 90% 42%)", // Vibrant sky blue
    secondaryColor: "hsl(199 89% 58%)", // Light sky blue
    accentColor: "hsl(204 94% 34%)", // Deep sky blue accent
    backgroundColor: "hsl(204 100% 99%)", // Crisp white with faint sky blue undertone
    textColor: "hsl(215 25% 15%)",
    headingFont: "'Inter', sans-serif",
    bodyFont: "'Inter', sans-serif",
    borderRadius: "0.5rem",
  },
  school: {
    schoolName: "Green Valley International School",
    tagline: "Learn. Lead. Inspire.",
    logo: "/images/green_valley_logo.jpg",
    favicon: "",
    establishedYear: 1998,
    board: "CBSE",
    location: "Vijayawada, Andhra Pradesh",
    contact: {
      phone: "+91 98765 43210",
      email: "admissions@greenvalleyschool.edu",
      address: "Green Valley International School, Educational Zone, Vijayawada, Andhra Pradesh 520001",
      website: "www.greenvalleyschool.edu",
      workingHours: "Monday – Saturday: 8:30 AM – 4:30 PM",
    },
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      linkedin: "https://linkedin.com",
    },
    principal: {
      name: "Dr. Ananya Sharma",
      designation: "Principal & Academic Director",
      message: "Welcome to Green Valley International School. Our mission is to provide an environment where children can thrive intellectually, emotionally, and socially. We believe in holistic education that nurtures character, creativity, and confidence, preparing our students not just for exams, but for life.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    academics: [
      { id: "1", title: "Early Years", description: "Play-based learning focusing on cognitive and motor skills.", ageRange: "Nursery to UKG", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" },
      { id: "2", title: "Primary School", description: "Building strong foundations in literacy, numeracy, and environmental awareness.", ageRange: "Grades 1 to 5", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" },
      { id: "3", title: "Middle School", description: "Fostering independent thinking, project-based learning, and subject-specific expertise.", ageRange: "Grades 6 to 8", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" },
      { id: "4", title: "Senior Secondary", description: "Rigorous academic preparation for board exams and competitive entrance tests.", ageRange: "Grades 9 to 12", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
    ],
    whyChooseUs: [
      { id: "1", title: "Academic Excellence", description: "Consistent 100% pass rate in board examinations.", icon: "BookOpen" },
      { id: "2", title: "Holistic Development", description: "Equal emphasis on sports, arts, and character building.", icon: "Star" },
      { id: "3", title: "Experienced Faculty", description: "Highly qualified educators dedicated to student success.", icon: "Users" },
      { id: "4", title: "Safe & Secure", description: "24/7 CCTV surveillance and restricted campus access.", icon: "ShieldCheck" },
      { id: "5", title: "Tech-Enabled", description: "Smart classrooms and digital resources.", icon: "Monitor" },
      { id: "6", title: "Global Exposure", description: "Exchange programs and international competitions.", icon: "Globe" },
    ],
    facilities: [
      { id: "1", title: "Smart Classrooms", description: "Interactive digital boards in every classroom.", icon: "Monitor" },
      { id: "2", title: "Science Labs", description: "State-of-the-art physics, chemistry, and biology laboratories.", icon: "FlaskConical" },
      { id: "3", title: "Library", description: "Extensive collection of books and journals.", icon: "Library" },
      { id: "4", title: "Sports Complex", description: "Indoor and outdoor facilities.", icon: "Dumbbell" },
    ],
    achievements: [
      { id: "1", title: "98% Board Examination Success", year: "2025" },
      { id: "2", title: "150+ Competition Awards", year: "2024-25" },
      { id: "3", title: "5+ Years of Excellence", year: "Since 2021" },
      { id: "4", title: "100+ Olympiad Medals", year: "2024" },
    ],
    events: [
      { id: "1", title: "Annual Sports Meet", date: "October 15, 2026", category: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", description: "Annual inter-house sports competition featuring track and field events." },
      { id: "2", title: "Science Exhibition", date: "November 10, 2026", category: "Academics", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800", description: "Innovative STEM projects showcased by middle and senior school students." },
      { id: "3", title: "Cultural Fest", date: "December 20, 2026", category: "Arts", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800", description: "A grand celebration of music, dance, and theatrical performances." },
    ],
    gallery: [
      { id: "1", url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800", category: "Campus", caption: "Main Academic Building" },
      { id: "2", url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800", category: "Academics", caption: "Interactive Learning Session" },
      { id: "3", url: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&q=80&w=800", category: "Sports", caption: "Basketball Tournament" },
      { id: "4", url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800", category: "Academics", caption: "Advanced Science Laboratory" },
      { id: "5", url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800", category: "Campus", caption: "Central Resource Library" },
      { id: "6", url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", category: "Sports", caption: "Annual Athletics Meet" },
    ],
    testimonials: [
      { id: "1", name: "Arjun Nair", role: "Parent of Grade IX Student", content: "Green Valley changed our son entirely. He went from being an introvert to confidently leading his class presentations. The teachers noticed the smallest details and never gave up on him.", rating: 5, image: "https://i.pravatar.cc/300?img=68" },
      { id: "2", name: "Kavitha Menon", role: "Alumna, Batch of 2021", content: "Every value I carry today — discipline, empathy, and resilience — was shaped in these very classrooms. Green Valley didn't just educate me; it truly prepared me for life.", rating: 5, image: "https://i.pravatar.cc/300?img=47" },
      { id: "3", name: "Deepak Verma", role: "Parent of Grade VI Student", content: "We were anxious about the transition when we relocated to a new city. The school's welcoming environment made our daughter feel at home from day one. We are truly grateful.", rating: 5, image: "https://i.pravatar.cc/300?img=59" },
      { id: "4", name: "Lakshmi Iyer", role: "Parent of Grade III Student", content: "The blend of academics and co-curricular activities here is perfect. My son paints, codes, and reads books — all passions he discovered right here at Green Valley.", rating: 5, image: "https://i.pravatar.cc/300?img=44" },
      { id: "5", name: "Rohan Desai", role: "Alumnus, Batch of 2019", content: "I am now studying engineering at a top institute, and I trace it all back to the strong foundation Green Valley built for me. The science labs and project-based learning were incredible.", rating: 5, image: "https://i.pravatar.cc/300?img=65" },
      { id: "6", name: "Sunita Chauhan", role: "Parent of Grade XI Student", content: "The counselling and career guidance provided here is exceptional. My daughter knew exactly what she wanted to pursue by Grade 10, and the school supported that journey every step of the way.", rating: 5, image: "https://i.pravatar.cc/300?img=41" },
    ],
  },
  hero: {
    badgeText: "ADMISSIONS OPEN • 2026–27",
    eyebrowText: "Green Valley International School",
    titleLine1: "Where Curiosity",
    titleLine2: "Becomes Confidence.",
    highlightedWord: "Confidence.",
    description: "An education that nurtures curiosity, builds character, and prepares every child for a changing world.",
    primaryCtaLabel: "Explore Our School",
    primaryCtaLink: "/campus",
    secondaryCtaLabel: "Begin Admission",
    secondaryCtaLink: "/admissions",
    watchTourLabel: "Watch Campus Tour",
    campusTourVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-41549-large.mp4",
    desktopVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-walking-on-a-college-campus-41551-large.mp4",
    mobileVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-41549-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=85&w=2000",
    mobilePosterImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=85&w=800",
    statistics: [
      { value: 5, suffix: "+", label: "Years of Excellence" },
      { value: 1200, suffix: "+", label: "Students" },
      { value: 85, suffix: "+", label: "Educators" },
      { value: 40, suffix: "+", label: "Clubs & Activities" },
    ],
  },
  animation: {
    globalEnabled: true,
    intensity: "medium",
    sectionReveal: "fadeUp",
    duration: 0.6,
    stagger: 0.1,
    parallaxEnabled: true,
    hoverEffects: true,
  },
  pages: [
    { id: "home", title: "Home", slug: "/", enabled: true, showInNavigation: true, order: 1 },
    { id: "about", title: "About", slug: "about", enabled: true, showInNavigation: true, order: 2 },
    { id: "academics", title: "Academics", slug: "academics", enabled: true, showInNavigation: true, order: 3 },
    { id: "campus", title: "Campus", slug: "campus", enabled: true, showInNavigation: true, order: 4 },
    { id: "student-life", title: "Student Life", slug: "student-life", enabled: true, showInNavigation: true, order: 5 },
    { id: "admissions", title: "Admissions", slug: "admissions", enabled: true, showInNavigation: true, order: 6 },
    { id: "news-events", title: "News & Events", slug: "news-events", enabled: true, showInNavigation: true, order: 7 },
    { id: "contact", title: "Contact", slug: "contact", enabled: true, showInNavigation: true, order: 8 },
    { id: "parent-portal", title: "Parent Portal", slug: "parent-portal", enabled: true, showInNavigation: false, order: 9 },
    { id: "apply", title: "Apply Now", slug: "admissions/apply", enabled: true, showInNavigation: false, order: 10 },
  ],
  navigation: [
    { id: "1", label: "About", url: "/about", enabled: true, order: 1 },
    { id: "2", label: "Academics", url: "/academics", enabled: true, order: 2 },
    { id: "3", label: "Campus", url: "/campus", enabled: true, order: 3 },
    { id: "4", label: "Student Life", url: "/student-life", enabled: true, order: 4 },
    { id: "5", label: "Admissions", url: "/admissions", enabled: true, order: 5 },
    { id: "6", label: "News & Events", url: "/news-events", enabled: true, order: 6 },
  ],
  sections: [
    // Short Home Page Sections
    { id: "h1", type: "hero", enabled: true, order: 1, pageId: "home" },
    { id: "h2", type: "aboutPreview", enabled: true, order: 2, pageId: "home" },
    { id: "h3", type: "highlights", enabled: true, order: 3, pageId: "home" },
    { id: "h4", type: "events", enabled: true, order: 4, pageId: "home" },
    { id: "h5", type: "testimonials", enabled: true, order: 5, pageId: "home" },
    { id: "h6", type: "admissionsCTA", enabled: true, order: 6, pageId: "home" },
    
    // About Page Sections
    { id: "a1", type: "about", enabled: true, order: 1, pageId: "about" },
    { id: "a2", type: "visionMission", enabled: true, order: 2, pageId: "about" },
    { id: "a3", type: "principal", enabled: true, order: 3, pageId: "about" },
    { id: "a4", type: "achievements", enabled: true, order: 4, pageId: "about" },
    { id: "a5", type: "whyChooseUs", enabled: true, order: 5, pageId: "about" },
    
    // Academics Page Sections
    { id: "ac1", type: "academics", enabled: true, order: 1, pageId: "academics" },
    { id: "ac2", type: "whyChooseUs", enabled: true, order: 2, pageId: "academics" },
    { id: "ac3", type: "admissionsCTA", enabled: true, order: 3, pageId: "academics" },
    
    // Campus Page Sections
    { id: "c1", type: "facilities", enabled: true, order: 1, pageId: "campus" },
    { id: "c2", type: "gallery", enabled: true, order: 2, pageId: "campus" },
    
    // Student Life Page Sections
    { id: "sl1", type: "whyChooseUs", enabled: true, order: 1, pageId: "student-life" },
    { id: "sl2", type: "events", enabled: true, order: 2, pageId: "student-life" },
    { id: "sl3", type: "gallery", enabled: true, order: 3, pageId: "student-life" },
    { id: "sl4", type: "testimonials", enabled: true, order: 4, pageId: "student-life" },
    { id: "sl5", type: "admissionsCTA", enabled: true, order: 5, pageId: "student-life" },
    
    // Admissions Page Sections
    { id: "ad1", type: "admissionsCTA", enabled: true, order: 1, pageId: "admissions" },
    { id: "ad2", type: "whyChooseUs", enabled: true, order: 2, pageId: "admissions" },
    
    // News & Events Page Sections
    { id: "e1", type: "events", enabled: true, order: 1, pageId: "news-events" },
    { id: "e2", type: "achievements", enabled: true, order: 2, pageId: "news-events" },
    
    // Contact Page Sections
    { id: "co1", type: "contact", enabled: true, order: 1, pageId: "contact" },
  ],
};
