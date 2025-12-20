"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 items-start"
      >
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 md:h-20 md:w-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="Maciej" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Hi, I'm <span className="text-primary">Maciej</span>
          </h1>
        </div>
        <h2 className="text-xl md:text-2xl text-muted-foreground">
          Building sleek, elegant web experiences.
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          I specialize in React, Next.js, and modern CSS. I turn designs into
          pixel-perfect code.
        </p>
        <div className="flex gap-4 items-center justify-start">
          <Button size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <div className="relative h-5 w-5">
                  <Image
                    src="/logo/github-black.svg"
                    alt="GitHub"
                    fill
                    className="dark:hidden"
                  />
                  <Image
                    src="/logo/github-white.svg"
                    alt="GitHub"
                    fill
                    className="hidden dark:block"
                  />
                </div>
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <div className="relative h-5 w-5">
                  <Image
                    src="/logo/linkedin-black.png"
                    alt="LinkedIn"
                    fill
                    className="block dark:hidden object-contain"
                  />
                  <Image
                    src="/logo/linkedin-white.png"
                    alt="LinkedIn"
                    fill
                    className="hidden dark:block object-contain"
                  />
                </div>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
