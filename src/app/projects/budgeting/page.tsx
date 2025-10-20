import { Header } from '@/components/ProjectPage/Header';
import { Features } from './features';
import { BackButton } from '@/components/ProjectPage/BackButton';
import { ScreenShots } from './screen-shots';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgeting Project",
  description: "A personal finance management tool to track expenses, set budgets, and analyze spending patterns. Built with modern web technologies for intuitive money management.",
};

export default function BudgetingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-4">
        <BackButton href="/projects" label="Back to Projects" />
      </div>

      <Header />

      <Features />

      <ScreenShots />
    </div>
  );
}

