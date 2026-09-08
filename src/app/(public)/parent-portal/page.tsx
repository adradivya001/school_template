"use client";

import { PageBanner } from "@/components/layout/PageBanner";
import { GraduationCap, Lock, ArrowRight, UserCheck, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/animations/AnimatedButton";

export default function ParentPortalPage() {
  return (
    <>
      <PageBanner
        title="Green Valley School Portals"
        breadcrumb={[{ name: "Parent Portal" }]}
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 bg-slate-950 text-white min-h-[60vh] flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-3">Welcome to School Portals</h2>
            <p className="text-slate-300 text-base">
              Select your portal below to log in and access student academic records, attendance, fees, and campus notices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-7 flex flex-col justify-between hover:border-emerald-400 transition-all">
              <div>
                <UserCheck className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Parent Portal</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Track student attendance, exam report cards, fee payments, and school circulars.
                </p>
              </div>
              <button
                onClick={() => alert("Opening Parent Portal Login...")}
                className="w-full h-11 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
              >
                <span>Parent Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-teal-400/40 transition-all">
              <div>
                <Sparkles className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Student Portal</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Access digital LMS, online homework assignments, library catalog, and timetable.
                </p>
              </div>
              <button
                onClick={() => alert("Opening Student Portal Login...")}
                className="w-full h-11 rounded-xl bg-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <span>Student Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <ShieldCheck className="w-8 h-8 text-slate-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Faculty & Staff</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Teacher gradebook workspace, attendance entry, and administrative management.
                </p>
              </div>
              <button
                onClick={() => alert("Opening Staff Workspace Login...")}
                className="w-full h-11 rounded-xl bg-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <span>Staff Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
