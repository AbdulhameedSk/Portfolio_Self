"use client";

import { Button } from "./Button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-black shadow-sm">
      <div className="p-2">
        <Button
          name="SHAIK ABDULHAMEED"
          className="text-lg font-bold tracking-wide text-white"
        />
      </div>

      <nav className="flex gap-6">
        {["EXPERIENCE", "PROJECTS"].map((item) => (
          <Button
            key={item}
            name={item}
            onClick={() => {
              const el = document.getElementById(item.toLowerCase());
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="relative text-white cursor-pointer hover:before:w-full before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 before:bg-white before:transition-all before:duration-300"
          />
        ))}
      </nav>

      <div className="flex items-center">
<InteractiveHoverButton
  className="m-2"
  onClick={() =>
    window.open(
      "https://www.linkedin.com/in/shaikabdulhameed/",
      "_blank",
      "noopener,noreferrer"
    )
  }
>
  LinkedIn
</InteractiveHoverButton>
      </div>
    </header>
  );
};

export default Header;
