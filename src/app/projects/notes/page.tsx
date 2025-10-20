import { Header } from './header';
import { Features } from './features';
import { BackButton } from '@/components/ProjectPage/BackButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes Project",
  description: "A note-taking and organization application with rich text editing and categorization features. Streamline your thoughts and ideas with an intuitive interface.",
};

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

