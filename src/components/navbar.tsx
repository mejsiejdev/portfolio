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

export function Navbar() {
  const routes = [
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#skills", label: "Skills" },
    {
      href: "/Maciej_Malinowski_Resume.pdf",
      label: "Resume",
      target: "_blank",
    },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 w-fit -translate-x-1/2 rounded-full border bg-background/80 backdrop-blur shadow-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center pl-2.5 sm:pl-6 pr-2.5 gap-2 sm:gap-4">
        <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              target={route.target}
              className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="sm:hidden gap-0">
              <Menu className="h-[1.2rem] w-[1.2rem] mr-2" />
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
