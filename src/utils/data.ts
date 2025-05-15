import {
  HeaderProps,
  SummaryProps,
  ExperienceProps,
  ProjectItemProps,
  EducationItemProps,
  Skills,
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
    startDate: new Date("2021-02-02"),
    bullets: [
      "Led the engineering team to successfully integrate Yardzen's AI-powered landscaping platform into OldCastle's existing operations.",
      "Developed and implemented a comprehensive AI-driven solution for automated landscaping design and project management.",
      "Successfully migrated Yardzen's core platform to a new, scalable cloud infrastructure, improving system reliability and performance.",
      "Collaborated with cross-functional teams to optimize Yardzen's AI-powered landscaping platform for seamless integration into OldCastle's operations.",
      "Led the engineering team to successfully integrate Yardzen's AI-powered landscaping platform into OldCastle's existing operations.",
    ],
  },
  {
    company: "Valor Performance",
    title: "CTO",
    note: "Acquired by Mursion",
    startDate: new Date("2018-04-02"),
    endDate: new Date("2021-02-02"),
    bullets: [
      "Led cross-functional product and engineering teams to build a remote executive coaching platform serving coaches, clients, and administrators",
      "Acted as a principal engineer, contributing heavily to core application code, infrastructure, and feature development across the stack",
      "Architected and launched a proprietary video conferencing solution tailored for high-performance coaching sessions",
      "Built an integrated learning management system (LMS) to support custom course creation and progression tracking",
      "Directed product strategy and execution, translating business needs into scalable technical solutions and coordinating roadmap delivery",
    ]
  },
  {
    company: "CoachUp",
    title: "Advisor",
    startDate: new Date("2018-11-02"),
    bullets: [
      "Provide support and strategic guidance to the CEO and executive team",
    ]
  },
  {
    company: "Athletes of Valor",
    title: "Co-Founder/CTO",
    note: "Acquired by CoachUp",
    startDate: new Date("2016-08-02"),
    endDate: new Date("2018-11-02"),
    bullets: [
      "Built and launched full-stack web application as solo engineer using Ruby on Rails, including infrastructure, front end, and back end.",
      "Led technical strategy and product roadmap, defining core features and aligning engineering efforts with business goals",
      "Co-founded the company and played a key role in capital raising efforts, including investor presentations and pitch refinement",
      "Won the 50k prize in the competitive MassChallenge startup accelerator, validating business potential and execution strength",
    ]
  }
]

export const projects: ProjectItemProps[] = [
  {
    title: "YardAI",
    description: "YardAI is a tool that uses a proprietary diffusion model to generate landscaping designs for user uploaded images. As the sole engineer on this project I trained, iterated, and deployed an image generation model to production at scale that has genertaed over 100,000 images for end users.",
    technologies: ["Stable Diffusion", "Python", "Rails", "CUDA/Transformers", "React (NextJS)"],
  },
  {
    title: "Sales Call AI",
    description: "Sales Call AI is a proprietary tool for Yardzen that transcribes sales calls and uses AI to provide insights on themes, customer profile, questions, objections to enable the data driven development of sales processes and techniques.",
    technologies: ["LLama/Ollama/OpenAI", "Python", "Rails", "React"],
  },
  {
    title: "Budgeting (Personal Project)",
    description: "As a learning project for NextJS, I developed a tool which integrated to the Plaid API to provide insights into personal finances. This tool was developed as a replacement to mint.com",
    githubUrl: "https://github.com/griffinmahoney/budgeting",
    liveDemoUrl: "https://budgeting.griffinmahoney.com",
    technologies: ["React", "TypeScript", "NextJS", "Plaid"],
  }
]

export const education: EducationItemProps[] = [
  {
    school: "Wentworth Institute of Technology",
    degree: "Bachelors of Computer Science",
    endDate: new Date("2024-05-09"),
  }
]

export const skills: Skills[] = [
  {
    category: "Leadership",
    skills: ["Hiring and Talent Development", "Distributed Teams", "Coaching and Mentoring", "Product Management", "Agile Methodologies"],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Ruby", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "NextJS", "Ruby on Rails"],
  },
  {
    category: "Databases", 
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Kubernetes", "Docker", "AWS", "Linux", "Github Actions"],
  },
  
]
