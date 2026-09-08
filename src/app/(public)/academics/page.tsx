import { PageRenderer } from "@/components/common/PageRenderer";
import { PageBanner } from "@/components/layout/PageBanner";

export default function AcademicsPage() {
  return (
    <>
      <PageBanner
        title="Academics & Curriculum"
        breadcrumb={[{ name: "Academics" }]}
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      />
      <PageRenderer pageId="academics" />
    </>
  );
}
