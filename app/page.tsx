"use client"

import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Hero from "@/components/hero/Hero"
import Nav from "@/components/navbar/Nav"
import Preload from "@/components/preload/Preload"
import Projects from "@/components/projects/Projects"
import Education from "@/components/education/Education"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import ParallaxText from "@/components/hero/ParallaxText"

export default function Home() {
  const [loadingPreloader, setLoadingPreloader] = useState<boolean>(true)
  const [endedLoading, setEndedLoading] = useState<boolean>(false)

  useEffect(() => {
    const body = document.querySelector("body")

    if (loadingPreloader) {
      body?.classList.add("overflow-hidden")
      setTimeout(() => {
        setLoadingPreloader(false)
      }, 4000)
      setTimeout(() => {
        setEndedLoading(true)
      }, 3000)
    } else {
      body?.classList.remove("overflow-hidden")
    }
  }, [loadingPreloader])

  if (loadingPreloader) {
    return (
      <>
        <AnimatePresence mode="wait" initial={true}>
          {loadingPreloader && <Preload endedLoading={endedLoading} />}
        </AnimatePresence>
      </>
    )
  }

  if (!loadingPreloader) {
    return (
      <>
        <Nav />
        <main data-scroll-container className="flex flex-col items-center">
          <Hero />
          <About />
          <div className="w-full overflow-hidden my-8">
            <ParallaxText direction={500} baseVelocity={-1}>
              Frontend Web Developer
            </ParallaxText>
            <ParallaxText direction={-500} baseVelocity={1}>
              Freelance Web Developer
            </ParallaxText>
          </div>
          <Education />
          <Projects />
          <Contact />
        </main>
      </>
    )
  }
}
