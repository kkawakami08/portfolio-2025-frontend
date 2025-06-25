import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CornerDownRight, Globe, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import { paths } from "@/constants";
import TechnologyBadge from "./technologies-badge";

interface ProjectProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="bg-main-brand h-full text-white p-5 rounded-lg space-y-5 flex flex-col justify-between">
      <h4 className="text-2xl text-light-accent ">{project.title}</h4>
      <div className="flex items-center gap-5 xl:gap-0 xl:justify-between">
        {project.githubLink ? (
          <Button
            asChild
            variant={"ghost"}
            className="border hover:border-light-accent border-light-shade  tracking-wider font-light rounded-full"
          >
            <Link
              href={project.githubLink}
              className="text-white flex items-center "
              target="_blank"
            >
              <Github className="size-5" />
              <span>Github</span>
            </Link>
          </Button>
        ) : (
          <Button
            variant={"ghost"}
            disabled
            className="border hover:border-light-accent border-light-shade  tracking-wider font-light rounded-full"
          >
            <Github className="size-5" />
            Private
          </Button>
        )}

        <Button
          asChild
          variant={"ghost"}
          className="border hover:border-light-accent border-light-shade  tracking-wider font-light rounded-full"
        >
          <Link href={project.demoLink} target="_blank">
            <Globe className="size-5" />
            Live Demo
          </Link>
        </Button>
      </div>
      <Image
        src={project.mainImage.url}
        alt={`${project.title} main image`}
        height={720}
        width={720}
        className="rounded-lg w-full shadow-xl"
      />
      <div className="flex flex-wrap items-center justify-center gap-3 xl:min-h-16 xl:items-start">
        {project.technologies.map((technology) => (
          <TechnologyBadge
            key={technology}
            techName={technology}
            text={false}
            iconClassName="size-7 "
            bgClassName="text-white"
          />
        ))}
      </div>
      <Button
        asChild
        variant={"accent"}
        className="font-semibold  tracking-wider   hover:bg-dark-shade "
      >
        <Link href={paths.slug(project.slug)}>
          Project Details <CornerDownRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
};

export default ProjectCard;
