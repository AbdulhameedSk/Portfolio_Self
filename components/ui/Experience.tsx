"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

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
        <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
      </div>

      {/* Timeline */}
      <div className="w-full lg:w-2/3 relative border-l border-gray-800 pl-6 space-y-10">

        {/* Cognizant Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/10 transition"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[34px] top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>

          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Cognizant
          </h2>

          <p className="text-sm sm:text-base text-gray-400 italic mt-1">
            Feb 2025 – Present | Pega Developer
          </p>

          <p className="text-sm text-purple-400 mt-1 font-medium">
            Client: Elevance Health (Healthcare Domain)
          </p>

          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300 text-sm sm:text-base">

            <li>
              Automated high-volume healthcare case ingestion pipelines using event-driven Pega workflows, reducing manual processing and improving throughput.
            </li>

            <li>
              Designed validation layers and rule-based safeguards to enforce data integrity, regulatory compliance, and fault isolation.
            </li>

            <li>
              Developed scalable backend workflow systems handling high-volume case processing and event-driven automation.
            </li>

            <li>
              Built and optimized bulk processing workflows for efficient handling of healthcare case data under peak loads.
            </li>

            <li>
              Collaborated with enterprise teams to design secure, reliable, and compliant workflow automation systems.
            </li>

          </ul>
        </motion.div>


        {/* Chauwk Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[34px] top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>

          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Chauwk
          </h2>

          <p className="text-sm sm:text-base text-gray-400 italic mt-1">
            May 2024 – Dec 2024 | Full Stack Developer
          </p>

          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300 text-sm sm:text-base">

            <li>
              Developed a secure sub-admin system with role-based access control to improve platform security.
            </li>

            <li>
              Built a scalable jobs portal enabling enterprises to post and manage job opportunities.
            </li>

            <li>
              Designed responsive UI components using React and Tailwind CSS to improve user experience.
            </li>

            <li>
              Developed REST APIs and optimized MongoDB queries for improved performance and scalability.
            </li>

            <li>
              Worked across frontend and backend to deliver full-stack production features.
            </li>

          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
