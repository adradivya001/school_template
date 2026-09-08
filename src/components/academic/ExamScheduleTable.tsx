"use client";

import { useState } from "react";
import { Download, Calendar as CalendarIcon, Clock, BookOpen, Filter } from "lucide-react";
import { AnimatedButton } from "@/components/animations/AnimatedButton";

interface ExamItem {
  subject: string;
  date: string;
  day: string;
  time: string;
  grade: string;
  room?: string;
}

const DEMO_EXAM_SCHEDULE: ExamItem[] = [
  { subject: "Mathematics", date: "Oct 12, 2026", day: "Monday", time: "9:00 AM – 12:00 PM", grade: "Class 10" },
  { subject: "Science (Physics)", date: "Oct 14, 2026", day: "Wednesday", time: "9:00 AM – 12:00 PM", grade: "Class 10" },
  { subject: "English Language & Literature", date: "Oct 16, 2026", day: "Friday", time: "9:00 AM – 12:00 PM", grade: "Class 10" },
  { subject: "Social Science", date: "Oct 19, 2026", day: "Monday", time: "9:00 AM – 12:00 PM", grade: "Class 10" },
  { subject: "Second Language (Hindi/Telugu)", date: "Oct 21, 2026", day: "Wednesday", time: "9:00 AM – 12:00 PM", grade: "Class 10" },
  { subject: "Computer Applications", date: "Oct 23, 2026", day: "Friday", time: "9:00 AM – 11:30 AM", grade: "Class 10" },

  // Class 12
  { subject: "Physics / Accountancy", date: "Oct 12, 2026", day: "Monday", time: "9:00 AM – 12:00 PM", grade: "Class 12" },
  { subject: "Chemistry / Business Studies", date: "Oct 14, 2026", day: "Wednesday", time: "9:00 AM – 12:00 PM", grade: "Class 12" },
  { subject: "Mathematics / Economics", date: "Oct 16, 2026", day: "Friday", time: "9:00 AM – 12:00 PM", grade: "Class 12" },
  { subject: "English Core", date: "Oct 19, 2026", day: "Monday", time: "9:00 AM – 12:00 PM", grade: "Class 12" },
  { subject: "Biology / Computer Science", date: "Oct 21, 2026", day: "Wednesday", time: "9:00 AM – 12:00 PM", grade: "Class 12" },
];

export function ExamScheduleTable() {
  const [selectedGrade, setSelectedGrade] = useState("Class 10");
  const [selectedYear, setSelectedYear] = useState("2026–27");
  const [selectedTerm, setSelectedTerm] = useState("Mid-Term Examination");

  const filteredSchedule = DEMO_EXAM_SCHEDULE.filter(
    (item) => item.grade === selectedGrade
  );

  const handleDownloadPDF = () => {
    alert(`Downloading ${selectedGrade} ${selectedTerm} Schedule PDF (${selectedYear})...`);
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-sm">
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-widest">
            <Filter className="w-3.5 h-3.5" />
            <span>Select Filters</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            {selectedGrade} — {selectedTerm}
          </h3>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="2026–27">Academic Year 2026–27</option>
            <option value="2025–26">Academic Year 2025–26</option>
          </select>

          <select
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="Mid-Term Examination">Mid-Term Examination</option>
            <option value="Annual Board Examination">Annual Board Examination</option>
            <option value="Unit Assessment 1">Unit Assessment 1</option>
          </select>

          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="Class 10">Class 10</option>
            <option value="Class 12">Class 12</option>
          </select>

          <AnimatedButton
            onClick={handleDownloadPDF}
            className="h-11 px-5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2 border-none"
          >
            <Download className="w-4 h-4" />
            <span>Download Schedule PDF</span>
          </AnimatedButton>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold uppercase tracking-wider text-slate-500">
              <th className="py-4 px-6">Subject</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6">Day</th>
              <th className="py-4 px-6">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 text-sm">
            {filteredSchedule.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>{item.subject}</span>
                </td>
                <td className="py-4 px-6 text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item.date}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-600 font-medium">{item.day}</td>
                <td className="py-4 px-6 text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item.time}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
