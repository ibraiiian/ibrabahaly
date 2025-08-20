"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"
import DigitalGlobe from "../DigitalGlobe"
import Image from "next/image"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      initial="initial"
      animate="animate"
    >
      <Image
        src="/images/bg portfolio.jpg"
        alt="Background Portfolio"
        fill
        priority
        className="object-cover object-center -z-10 select-none pointer-events-none"
        quality={100}
        sizes="100vw"
      />
      {/* Foto bradev2.jpg */}
      <Image
        src="/images/bradev2.jpg"
        alt="Bradev"
        width={200}
        height={200}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 rounded-[32px] grayscale hover:grayscale-0 shadow-lg object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px] z-0"
      />
      <HeroText />
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 bottom-10 hidden h-[121px] w-[350px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-zinc-800 px-5 dark:bg-zinc-100 lg:flex"
      >
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          Locate
        </p>
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          in Cirebon
        </p>
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          West Java, Indonesia
        </p>
        <DigitalGlobe className="absolute right-3 top-[10%]" />
      </motion.div>
    </motion.section>
  )
}
