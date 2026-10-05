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

  return (
    <section id="top" className="relative flex flex-col items-center px-4 pt-40 sm:pt-52 pb-28 sm:pb-36 overflow-hidden">
      {/* Background: wireframes sketching themselves under the grid */}
      <HeroSketch className="absolute inset-x-0 top-0 w-full h-[1000px] opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-ember/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Headline */}
        <h1 key={locale} className="font-display text-[2.75rem] leading-[1.02] sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-7">
          <span className="block overflow-hidden pb-1">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
              {t.hero.line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-3">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={1}>
              <span className="text-zinc-500">{t.hero.line2} </span>
              <span className="text-ember">{t.hero.line2Accent}</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14"
        >
          <ButtonLink href="#kontakt" className="w-full sm:w-auto px-8 h-12 text-base">
            {t.hero.primary}
            <ArrowRight className="w-4 h-4" />
          </ButtonLink>
          <ButtonLink href="#prace" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base">
            {t.hero.secondary}
          </ButtonLink>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="grid grid-cols-3 max-w-2xl mx-auto divide-x divide-zinc-800"
        >
          {t.hero.stats.map((s) => (
            <div key={s.label} className="px-2 sm:px-6">
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
