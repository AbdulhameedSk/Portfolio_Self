import React from "react";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android",
  "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
  "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
  "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
  "androidstudio", "sonarqube", "figma",
];

// TypeScript Props Fix
interface NameProps {
  name: string;
}

export function IconCloudDemo({ name }: NameProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Icon Cloud Card */}
      <div className="relative max-w-xs p-10 rounded-lg bg-black   transition-transform duration-300 hover:scale-105">
        <IconCloud iconSlugs={slugs} />
        <p className="mt-4 text-center text-lg font-semibold text-white">{name}</p>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="flex  items-center min-h-screen px-10  bg-black text-white justify-between ">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">SKILLS</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3  ">
        <IconCloudDemo name="Frontend Development" />
        <IconCloudDemo name="Backend Development" />
        <IconCloudDemo name="Mobile Development" />
        <IconCloudDemo name="Cloud & DevOps" />
        <IconCloudDemo name="Testing & Automation" />
        <IconCloudDemo name="Project Management" />
      </div>
    </div>
  );
};

export default Skills;
