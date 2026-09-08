import { PageRenderer } from "@/components/common/PageRenderer";
import { PageBanner } from "@/components/layout/PageBanner";

export default function AdmissionsPage() {
  return (
    <>
      <PageBanner
        title="Admissions & Eligibility"
        breadcrumb={[{ name: "Admissions" }]}
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      />
      <PageRenderer pageId="admissions" />
    </>
  );
}
