# Resume App

A modern, responsive resume web application built with Next.js 15, featuring a clean design with expandable sections and comprehensive professional information.

## Features

- 📱 **Fully Responsive** - Mobile and desktop optimized layouts
- 🎨 **Modern Design** - Clean interface with tasteful color accents (blue and violet theme)
- 📂 **Expandable Sections** - Accordion components for detailed content (work experience, projects, volunteer work)
- 💼 **Comprehensive Resume** - All standard sections including work experience, education, skills, projects, certifications, achievements, and more
- 🎯 **Type-Safe** - Full TypeScript support with strongly typed resume data
- 🖨️ **Print-Friendly** - Optimized for printing

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the resume.

## Customizing Your Resume

To customize the resume with your own information:

1. Edit `src/data/resume.ts` - Update all the resume data with your personal information
2. The types are defined in `src/types/resume.ts` - Modify these if you need different data structures
3. The page layout is in `src/app/page.tsx` - Customize the design and sections as needed

## Building
To build, tag, and push a docker container use `build-and-push.sh`

## Tech Stack

- **Next.js 15** - React framework with App Router and SSR
- **React 19** - JavaScript library for building user interfaces
- **TailwindCSS** - Utility-first CSS framework for layout and styling
- **Mantine v7** - React components library (Badges, Accordions, Paper, ActionIcon)

## Deployment

Production is hosted on **AWS Amplify** and redeploys automatically on every push to `main`. See **[AMPLIFY.md](AMPLIFY.md)** for the full setup — build config, custom domain, DNS, and troubleshooting.

- **Live site**: https://griffinmahoney.me
- **Amplify app**: `resume` (`d2oomr1j63yuxz`), region `us-east-1`
- **Build**: static export — `NEXT_OUTPUT=export npm run build` → `out/` (via `amplify.yml`)

A containerized deployment is also available — see **[DOCKER.md](DOCKER.md)**.
