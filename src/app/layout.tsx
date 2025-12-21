import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maciej Malinowski | Frontend Developer",
  description:
    "Portfolio of Frontend Developer building high-performance applications with Next.js, currently studying Cybersecurity at WUST, and developing practical solutions for the academic community as a member of Solvro Science Club.",
  openGraph: {
    title: "Maciej Malinowski | Frontend Developer",
    description:
      "Portfolio of Frontend Developer building high-performance applications with Next.js, currently studying Cybersecurity at WUST, and developing practical solutions for the academic community as a member of Solvro Science Club.",
    url: "https://maciejmalinowski.vercel.app",
    siteName: "Maciej Malinowski Portfolio",
    images: [
      {
        url: "/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Maciej Malinowski",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maciej Malinowski | Frontend Developer",
    description:
      "Portfolio of Frontend Developer building high-performance applications with Next.js",
    images: ["/pfp.jpg"],
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.className} antialiased`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <div className="relative flex min-h-screen flex-col items-center">
              <main className="flex-1 p-6 md:p-8">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <ScrollToTop />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
