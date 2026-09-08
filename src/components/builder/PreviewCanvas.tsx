import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageRenderer } from "@/components/common/PageRenderer";

export function PreviewCanvas() {
  return (
    <div className="flex-1 bg-gray-200/60 p-4 md:p-8 overflow-hidden flex flex-col items-center justify-center relative">
      {/* Decorative Browser Chrome */}
      <div className="w-full max-w-[1400px] h-full flex flex-col bg-white rounded-xl shadow-2xl border border-gray-300/50 overflow-hidden relative">
        <div className="h-10 bg-gray-100 flex items-center px-4 border-b border-gray-200 shrink-0 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="mx-auto bg-white rounded text-xs px-4 py-1 text-gray-400 shadow-sm border border-gray-200">
            preview.ottobon.com
          </div>
        </div>
        
        {/* The Live Rendered Template */}
        <div className="flex-1 overflow-y-auto relative bg-white">
          <PublicLayout>
             <PageRenderer pageId="home" />
          </PublicLayout>
        </div>
      </div>
    </div>
  );
}
