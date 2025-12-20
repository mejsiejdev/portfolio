"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 md:py-32 bg-muted/50 rounded-3xl my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am a passionate Frontend Developer with a keen eye for design and a
            love for clean, efficient code. My journey in web development started
            with a curiosity for how things work on the internet, which quickly
            turned into a career.
          </p>
          <p>
            I specialize in building modern web applications using the latest
            technologies like React, Next.js, and TypeScript. I believe in
            creating user experiences that are not only functional but also
            delightful to use.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source, or enjoying a good cup of coffee while
            reading a book.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
