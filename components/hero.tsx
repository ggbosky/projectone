"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { ButtonLink } from "@/components/button-link"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const
const SLIDE_MS = 4500

const host = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")

export function Hero() {
  const { t, locale } = useI18n()
  const projects = t.work.items
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Cycle through the real projects unless the visitor is hovering the preview.
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setActive((i) => (i + 1) % projects.length), SLIDE_MS)
    return () => clearTimeout(id)
  }, [active, paused, projects.length])

  const project = projects[active]

  return (
    <section id="top" className="px-4 pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-16 items-center">
        {/* Copy */}
        <div key={locale}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-white text-balance"
          >
            {t.hero.line1} <span className="font-accent text-ember whitespace-nowrap">{t.hero.line2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-7 text-lg text-zinc-400 max-w-xl leading-relaxed text-pretty"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          >
            <ButtonLink href="#kontakt" className="w-full sm:w-auto px-7 h-12 text-base">
              {t.hero.primary}
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
            <a
              href="#prace"
              className="self-center sm:self-auto text-zinc-300 underline underline-offset-[6px] decoration-zinc-700 hover:text-white hover:decoration-ember transition-colors"
            >
              {t.hero.secondary}
            </a>
          </motion.div>

          {/* Real clients instead of made-up numbers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 pt-6 border-t border-zinc-800/80"
          >
            <p className="text-sm text-zinc-500 mb-3">{t.hero.proof}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {projects.map((p, i) => (
                <li key={p.url}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "text-sm transition-colors",
                      i === active ? "text-white" : "text-zinc-500 hover:text-zinc-300",
                    )}
                  >
                    {host(p.url)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Live preview of the projects */}
        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="group block rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/60"
          aria-label={project.name}
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="ml-3 flex-1 min-w-0 px-3 py-1 rounded-md bg-zinc-800/70 text-[11px] text-zinc-400 truncate">
              {host(project.url)}
            </span>
          </div>
          <div className="relative aspect-[16/10] bg-zinc-950">
            <AnimatePresence initial={false}>
              <motion.img
                key={project.image}
                src={project.image}
                alt={project.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </AnimatePresence>
          </div>
          {/* Progress of the slideshow */}
          <div className="h-0.5 bg-zinc-800">
            <motion.div
              key={`${active}-${paused}`}
              className="h-full bg-ember origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: paused ? 0 : 1 }}
              transition={{ duration: paused ? 0 : SLIDE_MS / 1000, ease: "linear" }}
            />
          </div>
        </motion.a>
      </div>
    </section>
  )
}
