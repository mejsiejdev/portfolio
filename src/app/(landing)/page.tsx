import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Skills } from "./sections/skills";
import { Projects } from "./sections/projects";
import { Certificates } from "./sections/certificates";
import { Contact } from "./sections/contact";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
    </div>
  );
}
