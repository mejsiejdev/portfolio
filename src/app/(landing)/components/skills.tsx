"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    name: "React",
    icon: "/logo/react.svg",
    color:
      "bg-[#61DAFB]/10 text-[#61DAFB] hover:bg-[#61DAFB]/20 border-[#61DAFB]/20",
    href: "https://react.dev",
  },
  {
    name: "Next.js",
    icon: "/logo/nextjs.svg",
    color:
      "bg-foreground/5 text-foreground hover:bg-foreground/10 border-foreground/10",
    href: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    icon: "/logo/typescript.svg",
    color:
      "bg-[#3178C6]/10 text-[#3178C6] hover:bg-[#3178C6]/20 border-[#3178C6]/20",
    href: "https://www.typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    icon: "/logo/tailwindcss.svg",
    color:
      "bg-[#06B6D4]/10 text-[#06B6D4] hover:bg-[#06B6D4]/20 border-[#06B6D4]/20",
    href: "https://tailwindcss.com",
  },
  {
    name: "Figma",
    icon: "/logo/figma.svg",
    color:
      "bg-[#A259FF]/10 text-[#A259FF] hover:bg-[#A259FF]/20 border-[#A259FF]/20",
    href: "https://www.figma.com",
  },
];

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant="outline"
                    className={`text-lg py-2 px-4 transition-colors cursor-pointer gap-2 ${skill.color}`}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                    {skill.name}
                  </Badge>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
