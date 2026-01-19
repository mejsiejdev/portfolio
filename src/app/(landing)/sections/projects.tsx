"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Activity } from "react";

import { skills as allSkills } from "@/data/skills";
import { cn } from "@/lib/utils";

const projects: {
  name: string;
  description: string;
  image: string;
  imageDark?: string;
  tags: string[];
  demo: string;
  code?: string;
}[] = [
  {
    name: "Eventownik",
    description:
      "App that streamlines event management for the academic community.",
    image: "/projects/eventownik.jpg",
    imageDark: "/projects/eventownik-dark.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://eventownik.solvro.pl",
    code: "https://github.com/Solvro/web-eventownik-v2",
  },
  {
    name: "PromoCHATor",
    description: "Tool that helps you find your ideal thesis supervisor.",
    image: "/projects/promochator.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://promochator.solvro.pl",
    code: "https://github.com/Solvro/web-promochator",
  },
  {
    name: "Eurolinks Projects",
    description:
      "Modern website with integrated headless CMS for Erasmus Mobility provider.",
    image: "/projects/eurolinks.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "DatoCMS"],
    demo: "https://eurolinksprojects.com",
  },
  {
    name: "Open Trivia DB Visualizer",
    description:
      "Mini visualization tool for data from the Open Trivia DB API.",
    image: "/projects/open-trivia-db-visualizer.jpg",
    imageDark: "/projects/open-trivia-db-visualizer-dark.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://open-trivia-db-visualizer.vercel.app",
    code: "https://github.com/mejsiejdev/Open-Trivia-DB-Visualizer",
  },
];

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const cardAnimation = (index: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: index * 0.1 },
});

// Create Map for O(1) skill lookups
const skillsMap = new Map(allSkills.map((s) => [s.name, s]));

export function Projects() {
  return (
    <motion.section {...sectionAnimation} id="projects">
      <h2>Projects</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            {...cardAnimation(index)}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-700">
              <Image
                src={project.image}
                alt={project.name}
                className="object-cover dark:hidden"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Image
                src={project.imageDark || project.image}
                alt={project.name}
                className="hidden object-cover dark:block"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-2">
              <h3>{project.name}</h3>
              <p className="text-paragraph">{project.description}</p>
            </div>
            <div className="mb-auto flex flex-wrap gap-2 lg:mt-auto lg:mb-0">
              {project.tags.map((tag) => {
                const skill = skillsMap.get(tag);
                return (
                  <Link
                    key={tag}
                    href={skill?.href || "#"}
                    target={skill?.href ? "_blank" : undefined}
                    rel={skill?.href ? "noopener noreferrer" : undefined}
                    className={!skill?.href ? "cursor-default" : ""}
                  >
                    <Badge
                      variant="outline"
                      className={`gap-2 ${
                        skill?.color ||
                        "bg-primary/10 text-primary border-primary/20"
                      }`}
                    >
                      {skill?.icon && (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={14}
                          height={14}
                          className="h-3.5 w-3.5"
                        />
                      )}
                      {tag}
                    </Badge>
                  </Link>
                );
              })}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Button
                size="lg"
                asChild
                className={cn("flex-1", !project.code && "col-span-2")}
              >
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" /> View website
                </Link>
              </Button>
              <Activity mode={project.code ? "visible" : "hidden"}>
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <Link
                    href={project.code!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/logo/github.svg"
                      alt="GitHub"
                      width={20}
                      height={20}
                      className="mr-2 h-5 w-5 invert dark:invert-0"
                    />
                    View on GitHub
                  </Link>
                </Button>
              </Activity>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
