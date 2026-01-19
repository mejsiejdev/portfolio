"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function Hero() {
  return (
    <motion.section {...fadeInAnimation} className="pt-20">
      <Avatar className="h-16 w-16 md:h-20 md:w-20">
        <AvatarImage src={"/pfp.jpg"} alt="Maciej" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl tracking-tighter text-balance">
          Hello, I&apos;m <span className="text-sky-500">Maciej</span>
        </h1>
        <p className="text-paragraph">
          I am a Frontend Developer at{" "}
          <Link
            href="https://solvro.pwr.edu.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary font-medium transition-colors"
          >
            Solvro Science Club
          </Link>{" "}
          and Cybersecurity student at{" "}
          <Link
            href="https://pwr.edu.pl/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary font-medium transition-colors"
          >
            Wrocław University of Science and Technology
          </Link>
          .
        </p>
      </div>
      <div className="grid max-w-xl grid-cols-1 items-center justify-start gap-4 sm:grid-cols-2">
        <Button
          className="bg-[#933ac3] text-white hover:bg-[#772f9d]"
          size={"lg"}
          asChild
        >
          <Link
            href="https://github.com/mejsiejdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-5 w-5" aria-hidden="true">
              <Image src="/logo/github.svg" alt="" fill sizes="20px" />
            </div>
            View my profile on GitHub
          </Link>
        </Button>
        <Button
          className="bg-[#0A66C2] text-white hover:bg-[#0856A3]"
          size={"lg"}
          asChild
        >
          <Link
            href="https://www.linkedin.com/in/maciej-malinowski-8a5807239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-5 w-5" aria-hidden="true">
              <Image src="/logo/linkedin.png" alt="" fill sizes="20px" />
            </div>
            View my profile on LinkedIn
          </Link>
        </Button>
      </div>
    </motion.section>
  );
}
