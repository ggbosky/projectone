"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Editorial section header: hairline, index + label on the left, title on the right.
export function SectionHeading({
  index,
  label,
  title,
  sub,
  className,
}: {
  index: string
  label: string
  title: string
  sub?: string
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-16 border-t border-zinc-800 pt-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12", className)}
    >
      <p className="flex items-baseline gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
        <span className="font-mono text-ember">{index}</span>
        {label}
      </p>
      <div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05] font-semibold tracking-tight text-white text-balance">
          {title}
        </h2>
        {sub && <p className="mt-5 max-w-xl text-zinc-400 leading-relaxed text-pretty">{sub}</p>}
      </div>
    </motion.div>
  )
}
