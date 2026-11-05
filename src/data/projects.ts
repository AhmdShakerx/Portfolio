import { Project } from "@/types";

export const projects: Project[] = [
  {
  id: "CRYPTOGRAM",
  slug: "cryptogram",
  title: "CryptoGram",
  category: "Cryptography & Cybersecurity",
  shortDescription: "An interactive cryptography workstation exploring secure communication, encryption algorithms, and digital security.",
  fullDescription: "CryptoGram is an academic cryptography and security research platform that simulates a secure social communication environment. It combines encrypted messaging, protected social posts, modern and classical encryption algorithms, cryptanalysis tools, digital signatures, and interactive security experiments in one integrated workstation.",
  problem: "Understanding cryptographic concepts through theory alone makes it difficult to visualize how encryption, key exchange, authentication, and data integrity work in real-world communication systems.",
  role: "Full-Stack Developer & UI/UX Designer",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Web Crypto API", "Vite", "Node.js"],
  mainContribution: "Developed an interactive cryptography workstation that combines encrypted social communication with practical implementations and visual experiments covering modern encryption, classical ciphers, digital signatures, and cryptanalysis.",
  keyFeatures: [
    "Encrypted social feed with recipient-based access control and protected post decryption",
    "Secure messaging system with friend-based communication and cryptographic identity management",
    "Modern cryptography implementations including AES-256-GCM, RSA-OAEP, ECDH, ECDSA, and SHA-256",
    "Classical cryptography workbench featuring Caesar, Vigenère, Playfair, Hill, and Enigma simulations",
    "Interactive cryptanalysis laboratory with frequency analysis and cipher-breaking experiments",
    "Digital signature verification, data integrity testing, and tamper detection laboratory",
    "Protocol visualization, guided challenges, and automated cryptographic testing",
    "Security experiment reports and PDF export capabilities"
  ],
  liveUrl: "https://cryptogram-neon.vercel.app/",
  githubUrl: "https://github.com/AhmdShakerx/CreptoGram",
  imageSrc: "/crypto.png",
  featured: true,
  year: "2026",
  caseStudy: {
    overview: "CryptoGram bridges the gap between theoretical cryptography and practical security engineering through an interactive environment for exploring secure communication, encryption, authentication, and cryptanalysis.",
    challenge: "Building an integrated educational platform that demonstrates multiple cryptographic techniques while maintaining clear separation between encrypted data, private keys, and authorized decryption access.",
    goals: [
      "Demonstrate modern and classical cryptographic algorithms through interactive experiments",
      "Simulate secure communication with recipient-based encrypted content access",
      "Explore cryptographic security properties through visualization, testing, and cryptanalysis",
      "Maintain a consistent and intuitive experience across complex technical modules"
    ],
    developmentProcess: "Designed and developed a modular React and TypeScript application using a dark Midnight Research visual identity. Integrated browser-based cryptographic operations through the Web Crypto API and structured the platform around independent cryptography workstations and interactive security laboratories.",
    technicalHighlights: [
      "AES-256-GCM authenticated encryption with recipient-specific key envelopes",
      "RSA-OAEP encryption and ECDH-based key agreement workflows",
      "ECDSA digital signatures and SHA-256 hashing demonstrations",
      "Interactive classical cipher and Enigma rotor simulations",
      "Cryptanalysis experiments, tamper detection, and automated test workflows",
      "Modular React architecture with responsive Tailwind CSS interfaces"
    ],
    lessonsLearned: "This project strengthened my understanding of cryptographic architecture, secure key management, authenticated encryption, digital signatures, and the challenges of translating complex security concepts into interactive and understandable software experiences."
  }

  },
  {
  id: "FORGE",
  slug: "forge",
  title: "FORGE.",
  category: "Fitness & Gym Websites",
  shortDescription: "A modern fitness website designed to showcase a gym brand, training programs, and a powerful fitness experience.",
  fullDescription: "FORGE. is a bold and energetic fitness website built to represent a modern gym experience. It combines impactful visuals, strong typography, and structured content to showcase training programs, fitness services, membership options, and the gym's overall identity.",
  problem: "Fitness brands need a strong digital presence that communicates their identity, highlights available training programs, and helps potential members explore the gym's services through an engaging and accessible experience.",
  role: "Front-End Developer & UI Designer",
  technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animation Design"],
  mainContribution: "Developed a visually engaging gym website with a strong fitness-focused identity, combining bold layouts, dynamic interactions, and responsive sections to present the gym's services and training experience.",
  keyFeatures: [
    "Bold fitness-inspired hero section with impactful visual presentation",
    "Structured sections showcasing gym services and training programs",
    "Modern workout and fitness imagery gallery",
    "Interactive hover effects and smooth navigation transitions",
    "Responsive layouts optimized for desktop, tablet, and mobile devices"
  ],
  liveUrl: "https://gym-beryl-xi-51.vercel.app/",
  githubUrl: "https://github.com/AhmdShakerx/Gym",
  imageSrc: "/gum.png",
  featured: true,
  year: "2026",
  caseStudy: {
    overview: "FORGE. presents a modern fitness brand through a bold digital experience, combining strong visual storytelling with a structured layout that highlights the gym's identity and services.",
    challenge: "Creating an energetic and visually distinctive fitness website while maintaining usability, responsive layouts, and consistent performance across different devices.",
    goals: [
      "Establish a strong and recognizable fitness-focused visual identity",
      "Present gym services and training programs clearly",
      "Create engaging interactions without compromising usability",
      "Ensure a consistent experience across desktop and mobile screens"
    ],
    developmentProcess: "Focused on bold typography, high-impact imagery, structured content sections, and smooth micro-interactions to create a dynamic fitness-oriented experience.",
    technicalHighlights: [
      "Responsive layouts using modern CSS techniques",
      "Interactive hover states and smooth transitions",
      "Structured content sections for fitness services and programs",
      "Optimized visual presentation across different screen sizes"
    ],
    lessonsLearned: "This project strengthened my ability to build brand-focused websites and balance energetic visual design with usability, responsive behavior, and smooth interactions."
  }
},
  {
  id: "laqqta",
  slug: "laqqta",
  title: "LA2TA",
  category: "Creative Agency Website",
  shortDescription: "A premium digital experience for a creative agency specializing in photography, branding, and social media management.",
  fullDescription: "LA2TA is a creative media and digital agency website designed to showcase visual storytelling, distinctive brand identities, and strategic social media solutions through an immersive digital experience.",
  problem: "Creative agencies need more than a conventional portfolio website. They need a distinctive digital presence that communicates their creative vision, showcases their work effectively, and turns visitors into potential clients.",
  role: "Front-End Developer & UI/UX Designer",
  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "GSAP",
    "ScrollTrigger",
    "Framer Motion",
    "Lenis"
  ],
  mainContribution: "Designed and developed an immersive, animation-driven agency website featuring cinematic project showcases, interactive service sections, smooth scrolling experiences, and responsive layouts.",
  keyFeatures: [
    "Immersive hero experience with custom animations and visual storytelling",
    "Interactive Selected Work section with manual scroll control and image previews",
    "Dedicated landing pages for Photography, Branding & Logo Design, and Social Media Management",
    "Interactive service sections with animated hover states and image reveals",
    "Smooth scrolling, scroll-triggered animations, and cinematic transitions",
    "Fully responsive layouts optimized for mobile, tablet, and desktop"
  ],
  liveUrl: "https://laqqta.vercel.app/",
  githubUrl: "https://github.com/AhmdShakerx/laqqta",
  imageSrc: "/laqqta.png",
  featured: true,
  year: "2026",
  caseStudy: {
    overview: "LA2TA delivers a visually immersive digital experience that reflects the agency's creative identity while presenting its services and portfolio through carefully crafted interactions and animations.",
    challenge: "Creating a distinctive agency website that combines cinematic visual storytelling, interactive portfolio experiences, and smooth animations without compromising responsiveness or performance.",
    goals: [
      "Establish a strong and recognizable digital brand identity",
      "Showcase creative projects through immersive and interactive layouts",
      "Create dedicated experiences for each core agency service",
      "Maintain smooth performance across different screen sizes",
      "Encourage visitors to explore services and initiate client inquiries"
    ],
    developmentProcess: "Developed using React with a component-based architecture, combining GSAP, ScrollTrigger, Framer Motion, and Lenis to create engaging animations and interactive experiences. Each service received a dedicated landing page, while responsive layouts and optimized visual assets ensured a consistent experience across devices.",
    technicalHighlights: [
      "GSAP and ScrollTrigger for cinematic scroll-based animations",
      "Interactive portfolio with manual scroll control and image previews",
      "Responsive image compositions with preserved aspect ratios",
      "Reusable React components and structured service landing pages",
      "Lenis integration for smooth scrolling experiences",
      "Responsive animation behavior across mobile, tablet, and desktop"
    ],
    lessonsLearned: "A creative website should balance visual impact with usability. Carefully coordinated animations, responsive layouts, and intentional interactions can transform a traditional agency portfolio into a memorable digital experience."
  }

  },
  {
    id: "azaban-system",
    slug: "azaban-system",
    title: "Azaban System",
    category: "E-commerce",
    shortDescription: "A comprehensive e-commerce platform and integrated commercial management system.",
    fullDescription: "Azaban System is a full-featured commercial e-commerce solution engineered to handle product catalogs, complex hierarchical category filtering, dynamic cart workflows, and streamlined order operations.",
    problem: "Traditional local retail stores struggled to synchronize their digital product catalog with real-time stock availability and deliver a fast, frictionless customer checkout experience.",
    role: "Lead Front-End Developer & UI Designer",
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Context API"],
    mainContribution: "Architected a responsive multi-category catalog with instant filtering, stateful shopping cart calculations, and responsive mobile-first navigation.",
    keyFeatures: [
      "Dynamic multi-parameter product filter (price, category, availability)",
      "Persistent cart state with optimistic price calculations",
      "Mobile-optimized checkout funnel and order receipt generation",
      "Fluid animated micro-interactions for adding items and drawer toggling"
    ],
    liveUrl: "https://purple-bear-616763.hostingersite.com/",
    imageSrc: "/Screenshot 2026-05-20 233100.png",
    year: "2025",
    caseStudy: {
      overview: "Azaban was designed to modernize digital commerce for regional retail, prioritizing low-bandwidth efficiency, lightning-fast rendering, and crystal-clear item categorization.",
      challenge: "Handling large product catalogs without client-side lag while ensuring non-technical shoppers could easily navigate from search to order placement.",
      goals: [
        "Sub-1.5s initial page rendering on standard 4G connections",
        "Zero-friction cart and checkout flow with zero page reloads",
        "Clear visual hierarchy emphasizing product discounts and availability"
      ],
      developmentProcess: "Built with modular React components, custom hooks for cart management, and utility-first Tailwind CSS for minimal bundle weight. The UI was designed in Figma before translation into clean JSX.",
      technicalHighlights: [
        "Debounced client-side search query parser",
        "Accessible modal and drawer dialogs with keyboard trapping",
        "Optimistic UI updates for immediate user feedback"
      ],
      lessonsLearned: "State isolation between catalog filters and cart state significantly reduced re-renders, producing a buttery 60fps shopping experience."
    }
  },
  {
    id: "tafahom-platform",
    slug: "tafahom-platform",
    title: "Tafahom Platform",
    category: "AI & Technology",
    shortDescription: "An advanced EdTech solution featuring the 'Faheem' AI engine to generate professional academic exams.",
    fullDescription: "Tafahom Platform is an innovative educational technology hub connecting educators and learners. It integrates the proprietary 'Faheem' AI assistant to synthesize tailored assessments, generate structured exams, and provide instant evaluations.",
    problem: "Educators spend dozens of hours every week manually composing question banks, formatting balanced exams, and adjusting difficulty curves for varying student cohorts.",
    role: "Front-End Engineer & UI Specialist",
    technologies: ["React", "TypeScript", "Tailwind CSS", "AI Prompt Engineering", "Lucide React", "Framer Motion"],
    mainContribution: "Engineered the interactive question builder, prompt orchestrator interface, and adaptive dashboard for exam creation.",
    keyFeatures: [
      "Intuitive prompt input interface for AI-assisted exam generation",
      "Live exam preview with instant question swapping and score weighting",
      "Bilingual Arabic/English RTL and LTR typographic alignment",
      "Teacher analytics overview with distribution charts and student metrics"
    ],
    liveUrl: "https://tafahomedu.com/",
    imageSrc: "/Screenshot 2026-04-19 231223.png",
    
    year: "2025",
    caseStudy: {
      overview: "Tafahom solves the time-sink of academic exam preparation by blending artificial intelligence with a sleek, distraction-free educational management dashboard.",
      challenge: "Providing seamless Right-to-Left (RTL) Arabic typography alongside complex technical controls for exam generation, question sorting, and difficulty scaling.",
      goals: [
        "Deliver a modern, encouraging learning interface free of enterprise clutter",
        "Allow teachers to configure, generate, and export a 50-question exam in under 3 minutes",
        "Full mobile and tablet accessibility for teachers grading on the go"
      ],
      developmentProcess: "Iteratively refined the layout based on teacher feedback. Components were built using strict TypeScript interfaces for question types (MCQ, essay, true/false) to prevent runtime bugs.",
      technicalHighlights: [
        "Strict TypeScript schema for AI-generated assessment payloads",
        "Dynamic RTL/LTR typography handling with custom Arabic font metrics",
        "Print-ready stylesheet export for paper exam printing"
      ],
      lessonsLearned: "Designing for educators requires hyper-clear validation messages and instant feedback during AI synthesis to eliminate uncertainty."
    }
  },
  {
    id: "pink-shield",
    slug: "pink-shield",
    title: "Pink Shield",
    category: "AI & Technology",
    shortDescription: "An AI-powered healthcare awareness and early breast cancer detection web platform.",
    fullDescription: "Pink Shield is a mission-driven digital health platform designed to educate, raise awareness, and provide accessible AI-assisted symptom screening guidelines to support early breast cancer detection.",
    problem: "Access to early awareness tools and symptom self-check guides is often obscured by medical jargon, intimidation, or inaccessible clinical interfaces.",
    role: "UI/UX Designer & Front-End Developer",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    mainContribution: "Created a welcoming, calming, and medically credible interface featuring guided self-assessment steps and interactive educational modules.",
    keyFeatures: [
      "Guided multi-step risk assessment walkthrough with gentle progress indicators",
      "Interactive anatomy and self-examination educational visual guide",
      "Nearby clinic & screening center directory locator",
      "Reassuring pastel and dark-mode health aesthetic prioritizing accessibility"
    ],
    liveUrl: "https://pink-shield.vercel.app/",
    imageSrc: "/pink.png",
    
    year: "2025",
    caseStudy: {
      overview: "Pink Shield tackles healthcare anxiety by presenting clinical screening advice through a modern, empathetic, and mobile-first web application.",
      challenge: "Balancing medical seriousness with an inviting, anxiety-reducing visual language that encourages proactive health checks without overwhelming users.",
      goals: [
        "Achieve WCAG AA accessibility standards with high-contrast text and keyboard navigation",
        "Guide users through an intuitive 4-step assessment with zero medical jargon",
        "Ensure instant load times on low-end smartphones"
      ],
      developmentProcess: "Conducted color-psychology research to balance soft rose tones with clinical clarity. Implemented with React and Framer Motion for gentle, reassuring transitions between questions.",
      technicalHighlights: [
        "Accessible form controls with ARIA live regions for screen readers",
        "Client-side score computation with zero patient health data stored remotely",
        "Responsive vector graphics optimized for high-density mobile screens"
      ],
      lessonsLearned: "Empathy in UI design is not just visual—it dictates how error states are phrased and how navigation steps reassure the user at every checkpoint."
    }
  },
  {
    id: "az-learning",
    slug: "az-learning",
    title: "AZ-Learning",
    category: "Web Development",
    shortDescription: "A contemporary user interface for an online learning platform utilizing a modern dark aesthetic.",
    fullDescription: "AZ-Learning delivers an immersive learning environment for technical and creative students, featuring course previews, curriculum timelines, instructor profiles, and video lesson layouts.",
    problem: "Existing online course portals often feel sterile, clunky, and visually overwhelming, leading to low student engagement and course drop-off.",
    role: "Front-End Developer & UI Designer",
    technologies: ["React", "Tailwind CSS", "Lucide Icons", "Framer Motion"],
    mainContribution: "Designed and coded a modular course view, interactive syllabus accordion, and student progress tracker with dark-mode focus.",
    keyFeatures: [
      "Distraction-free dark mode theme for extended study sessions",
      "Interactive course syllabus with lesson duration and completion badges",
      "Instructor spotlight and student feedback review carousel",
      "Fluid responsive layout for desktop, tablet, and mobile viewing"
    ],
    liveUrl: "https://az-learning-delta.vercel.app/",
    imageSrc: "/az.png",
    year: "2025",
    caseStudy: {
      overview: "AZ-Learning combines sleek modern styling with structured learning design to make digital courses enjoyable to explore.",
      challenge: "Organizing deep hierarchical course curriculums (modules, lessons, quizzes, resources) without cluttering the screen.",
      goals: ["Create an engaging dark mode interface", "Keep lecture outlines accessible at a glance", "Smooth animations between modules"],
      developmentProcess: "Built component-by-component in React with Tailwind CSS, ensuring atomic modularity so modules can be re-used in dashboards.",
      technicalHighlights: ["Smooth accordion transitions with Framer Motion", "SVG progress rings calculating module completion rates"],
      lessonsLearned: "Clear visual hierarchy with subtle background contrasts keeps users focused for long reading and viewing sessions."
    }
  },
  {
    id: "english-academy",
    slug: "english-academy",
    title: "English Academy",
    category: "Web Development",
    shortDescription: "A modern UI design and front-end build for an Arabic e-learning language platform.",
    fullDescription: "English Academy is tailored for Arabic-speaking learners seeking to master spoken and business English through structured tracks, interactive grammar quizzes, and video mentorship.",
    problem: "Language learners in the MENA region frequently experience poor bilingual website design where Arabic RTL layouts look clumsy or broken.",
    role: "Front-End Developer",
    technologies: ["React", "Tailwind CSS", "RTL CSS", "JavaScript"],
    mainContribution: "Engineered a native RTL layout with bilingual course tracks, level placement previews, and teacher enrollment funnels.",
    keyFeatures: [
      "True native RTL layout with matched typography and icon mirrors",
      "Level placement assessment preview",
      "Video testimonial carousel from graduates",
      "Direct WhatsApp and payment registration flow"
    ],
    liveUrl: "https://english-academy-eta.vercel.app/",
    imageSrc: "/ayman.png",
    year: "2025",
    caseStudy: {
      overview: "English Academy bridge language barriers with a polished Arabic interface designed to build confidence in prospective students.",
      challenge: "Handling mixed English and Arabic content within the same line of text without layout shifts or reversed punctuation.",
      goals: ["Provide an intuitive RTL layout", "Drive course enrollments with clear CTA pathways", "Fast mobile responsiveness"],
      developmentProcess: "Used Tailwind CSS logical properties (start/end instead of left/right) to guarantee spotless RTL behavior.",
      technicalHighlights: ["Logical directional utilities in Tailwind", "Optimized image delivery for fast mobile browsing"],
      lessonsLearned: "Designing for Arabic users requires honoring regional visual norms and ensuring font weights render crisply."
    }
  },
  {
    id: "best-rate",
    slug: "best-rate",
    title: "Best Rate",
    category: "Web Development",
    shortDescription: "A professional corporate website design for an international freight forwarding and logistics company.",
    fullDescription: "Best Rate serves a global shipping and freight forwarding clientele, showcasing sea, air, and land logistics capabilities, cargo tracking guides, and instant rate quotation requests.",
    problem: "Logistics websites often look outdated, clunky, and fail to convey the speed, reliability, and security expected by international shippers.",
    role: "Front-End Developer & UI Designer",
    technologies: ["HTML5", "CSS3 / Sass", "JavaScript", "Responsive Design"],
    mainContribution: "Designed an authoritative corporate brand aesthetic, interactive service cards, and an interactive rate quotation calculator.",
    keyFeatures: [
      "Instant cargo freight rate inquiry form with dynamic field validation",
      "Interactive global shipping route matrix and service breakdown",
      "Corporate trust indicators (certifications, client logos, tracking FAQs)",
      "High-contrast, professional navy and cyan visual style"
    ],
    liveUrl: "https://ahmdshakerx.github.io/Best-Rate/",
    githubUrl: "https://github.com/AhmdShakerx/Best-Rate",
    imageSrc: "/best.png",
    year: "2024",
    caseStudy: {
      overview: "Best Rate provides a clean, modern digital presence for a fast-paced logistics enterprise handling worldwide freight.",
      challenge: "Distilling complex multi-modal shipping options (FCL, LCL, Air Freight, Customs Clearance) into clean, digestible services.",
      goals: ["Build immediate trust with corporate cargo managers", "Streamline the quotation request form to under 4 steps", "Flawless mobile layout"],
      developmentProcess: "Designed clean wireframes focusing on clarity and business conversions, then implemented with lean semantic HTML5 and CSS.",
      technicalHighlights: ["Accessible multi-step form validation", "Performance-optimized CSS without heavy external UI dependencies"],
      lessonsLearned: "Clear typography and strong color contrast elevate corporate credibility more than complex animations."
    }
  },
  
  {
    id: "digital-studio",
    slug: "digital-studio",
    title: "Digital Studio",
    category: "UI/UX Design",
    shortDescription: "A sleek, dark-themed website design tailored for a digital agency or creative studio.",
    fullDescription: "Digital Studio presents a creative agency's capabilities, design reel, case studies, and team ethos with a bold dark aesthetic and vibrant neon accents.",
    problem: "Creative agencies need portfolios that immediately communicate cutting-edge design chops to prospective enterprise clients.",
    role: "UI/UX Designer & Web Developer",
    technologies: ["HTML5", "CSS3", "JavaScript", "Modern UI"],
    mainContribution: "Designed and implemented interactive service hover cards, dynamic team reels, and conversion-focused project inquiry funnels.",
    keyFeatures: [
      "Deep dark aesthetic with electric neon highlights",
      "Interactive service showcase with expanding details",
      "Client testimonial slider and case study preview cards",
      "Optimized contact inquiry form with project budget selectors"
    ],
    liveUrl: "https://ahmdshakerx.github.io/Digital-Studio/",
    githubUrl: "https://github.com/AhmdShakerx/Digital-Studio",
    imageSrc: "/digital-1.png",
    year: "2024",
    caseStudy: {
      overview: "Digital Studio serves as a high-impact creative showcase for modern digital agencies aiming to capture enterprise redesign projects.",
      challenge: "Balancing bold dark-mode visuals with clear legibility and fast content consumption.",
      goals: ["Highlight agency deliverables within 5 seconds of arrival", "Encourage inbound project inquiries", "Smooth mobile navigation"],
      developmentProcess: "Crafted in Figma with attention to neon glow layers and responsive hierarchy before implementing with vanilla web technologies.",
      technicalHighlights: ["Custom CSS glow filters", "Responsive flexbox and grid layouts adapted for ultra-wide displays"],
      lessonsLearned: "Contrast ratios must be rigorously tested when using neon accents on dark backgrounds to preserve readability."
    }
  },
  
  
];
