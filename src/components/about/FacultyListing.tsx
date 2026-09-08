"use client";

import { useState } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
}

const DEMO_FACULTY: FacultyMember[] = [
  { id: "1", name: "Dr. Ananya Sharma", designation: "Principal & Academic Director", department: "Leadership", qualification: "Ph.D. in Educational Leadership, M.Sc.", experience: "22+ Years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
  { id: "2", name: "Prof. Rajesh Varma", designation: "Head of Science Department", department: "Sciences", qualification: "M.Sc. Physics, B.Ed.", experience: "16+ Years", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
  { id: "3", name: "Sunita Deshmukh", designation: "Head of Mathematics", department: "Mathematics", qualification: "M.Sc. Mathematics", experience: "14+ Years", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800" },
  { id: "4", name: "Vikram Sengupta", designation: "Head of Languages & Literature", department: "Languages", qualification: "M.A. English Literature, M.Ed.", experience: "12+ Years", experience_years: "12", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" } as any,
  { id: "5", name: "Meera Krishnan", designation: "Head of Computer Science & STEAM", department: "Technology", qualification: "M.Tech Computer Science", experience: "10+ Years", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" },
  { id: "6", name: "Captain Ramesh Rao", designation: "Director of Physical Education", department: "Sports", qualification: "M.P.Ed, NIS Certified Coach", experience: "18+ Years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
];

export function FacultyListing() {
  const [activeDept, setActiveDept] = useState("All");

  const departments = ["All", "Leadership", "Sciences", "Mathematics", "Languages", "Technology", "Sports"];

  const filteredFaculty = activeDept === "All"
    ? DEMO_FACULTY
    : DEMO_FACULTY.filter((f) => f.department === activeDept);

  return (
    <div className="w-full">
      {/* Department Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeDept === dept
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "bg-slate-200/80 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFaculty.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {member.department}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                  <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider mt-0.5">
                    {member.designation}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{member.experience} Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
