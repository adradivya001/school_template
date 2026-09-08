import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", centered && "text-center", className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && (
        <p className={cn("text-muted-foreground text-sm md:text-base", centered && "max-w-2xl mx-auto")}>
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-16 bg-emerald-500 mt-4 rounded-full", centered && "mx-auto")} />
    </div>
  );
}
