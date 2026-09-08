export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  // Overrides the root layout's PublicLayout (since PublicLayout is applied in (public) routes)
  // Ensures the builder takes up the full screen
  return (
    <div className="h-screen w-full bg-background overflow-hidden font-sans">
      {children}
    </div>
  );
}
