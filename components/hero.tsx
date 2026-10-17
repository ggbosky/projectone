"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { ButtonLink } from "@/components/button-link"
import { HeroSketch } from "@/components/hero-sketch"

const textRevealVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.1 + i * 0.12,
    },
  }),
}

export function Hero() {
  const { t, locale } = useI18n()
  const accent = t.hero.line2Accent.replace(/\.$/, "")

  return (
    <section id="top" className="relative px-4 pt-36 sm:pt-48 pb-20 sm:pb-28 overflow-hidden">
      {/* Background: wireframes sketching themselves (desktop only) */}
      <HeroSketch className="hidden md:block absolute inset-x-0 top-0 w-full h-[1000px] opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,black_45%,transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500 mb-8 sm:mb-10"
        >
          <span className="h-px w-10 bg-ember" />
          {t.hero.kicker}
        </motion.p>

        {/* Headline */}
        <h1
          key={locale}
          className="font-display text-[2.9rem] leading-[0.98] sm:text-7xl lg:text-[7.25rem] font-semibold tracking-[-0.04em] text-white"
        >
          <span className="block overflow-hidden pb-1">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
              {t.hero.line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-3">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={1}>
              {t.hero.line2} {accent}
              <span className="text-ember">.</span>
            </motion.span>
          </span>
        </h1>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-8 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:items-end"
        >
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed text-pretty max-w-xl">{t.hero.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <ButtonLink href="#kontakt" className="w-full sm:w-auto px-7 h-12 text-base">
              {t.hero.primary}
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
            <ButtonLink href="#prace" variant="outline" className="w-full sm:w-auto px-7 h-12 text-base">
              {t.hero.secondary}
            </ButtonLink>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {t.hero.stats.map((s) => (
            <div key={s.label} className="border-l border-zinc-800 pl-3 sm:pl-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-base sm:text-2xl font-semibold text-white tracking-tight">{s.value}</dd>
              <dd className="text-xs sm:text-sm text-zinc-500 mt-1">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
