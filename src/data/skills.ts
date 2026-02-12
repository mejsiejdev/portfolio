interface Skill {
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
    name: "JavaScript",
    icon: "/logo/javascript.svg",
    color:
      "bg-[#F7DF1E]/10 text-[#F7DF1E] hover:bg-[#F7DF1E]/20 border-[#F7DF1E]/20",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
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
  {
    name: "Python",
    icon: "/logo/python.svg",
    color:
      "bg-[#3776AB]/10 text-[#3776AB] hover:bg-[#3776AB]/20 border-[#3776AB]/20",
    href: "https://www.python.org",
  },
];
