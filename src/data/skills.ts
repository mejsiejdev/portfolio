export interface Skill {
  name: string;
  icon?: string;
  color: string;
  href?: string;
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: "/logo/react.svg",
    color:
      "bg-[#61DAFB]/10 text-[#61DAFB] hover:bg-[#61DAFB]/20 border-[#61DAFB]/20",
    href: "https://react.dev",
  },
  {
    name: "Next.js",
    icon: "/logo/nextjs.svg",
    color:
      "bg-foreground/5 text-foreground hover:bg-foreground/10 border-foreground/10",
    href: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    icon: "/logo/typescript.svg",
    color:
      "bg-[#3178C6]/10 text-[#3178C6] hover:bg-[#3178C6]/20 border-[#3178C6]/20",
    href: "https://www.typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    icon: "/logo/tailwindcss.svg",
    color:
      "bg-[#06B6D4]/10 text-[#06B6D4] hover:bg-[#06B6D4]/20 border-[#06B6D4]/20",
    href: "https://tailwindcss.com",
  },
  {
    name: "Figma",
    icon: "/logo/figma.svg",
    color:
      "bg-[#A259FF]/10 text-[#A259FF] hover:bg-[#A259FF]/20 border-[#A259FF]/20",
    href: "https://www.figma.com",
  },
  {
    name: "DatoCMS",
    icon: "/logo/datocms.svg",
    color:
      "bg-[#ff7751]/10 text-[#ff7751] hover:bg-[#ff7751]/20 border-[#ff7751]/20",
    href: "https://www.datocms.com",
  },
  // Projects only skills
  {
    name: "Shadcn UI",
    color:
      "bg-zinc-950/5 text-zinc-950 dark:bg-zinc-50/10 dark:text-zinc-50 hover:bg-zinc-950/10 dark:hover:bg-zinc-50/20 border-zinc-950/10 dark:border-zinc-50/20",
    href: "https://ui.shadcn.com",
  },
  {
    name: "Framer Motion",
    color:
      "bg-[#F000B8]/10 text-[#F000B8] hover:bg-[#F000B8]/20 border-[#F000B8]/20",
    href: "https://www.framer.com/motion",
  },
];

export const getSkill = (name: string): Skill | undefined => {
  return skills.find((skill) => skill.name === name);
};
