import { WordPullUp } from "@/components/ui/word-pull-up";

const AboutMe = () => {
  return (
    <div className="flex h-screen  px-16 py-40 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 max-w-5xl">
        <div className="col-span-2 flex flex-row " >
        <WordPullUp className="text-4xl font-extrabold  tracking-tight text-white" words="About Me" />
        </div>

        <div className="text-lg leading-relaxed text-gray-300 col-span-6 max-w-3xl">
          <p>
            I am a <span className="text-blue-400">Full Stack Developer</span> with a strong foundation in building scalable and efficient web applications.  
            With expertise in <span className="text-yellow-400">MongoDB, Express.js, React, and Node.js</span>, I specialize in developing seamless user experiences and robust backend systems.  
            Passionate about <span className="text-green-400">DevOps and AWS</span>, I am continuously expanding my skill set to optimize deployment and infrastructure.  
            I thrive in dynamic, collaborative environments, always eager to embrace challenges and innovate with the latest technologies.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
