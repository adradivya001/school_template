"use client";

import { Cpu, Code, TestTube, Leaf, MessageSquare, Camera, Lightbulb, Palette } from "lucide-react";

interface ClubItem {
  name: string;
  category: string;
  description: string;
  activities: string[];
  icon: any;
  image: string;
}

const DEMO_CLUBS: ClubItem[] = [
  { name: "Robotics & Innovation Club", category: "Technology", description: "Design, build, and program autonomous robots for national STEM competitions.", activities: ["3D Printing", "Arduino Coding", "Bot Fighting"], icon: Cpu, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
  { name: "Coding & Cybernetics Club", category: "Technology", description: "Learn web development, Python programming, AI basics, and ethical hacking fundamentals.", activities: ["Hackathons", "App Design", "Game Development"], icon: Code, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" },
  { name: "Young Explorers Science Club", category: "Academics", description: "Hands-on science experiments, space observation, and environmental research projects.", activities: ["Stargazing", "Lab Experiments", "Science Fairs"], icon: TestTube, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" },
  { name: "Eco Champions & Sustainability", category: "Social Cause", description: "Promoting green campus initiatives, tree planting, and recycling programs.", activities: ["Organic Gardening", "Waste Recycling", "Solar Awareness"], icon: Leaf, image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
  { name: "Literary & Debate Society", category: "Leadership", description: "Honing public speaking, parliamentary debate skills, Model UN, and creative writing.", activities: ["MUN Conferences", "Oratory Competitions", "School Magazine"], icon: MessageSquare, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" },
  { name: "Shutterbugs Photography Club", category: "Arts", description: "Mastering digital photography, composition, lighting, and visual storytelling.", activities: ["Photo Walks", "Exhibitions", "Short Film Making"], icon: Camera, image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800" },
  { name: "Young Entrepreneurs Club", category: "Leadership", description: "Developing startup ideas, financial literacy, business pitch sessions, and leadership skills.", activities: ["Shark Tank Demos", "Marketplace Day", "Finance 101"], icon: Lightbulb, image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" },
  { name: "Fine Arts & Pottery Guild", category: "Arts", description: "Exploring watercolor, oil painting, pottery wheel craft, and traditional Indian folk arts.", activities: ["Art Fest", "Sculpting", "Mural Painting"], icon: Palette, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" },
];

export function ClubsListing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {DEMO_CLUBS.map((club, idx) => {
        const Icon = club.icon;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {club.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight">{club.name}</h4>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {club.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 mt-4">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Key Activities
              </span>
              <div className="flex flex-wrap gap-1.5">
                {club.activities.map((act, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
