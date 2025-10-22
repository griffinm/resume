import { Resume } from "@/types/resume";

export const resumeData: Resume = {
  personalInfo: {
    name: "Griffin Mahoney",
    title: "Software Engineer | Technology Leader",
    email: "griffin@griffinmahoney.com",
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
        "Led the engineering team through successful acquisition by OldCastle in 2024. Developed and implemented comprehensive AI-driven solutions for automated landscaping design and project management.",
      achievements: [
        "Led the engineering team to successfully integrate Yardzen's AI-powered landscaping platform into OldCastle's existing operations",
        "Developed and implemented a comprehensive AI-driven solution for automated landscaping design and project management",
        "Successfully migrated Yardzen's core platform to a new, scalable cloud infrastructure, improving system reliability and performance",
        "Collaborated with cross-functional teams to optimize Yardzen's AI-powered landscaping platform for seamless integration into OldCastle's operations",
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
        "Hiring and Recruiting",
        "Building Offshore Teams",
        "Creating a culture of innovation",
        "Agile",
        "Technology and Business Strategy",
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
        "AI Infrastructure"
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Next.js",
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
      ],
    },
  ],

  projects: [
    {
      id: "project-1",
      name: "DevCollab - Developer Collaboration Platform",
      description:
        "Open-source platform for developers to collaborate on code reviews and pair programming sessions in real-time.",
      technologies: ["Next.js", "Node.js", "WebSocket", "PostgreSQL", "Redis", "Docker"],
      github: "github.com/alexjohnson/devcollab",
      link: "https://devcollab.dev",
      highlights: [
        "Built real-time code editor with syntax highlighting and collaborative cursors",
        "Implemented video/audio calling using WebRTC",
        "Gained 2,000+ GitHub stars and 50+ contributors",
        "Featured on Product Hunt, ranked #3 product of the day",
      ],
    },
    {
      id: "project-2",
      name: "TaskFlow - Project Management Tool",
      description:
        "Lightweight project management application with Kanban boards, time tracking, and team analytics.",
      technologies: ["React", "TypeScript", "Express", "MongoDB", "Chart.js"],
      github: "github.com/alexjohnson/taskflow",
      highlights: [
        "Designed and implemented drag-and-drop Kanban interface",
        "Built analytics dashboard with customizable reporting",
        "Deployed to 500+ active users in beta phase",
      ],
    },
    {
      id: "project-3",
      name: "API Monitor - Service Health Dashboard",
      description:
        "Monitoring solution for tracking API uptime, response times, and error rates with alerting capabilities.",
      technologies: ["Vue.js", "Python", "Flask", "PostgreSQL", "Redis"],
      link: "https://apimonitor.io",
      highlights: [
        "Monitors 100+ endpoints with 1-minute intervals",
        "Integrated with Slack, Discord, and email for alerting",
        "Built customizable dashboard with real-time graphs",
      ],
    },
  ],

  languages: [],
  certifications: [],

  achievements: [
    {
      id: "achievement-1",
      title: "Tech Innovation Award",
      description:
        "Received company-wide recognition for developing automated testing framework that reduced QA time by 70%",
      date: "Nov 2022",
    },
    {
      id: "achievement-2",
      title: "Hackathon Winner - SF DevFest 2021",
      description:
        "First place in 48-hour hackathon with team of 4, built AI-powered code review assistant",
      date: "Aug 2021",
    },
    {
      id: "achievement-3",
      title: "Open Source Contributor",
      description:
        "Active contributor to React, Next.js, and TypeScript projects with 100+ merged pull requests",
      date: "Ongoing",
    },
  ],

  volunteerWork: [
    {
      id: "volunteer-1",
      organization: "Code for Good",
      role: "Technical Mentor",
      startDate: "Jan 2020",
      endDate: "Present",
      description:
        "Mentoring underrepresented minorities in tech through coding bootcamp and career guidance.",
      achievements: [
        "Mentored 15+ students in web development fundamentals",
        "Conducted monthly workshops on modern JavaScript frameworks",
        "Helped 8 mentees secure their first tech jobs",
      ],
    },
    {
      id: "volunteer-2",
      organization: "Local Library Digital Literacy Program",
      role: "Web Development Instructor",
      startDate: "Sep 2019",
      endDate: "Dec 2021",
      description:
        "Teaching senior citizens and low-income families basic computer skills and web development.",
      achievements: [
        "Designed curriculum for beginner web development course",
        "Taught 50+ students across 10 cohorts",
        "Created online resources used by 200+ learners",
      ],
    },
  ],

  references: [
    {
      name: "Sarah Chen",
      title: "Engineering Manager",
      company: "TechCorp Solutions",
      email: "sarah.chen@techcorp.com",
      phone: "+1 (555) 234-5678",
      relationship: "Direct Supervisor",
    },
    {
      name: "Michael Rodriguez",
      title: "CTO",
      company: "StartupXYZ",
      email: "michael@startupxyz.com",
      phone: "+1 (555) 345-6789",
      relationship: "Former Manager",
    },
  ],
};

