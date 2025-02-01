import React from 'react';
import { AnimatedText } from './animated-underline-text-one';

const Experience = () => {
  return (
    <div className='flex items-start justify-center min-h-screen bg-black px-20 py-20 text-white gap-60'>
      {/* Experience Heading */}
      {/* <h1 className='text-4xl font-bold tracking-wide border-b-4 border-gray-600 pb-3 mb-10'>
        Experience
      </h1> */}
                  <AnimatedText text="Experience" textClassName="text-4xl font-bold text-white mb-2" />


      {/* Experience Details */}
      <div className='w-full max-w-3xl'>
        <h2 className='text-2xl font-semibold mb-3'>Chauwk</h2>
        <p className='text-lg text-gray-300 italic'>May 2024 – Present | Full Stack Developer</p>

        <ul className='list-disc pl-5 mt-4 space-y-3 text-gray-400'>
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
    </div>
  );
};

export default Experience;
