"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  sub,
  align = "center",
  className,
}: {
  title: string
  sub?: string
  align?: "center" | "left"
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-14", align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl", className)}
    >
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 text-balance">
        {title}
      </h2>
      {sub && <p className="text-zinc-400 leading-relaxed text-pretty">{sub}</p>}
    </motion.div>
  )
}
