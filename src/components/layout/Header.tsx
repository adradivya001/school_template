"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "@/components/animations/AnimatedButton";

const DROPDOWN_MENU_ITEMS: Record<string, Array<{ label: string; url: string }>> = {
  "/about": [
    { label: "About Our School", url: "/about" },
    { label: "Vision & Mission", url: "/about/vision-mission" },
    { label: "Principal's Message", url: "/about/principal" },
    { label: "Leadership & Faculty", url: "/about/leadership" },
    { label: "Our Values", url: "/about/values" },
    { label: "Achievements & Milestones", url: "/about/achievements" },
    { label: "Why Choose Us", url: "/about/why-choose-us" },
  ],
  "/academics": [
    { label: "Academic Overview", url: "/academics" },
    { label: "Curriculum", url: "/academics/curriculum" },
    { label: "Learning Stages", url: "/academics/learning-stages" },
    { label: "Teaching & Learning", url: "/academics/teaching-learning" },
    { label: "Examination & Assessment", url: "/academics/examination" },
    { label: "Exam Schedule", url: "/academics/exam-schedule" },
    { label: "Academic Calendar", url: "/academics/calendar" },
    { label: "Results", url: "/academics/results" },
  ],
  "/campus": [
    { label: "Campus Overview", url: "/campus" },
    { label: "Sports Facilities", url: "/campus/sports" },
    { label: "Transport", url: "/campus/transport" },
    { label: "Safety & Security", url: "/campus/safety" },
    { label: "Campus Gallery", url: "/campus/gallery" },
  ],
  "/student-life": [
    { label: "Life at Our School", url: "/student-life" },
    { label: "Clubs & Activities", url: "/student-life/clubs" },
    { label: "Sports", url: "/student-life/sports" },
    { label: "Arts & Culture", url: "/student-life/arts-culture" },
    { label: "Competitions", url: "/student-life/competitions" },
    { label: "Field Trips", url: "/student-life/field-trips" },
    { label: "Student Leadership", url: "/student-life/leadership" },
    { label: "Celebrations & Festivals", url: "/student-life/celebrations" },
  ],
  "/admissions": [
    { label: "Admissions Overview", url: "/admissions" },
    { label: "Admission Process", url: "/admissions/process" },
    { label: "Eligibility", url: "/admissions/eligibility" },
    { label: "Required Documents", url: "/admissions/documents" },
    { label: "Fee Structure", url: "/admissions/fees" },
    { label: "Important Dates", url: "/admissions/dates" },
    { label: "FAQs", url: "/admissions/faqs" },
    { label: "Campus Visit", url: "/admissions/campus-visit" },
    { label: "Apply Online", url: "/admissions/apply" },
  ],
  "/news-events": [
    { label: "Latest News", url: "/news" },
    { label: "Upcoming Events", url: "/events" },
    { label: "Announcements", url: "/announcements" },
    { label: "Student Achievements", url: "/student-achievements" },
  ],
};

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
      className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-lg mix-blend-screen"
    />
  );
}

export function Header() {
  const { data: { school: schoolData, navigation } } = useTemplate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = schoolData.logo && (schoolData.logo.startsWith("/") || schoolData.logo.startsWith("http"))
    ? schoolData.logo
    : "/images/green_valley_logo.jpg";

  const activeNavItems = navigation
    .filter((n) => n.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[88px] flex items-center font-sans",
          isScrolled
            ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/15 shadow-xl shadow-black/30"
            : "bg-slate-950/40 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10"
        )}
      >
        <div className="w-full px-3 sm:px-5 md:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative shrink-0 flex items-center justify-center">
              <ExactLogoImage src={logoSrc} alt={schoolData.schoolName} />
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-sans group-hover:text-emerald-400 transition-colors">
                Green Valley
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-300/90 tracking-wide mt-1 font-sans">
                International School
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-[24px] xl:gap-[32px]">
            {activeNavItems.map((link) => {
              const isActive = pathname === link.url || pathname.startsWith(link.url + "/");
              const subItems = DROPDOWN_MENU_ITEMS[link.url];
              const isHovered = activeDropdown === link.url;

              return (
                <div
                  key={link.id}
                  className="relative py-6"
                  onMouseEnter={() => setActiveDropdown(link.url)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.url}
                    className="flex items-center gap-1 text-[15px] xl:text-[16px] font-semibold transition-colors duration-200"
                  >
                    <span
                      className={cn(
                        "transition-colors duration-200 tracking-wide font-sans",
                        isActive || isHovered
                          ? "text-emerald-400 font-bold"
                          : "text-slate-200 hover:text-white"
                      )}
                    >
                      {link.label}
                    </span>
                    {subItems && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200 text-slate-400",
                          isHovered && "rotate-180 text-emerald-400"
                        )}
                      />
                    )}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-4 left-0 right-0 h-[2px] bg-emerald-400 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <AnimatePresence>
                    {isHovered && subItems && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-slate-950/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden"
                      >
                        <div className="flex flex-col gap-0.5">
                          {subItems.map((sub) => (
                            <Link
                              key={sub.url}
                              href={sub.url}
                              className={cn(
                                "px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between group/sub",
                                pathname === sub.url
                                  ? "bg-emerald-500/15 text-emerald-400 font-semibold"
                                  : "text-slate-300 hover:text-white hover:bg-white/10"
                              )}
                            >
                              <span>{sub.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all text-emerald-400" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <Link href="/admissions/apply">
              <AnimatedButton
                className="w-[130px] h-[44px] bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[15px] rounded-full flex items-center justify-center gap-1 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] border-none p-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button
              className="p-2 rounded-lg text-slate-200 hover:text-white bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-[88px] left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-y-auto max-h-[calc(100vh-88px)]"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <nav className="flex flex-col gap-2">
                  {activeNavItems.map((link) => {
                    const subItems = DROPDOWN_MENU_ITEMS[link.url];
                    const isExpanded = mobileExpandedSection === link.url;

                    return (
                      <div key={link.id} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link
                            href={link.url}
                            className="px-4 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-white flex-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                          {subItems && (
                            <button
                              onClick={() => setMobileExpandedSection(isExpanded ? null : link.url)}
                              className="p-3 text-slate-400 hover:text-emerald-400"
                            >
                              <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                            </button>
                          )}
                        </div>

                        {isExpanded && subItems && (
                          <div className="ml-4 pl-4 border-l border-white/10 flex flex-col gap-1 my-1">
                            {subItems.map((sub) => (
                              <Link
                                key={sub.url}
                                href={sub.url}
                                className="px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                  <Link href="/admissions/apply" onClick={() => setIsMobileMenuOpen(false)}>
                    <AnimatedButton className="w-full justify-center h-11 text-base rounded-xl bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
