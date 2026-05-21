export type ImageOrientation = "horizontal" | "vertical";

export type PortfolioSize =
  | "square"
  | "portrait"
  | "portrait-tall"
  | "landscape"
  | "landscape-wide";

export interface ProjectCategory {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  image: string;
}

export interface CategoriesConfig {
  categories: ProjectCategory[];
  paintingPortfolio: {
    label: string;
    href: string;
  };
}

export interface ProjectContentBlock {
  type: "paragraph" | "heading";
  text: string;
}

export interface PortfolioProject {
  slug: string;
  category: string;
  title: string;
  location: string;
  hoverDescription: string;
  coverImage: string;
  size: PortfolioSize;
  year: number;
  description: string;
  gallery: string[];
  period?: string;
  status?: string;
  content?: ProjectContentBlock[];
}

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

export interface HomeCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageClass: string;
  label?: string;
}

export interface HomeAboutParagraph {
  text: string;
  bold: boolean;
}

export interface AboutCvEntry {
  primary: string;
  lines: string[];
}

export interface AboutPageConfig {
  heroImage: string;
  heroAlt: string;
  introduction: {
    paragraphs: HomeAboutParagraph[];
    portraitImage: string;
  };
  education: {
    title: string;
    entries: AboutCvEntry[];
  };
  workExperience: {
    title: string;
    entries: AboutCvEntry[];
  };
  contact: {
    title: string;
    carouselImages: string[];
    email: string;
    phone: string;
    addressLines: string[];
  };
}

export interface HomeConfig {
  vibeImage: string;
  vibeImageAlt: string;
  categories: HomeCategory[];
  paintingPortfolio: {
    label: string;
    href: string;
  };
  carouselImages: string[];
  aboutPreview: {
    paragraphs: HomeAboutParagraph[];
    portraitImage: string;
    readMoreHref: string;
  };
}
