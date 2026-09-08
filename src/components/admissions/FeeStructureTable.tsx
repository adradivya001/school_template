"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";

interface FeeItem {
  grade: string;
  admissionFee: string;
  tuitionFee: string;
  transportFee: string;
  activityFee: string;
}

const DEMO_FEES: FeeItem[] = [
  { grade: "Pre-Primary (Nursery – UKG)", admissionFee: "₹15,000", tuitionFee: "₹45,000 / yr", transportFee: "₹12,000 / yr", activityFee: "₹5,000 / yr" },
  { grade: "Primary (Grades 1 – 5)", admissionFee: "₹20,000", tuitionFee: "₹60,000 / yr", transportFee: "₹14,000 / yr", activityFee: "₹7,000 / yr" },
  { grade: "Middle School (Grades 6 – 8)", admissionFee: "₹25,000", tuitionFee: "₹75,000 / yr", transportFee: "₹16,000 / yr", activityFee: "₹8,000 / yr" },
  { grade: "Secondary (Grades 9 – 10)", admissionFee: "₹30,000", tuitionFee: "₹90,000 / yr", transportFee: "₹18,000 / yr", activityFee: "₹10,000 / yr" },
  { grade: "Senior Secondary (Grades 11 – 12)", admissionFee: "₹35,000", tuitionFee: "₹1,10,000 / yr", transportFee: "₹18,000 / yr", activityFee: "₹12,000 / yr" },
];

export function FeeStructureTable() {
  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            Transparent Pricing
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            Fee Structure (Academic Year 2026–27)
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3.5 py-2 rounded-full">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>No Hidden Installment Charges</span>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold uppercase tracking-wider text-slate-500">
              <th className="py-4 px-6">Grade / Level</th>
              <th className="py-4 px-6">One-Time Admission Fee</th>
              <th className="py-4 px-6">Annual Tuition Fee</th>
              <th className="py-4 px-6">Optional Transport</th>
              <th className="py-4 px-6">Activity & Lab Fee</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 text-sm">
            {DEMO_FEES.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">{item.grade}</td>
                <td className="py-4 px-6 text-slate-700 font-semibold">{item.admissionFee}</td>
                <td className="py-4 px-6 text-emerald-600 font-extrabold">{item.tuitionFee}</td>
                <td className="py-4 px-6 text-slate-600">{item.transportFee}</td>
                <td className="py-4 px-6 text-slate-600">{item.activityFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200/80 text-xs text-slate-500 space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Tuition fees are payable in 3 easy quarterly installments.</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Sibling discounts (10% on tuition fee for second child) are available upon application.</span>
        </div>
      </div>
    </div>
  );
}
