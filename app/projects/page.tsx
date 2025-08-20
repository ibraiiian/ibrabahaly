"use client"

import React from "react"
import { projects } from "@/lib/projectData"
import ProjectCard from "@/components/projects/ProjectCard"
import AllProjectsTitle from "@/components/projects/AllProjectsTitle"
import Nav from "@/components/navbar/Nav"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center">
        <section className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] z-[20] mt-24">
          <AllProjectsTitle />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="mb-24 grid w-[90%] grid-cols-1 gap-x-6 gap-y-12 lg:max-w-[1200px] lg:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.2, 0.65, 0.3, 0.9] 
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  repo={project.repo}
                  projectLink={project.linkProject}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </>
  )
} 