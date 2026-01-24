export interface Project {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
}

export interface ProjectDetail {
  year: string;
  type: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    heading: "EduKita",
    subheading: "Open-data education mapping system",
    imgSrc: "/images/edukita.jpeg",
    href: "https://edukita-xi.vercel.app/",
  },
  {
    heading: "Semesta Data Digital",
    subheading: "Company profile and services",
    imgSrc: "/images/sdd.jpeg",
    href: "https://web.semesta.vc/",
  },
  {
    heading: "APPIKS",
    subheading: "Anti-bullying monitoring web app",
    imgSrc: "/images/appiks.png",
    href: "#",
  },
  {
    heading: "SkyClub",
    subheading: "Field Reservation App for Sports Club",
    imgSrc: "/images/skyclub.jpeg",
    href: "#",
  },
  {
    heading: "Inviro CRM Apps",
    subheading: "CRM and sales management app",
    imgSrc: "/images/inviro.png",
    href: "#",
  },
];

export const projectDetails: ProjectDetail[] = [
  {
    year: "2026 / P02",
    type: "Real Project",
    title: "Indonesia Nuclear Youth Student",
    period: "2026",
    role: "FRONTEND DEVELOPER",
    description:
      "A Company Profile for Indonesia Nuclear Youth Student. Built with Animation, interactive features, and Robust SEO.",
    tags: ["Animation", "Interactive Features", "SEO"],
    image: "/images/inys.png",
    link: "#",
  },
  {
    year: "2026 / P01",
    type: "Real Project",
    title: "Adiwarna Pratama",
    period: "2026",
    role: "FRONTEND DEVELOPER",
    description:
      "A Custom Company Profile for Adiwarna Pratama. Focused on modern design and user engagement.",
    tags: ["Modern Design", "User Engagement", "Responsive"],
    image: "/images/awp.png",
    link: "#",
  },
  {
    year: "2025 / P08",
    type: "Academic Project",
    title: "NeuroGuards",
    period: "2025",
    role: "FULLSTACK DEVELOPER and AI SPECIALIST",
    description:
      "An AI-powered website for predicting stroke risks with precision.",
    tags: ["AI Integration", "Machine Learning", "Health Tech"],
    image: "/images/neuroguards.png",
    link: "https://neuroguard-indonesia.vercel.app/",
  },
  {
    year: "2025 / P07",
    type: "Academic Project",
    title: "Eventora",
    period: "2025",
    role: "FULLSTACK DEVELOPER",
    description:
      "An event management platform that simplifies planning and coordination.",
    tags: ["Event Management", "Real-time Updates", "Attendee Tracking"],
    image: "/images/eventora.png",
    link: "https://eventoraindonesia.vercel.app/",
  },
  {
    year: "2025 / P06",
    type: "Real Project",
    title: "Wormibox",
    period: "2025",
    role: "FRONTEND DEVELOPER",
    description:
      "A company profile for WormiBox with IoT-based vermicomposting monitoring.",
    tags: ["IoT", "Vermicomposting", "Eco-friendly"],
    image: "/images/wormibox.png",
    link: "https://wormibox.novarentech.com/",
  },
  {
    year: "2025 / P05",
    type: "Real Project",
    title: "Novarentech",
    period: "2025",
    role: "FRONTEND DEVELOPER",
    description: "A company profile website for Novarentech software house.",
    tags: ["Software House", "Company Profile", "Web Development"],
    image: "/images/novaren.png",
    link: "https://novarentech.com/",
  },
  {
    year: "2025 / P04",
    type: "Real Project",
    title: "Inviro CRM",
    period: "2025",
    role: "FRONTEND DEVELOPER",
    description:
      "A Customer Relationship Management tool tailored for sales management. Built complex data visualization dashboards and interactive tables.",
    tags: ["Dashboard", "Whatsapp Integration", "Enterprise"],
    image: "/images/inviro.png",
    link: "#",
  },
  {
    year: "2025 / P03",
    type: "Real Project",
    title: "APPIKS",
    period: "2025",
    role: "FRONTEND DEVELOPER",
    description:
      "An application dedicated to monitoring and preventing bullying in educational environments. Implemented real-time reporting and secure data handling.",
    tags: ["Full Stack", "Security", "Real-time"],
    image: "/images/appiks.png",
    link: "#",
  },
  {
    year: "2025 / P02",
    type: "Academic Project",
    title: "EduKita",
    period: "2025",
    role: "FULLSTACK DEVELOPER",
    description:
      "EduKita is a platform designed to map educational data openly, providing insights and accessibility to education-related information. Led the design system and user experience strategy.",
    tags: ["School", "Tracking", "System Design"],
    image: "/images/edukita.jpeg",
    link: "https://edukita-xi.vercel.app/",
  },
  {
    year: "2025 / P01",
    type: "Real Project",
    title: "Semesta Data Digital",
    period: "2025",
    role: "FRONTEND DEVELOPER",
    description:
      "A professional company profile website for Semesta Data Digital. Focused on high-performance animations and a premium dark-mode aesthetic.",
    tags: ["Frontend Dev", "Animation", "Next.js"],
    image: "/images/sdd.jpeg",
    link: "https://web.semesta.vc/",
  },
  {
    year: "2024 / P01",
    type: "Real Project",
    title: "SkyClub",
    period: "2024",
    role: "FRONTEND DESIGNER",
    description: "A comprehensive booking system for sports clubs.",
    tags: ["Mobile Design", "Booking System", "User Flow"],
    image: "/images/skyclub.jpeg",
    link: "#",
  },
];
