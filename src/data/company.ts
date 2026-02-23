export type CompanyNavLink = {
  name: string;
  path: string;
  iconKey: "home" | "services" | "caseStudies" | "analytics" | "about" | "contact";
};

export const companyProfile = {
  name: "SineMag Solutions",
  shortName: "SMS",
  tagline: "Build. Launch. Scale.",
  email: import.meta.env.VITE_EMAIL || "",
  github: import.meta.env.VITE_GITHUB || "",
  linkedin: import.meta.env.VITE_LINKEDIN || "",
};

export const companyNavLinks: CompanyNavLink[] = [
  { name: "Home", path: "/", iconKey: "home" },
  { name: "Services", path: "/services", iconKey: "services" },
  { name: "Case Studies", path: "/case-studies", iconKey: "caseStudies" },
  { name: "Analytics", path: "/data-analytics", iconKey: "analytics" },
  { name: "About", path: "/about", iconKey: "about" },
  { name: "Contact", path: "/contact", iconKey: "contact" },
];

export const serviceCards = [
  {
    title: "Web App Development",
    description:
      "Custom, scalable business web applications with modern UI and reliable backend APIs.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile experiences using React Native for fast delivery and strong UX.",
  },
  {
    title: "Data & Analytics Solutions",
    description:
      "Dashboards and reporting pipelines that transform raw data into decision-ready insights.",
  },
  {
    title: "API & Backend Engineering",
    description:
      "Secure backend services, integrations, and database design built for performance and growth.",
  },
];

export const processSteps = [
  "Discover",
  "Plan",
  "Build",
  "Launch",
  "Support",
];
