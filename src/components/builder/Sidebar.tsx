import { Settings, Palette, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: "school", icon: Settings, label: "School Info" },
    { id: "theme", icon: Palette, label: "Theme" },
    { id: "sections", icon: Grid, label: "Sections" },
  ];

  return (
    <div className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 h-full">
      <div className="p-4 border-b border-gray-200 flex items-center justify-center md:justify-start">
        <h1 className="font-bold text-lg hidden md:block text-gray-800">OTTObon Builder</h1>
        <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-bold md:hidden">O</div>
      </div>
      <nav className="flex-1 py-4 flex flex-col">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "w-full flex items-center justify-center md:justify-start gap-3 px-4 py-4 md:py-3 transition-colors text-left",
              activeTab === tab.id ? "bg-primary/10 text-primary border-r-2 border-primary" : "text-gray-600 hover:bg-gray-50"
            )}
            title={tab.label}
          >
            <tab.icon size={20} className="shrink-0" />
            <span className="font-medium text-sm hidden md:block">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
