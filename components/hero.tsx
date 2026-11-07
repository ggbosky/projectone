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

// iPhone 15 Pro, natural titanium. Everything is sized in container units (cqw of the hero stage),
// so the device keeps its real proportions (71.6 × 146.6 mm) at every screen size.
function Phone({ src, alt, url, bar, className }: { src: string; alt: string; url: string; bar: string; className?: string }) {
  const button = "absolute w-[0.7cqw] rounded-[0.4cqw] bg-gradient-to-r from-[#8d8a84] to-[#5d5a55]"
  return (
    <a href={url} target="_blank" rel="noopener" className={cn("relative block w-[46cqw] aspect-[71.6/146.6]", className)}>
      {/* Side buttons: action + volume on the left, power on the right */}
      <span className={cn(button, "left-[-0.5cqw] top-[17%] h-[4.5%]")} />
      <span className={cn(button, "left-[-0.5cqw] top-[25%] h-[8%]")} />
      <span className={cn(button, "left-[-0.5cqw] top-[35%] h-[8%]")} />
      <span className={cn(button, "right-[-0.5cqw] top-[28%] h-[12%]")} />

      {/* Titanium frame */}
      <div
        className="absolute inset-0 rounded-[8.4cqw] shadow-[0_50px_90px_-30px_rgb(0_0_0/0.9),0_0_60px_-10px_oklch(0.7_0.2_40/0.35)]"
        style={{ background: "linear-gradient(135deg, #d6d2cb 0%, #8f8b85 22%, #bdb8b0 50%, #77746f 78%, #c9c5be 100%)" }}
      />
      <div className="absolute inset-[0.45cqw] rounded-[8cqw] bg-[#3a3835]" />

      {/* Black bezel + screen */}
      <div className="absolute inset-[0.8cqw] rounded-[7.7cqw] bg-black">
        <div className="absolute inset-[1.6cqw] rounded-[6.2cqw] overflow-hidden" style={{ background: bar }}>
          <img src={src} alt={alt} className="absolute inset-x-0 bottom-0 top-[6.5%] w-full h-[93.5%] object-cover object-top" />

          {/* Dynamic Island */}
          <span className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[31%] h-[3.6%] rounded-full bg-black" />
          {/* Glass reflection */}
          <span className="absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.14)_0%,transparent_32%)] pointer-events-none" />
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
      <div
        className={cn("float relative w-full aspect-square rounded-full shadow-[0_18px_40px_-16px_rgb(0_0_0/0.8)]", ring)}
        style={{ animationDuration: `${float}s` }}
      >
        <div className="absolute inset-[1.1cqw] rounded-full overflow-hidden bg-white ring-1 ring-white/10 flex items-center justify-center">
          {children}
        </div>
      </div>
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
        <div className="absolute -top-72 left-1/2 -translate-x-1/2 w-[1500px] h-[900px] bg-[radial-gradient(closest-side,oklch(0.7_0.2_40/0.16),transparent)]" />
        <div className="absolute right-[-18rem] top-20 w-[50rem] h-[44rem] bg-[radial-gradient(closest-side,oklch(0.7_0.2_40/0.10),transparent)]" />
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[100%] pointer-events-none"
            style={{ background: "radial-gradient(closest-side, oklch(0.7 0.2 40 / 0.45), oklch(0.7 0.2 40 / 0.12) 60%, transparent)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -14 }}
            animate={{ opacity: 1, y: 0, rotate: -9 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="absolute left-[8%] top-[8%] z-10"
          >
            <div className="float" style={{ animationDuration: "6s" }}>
              <Phone {...phones[0]} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 14 }}
            animate={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="absolute left-[46%] top-[1%]"
          >
            <div className="float" style={{ animationDuration: "7s", animationDelay: "-3.5s" }}>
              <Phone {...phones[1]} />
            </div>
          </motion.div>


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
