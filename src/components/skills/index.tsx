import React from "react";
import SkillCard from "./skill-card";
import { technologyIconMap } from "../projects/technologies-badge";

const SkillSection = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl lg:text-4xl">Exploring My Skill Set</h3>

      <div className=" grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Object.entries(technologyIconMap).map(([skillName, IconComponent]) => (
          <SkillCard
            key={skillName}
            skill={{
              name: skillName,
              icon: IconComponent,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
