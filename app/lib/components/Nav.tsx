"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Nav({
  onTabChange,
}: {
  onTabChange?: (tab: string) => void;
}) {
  const aboutControls = useAnimation();
  const workControls = useAnimation();
  const projectsControls = useAnimation();

  useEffect(() => {
    aboutControls.start({ color: "rgba(229, 229, 229, 1)" });
    workControls.start({ color: "rgba(229, 229, 229, 1)" });
    projectsControls.start({ color: "rgba(229, 229, 229, 1)" });
  }, [aboutControls, workControls, projectsControls]);

  return (
    <div className="flex flex-col items-start ">
      <motion.p
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 10, right: 0 }}
        whileHover={{ color: "rgb(14, 165, 150)" }}
        animate={aboutControls}
        onDragStart={() => {
          aboutControls.start({ scale: 1.25, color: "rgb(138, 253, 91)" });
        }}
        onDragEnd={() => {
          aboutControls.start({ scale: 1, color: "rgba(255, 255, 255, 1)" });
        }}
        onClick={() => {
          if (onTabChange) {
            onTabChange("about");
          }
        }}
        className="nav-text text-2xl text-neutral-200 hover:cursor-pointer flex items-center justify-end"
      >
        ABOUT
      </motion.p>

      <motion.p
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 10 }}
        whileHover={{ color: "rgb(14, 165, 150)" }}
        animate={workControls}
        onDragStart={() => {
          workControls.start({ scale: 1.25, color: "rgb(138, 253, 91)" });
        }}
        onDragEnd={() => {
          workControls.start({ scale: 1, color: "rgba(255, 255, 255, 1)" });
        }}
        onClick={() => {
          if (onTabChange) {
            onTabChange("work");
          }
        }}
        className="nav-text text-2xl text-neutral-200 hover:cursor-pointer"
      >
        WORK
      </motion.p>
      <motion.p
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 10, right: 0 }}
        whileHover={{ color: "rgb(14, 165, 150)" }}
        animate={projectsControls}
        onDragStart={() => {
          projectsControls.start({ scale: 1.25, color: "rgb(138, 253, 91)" });
        }}
        onDragEnd={() => {
          projectsControls.start({ scale: 1, color: "rgba(255, 255, 255, 1)" });
        }}
        onClick={() => {
          if (onTabChange) {
            onTabChange("projects");
          }
        }}
        className="nav-text text-2xl text-neutral-200 hover:cursor-pointer flex items-center justify-end"
      >
        PROJECTS
      </motion.p>
    </div>
  );
}
