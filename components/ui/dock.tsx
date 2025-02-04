"use client";

import React, { useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...(child.props as object),
            mouseX,
            magnification,
            index,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        <AnimatePresence>
          {renderChildren()}
        </AnimatePresence>
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  mouseX?: ReturnType<typeof useMotionValue>;
  className?: string;
  children?: React.ReactNode;
  index?: number;
}

const DockIcon = ({
  size = 40,
  magnification = DEFAULT_MAGNIFICATION,
  mouseX,
  className,
  children,
  index = 0,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Only create the transforms if mouseX is defined
  const transform = useTransform(
    mouseX,
    (val: number) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      const distance = val - bounds.x - bounds.width / 2;
      return Math.max(
        size,
        Math.min(
          magnification,
          size + (magnification - size) * (1 - Math.abs(distance) / DEFAULT_DISTANCE)
        )
      );
    }
  );

  const width = useSpring(transform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.1,
        scale: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        }
      }}
      whileHover={{ 
        scale: 1.5,  // Increased from 1.1 to 1.5 for more dramatic hover effect
        rotate: 5,   // Added slight rotation for more dynamic feel
        transition: { 
          duration: 0.3,
          type: "spring",
          stiffness: 300
        }
      }}
      whileTap={{ scale: 0.9 }}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
