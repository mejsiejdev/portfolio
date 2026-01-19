"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function About() {
  return (
    <motion.section
      {...fadeInAnimation}
      id="about"
      className="container flex flex-col gap-6"
    >
      <h2>About Me</h2>
      <div className="space-y-6 text-paragraph">
        <p>
          I am a passionate Frontend Developer with a keen eye for design and a
          love for clean, efficient code. My journey in web development started
          back in highschool where I got introduced to HTML and CSS and one of
          the teachers mentioned JavaScript frameworks - I dug deeper into them,
          found Fireship&apos;s Youtube channel and picked up technologies like
          Next.js, TypeScript and Tailwind CSS.
        </p>
        <p>
          Currently I am part of{" "}
          <Link
            href="https://solvro.pwr.edu.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-medium"
          >
            Solvro Science Club
          </Link>
          , a strategic student-run software house at{" "}
          <Link
            href="https://pwr.edu.pl/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-medium"
          >
            Wrocław University of Science and Technology
          </Link>
          , where together with other talented students we develop apps that aim
          to make the academic life of students easier.
        </p>
        <p>
          When I&apos;m not coding, I am creating music under my producer alias,{" "}
          <Link
            href="https://linktr.ee/coegi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-medium"
          >
            Coegi
          </Link>
          .
        </p>
      </div>
    </motion.section>
  );
}
