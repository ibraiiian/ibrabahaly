import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "Ibrahim Bahaly | %s",
    default: "Ibrahim Bahaly | Front End Developer",
  },
  description:
    "Ibrahim Bahaly is a passionate Front End Developer specializing in modern, high-performance web development.",
  metadataBase: new URL("https://ibrabahaly.my.id"),
  openGraph: {
    title: {
      template: "Ibrahim Bahaly | %s",
      default: "Ibrahim Bahaly | Front End Developer",
    },
    description:
      "Ibrahim Bahaly is a passionate Front End Developer specializing in modern, high-performance web development.",
    url: "https://ibrabahaly.my.id",
    siteName: "Ibrahim Bahaly",
    images: [
      {
        url: "/public/images/og-images.jpg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "ibrahim bahaly",
    "ibrahim",
    "frontend web developer",
    "frontend developer",
    "frontend engineer",
    "react",
    "nextjs",
    "creative",
    "creative developer",
    "creative frontend developer",
    "web developer",
    "web engineer",
    "tech",
    "indonesia",
    "indonesian developer",
    "indonesian web developer",
    "indonesian frontend developer",
    "portfolio",
    "portfolio website",
    "portfolio web",
    "portfolio web developer",
    "portfolio frontend developer",
    "portfolio web engineer",
  ],
  twitter: {
    card: "summary_large_image",
    title: {
      template: "Ibrahim Bahaly | %s",
      default: "Ibrahim Bahaly | Front End Developer",
    },
    description:
      "Ibrahim Bahaly is a passionate Front End Developer specializing in modern, high-performance web development.",
    creator: "@ibrabahaly",
    images: [
      {
        url: "/public/images/og-images.jpg",
        width: 1000,
        height: 1200,
      },
    ],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-zinc-50 text-zinc-800 antialiased dark:bg-neutral-900 dark:text-zinc-50",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-mode"
        >
          <SmoothScrollProvider
            options={{
              smooth: true,
              mobile: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
          >
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
