import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { WordPullUp } from "@/components/ui/word-pull-up";
import Image from "next/image";

export function Education() {
  const data = [
    {
      title: "2021 - Present",
      content: (
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl">
          <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
            Bachelors in Technology
          </p>
          <div className="space-y-2 mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-sm">
              ✓ HTML, CSS, and JavaScript Mastery
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-sm">
              ✓ Frontend and Backend Frameworks Introduction
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-sm">
              ✓ Database Management Systems
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-sm">
              ✓ Version Control with Git
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-sm">
              O DevOps and Cloud (Still Learning)
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - (Have Not Completed Yet)",
      content: (
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl">
          <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
            Harkirat Shinghs 0-100 Cohert-2
          </p>
          <div className="space-y-2 mb-8">
            <div>
              
            <p>Track The Progress using Below link</p>
              <div className="flex gap-2 items-center text-neutral-300 text-sm">
                
                ✓ <a href="https://shaikabdul.notion.site/HARKIRAT-SINGH-COHERT-0b1757b910f84814aba7bb52d34ed48b" target="_blank" rel="noopener noreferrer" className="underline">
                  HARKIRAT SINGH COHORT
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full relative bg-gradient-to-br from-blue-600/20 to-purple-600/20">
              <Image
                src="/certificate.png"
                alt="Web Dev 1"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm">0 - 1</div>
            </div>
            <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full relative bg-gradient-to-br from-blue-600/20 to-purple-600/20">
              <Image
                src="/21.png"
                alt="Web Dev 2"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm">1 - 100</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019 – 2021",
      content: (
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl">
          <p className="text-neutral-200 text-sm md:text-base font-normal mb-4">
            Intermediate Education
          </p>
          <div className="space-y-2 mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-sm">
              ✓ Maths
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-sm">
              ✓ Physics
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-sm">
              ✓ Chemistry
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto pt-20 px-8">
        <WordPullUp 
          className="text-4xl md:text-5xl font-bold tracking-tight mb-8" 
          words="Education Journey" 
        />
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl mb-12">
          My journey in tech has been a continuous evolution of learning and building. Here&apos;s a timeline of my educational path and key milestones.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}