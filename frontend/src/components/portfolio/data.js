// Content for the three timeline sections. Edit these arrays to update the
// site — the components render whatever you put here.

export const projects = [
  {
    title: "CollabXSphere — Influencer Marketing SaaS Platform",
    status: "Live",
    featured: true,
    description:
      "Full-stack SaaS platform connecting brands with creators. Features a 3-column brand dashboard with campaign tracking, creator discovery feed, budget monitoring, and real-time notifications. Built with Next.js 16 App Router using Server/Client Components, achieving 40% faster page loads through strategic component rendering and code splitting.",
    tech: [
      "Next.js 16",
      "React 18",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS v4",
      "NextAuth.js",
      "Zod",
      "Cloudinary",
    ],
    links: [
      { label: "Live demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "HRMS Portal & Talent Management System",
    status: "Active",
    description:
      "Enterprise HRMS and Talent Management platform serving 500+ employees with 99.5% uptime. Features responsive dashboards with real-time data updates, dynamic forms, and role-based access control for Admin, HR, and Employee roles. Optimized SSR/CSR rendering and MongoDB queries to cut page load time by 40% and API response time by 62%.",
    tech: ["Next.js", "React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    links: [
      { label: "Case study", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export const experience = [
  {
    role: "Associate MERN Developer",
    company: "Gravity Engineering Services",
    meta: "Raipur, CG · Full-time",
    duration: "Jan 2026 — Present",
    current: true,
    bullets: [
      "Architected HRMS Portal and Talent Management System serving 500+ employees with 99.5% uptime using Next.js, Node.js, Express, and MongoDB.",
      "Built responsive dashboards with React.js and Tailwind CSS featuring real-time data updates, dynamic forms, and intuitive navigation across mobile and desktop.",
      "Implemented JWT-based authentication with protected routes and role-based access control for Admin, HR, and Employee roles.",
      "Leveraged Next.js SSR/CSR and MongoDB query optimization to reduce page load time by 40% and API response time by 62%.",
    ],
    tech: ["Next.js", "React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    role: "React Developer Intern",
    company: "Gravity Engineering Services",
    meta: "Raipur, CG · Internship",
    duration: "Jun 2025 — Dec 2025",
    bullets: [
      "Developed 20+ reusable React components following atomic design principles, improving team development velocity by 30%.",
      "Integrated RESTful APIs with proper error handling, loading states, and data validation across 5 internal applications.",
      "Optimized component rendering using React.memo, useMemo, and useCallback hooks, reducing unnecessary re-renders by 45%.",
    ],
    tech: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS"],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering (AI)",
    institution: "Shri Shankaracharya Institute of Professional Management & Technology",
    meta: "Raipur · Full-time",
    duration: "2021 — 2025",
    score: "CGPA 7.3 / 10",
    bullets: [
      "Smart India Hackathon 2024 — College Finalist.",
      "Solved 100+ LeetCode problems in C++.",
      "Certified in Full Stack Web Development & React — The Complete Guide (Udemy, 2024).",
    ],
    tech: ["Data Structures", "Algorithms", "Artificial Intelligence", "Databases", "Web Development"],
  },
   {
    degree: "Higher Secondary (PCM)",
    institution: "Glorious Higher Secondary School",
    meta: "On-site",
    duration: "2019 — 2021",
    score: "",
    bullets: [
      "Completed 10+2 with Physics, Chemistry, and Mathematics.",
      "Built early programming foundations and prepared for engineering entrance exams.",
    ],
    tech: ["Physics", "Chemistry", "Mathematics"],
  },
];