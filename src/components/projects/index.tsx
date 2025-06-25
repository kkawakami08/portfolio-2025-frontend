import React from "react";
import ProjectCard from "./project-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { paths } from "@/constants";
import { fetchProjects } from "@/lib/strapi";
import { Project } from "@/types";

const ProjectSection = async () => {
  const projects: Project[] = await fetchProjects({ limit: 4 });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl lg:text-4xl">Latest Projects</h3>
        <Button
          asChild
          className=" tracking-wider bg-dark-shade  font-semibold lg:text-lg lg:py-5 "
        >
          <Link href={paths.projects()}>View All</Link>
        </Button>
      </div>
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.documentId} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
