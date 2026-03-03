import {
  trident,
  clinx,
  dentexaa,
  hackathon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "experience",
    title: "Experience"
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Diafoni Technology Services Pvt Ltd",
    location: "Pondicherry, India",
    date: "Mar 2026 – Present",
    highlights: [
      "Leading architecture for scalable AI-driven cloud platforms.",
      "Optimized distributed systems improving overall performance by 35%.",
      "Designed microfrontend ecosystem for faster feature releases.",
      "Mentoring engineers and driving DevOps best practices across teams."
    ],
    skills: [
      "System Design",
      "Microfrontends",
      "AWS Architecture",
      "Performance Optimization",
      "CI/CD Strategy",
      "ChatBots & AI Services",
      "Cloud Security",
      "AI Integrations"
    ]
  },
  {
    role: "Cloud Full-Stack Developer",
    company: "Diafoni Technology Services Pvt Ltd",
    location: "Pondicherry, India",
    date: "Mar 2024 – Feb 2026",
    highlights: [
      "Improved response time by 25% using AWS Lambda & API Gateway.",
      "Built AI interview modules with Bedrock & Transcribe (+40% engagement).",
      "Implemented OAuth 2.0 & Cognito authentication.",
      "Reduced deployment errors by 40% via CI/CD automation."
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "Bedrock",
      "Cognito",
      "CI/CD"
    ]
  }
];

export const achievements = [
  {
    name: "Voice AI Hackathon Host & Organizer",
    description:
      "Hosted and organized multiple Voice AI Hackathons across different colleges, mentoring students in building AI-powered voice applications. Led end-to-end event execution including planning, technical guidance, and participant engagement, fostering innovation in emerging AI technologies.",
    image: hackathon,
  }
];

export const projects = [
  {
    name: "Trident Dental clinic",
    description:
      "A modern dental clinic website where patients can book appointments, schedule visits, and interact with an integrated chatbot for instant assistance. The platform provides a seamless and user-friendly experience for managing dental consultations online.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
      {
        name: "Chatbot",
        color: "blue-text-gradient",
      }
    ],
    image: trident,
    source_code_link: "https://tridentmdc.com/"
  },
  {
    name: "Clinx Healthcare Solutions",
    description:
      "A healthcare recruitment and staffing platform designed to connect healthcare professionals with hospitals and medical organizations. It streamlines the hiring process through efficient job listings, applications, and candidate management.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      }
    ],
    image: clinx,
    source_code_link: "https://www.clinxhealthcaresolutions.com/"
  },
  {
    name: "Dentexaa dental EHR",
    description:
      "A comprehensive Dental Electronic Health Record (EHR) system built to manage patient records, treatment history, appointments, and clinical workflows efficiently. The platform enhances digital record-keeping and streamlines daily dental practice operations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Restapi",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Webpack",
        color: "blue-text-gradient",
      }
    ],
    image: dentexaa,
    source_code_link: "https://dentexaa.vercel.app/"
  }
];
