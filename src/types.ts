export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string[];
  tech?: string[];
}

export interface Certification {
  name: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  contact: {
    linkedin: string;
    github: string;
    email: string;
    phone: string;
  };
  about: string[];
}