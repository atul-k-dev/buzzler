"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Mount check — ensures server and client render identically (both return null) until mounted
  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (!mounted || isTouch) return;

    document.body.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, select, textarea, .group, [class*="cursor-pointer"]'
      );
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mounted, isTouch]);

  // Return null on server AND on first client render — avoids hydration mismatch
  if (!mounted || isTouch) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      {/* Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary mix-blend-difference pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full mix-blend-difference pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : isClicking ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.1,
        }}
      />
    </div>
  );
}
