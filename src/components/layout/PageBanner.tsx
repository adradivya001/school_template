import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb: Array<{ name: string; href?: string }>;
  image?: string;
}

export function PageBanner({ title, subtitle, breadcrumb, image = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920" }: PageBannerProps) {
  return (
    <div className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-slate-950 overflow-hidden pt-20 font-sans">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/70 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white font-serif mb-3 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-slate-300 mb-5 max-w-2xl font-light">
            {subtitle}
          </p>
        )}
        
        <nav className="flex items-center space-x-2 text-sm md:text-base text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          {breadcrumb.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <ChevronRight size={16} className="text-slate-400" />
              {item.href ? (
                <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-emerald-400 font-semibold">{item.name}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
