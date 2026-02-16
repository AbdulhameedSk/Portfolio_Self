'use client';
import { WordPullUp } from "@/components/ui/word-pull-up";
import { Dock, DockIcon } from "@/components/ui/dock";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import React from "react";
import {  motion } from "framer-motion";

export function DockDemo() {
  return (
    <div className="relative flex justify-center">
      <Dock direction="middle">
        <DockIcon>
          <FaGithub
            className="size-6 text-gray-400 transition duration-300"
            onClick={() => window.open("https://github.com/abdulhameedSk/")}
          />
        </DockIcon>
        <DockIcon>
          <SiLeetcode
            className="size-6 text-yellow-500 transition duration-300"
            onClick={() => window.open("https://leetcode.com/SHAIKABDULHAMEED/")}
          />
        </DockIcon>
        <DockIcon>
          <FaLinkedin
            className="size-6 text-blue-500 transition duration-300"
            onClick={() => window.open("https://linkedin.com/in/SHAIKABDULHAMEED/")}
          />
        </DockIcon>
        <DockIcon>
          <SiGmail
            className="size-6 text-red-500 transition duration-300"
            onClick={() => (window.location.href = "mailto:shaikabdulhameedd@gmail.com")}
          />
        </DockIcon>
      </Dock>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8  bg-black relative">
      
      {/* Subtle Floating Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-500/10 blur-3xl opacity-40"></div>

      {/* Container */}
      <div className="relative z-10 max-w-6xl w-full space-y-16">
        
        {/* Section 1: About Me */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <div className="col-span-3">
            <WordPullUp className="text-5xl font-extrabold text-white tracking-tight" words="About Me" />
            <div className="mt-4">
              <DockDemo />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="col-span-5 text-lg leading-relaxed text-gray-300"
          >
            <p>
              I am a <span className="text-blue-400">Full Stack Developer</span> passionate about building **scalable and efficient** web applications. 
              With expertise in <span className="text-yellow-400">MongoDB, Express.js, React, and Node.js</span>, I focus on crafting seamless user experiences and robust backend systems. 
              I love working with **DevOps & AWS**, continuously learning and **optimizing infrastructure** for better performance.
            </p>
          </motion.div>
        </div>

        {/* Section 2: Services */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <div className="col-span-3">
            <AnimatedText text="Services Providing!" textClassName="text-4xl font-bold text-white mb-2" />
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-lg">
            <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800/50 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                🎨 Frontend Development
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800/50 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                🚀 Backend Development
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800/50 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                🔗 API Development
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800/50 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                🗄️ Database Management
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800/50 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                🛠 DevOps & AWS
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800/50 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                ⚙️ Pega Development
              </motion.div>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutMe;
