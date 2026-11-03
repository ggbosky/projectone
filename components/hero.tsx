"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { ButtonLink } from "@/components/button-link"

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
    <section id="top" className="relative flex flex-col items-center px-4 pt-36 sm:pt-48 pb-20 sm:pb-28 overflow-hidden">
      {/* One soft light from above, nothing else */}
      <div className="absolute -top-72 left-1/2 -translate-x-1/2 w-[1100px] h-[620px] rounded-full bg-ember/[0.13] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Headline */}
        <h1 key={locale} className="font-display text-[2.75rem] leading-[1.02] sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-7">
          <span className="block overflow-hidden pb-1">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
              {t.hero.line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-7 -mb-4">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={1}>
              <span className="relative inline-block text-ember">
                {t.hero.line2.replace(/\.$/, "")}
                {/* Thin underline that draws in and fades out to the right */}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-[0.04em] right-0 -bottom-[0.16em] h-[0.04em] rounded-full bg-gradient-to-r from-ember via-ember/60 to-transparent origin-left"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              {t.hero.line2.endsWith(".") && <span className="text-ember">.</span>}
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed text-balance"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6"
        >
          <ButtonLink href="#kontakt" className="w-full sm:w-auto px-8 h-12 text-base">
            {t.hero.primary}
            <ArrowRight className="w-4 h-4" />
          </ButtonLink>
          <ButtonLink href="#prace" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base">
            {t.hero.secondary}
          </ButtonLink>
        </motion.div>

        {/* Real clients, real faces */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <span className="flex -space-x-2.5">
            {t.reviews.items.map((r) => (
              <img
                key={r.name}
                src={r.photo}
                alt={r.name}
                className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-zinc-950 bg-white"
              />
            ))}
          </span>
          <span className="text-sm text-zinc-400 text-balance">{t.hero.note}</span>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-zinc-800/80 grid grid-cols-3 max-w-2xl mx-auto divide-x divide-zinc-800"
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
