import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, CreditCard } from "lucide-react";
import { FeeStructureTable } from "@/components/admissions/FeeStructureTable";

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/admissions" className="hover:text-emerald-400 transition-colors">Admissions</Link>
          <span>/</span>
          <span className="text-emerald-400 font-bold">Fee Structure</span>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            Tuition & Payments
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Fee Structure (2026–2027)
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Transparent pricing with zero hidden charges. We offer flexible quarterly installment payment plans and sibling scholarships.
          </p>
        </div>

        {/* Fee Table Component */}
        <div className="mb-16">
          <FeeStructureTable />
        </div>

        {/* Payment Policy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <CreditCard className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Quarterly Payment Plan</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Annual tuition fees can be paid conveniently in four quarterly installments at the beginning of April, July, October, and January.
            </p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Sibling Discounts</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Families enrolling two or more children receive a 10% waiver on tuition fees for the younger sibling.
            </p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Merit Scholarships</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Scholarships up to 50% tuition waiver for high achievers in CBSE Board Exams, Olympiads, and National Sports tournaments.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Have Fee or Scholarship Inquiries?</h2>
            <p className="text-slate-300 text-sm md:text-base">Speak directly with our accounts team to discuss fee estimates and payment options.</p>
          </div>
          <Link href="/admissions/apply" className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl flex items-center gap-2 transition-all shrink-0">
            <span>Apply Online Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
