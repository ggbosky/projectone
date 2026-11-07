"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

const phones = [
  { src: "/hero/finelia-mobile.jpg", alt: "finelia.cz", url: "https://finelia.cz/", bar: "#fbefe9" },
  { src: "/hero/drexler-mobile.jpg", alt: "drexler.digital", url: "https://www.drexler.digital/", bar: "#a90a04" },
]

function Phone({ src, alt, url, bar, className }: { src: string; alt: string; url: string; bar: string; className?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className={cn(
        "block w-[168px] sm:w-[230px] lg:w-[270px] aspect-[9/19.2] rounded-[2rem] sm:rounded-[2.6rem] bg-zinc-900 p-[7px] sm:p-[9px] shadow-[0_40px_80px_-30px_rgb(60_30_10/0.45),0_0_0_1px_rgb(0_0_0/0.08)]",
        className,
      )}
    >
      {/* Screen: status-bar strip in the site's own colour, then the site itself */}
      <div className="relative w-full h-full rounded-[1.6rem] sm:rounded-[2.05rem] overflow-hidden" style={{ background: bar }}>
        <img src={src} alt={alt} className="absolute inset-x-0 bottom-0 top-[7%] w-full h-[93%] object-cover object-top" />
        <span className="absolute top-[1.6%] left-1/2 -translate-x-1/2 w-[32%] h-[3.2%] rounded-full bg-zinc-900" />
      </div>
    </a>
  )
}

export function Hero() {
  const { t, locale } = useI18n()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#f7f1e9] text-zinc-900 rounded-b-[2.5rem] sm:rounded-b-[3.5rem] px-4 pt-32 sm:pt-36 pb-20 lg:pb-24"
    >
      {/* Soft, warm light */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -left-40 bottom-[-12rem] w-[42rem] h-[32rem] rounded-full bg-[#ffd877]/50 blur-[110px]" />
        <div className="absolute right-[-10rem] top-10 w-[40rem] h-[34rem] rounded-full bg-[#ffc7a6]/50 blur-[120px]" />
        <div className="absolute left-[10%] -top-40 w-[30rem] h-[24rem] rounded-full bg-[#dbeee2]/70 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-16 lg:gap-6 items-center">
        {/* Copy */}
        <div key={locale} className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-semibold tracking-tight leading-[0.98] text-[3.1rem] sm:text-7xl lg:text-[5.6rem]"
          >
            <span className="block">{t.hero.line1}</span>
            <span className="block">{t.hero.line2}</span>
            <span className="relative inline-block mt-1 font-accent font-normal text-ember text-[1.12em] leading-none pb-[0.12em]">
              {t.hero.accent}
              {/* Hand-drawn double stroke under the accent word */}
              <svg
                viewBox="0 0 300 30"
                preserveAspectRatio="none"
                className="absolute left-[-4%] -bottom-[0.12em] w-[108%] h-[0.32em] text-ember"
                aria-hidden="true"
              >
                <motion.path
                  d="M4 20 C 70 9, 170 5, 296 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7, duration: 0.7, ease }}
                />
                <motion.path
                  d="M30 27 C 110 17, 200 15, 262 19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.15, duration: 0.55, ease }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-9 text-lg sm:text-xl text-zinc-600 max-w-md mx-auto leading-relaxed text-balance"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-9"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-zinc-900 text-white font-semibold shadow-[0_14px_30px_-12px_rgb(0_0_0/0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember"
            >
              {t.hero.primary}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Client sites on phones */}
        <div className="relative h-[400px] sm:h-[540px] lg:h-[600px]" aria-label={t.hero.previews}>
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -14 }}
            animate={{ opacity: 1, y: 0, rotate: -9 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="absolute left-1/2 top-[6%] -translate-x-[88%] z-10"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <Phone {...phones[0]} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 14 }}
            animate={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="absolute left-1/2 top-0 -translate-x-[8%]"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
              <Phone {...phones[1]} />
            </motion.div>
          </motion.div>

          <motion.a
            href="#kontakt"
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 0.6, delay: 1, ease }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute z-20 right-[4%] sm:right-[8%] lg:right-0 bottom-[2%] sm:bottom-[10%] px-5 py-2.5 rounded-xl bg-ember text-white font-accent text-2xl sm:text-3xl lg:text-4xl shadow-[0_18px_40px_-14px_rgb(255_89_14/0.7)]"
          >
            {t.hero.sticker}
          </motion.a>
        </div>
      </div>
    </section>
  )
}
