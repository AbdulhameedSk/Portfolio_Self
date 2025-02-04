"use client"
import React from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { 
  FaReact, FaHtml5, FaCss3, FaNodeJs, FaDocker, FaGitAlt, 
  FaAws, FaNpm, FaYarn 
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiWebpack, SiBabel, SiEslint, SiRedux, SiStorybook,
  SiStyledcomponents, SiExpress, SiMongodb,
  SiPostgresql, SiGraphql, SiSwagger, SiAxios, SiFirebase,
  SiRedis, SiMysql, SiOracle, 
  SiGooglecloud, SiDigitalocean, SiCloudflare, SiHeroku,
  SiNetlify, SiVercel, SiApache, SiNginx, SiJenkins,
  SiTerraform, SiAnsible, SiBitbucket, SiGitlab, SiGithub
} from "react-icons/si";

// Slug to Icon mapping
const slugToIcon: { [key: string]: React.ComponentType<{ className?: string }> } = {
  react: FaReact,
  html5: FaHtml5,
  css3: FaCss3,
  nextdotjs: SiNextdotjs,
  'node-dot-js': FaNodeJs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  webpack: SiWebpack,
  babel: SiBabel,
  eslint: SiEslint,
  redux: SiRedux,
  storybook: SiStorybook,
  styledcomponents: SiStyledcomponents,
  npm: FaNpm,
  yarn: FaYarn,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  graphql: SiGraphql,
  restapi: SiSwagger,
  swagger: SiSwagger,
  axios: SiAxios,
  firebase: SiFirebase,
  redis: SiRedis,
  mysql: SiMysql,
  oracle: SiOracle,
  aws: FaAws,
  googlecloud: SiGooglecloud,
  digitalocean: SiDigitalocean,
  docker: FaDocker,
  jenkins: SiJenkins,
  terraform: SiTerraform,
  ansible: SiAnsible,
  bitbucket: SiBitbucket,
  gitlab: SiGitlab,
  github: SiGithub,
  heroku: SiHeroku,
  netlify: SiNetlify,
  vercel: SiVercel,
  apache: SiApache,
  nginx: SiNginx,
  git: FaGitAlt,
  cloudflare: SiCloudflare
};

// Slug to Name mapping
const slugToName: { [key: string]: string } = {
  react: "React",
  html5: "HTML5",
  css3: "CSS3",
  nextdotjs: "Next.js",
  'node-dot-js': "Node.js",
  typescript: "TypeScript",
  javascript: "JavaScript",
  tailwindcss: "Tailwind CSS",
  webpack: "Webpack",
  babel: "Babel",
  eslint: "ESLint",
  redux: "Redux",
  storybook: "Storybook",
  materialui: "Material UI",
  styledcomponents: "Styled Components",
  npm: "NPM",
  yarn: "Yarn",
  express: "Express",
  mongodb: "MongoDB",
  postgresql: "PostgreSQL",
  graphql: "GraphQL",
  restapi: "REST API",
  swagger: "Swagger",
  axios: "Axios",
  firebase: "Firebase",
  redis: "Redis",
  mysql: "MySQL",
  oracle: "Oracle",
  cassandra: "Cassandra",
  mssql: "MS SQL",
  aws: "AWS",
  azure: "Azure",
  googlecloud: "Google Cloud",
  digitalocean: "DigitalOcean",
  docker: "Docker",
  kubernetes: "Kubernetes",
  jenkins: "Jenkins",
  terraform: "Terraform",
  ansible: "Ansible",
  bitbucket: "Bitbucket",
  gitlab: "GitLab",
  github: "GitHub",
  heroku: "Heroku",
  netlify: "Netlify",
  vercel: "Vercel",
  apache: "Apache",
  nginx: "NGINX",
  git: "Git",
  cloudflare: "Cloudflare"
};

interface NameProps {
  name: string;
  type: string[];
}

export function IconCloudDemo({ name, type }: NameProps) {
  const uniqueSlugs = Array.from(new Set(type));

  return (
    <div className="flex flex-col items-center justify-center group relative">
      <div className="relative max-w-xs p-10 rounded-lg bg-black transition-all duration-300 group-hover:scale-105">
        <IconCloud iconSlugs={type} />
        <p className="mt-4 text-center text-lg font-semibold text-white">{name}</p>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 rounded-lg bg-black/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <h3 className="text-lg font-bold mb-4 text-white">{name}</h3>
          <div className="grid grid-cols-2 gap-3 w-full max-h-[300px] overflow-y-auto custom-scrollbar">
            {uniqueSlugs.map((slug) => {
              const IconComponent = slugToIcon[slug];
              const displayName = slugToName[slug] || slug;
              
              return (
                <div 
                  key={slug}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  )}
                  <span className="text-sm text-white/90">{displayName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Skills component remains the same
const feslugs = ["react", "html5", "css3", "typescript", "javascript", "tailwindcss", "webpack", "babel", "eslint", "redux", "storybook", "styledcomponents"];
const beslugs = ["node-dot-js", "express", "mongodb", "postgresql", "graphql", "restapi", "swagger", "axios", "firebase", "redis", "mysql", "oracle"];
const apislugs = ["restapi", "graphql", "swagger", "axios"];
const dbslugs = ["mongodb", "postgresql", "mysql", "oracle", "redis"];
const devopsslugs = ["docker", "jenkins", "terraform", "ansible", "bitbucket", "gitlab", "github"];
const cloudslugs = ["aws", "googlecloud", "digitalocean", "heroku", "netlify", "vercel", "apache", "nginx", "cloudflare"];

const Skills = () => {
  return (
    <div className="flex items-center min-h-screen px-10 bg-black text-white justify-between">
      <h1 className="text-4xl font-bold text-center">SKILLS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <IconCloudDemo name="Frontend Development" type={feslugs} />
        <IconCloudDemo name="Backend Development" type={beslugs} />
        <IconCloudDemo name="API Development" type={apislugs} />
        <IconCloudDemo name="Database Management" type={dbslugs} />
        <IconCloudDemo name="DevOps & AWS" type={devopsslugs} />
        <IconCloudDemo name="Cloud Computing" type={cloudslugs} />
      </div>
    </div>
  );
};

export default Skills;

// Add this CSS in your global styles for custom scrollbar
<style jsx global>{`
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #3b82f6;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
  }
`}</style>