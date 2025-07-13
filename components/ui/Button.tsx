import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  className?: string;
}

export const Button = ({ name, className, ...props }: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {name}
    </button>
  );
};
