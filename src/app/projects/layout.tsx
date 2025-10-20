import { TopNav } from '@/components/TopNav';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-background">
      <TopNav />
      {children}
    </main>
  );
}

