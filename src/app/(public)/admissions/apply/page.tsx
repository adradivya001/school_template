"use client";

import { PageBanner } from "@/components/layout/PageBanner";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner
        title="Online Admission Application 2026–27"
        breadcrumb={[{ name: "Admissions", href: "/admissions" }, { name: "Apply Online" }]}
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 bg-slate-950 text-white min-h-[60vh] flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-6">
          {submitted ? (
            <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-10 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold font-serif mb-3">Application Submitted!</h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-md mx-auto mb-8">
                Thank you for applying to Green Valley International School. Our admissions officer will review your application and contact you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="mb-8">
                <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest block mb-2">
                  Step 1 of 2
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">Begin Application Process</h2>
                <p className="text-slate-400 text-sm mt-2">
                  Please fill out the student details below to initiate your admission application.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan Nair"
                      className="w-full h-12 rounded-xl bg-slate-950 border border-white/15 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Grade Applying For *</label>
                    <select
                      required
                      className="w-full h-12 rounded-xl bg-slate-950 border border-white/15 px-4 text-white focus:outline-none focus:border-emerald-400 text-sm"
                    >
                      <option value="">Select Grade</option>
                      <option value="nursery">Nursery / UKG</option>
                      <option value="primary">Grade 1 – 5</option>
                      <option value="middle">Grade 6 – 8</option>
                      <option value="senior">Grade 9 – 12</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Nair"
                      className="w-full h-12 rounded-xl bg-slate-950 border border-white/15 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full h-12 rounded-xl bg-slate-950 border border-white/15 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    className="w-full h-12 rounded-xl bg-slate-950 border border-white/15 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Additional Notes / Questions</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific query regarding curriculum, transport, or hostel..."
                    className="w-full p-4 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 text-sm"
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  className="h-13 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 border-none mt-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </AnimatedButton>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
