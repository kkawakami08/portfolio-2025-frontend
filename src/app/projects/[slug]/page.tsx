import TechnologyBadge from "@/components/projects/technologies-badge";
import { Button } from "@/components/ui/button";
import { paths, SITE_URL } from "@/constants";
import { fetchProjectBySlug, fetchProjects } from "@/lib/strapi";
import { Project } from "@/types";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const imageUrl = project.mainImage.url;

  return {
    title: `${project.title}`,
    description: project.description.substring(0, 155),
    openGraph: {
      title: `${project.title}`,
      description: project.description.substring(0, 155),
      url: `${SITE_URL}/projects/${project.slug}`,
      images: [
        {
          url: imageUrl,
          width: 720, // Standard width for Open Graph images
          height: 720, // Standard height for Open Graph images
          alt: project.title,
        },
      ],
      type: "website", // Or 'website' if you prefer
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title}`,
      description: project.description.substring(0, 155),
      images: [imageUrl],
    },
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project: Project = await fetchProjectBySlug(slug);

  if (!project) {
    return <p>Could not find the project.</p>;
  }

  return (
    <div className="px-5 pt-15 pb-20 space-y-10 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-8 lg:gap-10 ">
        <div className="space-y-5 lg:col-start-2 lg:place-self-end">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl">{project.title}</h1>
          <p className="text-lg">{project.description}</p>
          <div className="flex items-center gap-2">
            {project.githubLink ? (
              <Button
                asChild
                className="border hover:bg-light-accent hover:text-dark-shade  border-dark-shade tracking-wider font-light rounded-full lg:text-lg"
              >
                <Link
                  href={project.githubLink}
                  className=" flex items-center "
                  target="_blank"
                >
                  <Github className="size-5 lg:size-6" />
                  <span>Github</span>
                </Link>
              </Button>
            ) : (
              <Button
                disabled
                className="border  border-dark-shade tracking-wider font-light rounded-full lg:text-lg"
              >
                <Github className="size-5 lg:size-6" />
                Private
              </Button>
            )}

            <Button
              asChild
              className="border hover:bg-light-accent hover:text-dark-shade  border-dark-shade tracking-wider font-light rounded-full lg:text-lg"
            >
              <Link href={project.demoLink} target="_blank">
                <Globe className="size-5 lg:size-6" />
                Live Demo
              </Link>
            </Button>
          </div>
        </div>
        <div className="bg-main-brand p-2 rounded-xl flex items-center justify-center w-fit mx-auto lg:row-start-1 lg:row-span-2 ">
          <Image
            src={project.mainImage.url}
            alt={`${project.title} main image`}
            width={720}
            height={720}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="space-y-5 lg:col-start-2 lg:row-start-2 lg:place-self-start">
          <h2 className="text-2xl lg:text-3xl">Technologies Used</h2>
          <div className="flex flex-wrap gap-2  ">
            {project.technologies.map((technology) => (
              <TechnologyBadge
                key={technology}
                techName={technology}
                bgClassName="bg-light-accent px-4 py-2 text-dark-shade "
                iconClassName="size-5 "
                text
              />
            ))}
          </div>
        </div>{" "}
      </div>

      <div className="space-y-5 xl:max-w-6xl xl:mx-auto ">
        <h2 className="text-2xl lg:text-4xl">Key Features</h2>
        <div className="prose max-w-none lg:prose-lg text-dark-shade  ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.features}
          </ReactMarkdown>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-main-brand p-2 rounded-xl">
        {project.images.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt={`${project.title} image`}
            width={720}
            height={720}
            className="rounded-lg shadow-xl"
          />
        ))}
      </div>

      <div className="space-y-5 xl:max-w-6xl xl:mx-auto ">
        <h2 className="text-2xl lg:text-4xl">My Learnings</h2>
        <div className="prose max-w-none lg:prose-lg text-dark-shade ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.learnings}
          </ReactMarkdown>
        </div>{" "}
        <Button
          asChild
          variant={"accent"}
          className="tracking-wider font-semibold w-full md:w-fit lg:text-lg lg:py-6"
          size={"lg"}
        >
          <Link href={paths.connect()}>
            Let&apos;s Build Something Great Together!
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectPage;
