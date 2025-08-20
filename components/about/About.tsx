import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import DiscordServer from "./DiscordServer"
import GithubGraph from "./GithubGraph"
import SocialMedia from "./SocialMedia"
import Spotify from "./Spotify"
import TiktokEmbed from "./TiktokEmbed"
import StackParallax from "./StackParallax"

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:max-w-[90%] lg:text-base">
            <AnimateParagraph
              paragraph="I'm Ibrahim Bahaly, a 19-year-old Information Systems student at STMIK IKMI and a passionate freelance Front-End Developer. With a strong foundation in web development and a deep enthusiasm for technology, I specialize in building elegant, high-performance, and user-focused websites using modern tech stacks such as React, Next.js, Supabase, Tailwind CSS, and more."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="As someone who values both visual design and functionality, I strive to create digital experiences that are not only fast and responsive, but also aesthetically pleasing and intuitive to use. I have a keen eye for UI/UX, and I'm always exploring new design systems, animation techniques, and performance optimizations to push my work even further."
              delay={1.8}
            />
            <AnimateParagraph
              paragraph="Beyond coding, I'm constantly learning and growing — taking on freelance projects, collaborating with teams, and keeping up with the latest front-end trends. I take pride in transforming ideas into real, interactive products that solve problems and make an impact."
              delay={2.1}
            />
            <AnimateParagraph
              paragraph="In everything I build, my focus is clear: clean code, beautiful design, and real-world results."
              delay={2.4}
            />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          {/* <GithubGraph /> */}
          {/* <SocialMedia /> */}
          <div className="mb-4 flex flex-col items-center text-center">
            <AnimateTitle
              title={"Technical Skills"}
              className="text-center text-[32px] font-bold leading-[0.9em] tracking-tighter sm:text-[36px] md:text-[48px] lg:text-[64px]"
              wordSpace="mr-[10px]"
              charSpace="mr-[0.0001em]"
            />
            <div className="mt-4">
              <AnimateParagraph
                paragraph="My expertise spans across multiple technologies and frameworks in modern web development"
                delay={0.5}
              />
            </div>
          </div>
          <StackParallax />
        </div>
      </div>
    </section>
  )
}
