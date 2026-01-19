"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const routes = [
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#skills", label: "Skills" },
  {
    href: "/Maciej_Malinowski_Resume.pdf",
    label: "Resume",
    target: "_blank" as const,
  },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 fixed top-4 left-1/2 z-50 w-fit -translate-x-1/2 rounded-full border shadow-md backdrop-blur">
      <div className="flex h-14 items-center gap-2 pr-2.5 pl-2.5 sm:gap-4 sm:pl-6">
        <nav className="hidden items-center space-x-6 text-sm font-medium sm:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              target={route.target}
              className="hover:text-foreground/80 text-foreground/60 whitespace-nowrap transition-colors"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-0 sm:hidden">
              <Menu className="mr-2 h-[1.2rem] w-[1.2rem]" />
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {routes.map((route) => (
              <DropdownMenuItem key={route.href} asChild>
                <Link
                  href={route.href}
                  target={route.target}
                  className="w-full cursor-pointer"
                >
                  {route.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
      </div>
    </header>
  );
}
