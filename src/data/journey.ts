export interface JourneyChapter {
  id: string;
  number: string;
  totalChapters: string;
  category: string;
  year: string;
  period: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  coreCompetencies: string[];
  keyExperiences: string[];
  technologies: string[];
  outcomes: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const journeyChapters: JourneyChapter[] = [
  {
    id: "chapter-01",
    number: "01",
    totalChapters: "05",
    category: "FOUNDATIONS & ROOTS",
    year: "2021 – 2022",
    period: "2021 — 2022",
    title: "The Beginning",
    subtitle: "Introduction to Programming & Core Technical Foundations",
    shortDescription: "My introduction to programming and the foundations of my technical journey.",
    fullDescription: "My journey started with a fascination for how code powers digital interactions. I committed to mastering computer science fundamentals from first principles: writing semantic HTML5, styling with disciplined CSS3 layouts, and writing foundational vanilla JavaScript. Learning how the browser parser, DOM tree, and event loop interact built an enduring appreciation for engineering rigor over superficial shortcuts.",
    coreCompetencies: [
      "Algorithmic thinking and clean procedural code structure",
      "Semantic HTML5 landmark elements and accessible DOM trees",
      "CSS box model, responsive flexbox, and CSS grid layout mechanics",
      "Core JavaScript syntax, data types, loops, and DOM manipulation APIs"
    ],
    keyExperiences: [
      "Authored first series of responsive web pages and interactive script utilities",
      "Adopted Git and GitHub for daily commits and clean repository management",
      "Dissected real-world web applications to understand layouts and performance bottlenecks"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Git", "GitHub", "Browser DevTools"],
    outcomes: [
      "Built a solid conceptual base that enabled fast ramp-up in advanced engineering tracks",
      "Cultivated a lasting commitment to clean code formatting and semantic web standards"
    ],
    metrics: [
      { label: "Milestone", value: "Code Foundations" },
      { label: "Focus", value: "Browser & DOM" }
    ]
  },
  {
    id: "chapter-02",
    number: "02",
    totalChapters: "05",
    category: "IMMERSION & FORMAL TRAINING",
    year: "2022 – 2023",
    period: "2022 — 2023",
    title: "Learning & Exploration",
    subtitle: "Online Learning, Technical Exploration & NTI Training",
    shortDescription: "My online learning, technical exploration, and NTI training.",
    fullDescription: "To accelerate beyond self-directed experimentation, I completed intensive specialized engineering tracks at the National Telecommunication Institute (NTI) in Egypt. Here, I immersed myself in advanced modern JavaScript (closures, prototypes, asynchronous Promises, and API communication), state-driven component architectures with React, and modern developer toolchains. This period transformed foundational curiosity into methodical engineering.",
    coreCompetencies: [
      "Modern ECMAScript (ES6+) patterns, asynchronous control flows, and Fetch/Axios",
      "React component lifecycles, functional components, and unidirectional data flow",
      "RESTful API integration, response caching, and client-side error handling",
      "Modular SCSS / CSS-in-JS and cross-browser regression prevention"
    ],
    keyExperiences: [
      "Completed National Telecommunication Institute (NTI) Front-End engineering track",
      "Engineered early interactive client-side web tools and reusable component prototypes",
      "Adopted modern build systems (Vite, npm) and strict version-control branching"
    ],
    technologies: ["React", "JavaScript (ES6+)", "REST APIs", "Sass / SCSS", "Vite", "NTI Curriculum"],
    outcomes: [
      "Certified by the National Telecommunication Institute (NTI) with top evaluation",
      "Created initial private component library demonstrating state management and accessibility"
    ],
    metrics: [
      { label: "Institution", value: "NTI Egypt" },
      { label: "Curriculum", value: "Front-End Track" }
    ]
  },
  {
    id: "chapter-03",
    number: "03",
    totalChapters: "05",
    category: "DESIGN & ARCHITECTURE",
    year: "2023",
    period: "2023",
    title: "Design Meets Code",
    subtitle: "Front-End Development & UI/UX Design Convergence",
    shortDescription: "My development of Front-End Development and UI/UX Design skills.",
    fullDescription: "Realizing that memorable user experiences require both rigorous engineering and aesthetic empathy, I expanded deeply into UI/UX design. I mastered Figma to construct comprehensive design systems—defining typographic scales, spacing tokens, and component matrices. Bridging design and implementation eliminated the friction of handover: every layout I build in code reproduces design intent with 100% pixel fidelity, responsive elegance, and WCAG AA accessibility.",
    coreCompetencies: [
      "Figma design system creation: auto-layout, component variants, and design tokens",
      "Information architecture, user flow mapping, and wireframing prior to implementation",
      "Design-to-code translation with zero visual degradation or responsive clipping",
      "Micro-interaction design and motion curves using Tailwind CSS and Motion"
    ],
    keyExperiences: [
      "Designed full component systems in Figma for commercial web platforms",
      "Established strict typography and color palettes ensuring WCAG 2.2 contrast compliance",
      "Formulated personal front-end design constitution prioritizing minimal editorial clarity"
    ],
    technologies: ["Figma", "Tailwind CSS", "Motion", "UI/UX Systems", "WCAG 2.2", "TypeScript"],
    outcomes: [
      "Seamless bridge between Figma prototypes and clean React production markup",
      "Established signature aesthetic: dark editorial surfaces, refined typography, and minimal accents"
    ],
    metrics: [
      { label: "Discipline", value: "UI/UX & Code" },
      { label: "Standard", value: "WCAG AA" }
    ]
  },
  {
    id: "chapter-04",
    number: "04",
    totalChapters: "05",
    category: "COMMERCIAL CLIENT DELIVERIES",
    year: "2023 – 2024",
    period: "2023 — 2024",
    title: "Real-World Experience",
    subtitle: "Freelance Projects, Client Collaborations & Commercial Production",
    shortDescription: "My freelance projects, client collaborations, and professional experience.",
    fullDescription: "Transitioning into commercial engineering, I collaborated with local businesses, digital agencies, and independent stakeholders. Across 13 verified client projects and 1,200+ hours of development, I built freight logistics management portals, commercial retail landing pages, and corporate showcases. I took full responsibility for client requirements discovery, timeline commitments, technical architecture, and post-launch optimization.",
    coreCompetencies: [
      "Stakeholder communication, milestone scheduling, and scope decomposition",
      "Lighthouse performance optimization: sub-second rendering, asset compression, lazy loading",
      "Client-side routing, modular directory architecture, and clean component isolation",
      "Production deployment, custom domain setup, and responsive cross-device verification"
    ],
    keyExperiences: [
      "Engineered Best Rate corporate freight logistics portal and Digital Studio landing pages",
      "Delivered 13 commercial client projects across e-commerce, services, and logistics",
      "Logged over 1,200 hours of verified client-facing design and development execution"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Git", "Figma"],
    outcomes: [
      "13+ satisfied commercial clients with zero late deliveries or unresolved bugs",
      "Achieved average 95+ Google Lighthouse scores across performance, accessibility, and SEO"
    ],
    metrics: [
      { label: "Deliveries", value: "13+ Clients" },
      { label: "Track Record", value: "1,200+ Hours" }
    ]
  },
  {
    id: "chapter-05",
    number: "05",
    totalChapters: "05",
    category: "PRODUCTION PLATFORMS & FUTURE",
    year: "2024 – PRESENT",
    period: "2024 — PRESENT",
    title: "Today & Beyond",
    subtitle: "Modern Web Architectures, EdTech AI Platforms & Future Ambitions",
    shortDescription: "My current technical direction, capabilities, and future ambitions.",
    fullDescription: "Today, I architect scalable web applications at the intersection of modern React, strict TypeScript, and artificial intelligence integration. My flagship builds include Azaban System—a high-performance commercial retail platform with instant category filtering and persistent cart state—and Tafahom Platform—an EdTech assessment engine integrating the 'Faheem' AI assistant for automated exam generation. Moving forward, my ambition is to build resilient full-stack systems and intuitive interfaces that redefine human-computer interaction.",
    coreCompetencies: [
      "React 19 concurrent rendering, server components, and performance profiling",
      "AI prompt engineering and orchestrating generative workflows in production web interfaces",
      "Strict TypeScript typings, schema validation, and maintainable enterprise patterns",
      "Full-stack architecture exploration with Node.js, Next.js, and cloud backends"
    ],
    keyExperiences: [
      "Architected Azaban System: real-time filtering, responsive catalog, and checkout flow",
      "Developed Tafahom Platform: prompt orchestrator for AI exam generation with bilingual RTL/LTR",
      "Continually contributing to modern web engineering patterns and interactive UI research"
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "AI Integration", "Next.js", "Motion"],
    outcomes: [
      "Powering commercial retail sales and educational assessments for hundreds of active users",
      "Prepared to lead complex front-end engineering initiatives and full-stack software products"
    ],
    metrics: [
      { label: "Current Focus", value: "React 19 & AI" },
      { label: "Direction", value: "Full-Stack" }
    ]
  }
];
