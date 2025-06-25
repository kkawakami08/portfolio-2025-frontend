import { Project } from "@/types";
import qs from "qs";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

interface FetchProjectOptions {
  limit?: number;
}

export async function fetchProjects(
  options?: FetchProjectOptions
): Promise<Project[]> {
  const query = qs.stringify({
    sort: "createdAt:desc",
    populate: {
      mainImage: {
        fields: ["name", "url"],
      },
    },
    pagination: options?.limit
      ? {
          start: 0,
          limit: options.limit,
        }
      : undefined,
  });

  const res = await fetch(`${API_URL}/api/projects?${query}`, {
    next: {
      revalidate: 3600, // Revalidate at most every hour (3600 seconds)
    },
  });
  const json = await res.json();
  return json.data;
}

export async function fetchProjectBySlug(slug: string) {
  const query = qs.stringify({
    filters: { slug: { $eq: slug } },
    populate: {
      images: {
        fields: ["name", "url"],
      },
      mainImage: {
        fields: ["name", "url"],
      },
    },
    fields: [
      "title",
      "slug",
      "description",
      "createdAt",
      "demoLink",
      "githubLink",
      "technologies",
      "features",
      "learnings",
    ],
  });

  const res = await fetch(`${API_URL}/api/projects?${query}`, {
    next: {
      revalidate: 3600, // Example: revalidate individual articles every hour
    },
  });
  const json = await res.json();
  return json.data[0]; // assuming slug is unique
}
