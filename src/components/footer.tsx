import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Footer() {
  return (
    <footer className="flex w-full flex-row items-center justify-center p-6 md:p-8">
      <div className="container flex flex-col gap-4 md:flex-row">
        <Link
          href="https://github.com/mejsiejdev"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/pfp.jpg" alt="Maciej Malinowski" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <p className="text-muted-foreground group-hover:text-foreground text-sm font-medium transition-colors duration-300">
            Made by Maciej Malinowski
          </p>
        </Link>
        <Link
          href="https://github.com/mejsiejdev/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors"
        >
          See this website&apos;s source code on Github
        </Link>
      </div>
    </footer>
  );
}
