"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";


export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Contact Form */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
          <p className="text-neutral-400 text-sm mt-2">
            Feel free to reach out by filling out the form below.
          </p>
        </div>

        <form className="mt-8 bg-neutral-900 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-white">First Name</Label>
              <Input id="firstname" placeholder="First Name" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-white" >Email</Label>
              <Input id="email" placeholder="email@domain.com" type="email" />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mt-4">
            <Label htmlFor="message" className="text-white">Message</Label>
            <Input id="message" placeholder="Type your message..." type="text" />
          </LabelInputContainer>

          <div className="mt-6 flex justify-center">
            <button className="relative bg-black-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Send Message &rarr;
              <BottomGradient />
            </button>
          </div>
        </form>

     

        {/* Copyright */}
        <div className="mt-8 text-center text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} SHAIK ABDULHAMEED. No rights reserved.
        </div>
      </div>
    </footer>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
