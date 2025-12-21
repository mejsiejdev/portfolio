"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] gap-6 text-center"
    >
      <div className="sp">
        <h1 className="text-9xl">404</h1>
        <h2>Page Not Found</h2>
        <p className="text-paragraph mx-auto">
          Sorry, but the page you're looking for might have been removed or
          doesn't exist.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </motion.div>
  );
}
