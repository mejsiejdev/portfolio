"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Avatar className="h-16 w-16 md:h-20 md:w-20">
        <AvatarImage src={"/pfp.jpg"} alt="Maciej" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl tracking-tighter">
          Hello, I'm <span className="text-sky-500">Maciej</span>
        </h1>
        <p className="text-paragraph">
          I am a Frontend Developer at{" "}
          <Link
            href="https://solvro.pwr.edu.pl/"
            target="_blank"
            className="hover:text-primary transition-colors font-medium"
          >
            Solvro Science Club
          </Link>{" "}
          and Cybersecurity student at{" "}
          <Link
            href="https://pwr.edu.pl/en/"
            target="_blank"
            className="hover:text-primary transition-colors font-medium"
          >
            Wrocław University of Science and Technology
          </Link>
          .
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl items-center justify-start">
        <Button
          className="hover:bg-[#772f9d] bg-[#933ac3] text-white"
          size={"lg"}
          asChild
        >
          <Link href="https://github.com/mejsiejdev" target="_blank">
            <div className="relative h-5 w-5">
              <Image src="/logo/github.svg" alt="GitHub" fill />
            </div>
            View my profile on GitHub
          </Link>
        </Button>
        <Button
          className="bg-[#0A66C2] hover:bg-[#0856A3] text-white"
          size={"lg"}
          asChild
        >
          <Link
            href="https://www.linkedin.com/in/maciej-malinowski-8a5807239/"
            target="_blank"
          >
            <div className="relative h-5 w-5">
              <Image src="/logo/linkedin.png" alt="LinkedIn" fill />
            </div>
            View my profile on LinkedIn
          </Link>
        </Button>
      </div>
    </motion.section>
  );
}
