export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  altEmail: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  date: string;
  logo: string;
  logoAlt: string;
  bullets: string[];
}

export interface EducationItem {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  grade: string;
  link: string;
}

export interface Certification {
  id: number;
  title: string;
  img: string;
  link: string;
}

export interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  link: string;
  linkName: string;
}

export interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  technologies: string[];
  category: 'ai-ml' | 'web' | 'data';
  featured: boolean;
  link: string;
  github: string;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  aiml: string[];
  devops: string[];
}

export interface Testimonial {
  id: number;
  link: string;
  img: string;
  name: string;
  role: string;
  test: string;
}
