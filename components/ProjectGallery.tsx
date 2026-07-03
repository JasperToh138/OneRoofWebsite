"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCategories, projects } from "@/data/projects";

export function ProjectGallery() {
  const [category, setCategory] = useState("All");
  const visibleProjects =
    category === "All" ? projects : projects.filter((project) => project.serviceType === category);

  return (
    <div>
      <div
        className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0"
        data-scroll-reveal="fade"
        aria-label="Finished project filters"
      >
        {projectCategories.map((item) => (
          <button
            className={`focus-ring min-h-10 shrink-0 rounded-md border px-4 py-2 text-sm font-bold leading-5 transition ${
              category === item
                ? "border-ocean bg-ocean text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-ocean hover:text-ocean"
            }`}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
