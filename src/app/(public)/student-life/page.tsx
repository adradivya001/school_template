import { PageRenderer } from "@/components/common/PageRenderer";
import { PageBanner } from "@/components/layout/PageBanner";

export default function StudentLifePage() {
  return (
    <>
      <PageBanner
        title="Student Life & Co-Curriculars"
        breadcrumb={[{ name: "Student Life" }]}
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920"
      />
      <PageRenderer pageId="student-life" />
    </>
  );
}
