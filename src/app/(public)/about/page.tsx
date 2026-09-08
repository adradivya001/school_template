import { PageRenderer } from "@/components/common/PageRenderer";
import { PageBanner } from "@/components/layout/PageBanner";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Our School"
        breadcrumb={[{ name: "About Us" }]}
        image="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920"
      />
      <PageRenderer pageId="about" />
    </>
  );
}
