import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Buzzler Technologies — Software Development Agency",
  description: "Buzzler Technologies builds custom web apps, mobile apps, and AI-powered software for startups and growing businesses. From MVP to full-scale product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground tracking-tight relative" suppressHydrationWarning>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          enableColorScheme={false}
        >
          <SmoothScroll>
            {/* Global Noise Overlay */}
            <div 
              className="fixed inset-0 z-[1] pointer-events-none opacity-[0.35] mix-blend-overlay" 
              style={{ 
                backgroundImage: "url('/img/bgEffect.png')", 
                backgroundRepeat: "repeat",
                backgroundSize: "150px" 
              }} 
            />
            <CustomCursor />
            {children}
          </SmoothScroll>
        </NextThemesProvider>
      </body>
    </html>
  );
}
