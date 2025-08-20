import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const stacks = [
  { name: "Next.js", icon: "/images/stacks/nextjs.svg" },
  { name: "React", icon: "/images/stacks/react.svg" },
  { name: "TypeScript", icon: "/images/stacks/typescript.svg" },
  { name: "Node.js", icon: "/images/stacks/nodejs.svg" },
  { name: "Bun.js", icon: "/images/stacks/bunjs.svg" },
  { name: "JavaScript", icon: "/images/stacks/javascript.svg" },
  { name: "Tailwind CSS", icon: "/images/stacks/tailwindcss.svg" },
  { name: "Bootstrap", icon: "/images/stacks/bootstrap.svg" },
  { name: "Supabase", icon: "/images/stacks/supabase.svg" },
  { name: "PostgreSQL", icon: "/images/stacks/postgresql.svg" },
  { name: "HTML", icon: "/images/stacks/html.svg" },
  { name: "CSS", icon: "/images/stacks/css.svg" },
  { name: "Vite JS", icon: "vite-svg-inline" },
  { name: "Python", icon: "python-svg-inline" },
]

export default function StackParallax() {
  return (
    <div className="w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-8 animate-marquee"
        initial={{ x: 0 }}
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {stacks.concat(stacks).map((stack, i) => (
          <div key={i} className="flex flex-col items-center min-w-[80px]">
            {stack.icon === "vite-svg-inline" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#9575cd" d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"></path><path fill="#fbc02d" d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"></path>
              </svg>
            ) : stack.icon === "python-svg-inline" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
              </svg>
            ) : (
              <Image src={stack.icon} alt={stack.name} width={40} height={40} />
            )}
            <span className="text-xs mt-2 text-center whitespace-nowrap">{stack.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
} 