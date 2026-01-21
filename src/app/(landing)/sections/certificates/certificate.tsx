"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { skills as allSkills } from "@/data/skills";
import type { Certificate as CertificateType } from "@/app/(landing)/sections/certificates";

const cardAnimation = (index: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: index * 0.1 },
});

const skillsMap = new Map(allSkills.map((s) => [s.name, s]));

export function Certificate({
  certificate,
  index,
}: {
  certificate: CertificateType;
  index: number;
}) {
  return (
    <motion.div
      key={certificate.id}
      {...cardAnimation(index)}
      className="bg-card hover:bg-accent/5 flex flex-col gap-4 rounded-xl border p-6 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3>{certificate.name}</h3>
          <p className="text-muted-foreground text-sm">
            {certificate.issuer} • {certificate.date}
          </p>
        </div>
      </div>

      <div className="mb-auto flex flex-wrap gap-2 lg:mt-auto lg:mb-0">
        {certificate.tags.map((tag) => {
          const skill = skillsMap.get(tag);
          return (
            <Badge
              key={tag}
              variant="outline"
              className={`gap-1.5 ${
                skill?.color || "bg-primary/5 text-primary border-primary/20"
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

      <Button size="lg" variant={"outline"} asChild className="mt-2 w-full">
        <Link href={certificate.link} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" />
          View Credential
        </Link>
      </Button>
    </motion.div>
  );
}
