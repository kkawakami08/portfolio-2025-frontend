import HeroSection from "@/components/hero";
import ProjectSection from "@/components/projects";
import SkillSection from "@/components/skills";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <div className="px-5 py-15 space-y-20 xl:max-w-7xl xl:mx-auto lg:space-y-10 lg:py-10">
      <HeroSection />
      <ProjectSection />
      <SkillSection />
    </div>
  );
};

export default HomePage;
