import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Skills } from "./sections/skills";
import { Projects } from "./sections/projects";
import { Contact } from "./sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 p-6 md:p-8">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
