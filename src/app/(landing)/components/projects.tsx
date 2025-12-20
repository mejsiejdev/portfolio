"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with Next.js, Stripe, and Prisma. Features include user authentication, shopping cart, and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind CSS"],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects. Includes real-time updates and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek and modern portfolio website to showcase my work and skills. Built with the latest web technologies.",
    tags: ["Next.js", "Shadcn UI", "Framer Motion", "Tailwind CSS"],
    demo: "#",
    code: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link href={project.code} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
