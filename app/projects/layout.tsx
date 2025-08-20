import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "View all my projects and their details",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 