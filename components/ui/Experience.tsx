"use client";

import React from 'react';
import { AnimatedText } from './animated-underline-text-one';

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-black px-6 md:px-20 py-16 gap-12"
    >
      {/* Heading */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <AnimatedText
          text="Experience"
          textClassName="text-3xl sm:text-4xl font-bold text-white mb-4"
        />
      </div>

      {/* Experience Details */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-3">Chauwk</h2>
        <p className="text-lg text-gray-300 italic">
          May 2024 – Present | Full Stack Developer
        </p>

        <ul className="list-disc pl-5 mt-4 space-y-3 text-gray-400">
          <li>
            Developed a sub-admin feature to enhance system security by enabling main admins to manage access efficiently.
          </li>
          <li>
            Engineered a scalable jobs portal, streamlining job posting and management for enterprises, boosting user engagement.
          </li>
          <li>
            Designed intuitive user interfaces to improve usability and engagement.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
