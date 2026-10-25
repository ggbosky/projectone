"use client"

import { useState, type CSSProperties } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"
import { buttonClasses } from "@/components/button-link"
import { cn } from "@/lib/utils"

/** Fired when a visitor picks a style; the contact form listens and attaches it to the inquiry. */
export const STYLE_EVENT = "p2:style"

type Theme = {
  bg: string
  surface: string
  fg: string
  muted: string
  accent: string
  accentFg: string
  font: string
  headline: CSSProperties
  radius: number
  align: "left" | "center"
  /** Index into t.work.items — the real project the style comes from. */
  work: number
}

const themes: Theme[] = [
  {
    bg: "#09090b",
    surface: "#18181b",
    fg: "#fafafa",
    muted: "#71717a",
    accent: "#22d3ee",
    accentFg: "#09090b",
    font: "var(--font-mona), sans-serif",
    headline: { fontStretch: "125%", fontWeight: 600, letterSpacing: "0.02em" },
    radius: 999,
    align: "center",
    work: 0,
  },
  {
    bg: "#dc2626",
    surface: "#ffffff",
    fg: "#ffffff",
    muted: "#fecaca",
    accent: "#0a0a0a",
    accentFg: "#ffffff",
    font: "var(--font-mona), sans-serif",
    headline: { fontStretch: "75%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 0.9 },
    radius: 0,
    align: "left",
    work: 1,
  },
  {
    bg: "#f4eee4",
    surface: "#e7ddcd",
    fg: "#2e3a2c",
    muted: "#7d806f",
    accent: "#5f7553",
    accentFg: "#f4eee4",
    font: "Georgia, 'Times New Roman', serif",
    headline: { fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em" },
    radius: 999,
    align: "center",
    work: 2,
  },
  {
    bg: "#f6f3ef",
    surface: "#ffffff",
    fg: "#0f3d36",
    muted: "#6b7c78",
    accent: "#1f8a78",
    accentFg: "#ffffff",
    font: "var(--font-mona), sans-serif",
    headline: { fontWeight: 700, letterSpacing: "-0.03em" },
    radius: 12,
    align: "left",
    work: 3,
  },
]

function Mockup({
  theme,
  copy,
  brand,
  nav,
  more,
}: {
  theme: Theme
  copy: { headline: string; text: string; button: string }
  brand: string
  nav: string[]
  more: string
}) {
  const center = theme.align === "center"
  const radius = theme.radius === 999 ? 999 : theme.radius
  return (
    <div className="absolute inset-0 flex flex-col p-5 sm:p-8" style={{ background: theme.bg, color: theme.fg, fontFamily: theme.font }}>
      <div className="flex items-center justify-between text-[11px] sm:text-xs">
        <span className="font-semibold tracking-wide">{brand}</span>
        <span className="hidden sm:flex gap-5" style={{ color: theme.muted }}>
          {nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
      </div>

      <div className={cn("flex-1 flex flex-col justify-center", center ? "items-center text-center" : "items-start")}>
        <p className="text-[2rem] sm:text-5xl lg:text-6xl leading-[1.02] max-w-[16ch]" style={theme.headline}>
          {copy.headline}
        </p>
        <p className="mt-3 sm:mt-4 text-xs sm:text-base max-w-[34ch]" style={{ color: theme.muted }}>
          {copy.text}
        </p>
        <div className="mt-5 sm:mt-7 flex gap-2.5">
          <span
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-sm font-semibold"
            style={{ background: theme.accent, color: theme.accentFg, borderRadius: radius }}
          >
            {copy.button}
          </span>
          <span
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-sm border"
            style={{ borderColor: theme.muted, borderRadius: radius }}
          >
            {more}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-10 sm:h-16"
            style={{
              background: theme.surface,
              opacity: theme.surface === "#ffffff" && theme.bg === "#dc2626" ? 0.15 + i * 0.1 : 0.9,
              borderRadius: theme.radius === 999 ? 16 : theme.radius,
              boxShadow: theme.radius === 12 ? "0 8px 24px -12px rgb(15 61 54 / 0.25)" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function StylePicker() {
  const { t } = useI18n()
  const s = t.styles
  const [selected, setSelected] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const active = hovered ?? selected
  const theme = themes[active]
  const work = t.work.items[theme.work]

  function choose() {
    window.dispatchEvent(new CustomEvent(STYLE_EVENT, { detail: selected }))
  }

  return (
    <section id="styl" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={s.title} sub={s.sub} />

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.4fr] gap-6 lg:gap-10 items-start">
          {/* Options */}
          <div
            role="radiogroup"
            aria-label={s.title}
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0 snap-x"
            onMouseLeave={() => setHovered(null)}
          >
            {s.items.map((item, i) => {
              const th = themes[i]
              const isSelected = selected === i
              return (
                <button
                  key={item.name}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={(e) => {
                    setSelected(i)
                    e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "group relative shrink-0 w-[78%] sm:w-[46%] lg:w-full snap-start text-left rounded-2xl border p-5 transition-all duration-300",
                    isSelected
                      ? "border-ember bg-zinc-900 shadow-[0_12px_40px_-20px_oklch(0.7_0.2_40/0.9)]"
                      : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900",
                  )}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-display font-semibold text-white">{item.name}</span>
                    <span className="flex -space-x-1.5 shrink-0" aria-hidden="true">
                      {[th.bg, th.surface, th.accent, th.fg].map((c, k) => (
                        <span key={k} className="w-4 h-4 rounded-full ring-1 ring-white/20" style={{ background: c }} />
                      ))}
                    </span>
                  </span>
                  <span className="mt-2 block text-sm text-zinc-500">{item.tags.join(" · ")}</span>
                </button>
              )
            })}
          </div>

          {/* Live preview */}
          <div>
            <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
                <span className="flex gap-1.5 w-12">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </span>
                <span className="mx-auto px-3 py-1 rounded-md bg-zinc-800/70 text-[11px] text-zinc-400 font-mono">
                  {s.items[active].name}
                </span>
                <span className="w-12" />
              </div>
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Mockup theme={theme} copy={s.items[active]} brand={s.brand} nav={s.nav} more={s.more} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href={work.url}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <img
                  src={work.image}
                  alt=""
                  className="w-16 aspect-[16/10] rounded-md object-cover object-top border border-zinc-800"
                />
                <span>
                  {s.reference}{" "}
                  <span className="text-white group-hover:text-ember transition-colors">
                    {work.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#kontakt" onClick={choose} className={buttonClasses("primary", "h-12 px-6")}>
                {s.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
