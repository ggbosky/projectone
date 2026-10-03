"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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

function BrowserMockup({ metric }: { metric: string }) {
  return (
    <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur shadow-2xl shadow-black/60 overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <div className="mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/70 text-[11px] text-zinc-500 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          vasefirma.cz
        </div>
        <span className="w-12" />
      </div>

      {/* Fake site */}
      <div className="relative grid grid-cols-12 gap-4 p-5 sm:p-8">
        <div className="col-span-12 flex items-center justify-between mb-2">
          <div className="h-3 w-20 rounded-full bg-zinc-700" />
          <div className="hidden sm:flex gap-3">
            <div className="h-2 w-10 rounded-full bg-zinc-800" />
            <div className="h-2 w-10 rounded-full bg-zinc-800" />
            <div className="h-2 w-10 rounded-full bg-zinc-800" />
          </div>
          <div className="h-6 w-16 rounded-full bg-white/90" />
        </div>

        <div className="col-span-12 sm:col-span-6 flex flex-col justify-center gap-3 py-4">
          <div className="h-5 sm:h-7 w-11/12 rounded-lg bg-zinc-200" />
          <div className="h-5 sm:h-7 w-8/12 rounded-lg bg-zinc-600" />
          <div className="mt-2 h-2 w-10/12 rounded-full bg-zinc-800" />
          <div className="h-2 w-9/12 rounded-full bg-zinc-800" />
          <div className="mt-3 flex gap-2">
            <div className="h-8 w-24 rounded-full bg-ember" />
            <div className="h-8 w-20 rounded-full border border-zinc-700" />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.7_0.2_40/_0.9),transparent_55%),radial-gradient(circle_at_75%_70%,oklch(0.55_0.2_300/_0.7),transparent_55%)]" />
          <div className="absolute inset-0 bg-zinc-950/10 backdrop-blur-[2px]" />
          <motion.div
            className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/70 backdrop-blur border border-white/10 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
              ↑
            </div>
            <div className="flex-1">
              <div className="text-[11px] text-zinc-400">{metric}</div>
              <div className="text-sm font-semibold text-white">+184 %</div>
            </div>
            <svg viewBox="0 0 60 24" className="w-16 h-6">
              <path d="M0 20 L12 16 L24 18 L36 9 L48 11 L60 2" fill="none" stroke="#34d399" strokeWidth="2" className="draw-line" />
            </svg>
          </motion.div>
        </div>

        <div className="col-span-12 grid grid-cols-3 gap-3 mt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
              <div className="w-6 h-6 rounded-md bg-zinc-800 mb-3" />
              <div className="h-2 w-3/4 rounded-full bg-zinc-700 mb-1.5" />
              <div className="h-2 w-1/2 rounded-full bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const { t, locale } = useI18n()
  const mockupRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: mockupRef, offset: ["start end", "end start"] })
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [22, 0])
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.92, 1])

  return (
    <section id="top" className="relative flex flex-col items-center px-4 pt-36 sm:pt-44 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-ember/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.a
          href="#kontakt"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8 hover:border-zinc-700 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 text-emerald-500 pulse-glow" />
          <span className="text-sm text-zinc-400">{t.hero.badge}</span>
          <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
        </motion.a>

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
              <span className="font-serif italic font-normal tracking-normal text-ember">{t.hero.line2Accent}</span>
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
          className="grid grid-cols-3 max-w-xl mx-auto divide-x divide-zinc-800"
        >
          {t.hero.stats.map((s) => (
            <div key={s.label} className="px-2 sm:px-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">{s.value}</dd>
              <dd className="text-xs sm:text-sm text-zinc-500 mt-1">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Product mockup */}
      <div ref={mockupRef} className="relative z-10 w-full max-w-5xl mx-auto mt-20 [perspective:1600px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div style={{ rotateX, scale, transformOrigin: "center top" }}>
            <BrowserMockup metric={locale === "cs" ? "Konverze" : "Conversions"} />
          </motion.div>
        </motion.div>
        <div className="absolute -inset-x-10 -bottom-10 h-40 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
