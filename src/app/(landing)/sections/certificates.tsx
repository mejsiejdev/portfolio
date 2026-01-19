"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { skills as allSkills } from "@/data/skills";

const certificates: {
  name: string;
  issuer: string;
  date: string;
  tags: string[];
  link: string;
}[] = [
  {
    name: "Build and Ship Cloud-Native Python Apps",
    issuer: "JetBrains Academy",
    date: "November 2025",
    tags: ["Amazon Web Services", "Python", "Flask"],
    link: "https://academy.jetbrains.com/api/edu-track/aws/certs/cert-7F8B7136CF4A392AB89F345EBC408803",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "June 2025",
    tags: ["Cisco", "IP Connectivity", "Networks", "Switching"],
    link: "https://www.credly.com/badges/d791395b-3f28-4808-9315-3c1d72e51ee9",
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

export function Certificates() {
  return (
    <motion.section
      {...sectionAnimation}
      id="certificates"
      className="scroll-mt-16"
    >
      <h2>Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            {...cardAnimation(index)}
            className="flex flex-col gap-4 p-6 border rounded-xl bg-card hover:bg-accent/5 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3>{certificate.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-auto lg:mt-auto lg:mb-0">
              {certificate.tags.map((tag) => {
                const skill = skillsMap.get(tag);
                return (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={`gap-1.5 ${
                      skill?.color ||
                      "bg-primary/5 text-primary border-primary/20"
                    }`}
                  >
                    {skill?.icon && (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={12}
                        height={12}
                        className="h-3 w-3"
                      />
                    )}
                    {tag}
                  </Badge>
                );
              })}
            </div>

            <Button
              size="lg"
              variant={"outline"}
              asChild
              className="w-full mt-2"
            >
              <Link
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Credential
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
