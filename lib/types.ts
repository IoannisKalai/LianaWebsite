export type ImageOrientation = "horizontal" | "vertical";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  coverImage: string;
  orientation: ImageOrientation;
  featured?: boolean;
  description: string;
  gallery: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  contact: {
    email: string;
    phone?: string;
    location: string;
  };
  social?: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface AboutSection {
  id: string;
  title: string;
  content: string;
}
