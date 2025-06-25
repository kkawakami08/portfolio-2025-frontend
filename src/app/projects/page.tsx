import ProjectCard from "@/components/projects/project-card";
import { fetchProjects } from "@/lib/strapi";
import { Project } from "@/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = async () => {
  const projects: Project[] = await fetchProjects();

  if (!projects || projects.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl">Projects</h1>
        <p>No projects published yet. Check back soon!</p>
      </div>
    );
  }
  return (
    <div className="px-5 py-10 space-y-10 flex-1 xl:max-w-7xl xl:mx-auto">
      <h1 className="text-5xl">Projects</h1>
      <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.documentId} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
