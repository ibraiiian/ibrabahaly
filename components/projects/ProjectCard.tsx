import { GithubIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      aria-hidden="true"
      className="relative z-10 flex h-[680px] w-full flex-col items-center justify-between overflow-hidden rounded-3xl border border-foreground/20 bg-zinc-200 dark:bg-zinc-800 p-10 md:h-[750px] md:p-14"
    >
      {/* Judul dan link */}
      <div className="flex w-full items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardTitleAnimation}
            aria-hidden="true"
          >
            {title}
          </motion.span>
        </h3>
        <div className="flex gap-3">
          {repo && (
            <Link
              href={repo}
              target="_blank"
              className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
              aria-label="Open Github Repo"
            >
              <GithubIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </Link>
          )}
          {projectLink && (
            <Link
              href={projectLink}
              target="_blank"
              className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
              aria-label="Open Live Demo"
            >
              <LinkIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </Link>
          )}
        </div>
      </div>
      {/* Gambar Project */}
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardImageAnimation}
        aria-hidden="true"
        className="flex w-full justify-center my-2"
      >
        <Image
          width={1000}
          height={600}
          src={image}
          alt={title}
          className={`w-full object-contain rounded-xl shadow-lg ${title === 'TB KARIB' ? 'max-w-[400px]' : 'max-w-[520px]'}`}
          style={{ zIndex: 1 }}
        />
      </motion.div>
      {/* Deskripsi Project */}
      <p className="w-full min-h-[110px] text-sm font-medium text-foreground/80 text-center md:text-base mb-8 mt-4">
        <motion.span
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardDescriptionAnimation}
          aria-hidden="true"
        >
          {description}
        </motion.span>
      </p>
      {/* Tech Stack */}
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardTechAnimation}
        aria-hidden="true"
        className="flex flex-wrap justify-center gap-3 min-h-[32px]"
      >
        {tech && tech.length > 0 ? (
          tech.map((item, index) => (
            <span
              key={index}
              className="rounded bg-foreground/10 px-2 py-1 text-xs font-semibold text-foreground/80 md:text-sm"
            >
              {item}
            </span>
          ))
        ) : (
          <span className="text-xs text-foreground/40 italic">No tech stack listed</span>
        )}
      </motion.div>
    </motion.div>
  )
}
