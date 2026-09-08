import { PageRenderer } from "@/components/common/PageRenderer";
import { PageBanner } from "@/components/layout/PageBanner";

export default function NewsEventsPage() {
  return (
    <>
      <PageBanner
        title="Campus News & Upcoming Events"
        breadcrumb={[{ name: "News & Events" }]}
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920"
      />
      <PageRenderer pageId="news-events" />
    </>
  );
}
