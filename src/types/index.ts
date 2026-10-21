export type ViewType = 'main' | 'detail' | 'teacher';

export interface NavLink {
  label: string;
  view: ViewType;
  section?: string;
  badge?: string;
}

export interface Course {
  id: string;
  tag: string;
  title: string;
  description: string;
  view: ViewType;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description?: string;
  list?: string[];
  colSpan?: boolean;
}

export interface VideoCard {
  youtubeId: string;
  tag: string;
  title: string;
  description: string;
}

export interface Tariff {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

export interface Review {
  name: string;
  score: string;
  text: string;
  date: string;
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Certificate {
  id: string;
  src: string;
  alt: string;
}

export interface CourseDetail {
  id: string;
  tag: string;
  title: string;
  description: string;
  videoShowcase: VideoCard[];
  tariffs: Tariff[];
  reviewsSection: Review[];
  faq: FaqItem[];
  dsa: string;
}
