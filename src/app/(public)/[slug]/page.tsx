import { PageRenderer } from "@/components/common/PageRenderer";
import { notFound } from "next/navigation";
import { defaultTemplateData } from "@/config/defaultData";
import { PageBanner } from "@/components/layout/PageBanner";

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageConfig = defaultTemplateData.pages.find((p) => p.slug === slug);
  
  if (!pageConfig || !pageConfig.enabled) {
    notFound();
  }
  
  return (
    <>
      <PageBanner 
        title={pageConfig.title} 
        breadcrumb={[{ name: pageConfig.title }]} 
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920" 
      />
      <PageRenderer pageId={pageConfig.id} />
    </>
  );
}
