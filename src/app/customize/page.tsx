"use client";

import { useState } from "react";
import { Sidebar } from "@/components/builder/Sidebar";
import { PreviewCanvas } from "@/components/builder/PreviewCanvas";
import { SettingsPanel } from "@/components/builder/SettingsPanel";

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState("school");

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden text-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <PreviewCanvas />
      <SettingsPanel activeTab={activeTab} />
    </div>
  );
}
