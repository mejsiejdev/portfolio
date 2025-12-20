"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      className="container flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Me</h2>
      <div className="space-y-6 text-paragraph">
        <p>
          I am a passionate Frontend Developer with a keen eye for design and a
          love for clean, efficient code. My journey in web development started
          back in highschool where I got introduced to HTML and CSS and one of
          the teachers mentioned JavaScript frameworks - I dug deeper into them,
          found Fireship's Youtube channel and picked up technologies like
          Next.js, TypeScript and Tailwind CSS.
        </p>
        <p>
          Currently I am part of Solvro Science Club, a strategic student-run
          software house at Wrocław Univesity of Science and Technology, where
          together with other talented students we develop apps that aim to make
          the academic life of students easier.
        </p>
        <p>
          When I'm not coding, I am creating music under my producer alias,
          Coegi.
        </p>
      </div>
    </motion.section>
  );
}
