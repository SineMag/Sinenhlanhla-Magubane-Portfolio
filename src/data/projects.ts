export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  status: "live" | "development";
  image?: string;
  iconKey: string;
}

export const projects: Project[] = [
  {
    name: "CookBook",
    description:
      "Recipe management application for storing, organizing, and discovering culinary creations. Currently in active development.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/SineMag",
    status: "development",
    iconKey: "cookbook",
  },
  {
    name: "PenPad",
    description:
      "Note-taking application with categorization, search functionality, and markdown support for organized note management.",
    tech: ["React", "TypeScript", "LocalStorage", "CSS"],
    link: "https://penpad.onrender.com",
    status: "live",
    iconKey: "penpad",
  },
  {
    name: "Q - Healthcare App",
    description:
      "Queue and triage companion application for healthcare facilities, managing patient flow and appointments efficiently.",
    tech: ["React", "TypeScript", "Node.js", "Healthcare APIs"],
    link: "https://qfrontend-u1k9.onrender.com",
    status: "live",
    iconKey: "healthcare",
  },
  {
    name: "Eatery",
    description:
      "Restaurant discovery and reservation platform with menu browsing, reviews, and seamless booking experience.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    link: "https://eatery-h2x2.onrender.com",
    status: "live",
    image: "../assets/Eatery Logo.png",
    iconKey: "eatery",
  },
  {
    name: "Links Vault",
    description:
      "Personal bookmark manager for organizing and accessing your favorite links and resources efficiently.",
    tech: ["React", "TypeScript", "LocalStorage"],
    github: "https://github.com/SineMag",
    status: "live",
    iconKey: "vault",
  },
  {
    name: "Hotel Management System",
    description:
      "Comprehensive hotel management solution developed as a mini-project, featuring room booking, guest management, and billing.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://hotel-management-system-project.onrender.com",
    status: "live",
    iconKey: "hotel",
  },
  {
    name: "Job Application Tracker",
    description:
      "Full-stack application for managing job applications with status tracking, notes, and interview scheduling.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://job-application-tracker-azfu.onrender.com",
    status: "live",
    iconKey: "job",
  },
  {
    name: "BMI Calculator",
    description:
      "Body Mass Index calculator with a C++ backend service and clean web frontend for quick health checks.",
    tech: ["React", "TypeScript", "C++", "REST API"],
    link: "https://bmi-calculator-alba.onrender.com",
    status: "live",
    iconKey: "bmi",
  },
  {
    name: "Library",
    description:
      "Frontend application for browsing and managing library collections with user-friendly interface and search capabilities.",
    tech: ["React", "TypeScript", "CSS", "API Integration"],
    github: "https://github.com/SineMag",
    status: "live",
    iconKey: "library",
  },
  {
    name: "AI Object Recognition",
    description:
      "Advanced AI-powered object recognition system with hand gesture analysis and real-time image processing capabilities.",
    tech: ["React", "Python", "AI/ML", "Computer Vision"],
    link: "https://ai-object-recognition.onrender.com",
    status: "live",
    iconKey: "vision",
  },
  {
    name: "Weather & News Dashboard",
    description:
      "Comprehensive dashboard displaying weather forecasts and latest news updates in a unified, user-friendly interface.",
    tech: ["React", "Weather API", "News API", "TypeScript"],
    github: "https://github.com/SineMag",
    status: "live",
    iconKey: "dashboard",
  },
  {
    name: "Weather",
    description:
      "Lightweight weather application providing current conditions and forecasts with clean, intuitive design.",
    tech: ["JavaScript", "Weather API", "HTML", "CSS"],
    link: "https://weather-application-jgjz.onrender.com",
    status: "live",
    iconKey: "weather",
  },
  {
    name: "Music Playlist",
    description:
      "Music playlist management application for creating, organizing, and playing your favorite music collections.",
    tech: ["React", "TypeScript", "Audio API", "CSS"],
    github: "https://github.com/SineMag",
    status: "development",
    iconKey: "music",
  },
  {
    name: "Listify",
    description:
      "A shopping list app built with React Native and Supabase for synchronized list management with offline-friendly UX.",
    tech: ["React Native", "TypeScript", "Supabase", "Mobile UI"],
    status: "development",
    iconKey: "listify",
  },
];
