"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTemplate } from "@/context/TemplateContext";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);
const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

function ExactLogoImage({ src, alt }: { src: string; alt: string }) {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Chroma key out black background pixels
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          if (r < 30 && g < 30 && b < 30) {
            data[i + 3] = 0; // alpha transparent
          }
        }
        ctx.putImageData(imgData, 0, 0);
        setProcessedUrl(canvas.toDataURL("image/png"));
      } catch (e) {
        // fallback
      }
    };
  }, [src]);

  return (
    <img
      src={processedUrl || src}
      alt={alt}
      className="w-9 h-9 lg:w-10 lg:h-10 object-contain filter drop-shadow-md mix-blend-screen shrink-0"
    />
  );
}

export function Footer() {
  const { data: { school: schoolData } } = useTemplate();
  const currentYear = new Date().getFullYear();

  const logo = schoolData.logo || "/images/green_valley_logo.jpg";
  const schoolName = schoolData.schoolName || "Green Valley International School";
  const tagline = schoolData.tagline || "LEARN. LEAD. INSPIRE.";
  const description = "A learning community nurturing curiosity, character, and confidence for a changing world.";
  const address = schoolData.location || "Vijayawada, Andhra Pradesh";
  const phone = schoolData.contact?.phone || "+91 98765 43210";
  const email = schoolData.contact?.email || "admissions@greenvalleyschool.edu";
  const social = schoolData.socialLinks || {};

  return (
    <footer className="w-full font-sans">
      {/* LAYER 1 — ADMISSION CTA */}
      <section className="bg-[#F1F7FA] border-b border-slate-200/80 py-7 md:py-8 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left Text Content */}
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 tracking-tight leading-snug">
              Your Child's Journey Starts Here.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg leading-relaxed">
              Discover a learning environment built to inspire curiosity, confidence, and character.
            </p>
            <div className="pt-1.5 flex justify-center md:justify-start">
              <Link
                href="/admissions"
                className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Explore Admissions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Campus Image Container */}
          <div className="w-full md:w-[260px] lg:w-[320px] h-[120px] md:h-[140px] rounded-xl overflow-hidden shadow-sm shrink-0 relative group bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=85&w=800"
              alt="Green Valley Campus Life"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* LAYER 2 — MAIN FOOTER */}
      <div className="bg-[#071426] text-white">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-10 pb-8"
        >
          {/* Asymmetric 40% / 60% Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8">
            {/* LEFT COLUMN — ~40% (5 cols out of 12) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <ExactLogoImage src={logo} alt={schoolName} />
                <div className="flex flex-col">
                  <span className="font-bold text-lg lg:text-xl text-white tracking-tight leading-tight">
                    {schoolName}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 tracking-wider uppercase mt-0.5">
                    {tagline}
                  </span>
                </div>
              </div>

              <p className="text-[#9BAABC] text-xs sm:text-sm leading-relaxed max-w-sm">
                {description}
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pt-1">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[#9BAABC] hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <InstagramIcon />
                  </a>
                )}
                {social.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[#9BAABC] hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <FacebookIcon />
                  </a>
                )}
                {social.youtube && (
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[#9BAABC] hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <YoutubeIcon />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[#9BAABC] hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <LinkedinIcon />
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT SIDE — ~60% (7 cols out of 12) with THREE Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {/* Column 1: SCHOOL */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold text-slate-200 tracking-wider uppercase">
                  SCHOOL
                </h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/about" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/academics" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Academics
                    </Link>
                  </li>
                  <li>
                    <Link href="/campus" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Campus
                    </Link>
                  </li>
                  <li>
                    <Link href="/student-life" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Student Life
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: ADMISSIONS */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold text-slate-200 tracking-wider uppercase">
                  ADMISSIONS
                </h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/admissions" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Admissions Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/admissions/process" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Admission Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/admissions/apply" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Apply Online
                    </Link>
                  </li>
                  <li>
                    <Link href="/admissions/campus-visit" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Campus Visit
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: CONNECT */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold text-slate-200 tracking-wider uppercase">
                  CONNECT
                </h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/contact" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      News & Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/campus/gallery" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      Campus Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/admissions/faqs" className="text-[#9BAABC] hover:text-emerald-400 text-xs sm:text-sm transition-colors duration-200 inline-block">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LAYER 3 — CONTACT STRIP */}
          <div className="border-t border-white/10 pt-5 pb-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Item 1: VISIT US */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#9BAABC] uppercase tracking-wider">
                    VISIT US
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {address}
                  </span>
                </div>
              </div>

              {/* Item 2: CALL US */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#9BAABC] uppercase tracking-wider">
                    CALL US
                  </span>
                  <a
                    href={`tel:${phone}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Item 3: EMAIL US */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#9BAABC] uppercase tracking-wider">
                    EMAIL US
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT ROW */}
          <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9BAABC]">
            <p>© {currentYear} {schoolName}. All rights reserved.</p>
            <div className="flex items-center gap-3 text-[#9BAABC]">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>·</span>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
