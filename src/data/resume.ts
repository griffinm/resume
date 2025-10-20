import { Resume } from "@/types/resume";

export const resumeData: Resume = {
  personalInfo: {
    name: "Griffin Mahoney",
    title: "Software Engineer | Technicology Leader",
    email: "griffin@griffinmahoney.com",
    phone: "+1 (617) 652-0496",
    location: "Boston, MA",
    website: "https://griffinmahoney.com",
    linkedin: "linkedin.com/in/griffin-mahoney",
    github: "github.com/griffinm",
    summary:
      "Passionate full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture. Strong advocate for clean code, test-driven development, and mentoring junior developers.",
  },

  workExperience: [
    {
      id: "work-1",
      company: "TechCorp Solutions",
      role: "Senior Full Stack Developer",
      startDate: "Jan 2021",
      endDate: "Present",
      location: "San Francisco, CA",
      description:
        "Leading development of enterprise SaaS platform serving 100K+ users. Architecting scalable microservices and mentoring team of 5 developers.",
      achievements: [
        "Architected and implemented microservices migration reducing infrastructure costs by 40%",
        "Led development of real-time collaboration features using WebSocket, increasing user engagement by 65%",
        "Improved application performance by 50% through code optimization and caching strategies",
        "Mentored 5 junior developers, with 3 receiving promotions within 18 months",
        "Established CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      ],
    },
    {
      id: "work-2",
      company: "StartupXYZ",
      role: "Full Stack Developer",
      startDate: "Mar 2019",
      endDate: "Dec 2020",
      location: "San Francisco, CA",
      description:
        "Core team member building a fintech platform from ground up. Responsible for both frontend and backend development.",
      achievements: [
        "Built entire frontend application using React and TypeScript, serving 50K+ daily active users",
        "Developed RESTful APIs handling 1M+ requests per day with 99.9% uptime",
        "Implemented OAuth 2.0 authentication system securing user data",
        "Reduced page load times by 60% through code splitting and lazy loading",
        "Collaborated with product team to ship 15+ major features in first year",
      ],
    },
    {
      id: "work-3",
      company: "Digital Agency Inc",
      role: "Frontend Developer",
      startDate: "Jun 2016",
      endDate: "Feb 2019",
      location: "Los Angeles, CA",
      description:
        "Developed responsive websites and web applications for diverse clients across various industries.",
      achievements: [
        "Delivered 25+ client projects on time and within budget",
        "Created reusable component library adopted across 10+ projects",
        "Improved website accessibility scores from average 65 to 95+",
        "Trained team on modern JavaScript frameworks and best practices",
      ],
    },
  ],

  education: [
    {
      id: "edu-1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "Aug 2012",
      endDate: "May 2016",
      location: "Berkeley, CA",
      gpa: "3.8/4.0",
      honors: ["Magna Cum Laude", "Dean's List (6 semesters)"],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Web Development",
        "Software Engineering",
        "Operating Systems",
        "Computer Networks",
      ],
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
        "Vue.js",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "GraphQL",
        "REST APIs",
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "CI/CD",
        "Git",
        "Jenkins",
        "Terraform",
        "Nginx",
      ],
    },
    {
      category: "Testing",
      items: ["Jest", "React Testing Library", "Cypress", "Playwright", "Unit Testing", "E2E Testing"],
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

  certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "Mar 2023",
      expiryDate: "Mar 2026",
      credentialId: "AWS-SA-123456",
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "Sep 2022",
      expiryDate: "Sep 2024",
      credentialId: "GCP-PCA-789012",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "Jan 2022",
      expiryDate: "Jan 2025",
      credentialId: "CKA-345678",
    },
  ],

  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Professional Working Proficiency" },
    { name: "Mandarin Chinese", proficiency: "Elementary Proficiency" },
  ],

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

