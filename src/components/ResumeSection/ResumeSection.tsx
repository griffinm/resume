import React from "react";
import { Headers } from "@/components/Typography";

interface ResumeSectionProps {
  children: React.ReactNode;
  title: string;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ children, title }) => {
  return (
    <section>
      <Headers.H2>{title}</Headers.H2>
      {children}
    </section>
  );
};

