export const paths = {
  home: () => "/",
  projects: () => "/projects",
  about: () => "/about",
  connect: () => "/connect",
  slug: (slug: string) => `/projects/${slug}`,
  resume: () => `/kaori-resume.pdf`,
};

export const links = [
  {
    name: "Projects",
    href: paths.projects(),
  },
];

export const SITE_URL = "https://kaori.dev";
