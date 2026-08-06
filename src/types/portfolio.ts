import { CSSProperties } from 'react';

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  leetcode: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  company: string;
  tagline: string;
  aboutText: string;
  location: string;
  educationDegree: string;
  email: string;
  altEmail: string;
  phone: string;
  altPhone: string;
  status: string;
  resumePath: string;
  profileImage: string;
  socialLinks: SocialLinks;
  roleHeadline?: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: 'Code' | 'Briefcase' | 'Rocket' | 'Trophy' | string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyLinkedin?: string;
  companyLogo?: string;
  type: 'Full-time' | 'Trainee' | 'Part-time' | 'Contract' | string;
  period: string;
  duration?: string;
  location: string;
  description: string;
  skills: string[];
}

export interface TechStackItem {
  name: string;
  category: 'Frameworks' | 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Tools' | string;
  iconClass: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  accentColor: string;
  badgeIcon: 'Target' | 'Workflow' | 'BarChart3' | 'Utensils' | 'ShoppingBag' | 'Users' | 'Globe' | string;
  github?: string;
  image?: string;
  featured: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  percentage: string;
  period: string;
  highlight: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  link: string;
  image?: string;
}

export interface ExtraActivity {
  title: string;
  description: string;
}

export interface IconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}
