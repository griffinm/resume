import { Header } from './header';
import { Features } from './features';
import { BackButton } from '@/components/ProjectPage/BackButton';

export default function NotesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-4">
        <BackButton href="/projects" label="Back to Projects" />
      </div>

      <Header />

      <Features />
    </div>
  );
}

