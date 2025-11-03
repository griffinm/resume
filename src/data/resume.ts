import { Resume } from "@/types/resume";

export const resumeData: Resume = {
  personalInfo: {
    name: "Griffin Mahoney",
    title: "Software Engineer | Technology Leader",
    email: "griffin.mahoney@gmail.com",
    phone: "+1 (617) 652-0496",
    location: "Boston, MA",
    website: "griffinmahoney.com",
    linkedin: "linkedin.com/in/griffin-mahoney",
    github: "github.com/griffinm",
    summary:
      "Hands-on engineering leader with a track record of building and scaling high-impact software products from concept to acquisition. Former VP of Engineering and full-stack architect experienced across Node.js, TypeScript, and Rails ecosystems, with deep expertise in cloud infrastructure, data pipelines, and AI-powered systems. Proven success leading distributed teams, designing robust architectures, and driving product innovation across startups and growth-stage companies. Combines strategic vision with technical execution—equally comfortable coding, mentoring, and managing cross-functional stakeholders. Passionate about applying AI and automation to solve real-world problems and deliver lasting value.",
  },

  workExperience: [
    {
      id: "work-1",
      company: "Yardzen",
      role: "VP of Engineering",
      startDate: "Feb 2021",
      endDate: "Present",
      location: "Remote",
      description:
        "Led the engineering team including core engineering, data science, data engineering. Also acted as a key individual contributor for all aspects of the engineering team.",
      achievements: [
        "Led a hybrid team of onshore and offshore engineers to build a scalable online landscape design platform",
        "Led the effort to extend the core product to include a marketplace for finding a landscape contractor. This product included all aspects of the relationship from introduction to on platform payments using Stripe Connect",
        "Developed and implemented an AI powered landscaping design tool that allows users to design their landscape and get a quote for the materials and labor. This tool used a custom diffusion model trained on our existing data.",
        "Led the engineering team through an acquisition by OldCastle in late 2024",
        "Acted as a key member of the executive team to steer the company through multiple rounds of funding, growth, shifts, and changes in leadership.",
        "Developed and implemented an AI powered sales assistant that would analyze calls and provide insights and recommendations to the sales team in near real time.",
        "Led the effort to migrate yardzen.com from Squarespace to Contentful and NextJS",
        "Developed and implemented AI agents to streamline back-office operations",
        "Developed and implemented a custom AI powered chatbot for the customer support team",
        "Acted as the principal architect and developer of deployment and data infrastructure"
      ],
      acquisition: {
        acquirer: "OldCastle",
        year: 2024,
      },
    },
    {
      id: "work-2",
      company: "Valor Performance",
      role: "CTO",
      startDate: "Apr 2018",
      endDate: "Feb 2021",
      location: "Remote",
      description:
        "Led cross-functional product and engineering teams through successful acquisition by Mursion. Built a remote executive coaching platform serving coaches, clients, and administrators.",
      achievements: [
        "Led cross-functional product and engineering teams to build a remote executive coaching platform serving coaches, clients, and administrators",
        "Acted as a principal engineer, contributing heavily to core application code, infrastructure, and feature development across the stack",
        "Architected and launched a proprietary video conferencing solution tailored for high-performance coaching sessions",
        "Built an integrated learning management system (LMS) to support custom course creation and progression tracking",
        "Directed product strategy and execution, translating business needs into scalable technical solutions and coordinating roadmap delivery",
      ],
      acquisition: {
        acquirer: "Mursion",
        year: 2021,
      },
    },
    {
      id: "work-3",
      company: "CoachUp",
      role: "Advisor",
      startDate: "Nov 2018",
      endDate: "Present",
      location: "Boston, MA",
      description:
        "Provide support and strategic guidance to the CEO and executive team.",
      achievements: [],
    },
    {
      id: "work-4",
      company: "Athletes of Valor",
      role: "Co-Founder/CTO",
      startDate: "Aug 2016",
      endDate: "Nov 2018",
      location: "Boston, MA",
      description:
        "Co-founded and built full-stack web application as solo engineer, leading to successful acquisition by CoachUp.",
      achievements: [
        "Built and launched full-stack web application as solo engineer using Ruby on Rails, including infrastructure, front end, and back end",
        "Led technical strategy and product roadmap, defining core features and aligning engineering efforts with business goals",
        "Co-founded the company and played a key role in capital raising efforts, including investor presentations and pitch refinement",
        "Won the $50k prize in the competitive MassChallenge startup accelerator, validating business potential and execution strength",
      ],
      acquisition: {
        acquirer: "CoachUp",
        year: 2018,
      },
    },
  ],

  education: [
    {
      id: "edu-1",
      institution: "Wentworth Institute of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "Aug 2005",
      endDate: "May 2009",
      location: "Boston, MA",
    },
  ],

  skills: [
    {
      category: "Leadership & Management",
      items: [
        "Due Diligence",
        "Fundraising",
        "Hiring and Recruiting",
        "Building Offshore Teams",
        "Creating a culture of innovation",
        "Product Management",
        "Technology and Business Strategy",
        "Agile",
      ],
    },
    {
      category: "AI",
      items: [
        "LangChain/Vercel AI SDK",
        "Model Fine Tuning (LoRA, etc.)",
        "RAG and Vector Databases",
        "Agent Design and Deployment",
        "Stable Diffusion",
        "CUDA",
        "Keras",
        "AI Infrastructure",
        "Cursor",
        "Claude Code"
      ],
    },
    {
      category: "Backend",
      items: [
        "Node",
        "NextJS",
        "NestJS",
        "KOA",
        "Python",
        "Ruby/Rails",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "GraphQL",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "WCAG Accessibility",
        "CSS",
        "Tailwind CSS",
        "React Query",
        "Mantine UI",
        "Shadcn UI",
        "MUI",
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Network Engineering + Security",
        "GCP",
        "CI/CD",
        "Git",
        "Terraform",
        "Nginx",
        "NX",
      ],
    },
  ],

  projects: [
    {
      id: "project-1",
      name: "Notes",
      description:
        "An open source PWA note and task management with robust and helpful features",
      technologies: ["React", "NextJS", "NodeJS", "PostgreSQL", "Prisma", "Typesense", "Docker", "Kubernetes", "NX Monorepo", "Tailwind CSS"],
      github: "https://github.com/griffinm/griffin",
      link: "https://griffinmahoney.me/projects/notes",
      highlights: [
        "Full WYSIWYG with custom components",
        "Full-text search with Typesense",
        "Robust task management system",
        "NextJS with React Front End",
        "Deployed with Docker and K8s"
      ],
    },
    {
      id: "project-2",
      name: "Budgeting",
      description:
        "An open source PWA budgeting tool that syncs transactions from the Plaid API and provides helpful insights and reports",
      technologies: ["React", "Ruby on Rails", "PostgreSQL", "Plaid API", "Docker", "Kubernetes", "NX Monorepo", "Tailwind CSS"],
      github: "https://github.com/griffinm/budgeting",
      link: "https://griffinmahoney.me/projects/budgeting2",
      highlights: [
        "Month over Month reports with category breakdown",
        "Transaction sorting and filtering",
        "Budget creation and management",
        "Transaction and merchant sorting",
        "Trend reports",
        "Spending analytics",
        "Smart categories",
        "Plaid API integration",
        "Docker and K8s deployment",
      ],
    }
  ],

  languages: [],
  certifications: [],
  achievements: [],
  volunteerWork: [],
  references: [],
};

