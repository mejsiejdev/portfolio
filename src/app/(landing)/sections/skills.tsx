"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

import { skills } from "@/data/skills";

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const itemAnimation = (index: number) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.3, delay: index * 0.05 },
});

export function Skills() {
  return (
    <motion.section {...sectionAnimation} id="skills">
      <h2>Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills
          .filter((skill) => skill.icon)
          .map((skill, index) => {
            return (
              <motion.div key={skill.name} {...itemAnimation(index)}>
                <Link
                  href={skill.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant="outline"
                    className={`text-lg font-medium py-2 px-4 transition-colors cursor-pointer gap-2 ${skill.color}`}
                  >
                    <Image
                      src={skill.icon!}
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
    </motion.section>
  );
}
