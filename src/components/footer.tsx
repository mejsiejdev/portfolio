import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Footer() {
  return (
    <footer className="px-6 md:px-8 pb-6 md:pb-8 flex flex-row w-full items-center justify-center">
      <div className="container flex gap-4 flex-col md:flex-row">
        <Link
          href="https://github.com/mejsiejdev"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 group"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/pfp.jpg" alt="Maciej Malinowski" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            Made by Maciej Malinowski
          </p>
        </Link>
        <Link
          href="https://github.com/mejsiejdev/portfolio"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          See this website's source code on Github
        </Link>
      </div>
    </footer>
  );
}
