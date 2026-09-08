import { useTemplate } from "@/context/TemplateContext";

// Simple helper to guess Hex from HSL for the color picker (or vice versa).
// For demonstration, we'll just support setting Hex since Tailwind v4 accepts both.

export function SettingsPanel({ activeTab }: { activeTab: string }) {
  const { data, updateSchool, updateTheme, updateSection } = useTemplate();

  return (
    <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto shrink-0 hidden lg:block h-full">
      <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <h2 className="font-bold text-lg capitalize text-gray-800">{activeTab} Settings</h2>
      </div>
      <div className="p-5 space-y-8 text-left">
        
        {activeTab === "school" && (
          <div className="space-y-5">
            <div className="space-y-2 text-left">
              <label className="text-sm font-semibold text-gray-700 block">School Name</label>
              <input 
                type="text" 
                value={data.school.schoolName}
                onChange={(e) => updateSchool({ schoolName: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-semibold text-gray-700 block">Tagline</label>
              <input 
                type="text" 
                value={data.school.tagline}
                onChange={(e) => updateSchool({ tagline: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-semibold text-gray-700 block">Board</label>
              <input 
                type="text" 
                value={data.school.board}
                onChange={(e) => updateSchool({ board: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-semibold text-gray-700 block">Principal Name</label>
              <input 
                type="text" 
                value={data.school.principal.name}
                onChange={(e) => updateSchool({ principal: { ...data.school.principal, name: e.target.value } })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
              />
            </div>
          </div>
        )}
        
        {activeTab === "theme" && (
          <div className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-sm font-semibold text-gray-700 block">Primary Color</label>
              <div className="flex gap-2 items-center">
                <input 
                  type="color" 
                  value={data.theme.primaryColor.startsWith('#') ? data.theme.primaryColor : '#003b82'} // Fallback for color picker
                  onChange={(e) => updateTheme({ primaryColor: e.target.value })}
                  className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                />
                <input 
                  type="text" 
                  value={data.theme.primaryColor}
                  onChange={(e) => updateTheme({ primaryColor: e.target.value })}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm font-mono text-gray-900"
                />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-semibold text-gray-700 block">Secondary Color</label>
              <div className="flex gap-2 items-center">
                <input 
                  type="color" 
                  value={data.theme.secondaryColor.startsWith('#') ? data.theme.secondaryColor : '#ffb400'} // Fallback
                  onChange={(e) => updateTheme({ secondaryColor: e.target.value })}
                  className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                />
                <input 
                  type="text" 
                  value={data.theme.secondaryColor}
                  onChange={(e) => updateTheme({ secondaryColor: e.target.value })}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm font-mono text-gray-900"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "sections" && (
          <div className="space-y-3">
            <p className="text-xs text-gray-500 mb-4">Toggle sections for the Home Page.</p>
            {data.sections.filter(s => s.pageId === "home").sort((a,b) => a.order - b.order).map(section => (
              <div key={section.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium capitalize text-gray-800">{section.type.replace(/([A-Z])/g, ' $1').trim()}</span>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={section.enabled}
                    onChange={(e) => updateSection(section.id, { enabled: e.target.checked })}
                  />
                  <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all relative"></div>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
