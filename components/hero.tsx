"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import type { Dictionary } from "@/lib/dictionary"
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

type MockupCopy = Dictionary["hero"]["mockup"]

/* A sample client website (desktop + phone) that shows what we deliver */
function SiteMockup({ copy }: { copy: MockupCopy }) {
  return (
    <div className="relative">
      {/* Desktop browser */}
      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/60 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/70 text-[11px] text-zinc-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            ateliernord.cz
          </div>
          <span className="w-12" />
        </div>

        <div className="bg-[#f6f1ea] text-[#1f1a16] px-5 sm:px-10 pt-5 pb-8 sm:pb-10">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <span className="font-display font-semibold tracking-tight text-sm sm:text-base">Ateliér Nord</span>
            <div className="hidden sm:flex gap-6 text-xs text-[#1f1a16]/60">
              {copy.nav.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#1f1a16] text-[#f6f1ea] text-[10px] sm:text-xs">{copy.navCta}</span>
          </div>

          <div className="grid grid-cols-12 gap-5 sm:gap-8 items-center">
            <div className="col-span-12 sm:col-span-6 text-left">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#b5603a] mb-3">{copy.kicker}</p>
              <p className="font-display text-2xl sm:text-4xl leading-[1.05] font-semibold tracking-tight mb-4">{copy.headline}</p>
              <p className="text-xs sm:text-sm text-[#1f1a16]/60 mb-5 max-w-xs">{copy.text}</p>
              <div className="flex gap-2">
                <span className="px-4 py-2 rounded-full bg-[#b5603a] text-white text-[10px] sm:text-xs font-medium">{copy.primary}</span>
                <span className="px-4 py-2 rounded-full border border-[#1f1a16]/20 text-[10px] sm:text-xs">{copy.secondary}</span>
              </div>
            </div>
            <div className="hidden sm:block col-span-6 relative aspect-[5/4] rounded-2xl overflow-hidden bg-[#d9c7b0]">
              {/* Abstract interior: arched window, sofa, lamp */}
              <div className="absolute left-[12%] top-[10%] w-[34%] h-[62%] rounded-t-full bg-[#efe4d4]" />
              <div className="absolute left-[16%] top-[16%] w-[26%] h-[52%] rounded-t-full bg-gradient-to-b from-[#f9d9b8] to-[#f0c49a]" />
              <div className="absolute right-[14%] top-[22%] w-[2px] h-[44%] bg-[#1f1a16]/60" />
              <div className="absolute right-[9%] top-[16%] w-[12%] h-[9%] rounded-t-full bg-[#b5603a]" />
              <div className="absolute left-[8%] right-[8%] bottom-[12%] h-[20%] rounded-2xl bg-[#8a5a3c]" />
              <div className="absolute left-[12%] right-[30%] bottom-[26%] h-[12%] rounded-xl bg-[#a06b49]" />
              <div className="absolute inset-x-0 bottom-0 h-[12%] bg-[#c4ad92]" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 sm:mt-10">
            {copy.cards.map((card, i) => (
              <div key={card} className="rounded-xl bg-white/70 border border-[#1f1a16]/5 p-2.5 sm:p-4 text-left">
                <div
                  className="aspect-[16/9] rounded-lg mb-2 sm:mb-3"
                  style={{
                    background: [
                      "linear-gradient(160deg,#e9d6bf 0%,#c99a74 100%)",
                      "linear-gradient(160deg,#dfe1dc 0%,#9aa39a 100%)",
                      "linear-gradient(160deg,#ecd3c4 0%,#a8644a 100%)",
                    ][i % 3],
                  }}
                />
                <span className="text-[10px] sm:text-sm font-medium">{card}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone with the mobile version */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute -right-6 lg:-right-12 -bottom-10 w-[170px] rounded-[2rem] border-[6px] border-zinc-800 bg-[#f6f1ea] text-[#1f1a16] shadow-2xl shadow-black/70 overflow-hidden"
      >
        <div className="mx-auto mt-2 mb-3 w-14 h-4 rounded-full bg-zinc-900" />
        <div className="px-3 pb-4 text-left">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display font-semibold text-[11px]">Ateliér Nord</span>
            <span className="flex flex-col gap-0.5">
              <span className="w-3 h-px bg-[#1f1a16]" />
              <span className="w-3 h-px bg-[#1f1a16]" />
            </span>
          </div>
          <p className="font-display text-[15px] leading-tight font-semibold mb-2">{copy.headline}</p>
          <p className="text-[9px] text-[#1f1a16]/60 mb-3">{copy.text}</p>
          <span className="inline-block px-3 py-1.5 rounded-full bg-[#b5603a] text-white text-[9px] mb-3">{copy.primary}</span>
          <div className="aspect-[4/3] rounded-lg bg-[#d9c7b0] relative overflow-hidden">
            <div className="absolute left-[15%] top-[12%] w-[35%] h-[60%] rounded-t-full bg-[#f0c49a]" />
            <div className="absolute left-[8%] right-[8%] bottom-[10%] h-[22%] rounded-lg bg-[#8a5a3c]" />
          </div>
        </div>
      </motion.div>

      {/* New enquiry notification */}
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 2.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:flex absolute -left-4 lg:-left-10 bottom-[18%] items-center gap-3 p-3 pr-5 rounded-2xl bg-zinc-900/90 backdrop-blur border border-zinc-700 shadow-2xl shadow-black/60 text-left"
      >
        <div className="w-9 h-9 rounded-xl bg-ember/15 text-ember flex items-center justify-center">
          <Mail className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white">{copy.toastTitle}</div>
          <div className="text-[11px] text-zinc-400">{copy.toastText}</div>
        </div>
      </motion.div>
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
    <section id="top" className="relative flex flex-col items-center px-4 pt-40 sm:pt-52 pb-16 overflow-hidden">
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

      {/* Product mockup */}
      <div ref={mockupRef} className="relative z-10 w-full max-w-5xl mx-auto mt-20 mb-10 [perspective:1600px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
            <span className="h-px w-8 bg-zinc-800" />
            {t.hero.mockup.caption}
            <span className="h-px w-8 bg-zinc-800" />
          </p>
          <motion.div style={{ rotateX, scale, transformOrigin: "center top" }}>
            <SiteMockup copy={t.hero.mockup} />
          </motion.div>
        </motion.div>
              </div>
    </section>
  )
}
