// components/TechIcons.tsx
import React from "react";

import { RiNextjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiShadcnui,
  SiJavascript,
  SiStrapi,
  SiTypescript,
  SiMongodb,
  SiMongoose,
  SiZod,
  SiVercel,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaShieldAlt,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { FaReact } from "react-icons/fa6";

import { IconType } from "react-icons";

type IconComponentType = IconType;

export const technologyIconMap: { [key: string]: IconComponentType } = {
  Javascript: SiJavascript,
  "React.js": FaReact,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Typescript: SiTypescript,
  "Next.js": RiNextjsLine,
  "Tailwind CSS": SiTailwindcss,
  Figma: FaFigma,
  GitHub: FaGithub,
  Vercel: SiVercel,
  "Auth.js": FaShieldAlt,
  Zod: SiZod,
  Prisma: SiPrisma,
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,
  Neon: SiPostgresql,
  ShadCN: SiShadcnui,
  Strapi: SiStrapi,
};

interface TechnologyBadgeProps {
  techName: string;
  text?: boolean;
  iconClassName: string;
  bgClassName: string;
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
  techName,
  text,
  iconClassName,
  bgClassName,
}) => {
  const IconComponent = technologyIconMap[techName];

  if (IconComponent) {
    return (
      <div
        className={cn(
          "flex items-center w-fit  gap-2 rounded-full ",
          bgClassName
        )}
      >
        <IconComponent className={iconClassName} />
        {text && <p className=" font-light ">{techName}</p>}
      </div>
    );
  }

  return null;
};

export default TechnologyBadge;
