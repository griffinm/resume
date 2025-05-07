import {
  HeaderProps,
  SummaryProps,
  ExperienceProps,
  ProjectItemProps,
} from "@/utils/types";

export const headerData: HeaderProps = {
  name: "Griffin Mahoney",
  email: "griffin@griffinmahoney.com",
  phone: "+1 (617) 652-0496",
  linkedin: "https://linkedin.com/in/griffinmahoney",
  github: "https://github.com/griffinmahoney",
}

export const summaryData: SummaryProps = {
  headline: "Hands-On Engineering Executive | Full-Stack Architect | AI & Platform Innovator",
  summary: "Deeply technical VP of Engineering with a track record of building and scaling systems end-to-end — from infrastructure and devops to elegant front-end applications. Known for combining leadership with execution: hiring and mentoring high-performing teams (including overseas), driving re-platforming efforts, and architecting robust platforms across multiple successful acquisitions. Proven innovator in applied AI, having independently developed production-grade solutions involving diffusion models and LLM-based analytics. Trusted leader in technical due diligence and strategic technology decisions during M&A events.",
}

export const experiences: ExperienceProps[] = [
  {
    company: "Yardzen",
    title: "VP of Engineering",
    note: "Acquired by OldCastle in 2024",
    startDate: new Date("2021-02-01"),
    bullets: [
      "Led the engineering team to successfully integrate Yardzen's AI-powered landscaping platform into OldCastle's existing operations.",
      "Developed and implemented a comprehensive AI-driven solution for automated landscaping design and project management.",
      "Successfully migrated Yardzen's core platform to a new, scalable cloud infrastructure, improving system reliability and performance.",
      "Collaborated with cross-functional teams to optimize Yardzen's AI-powered landscaping platform for seamless integration into OldCastle's operations.",
      "Led the engineering team to successfully integrate Yardzen's AI-powered landscaping platform into OldCastle's existing operations.",
    ],
  }
]

export const projects: ProjectItemProps[] = [
  {
    title: "Yardzen",
    description: "Yardzen is a landscaping platform that allows users to design and manage their landscaping projects.",
    githubUrl: "https://github.com/griffinmahoney/yardzen",
    liveDemoUrl: "https://yardzen.com",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    title: "Yardzen",
    description: "Yardzen is a landscaping platform that allows users to design and manage their landscaping projects.",
    githubUrl: "https://github.com/griffinmahoney/yardzen",
    liveDemoUrl: "https://yardzen.com",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Kubernetes"],
  }
]
