import { JourneyChapter, Milestone } from "@/types";

export const journeyChapters: JourneyChapter[] = [
  {
    id: "chapter-01",
    number: "01",
    totalChapters: "05",
    title: "The Beginning",
    subtitle: "Foundations of Web Programming & The Spark of Development",
    category: "Origins & Foundations",
    year: "2021 — 2022",
    shortDescription: "My introduction to programming and the foundational building blocks of the web—semantic markup, modern CSS layouts, and algorithmic problem solving.",
    fullDescription: "Curious about how static concepts transform into interactive interfaces, I dived into the raw mechanics of web engineering. Without relying on high-level libraries or black-box frameworks, I built a disciplined understanding of the DOM, layout engines, and asynchronous programming from the ground up.",
    coreCompetencies: [
      "Semantic HTML5 & Accessible Document Structures",
      "Modern CSS (Flexbox, Grid, Custom Properties)",
      "Vanilla JavaScript (ES6+, DOM APIs, Event Loop)",
      "Algorithmic Thinking & Clean Code Habits",
      "Git Version Control & Repository Architecture"
    ],
    keyExperiences: [
      "Built first responsive client-side utilities and interactive calculators from scratch",
      "Mastered layout responsiveness across viewport sizes without CSS framework dependencies",
      "Established disciplined Git branching, clean commit conventions, and open-source practices"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git", "GitHub", "VS Code"],
    outcomes: [
      "Formed a zero-shortcut engineering foundation that makes picking up any modern framework intuitive and durable."
    ]
  },
  {
    id: "chapter-02",
    number: "02",
    totalChapters: "05",
    title: "Learning & Exploration",
    subtitle: "NTI Specialized Track & Modern Front-End Frameworks",
    category: "Intensive Education",
    year: "2022 — 2023",
    shortDescription: "Formalizing my skills through the National Telecommunication Institute (NTI) Front-End track, mastering React lifecycles and modern front-end tooling.",
    fullDescription: "To transition from foundational experiments to industry-grade software, I completed the rigorous National Telecommunication Institute (NTI) Front-End Track. This intensive immersion trained me in component architecture, state management patterns, and RESTful API consumption.",
    coreCompetencies: [
      "React Component Lifecycles & Concurrent Patterns",
      "Custom Hooks & State Optimization",
      "RESTful API Integration & Async Handling",
      "Modern Build Environments (Vite, Package Tooling)",
      "CSS Preprocessors & Modular Stylesheets"
    ],
    keyExperiences: [
      "Graduated from the National Telecommunication Institute (NTI) Front-End track with distinction",
      "Engineered early interactive web applications and modular component experiments",
      "Cultivated deep habits of profiling bundle weights and reading official documentation"
    ],
    technologies: ["React", "JavaScript (ES6+)", "REST APIs", "Sass / SCSS", "Vite", "Postman"],
    outcomes: [
      "Transformed academic theory into a disciplined, component-driven engineering methodology."
    ]
  },
  {
    id: "chapter-03",
    number: "03",
    totalChapters: "05",
    title: "Design Meets Code",
    subtitle: "UI/UX Systems, Figma Mastery & Interaction Fidelity",
    category: "Design Engineering",
    year: "2023",
    shortDescription: "Bridging engineering logic with visual design—mastering Figma, atomic design systems, micro-interactions, and accessible typography.",
    fullDescription: "Realizing that great products require empathy for the end user just as much as clean code, I focused on UI/UX design. I mastered Figma, auto-layout hierarchies, and design systems. This enabled me to design in Figma and code in React with 100% design fidelity and zero communication loss.",
    coreCompetencies: [
      "Figma UI Kits, Auto-Layout & Design Tokens",
      "Atomic Component Hierarchies & Wireframing",
      "Micro-Interactions & Spring Physics (Motion)",
      "WCAG 2.2 AA Accessibility & Color Contrast",
      "Fluid Responsive Typography Scales"
    ],
    keyExperiences: [
      "Designed and coded high-converting editorial landing pages (ELEGANTER, Digital Studio)",
      "Built a reusable design system connecting Figma token values directly to Tailwind variables",
      "Engineered hardware-accelerated animations and refined hover transitions"
    ],
    technologies: ["Figma", "Tailwind CSS", "Motion / Framer Motion", "Atomic Design", "Responsive Layouts"],
    outcomes: [
      "Eliminated the typical friction between designers and developers by functioning seamlessly as both."
    ]
  },
  {
    id: "chapter-04",
    number: "04",
    totalChapters: "05",
    title: "Real-World Experience",
    subtitle: "Commercial Deliveries, E-commerce Systems & Client Projects",
    category: "Commercial Deliveries",
    year: "2023 — 2024",
    shortDescription: "Partnering with 13+ businesses and agencies across Mansoura and remote clients, including the full-featured Azaban System e-commerce platform.",
    fullDescription: "Putting theory into production. Over this phase, I partnered with local businesses, startups, and agencies to deliver 13+ client platforms. Standouts include the Azaban System—a complex commercial retail platform with instant multi-facet catalog search and dynamic cart logic—and Best Rate freight forwarding.",
    coreCompetencies: [
      "Production E-commerce Systems Architecture",
      "Client-Side Search & Filter Optimization",
      "State Synchronization & Optimistic Updates",
      "Direct Client Scoping, Estimates & Milestones",
      "Punctual Delivery & Production Deployments"
    ],
    keyExperiences: [
      "Architected Azaban System e-commerce engine with real-time catalog search and cart calculations",
      "Delivered international freight forwarding portal for Best Rate Logistics",
      "Accumulated +1,200 hours of direct client collaboration with 100% on-time delivery"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Context API", "Custom Hooks", "Vercel / Hostinger"],
    outcomes: [
      "Proven commercial reliability, resilient state architectures, and high client satisfaction."
    ]
  },
  {
    id: "chapter-05",
    number: "05",
    totalChapters: "05",
    title: "Today & Beyond",
    subtitle: "React 19, Strict TypeScript & AI-Powered Web Platforms",
    category: "Modern Horizons",
    year: "2024 — Present",
    shortDescription: "Pushing into cutting-edge frontiers—React 19, strict TypeScript, and AI-assisted educational platforms like the Tafahom Platform and Pink Shield.",
    fullDescription: "Today, I focus on building high-performance, resilient web platforms that integrate emerging technologies. I co-engineered the Tafahom Platform featuring the 'Faheem' AI exam engine, and developed the Pink Shield early-detection awareness platform. With React 19, strict TypeScript, and a relentless focus on performance and accessibility, I am building products that scale.",
    coreCompetencies: [
      "React 19 & Concurrent Architecture",
      "Strict TypeScript Schema Validation",
      "AI Prompt Orchestration & Interface Synthesis",
      "Bilingual Arabic/English RTL & LTR Typographic Alignment",
      "Lighthouse 95+ Performance & Web Vitals Optimization"
    ],
    keyExperiences: [
      "Engineered exam generator UI with AI prompt orchestration for the Tafahom Platform",
      "Constructed accessible, empathetic early-detection health portal for Pink Shield",
      "Actively taking on challenging freelance projects and preparing for high-impact product teams"
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Motion", "AI Orchestration", "Lighthouse 95+"],
    outcomes: [
      "Delivering future-ready digital platforms combining architectural cleanliness, design empathy, and AI capabilities."
    ]
  }
];

export const experienceMilestones: Milestone[] = [
  {
    year: "2024 - Present",
    period: "2024 - PRESENT",
    title: "Front-End Developer & UI Specialist",
    role: "Freelance & Collaborative Projects",
    location: "Mansoura, Egypt (Remote)",
    description: "Architecting high-performance web applications and EdTech tools. Delivered projects including Azaban System and the Tafahom AI-powered exam creation engine. Specialized in React 19, TypeScript, and accessible UI design.",
    achievements: [
      "Engineered full e-commerce architecture with real-time filtering and cart mechanics",
      "Collaborated on AI exam generation interfaces for educational institutes",
      "Delivered 1,200+ hours of client-facing design and development work"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma", "REST APIs", "Framer Motion"]
  },
  {
    year: "2023 - 2024",
    period: "2023 - 2024",
    title: "Front-End Web Developer",
    role: "Client Collaboration & Agency Projects",
    location: "El Mahalla / Remote, Egypt",
    description: "Partnered with local businesses and digital agencies to construct landing pages, corporate logistics portals, and commercial websites. Focused on cross-browser compatibility, responsive typography, and design fidelity.",
    achievements: [
      "Built Best Rate freight logistics corporate portal and Digital Studio landing pages",
      "Successfully delivered 13 client projects across retail, culinary, services, and logistics",
      "Accelerated website load speeds by migrating to utility CSS and asset optimization"
    ],
    technologies: ["HTML5", "CSS3 / Sass", "JavaScript (ES6+)", "Tailwind CSS", "Git", "Figma"]
  },
  {
    year: "2022 - 2023",
    period: "2022 - 2023",
    title: "Intensive Technical Training & Specialization",
    role: "NTI & Self-Directed Engineering",
    location: "Egypt",
    description: "Completed rigorous National Telecommunication Institute (NTI) Front-End tracks alongside advanced self-directed courses in modern JavaScript, React ecosystem, and UI/UX interface design.",
    achievements: [
      "Mastered React component lifecycles, state management, and modern DOM patterns",
      "Created initial library of reusable UI components and interactive web experiments",
      "Solidified foundations in responsive design, accessibility, and clean version control"
    ],
    technologies: ["HTML/CSS", "JavaScript", "React Foundations", "Git/GitHub", "UI Design Principles"]
  }
];
