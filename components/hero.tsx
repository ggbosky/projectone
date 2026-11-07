"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { LogoMark } from "@/components/logo"

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
        "block w-[47cqw] aspect-[9/19.2] rounded-[7.5cqw] bg-gradient-to-b from-zinc-500 via-zinc-700 to-zinc-600 p-[2px] shadow-[0_50px_90px_-30px_rgb(0_0_0/0.9),0_0_60px_-10px_oklch(0.7_0.2_40/0.35)]",
        className,
      )}
    >
      <div className="w-full h-full rounded-[calc(7.5cqw-2px)] bg-zinc-950 p-[1.7cqw]">
      {/* Screen: status-bar strip in the site's own colour, then the site itself */}
      <div className="relative w-full h-full rounded-[5.9cqw] overflow-hidden" style={{ background: bar }}>
        <img src={src} alt={alt} className="absolute inset-x-0 bottom-0 top-[7%] w-full h-[93%] object-cover object-top" />
        <span className="absolute top-[1.6%] left-1/2 -translate-x-1/2 w-[32%] h-[3.2%] rounded-full bg-zinc-900" />
      </div>
      </div>
    </a>
  )
}

// Floating bubbles around the phones: positions (in % of the phone area), size and tint.
const bubbles = [
  { pos: "left-[2%] top-[6%]", size: "w-[17cqw]", ring: "bg-emerald-200/15", delay: 0.9, float: 5 },
  { pos: "left-[-3%] top-[42%]", size: "w-[14cqw]", ring: "bg-amber-200/15", delay: 1.05, float: 6 },
  { pos: "left-[4%] top-[80%]", size: "w-[17cqw]", ring: "bg-rose-200/15", delay: 1.2, float: 7 },
  { pos: "right-[-2%] top-[16%]", size: "w-[17cqw]", ring: "bg-sky-200/15", delay: 1.35, float: 5.5 },
]

function Bubble({
  className,
  ring,
  delay,
  float,
  children,
}: {
  className: string
  ring: string
  delay: number
  float: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease }}
      className={cn("absolute z-20 aspect-square", className)}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: float, repeat: Infinity, ease: "easeInOut" }}
        className={cn("w-full h-full rounded-full p-[1.1cqw] backdrop-blur-sm shadow-[0_18px_40px_-16px_rgb(0_0_0/0.8)]", ring)}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-white ring-1 ring-white/10 flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const { t, locale } = useI18n()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-zinc-950 text-white px-4 pt-32 sm:pt-36 pb-20 lg:pb-28"
    >
      {/* Ember light from above, like the rest of the site */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1100px] h-[620px] rounded-full bg-ember/[0.16] blur-[140px]" />
        <div className="absolute right-[-12rem] top-40 w-[36rem] h-[30rem] rounded-full bg-ember/[0.10] blur-[130px]" />
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
            className="mt-9 text-lg sm:text-xl text-zinc-400 max-w-md mx-auto leading-relaxed text-balance"
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
              className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-white text-zinc-950 font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember hover:shadow-[0_12px_40px_-12px_oklch(0.7_0.2_40/0.8)]"
            >
              {t.hero.primary}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Client sites on phones */}
        <div
          className="@container relative mx-auto w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[540px] aspect-[1/1.12]"
          aria-label={t.hero.previews}
        >
          {/* Warm light behind the phones so they stand out from the dark page */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[90%] rounded-full pointer-events-none blur-[60px]"
            style={{ background: "radial-gradient(closest-side, oklch(0.7 0.2 40 / 0.45), oklch(0.7 0.2 40 / 0.12) 60%, transparent)" }}
          />
          <motion.div
            style={{ transformPerspective: 1200 }}
            initial={{ opacity: 0, y: 60, rotate: -14, rotateY: 14 }}
            animate={{ opacity: 1, y: 0, rotate: -9, rotateY: 8, rotateX: 3 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="absolute left-[8%] top-[8%] z-10"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <Phone {...phones[0]} />
            </motion.div>
          </motion.div>

          <motion.div
            style={{ transformPerspective: 1200 }}
            initial={{ opacity: 0, y: 60, rotate: 14, rotateY: -14 }}
            animate={{ opacity: 1, y: 0, rotate: 8, rotateY: -8, rotateX: 3 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="absolute left-[46%] top-[1%]"
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
            className="absolute z-20 right-[0%] top-[78%] px-[4cqw] py-[1.8cqw] rounded-[2.4cqw] bg-ember text-white font-accent text-[6.5cqw] leading-tight whitespace-nowrap shadow-[0_18px_40px_-14px_rgb(255_89_14/0.7)]"
          >
            {t.hero.sticker}
          </motion.a>

          {/* Client faces and logos */}
          {t.reviews.items.map((r, i) => (
            <Bubble key={r.name} className={cn(bubbles[i].pos, bubbles[i].size)} {...bubbles[i]}>
              <img src={r.photo} alt={r.name} className="w-full h-full object-cover object-top" />
            </Bubble>
          ))}
          <Bubble
            className="left-[34%] top-[-2%] w-[11cqw]"
            ring="bg-ember/20"
            delay={1.5}
            float={6.5}
          >
            <LogoMark className="h-[45%]" />
          </Bubble>
        </div>
      </div>
    </section>
  )
}
