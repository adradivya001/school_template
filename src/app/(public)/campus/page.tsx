import { PageRenderer } from "@/components/common/PageRenderer";
import { PageBanner } from "@/components/layout/PageBanner";

export default function CampusPage() {
  return (
    <>
      <PageBanner
        title="World-Class Campus & Facilities"
        breadcrumb={[{ name: "Campus" }]}
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920"
      />
      <PageRenderer pageId="campus" />
    </>
  );
}
