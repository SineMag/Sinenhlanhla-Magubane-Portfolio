export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  status: 'live' | 'development';
}

export const projects: Project[] = [
  {
    name: 'Library API',
    description: 'RESTful API for managing library resources, books, and user interactions with comprehensive CRUD operations.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    link: 'https://library-api-rrea.onrender.com',
    status: 'live'
  },
  {
    name: 'CookBook',
    description: 'Recipe management application for storing, organizing, and discovering culinary creations. Currently in active development.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/SineMag',
    status: 'development'
  },
  {
    name: 'Shopping List',
    description: 'Interactive shopping list application with real-time updates and persistent storage for managing your shopping needs.',
    tech: ['React', 'TypeScript', 'LocalStorage', 'CSS'],
    link: 'https://shopping-list-8nso.onrender.com/',
    status: 'live'
  },
  {
    name: 'Audio Recorder',
    description: 'Web-based audio recording application with playback functionality and download capabilities.',
    tech: ['JavaScript', 'Web Audio API', 'HTML5', 'CSS'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'PenPad',
    description: 'Note-taking application with categorization, search functionality, and markdown support for organized note management.',
    tech: ['React', 'TypeScript', 'LocalStorage', 'CSS'],
    link: 'https://penpad.onrender.com',
    status: 'live'
  },
  {
    name: 'Q - Healthcare App',
    description: 'Queue and triage companion application for healthcare facilities, managing patient flow and appointments efficiently.',
    tech: ['React', 'TypeScript', 'Node.js', 'Healthcare APIs'],
    link: 'https://qfrontend-u1k9.onrender.com',
    status: 'live'
  },
  {
    name: 'Converter CLI',
    description: 'Command-line utility for various unit conversions including currency, temperature, and measurement conversions.',
    tech: ['Python', 'CLI', 'Argparse'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'Booknest',
    description: 'Hotel management system for booking, reservations, and guest management. Streamlining hospitality operations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://booknest-j3la.onrender.com',
    status: 'development'
  },
  {
    name: 'Links Vault',
    description: 'Personal bookmark manager for organizing and accessing your favorite links and resources efficiently.',
    tech: ['React', 'TypeScript', 'LocalStorage'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'NovaMobile',
    description: 'AI-powered chatbot with text-to-image generation capabilities, combining conversational AI with creative image synthesis.',
    tech: ['React', 'AI APIs', 'Image Generation', 'TypeScript'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'Hotel Management System',
    description: 'Comprehensive hotel management solution developed as a mini-project, featuring room booking, guest management, and billing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://hotel-management-system-project01.onrender.com',
    status: 'live'
  },
  {
    name: 'Job Tracker API',
    description: 'Backend API for tracking job applications, interviews, and application status throughout the job search process.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'Job Application Tracker',
    description: 'Full-stack application for managing job applications with status tracking, notes, and interview scheduling.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'Library',
    description: 'Frontend application for browsing and managing library collections with user-friendly interface and search capabilities.',
    tech: ['React', 'TypeScript', 'CSS', 'API Integration'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'AI Object Recognition',
    description: 'Advanced AI-powered object recognition system with hand gesture analysis and real-time image processing capabilities.',
    tech: ['React', 'AI/ML', 'Computer Vision', 'TypeScript'],
    link: 'https://ai-object-recognition.onrender.com',
    status: 'live'
  },
  {
    name: 'Weather & News Dashboard',
    description: 'Comprehensive dashboard displaying weather forecasts and latest news updates in a unified, user-friendly interface.',
    tech: ['React', 'Weather API', 'News API', 'TypeScript'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'Weather',
    description: 'Lightweight weather application providing current conditions and forecasts with clean, intuitive design.',
    tech: ['JavaScript', 'Weather API', 'HTML', 'CSS'],
    github: 'https://github.com/SineMag',
    status: 'live'
  },
  {
    name: 'Music Playlist',
    description: 'Music playlist management application for creating, organizing, and playing your favorite music collections.',
    tech: ['React', 'TypeScript', 'Audio API', 'CSS'],
    github: 'https://github.com/SineMag',
    status: 'development'
  }
];
