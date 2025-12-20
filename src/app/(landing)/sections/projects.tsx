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
  tags: string[];
  demo: string;
  code?: string;
}[] = [
  {
    name: "Eventownik",
    description:
      "App that makes creating and managing events for the academic community easier.",
    image: "/projects/eventownik.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://eventownik.solvro.pl",
    code: "https://github.com/Solvro/web-eventownik-v2",
  },
  {
    name: "PromoCHATor",
    description: "Helps you find your ideal thesis supervisor.",
    image: "/projects/promochator.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://promochator.solvro.pl",
    code: "https://github.com/Solvro/web-promochator",
  },
  {
    name: "Eurolinks Projects",
    description: "Website of a Erasmus Mobility provider.",
    image: "/projects/eurolinks.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "DatoCMS"],
    demo: "https://eurolinksprojects.com",
  },
  {
    name: "Open Trivia DB Visualizer",
    description:
      "Mini visualization tool for data from the Open Trivia DB API.",
    image: "/projects/open-trivia-db-visualizer.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://open-trivia-db-visualizer.vercel.app",
    code: "https://github.com/mejsiejdev/Open-Trivia-DB-Visualizer",
  },
];

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="projects"
    >
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col gap-6"
          >
            <Image
              src={project.image}
              alt={project.name}
              className="w-full h-auto aspect-video bg-neutral-100 dark:bg-neutral-700 rounded-lg"
              width={1000}
              height={1000}
            />
            <div className="space-y-2">
              <h3>{project.name}</h3>
              <p className="text-paragraph">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => {
                const skill = allSkills.find((s) => s.name === tag);
                return (
                  <Link
                    key={tag}
                    href={skill?.href || "#"}
                    target={skill?.href ? "_blank" : undefined}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                size="lg"
                asChild
                className={cn("flex-1", !project.code && "col-span-2")}
              >
                <Link href={project.demo} target="_blank">
                  <ExternalLink className="mr-2 h-5 w-5" /> View website
                </Link>
              </Button>
              <Activity mode={project.code ? "visible" : "hidden"}>
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <Link href={project.code!} target="_blank">
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
