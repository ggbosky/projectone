"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Vercel", "Shopify", "Sanity", "Stripe", "Webflow", "Supabase"]

export function TechMarquee() {
  const { t } = useI18n()

  return (
    <section className="py-16 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs text-zinc-500 uppercase tracking-[0.2em] font-medium mb-10"
      >
        {t.stack.title}
      </motion.p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {[...stack, ...stack].map((name, index) => (
            <div
              key={index}
              aria-hidden={index >= stack.length}
              className="flex items-center gap-3 mx-6 sm:mx-10 text-zinc-500 hover:text-white transition-colors duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <span className="font-display text-lg sm:text-xl font-medium tracking-tight whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
