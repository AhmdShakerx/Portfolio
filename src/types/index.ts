export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Web Development" | "Cryptography & Cybersecurity" | "Creative Agency Website" | "Fitness & Gym Websites" | "E-commerce" | "UI/UX Design" | "AI & Technology" | "Landing Pages";
  shortDescription: string;
  fullDescription: string;
  problem: string;
  role: string;
  technologies: string[];
  mainContribution: string;
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageSrc: string;
  featured?: boolean;
  year?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    goals: string[];
    developmentProcess: string;
    technicalHighlights: string[];
    lessonsLearned: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string;
    featuredIn?: string;
    icon?: string;
  }[];
}

export interface JourneyChapter {
  id: string;
  number: string;
  totalChapters: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  coreCompetencies: string[];
  keyExperiences: string[];
  technologies: string[];
  outcomes: string[];
  timeframe?: string;
  visualType?: string;
  quote?: string;
}

export interface Milestone {
  year: string;
  period: string;
  title: string;
  role: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  project?: string;
  rating?: number;
}
