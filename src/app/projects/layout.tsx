import { TopNav } from '@/components/TopNav';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-background min-h-screen">
      <TopNav />
      {children}
    </main>
  );
}

