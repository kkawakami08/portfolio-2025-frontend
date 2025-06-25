import React from "react";

interface SkillCardProps {
  skill: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const IconComponent = skill.icon;
  return (
    <div className="flex flex-col items-center text-dark-shade border border-dark-shade rounded-lg py-3">
      <IconComponent className="size-15 text-main-brand" />
      <p className="font-heading text-2xl font-semibold tracking-wide">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard;
