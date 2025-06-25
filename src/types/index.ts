interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface Project {
  //   id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
  learnings: string;
  createdAt: string;
  //   updatedAt: string;
  publishedAt: string;
  features: string;
  mainImage: StrapiImage;
  images: StrapiImage[];
}
