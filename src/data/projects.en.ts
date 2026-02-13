export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: 'Active' | 'Completed' | 'In Progress' | 'Archived';
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Atlas',
    description: 'Atlas is a personal "atlas of meanings" — a living knowledge base designed to map ideas, quotes, observations, symbols, and recurring patterns. The goal is to materialize abstract thinking: quickly capture emerging thoughts, connect them into a structured network, identify thematic clusters, and track where new insights originate. Built as a full-stack web application, Atlas reflects my interest in creating tools that support deeper understanding and long-term intellectual organization.',
    tags: ['NestJS', 'React', 'Web App'],
    status: 'In Progress',
    featured: true,
  },
  {
    title: 'BlackWire',
    description: 'BlackWire is a hacker-inspired messaging application developed as a school project with strong personal involvement. The project focuses on real-time communication, system design, and building software that feels both functional and stylistically distinctive. Beyond academic requirements, it represents an opportunity to design and implement a complete product from the ground up.',
    tags: ['Node.js', 'React', 'Prisma', 'Web App'],
    status: 'In Progress',
    featured: true,
  },
  {
    title: 'Personal Hub Website',
    description: 'A modern bilingual personal website built with Astro and Tailwind CSS. Designed as a central hub connecting my projects, practice logs, and knowledge resources while maintaining a clean and professional digital presence.',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Web Design'],
    status: 'Active',
    link: 'https://fastory.me',
    featured: true,
  },
  {
    title: 'Nginx / ELB Log Analyzer',
    description: 'Production-quality Python tool designed to analyze large Nginx and ELB access logs with a focus on security incident investigation. Built to efficiently process high-volume data, detect suspicious patterns, and support structured analysis during potential security events.',
    tags: ['Python', 'Security', 'Data Analysis'],
    status: 'Completed',
    link: 'https://github.com/fastory777/nginx-elb-log-analyzer',
  },
  {
    title: 'Survival Horror Game',
    description: 'Currently in the early stages of assembling a team and shaping the core concept for a survival horror game built with Unity. The project explores collaborative development, creative direction, and the challenges of transforming an initial idea into an interactive experience.',
    tags: ['Unity', 'Game Development'],
    status: 'In Progress',
  },
];
