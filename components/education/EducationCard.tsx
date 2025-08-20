"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Calendar, MapPin, Award } from "lucide-react"
import { useEffect, useRef } from "react"

interface EducationCardProps {
  institution: string
  degree: string
  field: string
  period: string
  location: string
  description?: string
  gpa?: string
  index: number
}

export default function EducationCard({
  institution,
  degree,
  field,
  period,
  location,
  description,
  gpa,
  index
}: EducationCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  const contentAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={cardAnimation}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }
      }}
      className="group relative overflow-hidden rounded-3xl border border-foreground/20 bg-zinc-200 dark:bg-zinc-800 p-8 transition-all duration-300 hover:shadow-2xl hover:border-foreground/30"
    >
      {/* Gradient overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <motion.div
        animate={ctrls}
        initial="hidden"
        variants={contentAnimation}
        className="relative z-10 flex flex-col space-y-6"
      >
        {/* Institution and GPA */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-foreground/90 transition-colors">
              {institution}
            </h3>
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-semibold text-foreground/80">
                {degree}
              </p>
              <p className="text-base text-foreground/70 font-medium">
                {field}
              </p>
            </div>
          </div>
          {gpa && (
            <div className="flex items-center space-x-2 bg-foreground/10 rounded-full px-3 py-1">
              <Award className="h-4 w-4 text-foreground/70" />
              <span className="text-sm font-semibold text-foreground/80">
                {gpa}
              </span>
            </div>
          )}
        </div>

        {/* Period and Location */}
        <div className="flex flex-col space-y-3 text-sm text-foreground/60">
          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-foreground/50" />
            <span className="font-medium">{period}</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-foreground/50" />
            <span className="font-medium">{location}</span>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-foreground/70 leading-relaxed border-t border-foreground/10 pt-4">
            {description}
          </p>
        )}
      </motion.div>
    </motion.div>
  )
}