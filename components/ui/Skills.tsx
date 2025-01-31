import React from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";


const feslugs = ["react", "html5", "css3", "nextdotjs","node-dot-js", "typescript", "javascript",   "tailwindcss", "webpack", "babel", "eslint", "redux", "storybook", "materialui", "styledcomponents", "npm", "yarn", "figma", "visualstudiocode"
];
const beslugs = [
  "node-dot-js", "express", "mongodb", "postgresql", "graphql", "restapi","hono","cloudflare",
];

const apislugs = [
    "graphql", "restapi", "websocket", "socketio","swagger", "express", "node-dot-js",
     "axios", "fetch", "firebase", "graphql-subscriptions"
  ];
  const dbslugs = [
    "mongodb", "postgresql", "mysql", "redis", "firebase", "oracle", "cassandra", "mssql", "dynamoDB", "graphDB", "firebase"
  ];
  const devopsslugs = [
    "aws", "azure", "googlecloud", "digitalocean", "docker", "kubernetes", "jenkins", "terraform", "ansible",
     "bitbucket", "gitlab", "github", "ci-cd",
     "heroku", "netlify", "vercel", "apache", "nginx","docker",
  "kubernetes", "jenkins", "git", "github", "gitlab", "bitbucket", "heroku", "netlify",
  "vercel"
  ];
  const cloudslugs = [
    "aws", "googlecloud", "azure", "digitalocean", "cloudflare", "vcloud", "alibaba-cloud", "heroku", "netlify",
    "vercel", "openstack", "box", "dropbox", "googledrive", "microsoftonedrive", "s3", "cloudfront", "ec2",
    "cloudwatch", "cloudformation", "cloudtrail", "vpc", "ecs", "eks", "lambda", "rds", "s3", "dynamodb", "aws", "azure", "googlecloud", 
  ];
        
// TypeScript Props Fix
interface NameProps {
  name: string,
  type:string[]
}

export function IconCloudDemo({ name,type }: NameProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Icon Cloud Card */}
      <div className="relative max-w-xs p-10 rounded-lg bg-black   transition-transform duration-300 hover:scale-105">
        <IconCloud iconSlugs={type} />
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
        <IconCloudDemo name="Frontend Development" type={feslugs} />
        <IconCloudDemo name="Backend Development" type={beslugs}/>
        <IconCloudDemo name="API Development" type={apislugs}/>
        <IconCloudDemo name="Database Management" type={dbslugs}/>
        <IconCloudDemo name=" DevOps & AWS" type={devopsslugs}/>
        <IconCloudDemo name="Cloud Computing" type={cloudslugs}/>
      </div>
    </div>
  );
};

export default Skills;
