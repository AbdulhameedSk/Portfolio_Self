'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export const Intro = () => {
    return (
        <Card className="w-full h-[700px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
      />
      
<div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            SHAIK ABDULHAMEED
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
          Transforming innovative ideas into seamless, user-centric digital experiences through cutting-edge design, robust development, and a commitment to excellence.
          </p>
        </div>

        {/* Right content */}
<div className="hidden md:block flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
    );
};
