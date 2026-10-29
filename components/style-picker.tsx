"use client"

import { useState, type CSSProperties, type ReactNode } from "react"
import { ArrowRight, Monitor, RotateCcw, Shuffle, Smartphone } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"
import { buttonClasses } from "@/components/button-link"
import { cn } from "@/lib/utils"

/** Fired with a text summary of the design; the contact form attaches it to the inquiry. */
export const STYLE_EVENT = "p2:style"

const interTight = '"Inter Tight", sans-serif'
const inter = '"Inter", sans-serif'

// Typeface pairings built only from the brand fonts, in the order of t.styles.font.options.
const fonts: { name: string; heading: CSSProperties; body: string }[] = [
  { name: "Inter Tight", heading: { fontFamily: interTight, fontWeight: 600, letterSpacing: "-0.035em" }, body: inter },
  {
    name: "Instrument Serif",
    heading: { fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em" },
    body: inter,
  },
  {
    name: "Inter Tight",
    heading: { fontFamily: interTight, fontWeight: 600, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.95 },
    body: inter,
  },
  { name: "Inter", heading: { fontFamily: inter, fontWeight: 500, letterSpacing: "-0.02em" }, body: inter },
]

const accents = ["#ff590e", "#dc2626", "#db2777", "#7c3aed", "#2563eb", "#0891b2", "#1f8a78", "#16a34a", "#5f7553", "#b8892b", "#18181b"]

// Base palettes, in the order of t.styles.background.options. "Colourful" is derived from the accent.
const backgrounds = [
  { bg: "#ffffff", surface: "#f4f4f5", fg: "#18181b", muted: "#71717a", border: "#e4e4e7" },
  { bg: "#f5efe6", surface: "#ebe3d6", fg: "#2b2620", muted: "#7a6f62", border: "#ddd2c2" },
  { bg: "#0c0c0d", surface: "#18181b", fg: "#fafafa", muted: "#a1a1aa", border: "#27272a" },
]

// Button / card radius in px, in the order of t.styles.shape.options.
const shapes = [
  { button: 0, card: 0 },
  { button: 10, card: 16 },
  { button: 999, card: 28 },
]

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const readableOn = (hex: string) => (luminance(hex) > 0.4 ? "#111111" : "#ffffff")

type Design = { brand: string; background: number; accent: string; font: number; shape: number; layout: number }

const initial: Design = { brand: "", background: 2, accent: "#ff590e", font: 0, shape: 1, layout: 0 }

function palette(d: Design) {
  if (d.background === 3) {
    const fg = readableOn(d.accent)
    const light = fg === "#ffffff"
    return {
      bg: d.accent,
      surface: light ? "rgb(255 255 255 / 0.12)" : "rgb(0 0 0 / 0.08)",
      fg,
      muted: light ? "rgb(255 255 255 / 0.75)" : "rgb(0 0 0 / 0.65)",
      border: light ? "rgb(255 255 255 / 0.25)" : "rgb(0 0 0 / 0.15)",
      accent: fg,
      onAccent: d.accent,
    }
  }
  const base = backgrounds[d.background]
  // Keep the accent visible: near-black on a dark page or near-white on a light one would vanish.
  const tooClose = d.background === 2 ? luminance(d.accent) < 0.03 : luminance(d.accent) > 0.85
  const accent = tooClose ? base.fg : d.accent
  return { ...base, accent, onAccent: readableOn(accent) }
}

/* ------------------------------------------------------------------ */
/* Preview                                                             */
/* ------------------------------------------------------------------ */

function Preview({ design }: { design: Design }) {
  const { t } = useI18n()
  const p = t.styles.preview
  const c = palette(design)
  const f = fonts[design.font]
  const sh = shapes[design.shape]
  const brand = design.brand.trim() || t.styles.brandPlaceholder
  const ease = "transition-[background-color,color,border-color,border-radius] duration-500"

  const buttons = (
    <div className="flex flex-wrap gap-2.5">
      <span className={cn("px-5 py-2.5 text-sm font-semibold", ease)} style={{ background: c.accent, color: c.onAccent, borderRadius: sh.button }}>
        {p.primary}
      </span>
      <span className={cn("px-5 py-2.5 text-sm border", ease)} style={{ borderColor: c.border, borderRadius: sh.button }}>
        {p.secondary}
      </span>
    </div>
  )

  const art = (
    <div className={cn("relative overflow-hidden aspect-[4/3] w-full", ease)} style={{ background: c.surface, borderRadius: sh.card }} aria-hidden="true">
      <div
        className={cn("absolute w-[55%] aspect-square -right-[8%] -top-[12%]", ease)}
        style={{ background: c.accent, borderRadius: design.shape === 0 ? 0 : 999, opacity: 0.9 }}
      />
      <div
        className={cn("absolute w-[38%] aspect-square left-[12%] bottom-[10%] border-2", ease)}
        style={{ borderColor: c.fg, borderRadius: sh.card, opacity: 0.85 }}
      />
      <div className={cn("absolute left-[12%] top-[18%] h-2 w-[30%]", ease)} style={{ background: c.fg, opacity: 0.2, borderRadius: sh.button }} />
      <div className={cn("absolute left-[12%] top-[26%] h-2 w-[20%]", ease)} style={{ background: c.fg, opacity: 0.2, borderRadius: sh.button }} />
    </div>
  )

  const headline = (size: string) => (
    <h3 className={cn(size, "text-balance")} style={{ ...f.heading, lineHeight: f.heading.lineHeight ?? 1.05 }}>
      {p.headline}
    </h3>
  )

  return (
    <div className={cn("@container min-h-full", ease)} style={{ background: c.bg, color: c.fg, fontFamily: f.body }}>
      {/* Nav */}
      <div className="flex items-center justify-between gap-4 px-5 @lg:px-10 py-5 border-b" style={{ borderColor: c.border }}>
        <span className="flex items-center gap-2 min-w-0">
          <span className={cn("w-6 h-6 shrink-0", ease)} style={{ background: c.accent, borderRadius: design.shape === 2 ? 999 : sh.button / 2 }} />
          <span className="font-semibold truncate" style={{ fontFamily: f.heading.fontFamily }}>
            {brand}
          </span>
        </span>
        <span className="hidden @lg:flex items-center gap-6 text-sm" style={{ color: c.muted }}>
          {p.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className="@lg:hidden flex flex-col gap-1" aria-hidden="true">
          <span className="w-5 h-0.5" style={{ background: c.fg }} />
          <span className="w-5 h-0.5" style={{ background: c.fg }} />
        </span>
      </div>

      {/* Hero */}
      {design.layout === 0 && (
        <div className="px-5 @lg:px-10 py-14 @lg:py-20 flex flex-col items-center text-center gap-5">
          {headline("text-4xl @lg:text-6xl max-w-[16ch]")}
          <p className="max-w-md text-sm @lg:text-base" style={{ color: c.muted }}>
            {p.text}
          </p>
          <div className="mt-2">{buttons}</div>
        </div>
      )}
      {design.layout === 1 && (
        <div className="px-5 @lg:px-10 py-12 @lg:py-16 grid grid-cols-1 @lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5">
            {headline("text-4xl @lg:text-5xl")}
            <p className="text-sm @lg:text-base" style={{ color: c.muted }}>
              {p.text}
            </p>
            <div className="mt-1">{buttons}</div>
          </div>
          {art}
        </div>
      )}
      {design.layout === 2 && (
        <div className="px-5 @lg:px-10 pt-12 @lg:pt-16 pb-12">
          {headline("text-5xl @lg:text-[5.5rem]")}
          <div className="mt-8 pt-6 border-t grid grid-cols-1 @lg:grid-cols-2 gap-5 items-end" style={{ borderColor: c.border }}>
            <p className="text-sm @lg:text-base max-w-sm" style={{ color: c.muted }}>
              {p.text}
            </p>
            <div className="@lg:justify-self-end">{buttons}</div>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="px-5 @lg:px-10 pb-12 grid grid-cols-1 @lg:grid-cols-3 gap-3">
        {p.features.map((item, i) => (
          <div key={item.title} className={cn("p-5 border", ease)} style={{ background: c.surface, borderColor: c.border, borderRadius: sh.card }}>
            <span
              className={cn("flex items-center justify-center w-9 h-9 text-sm font-semibold", ease)}
              style={{ background: c.accent, color: c.onAccent, borderRadius: design.shape === 2 ? 999 : sh.button }}
            >
              {i + 1}
            </span>
            <p className="mt-4 text-lg" style={{ ...f.heading, lineHeight: 1.1 }}>
              {item.title}
            </p>
            <p className="mt-1.5 text-sm" style={{ color: c.muted }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* CTA band */}
      <div className="px-5 @lg:px-10 pb-12">
        <div
          className={cn("flex flex-col @lg:flex-row @lg:items-center justify-between gap-5 p-7 @lg:p-10", ease)}
          style={{ background: c.accent, color: c.onAccent, borderRadius: sh.card }}
        >
          <p className="text-2xl @lg:text-3xl" style={{ ...f.heading, lineHeight: 1.05 }}>
            {p.band}
          </p>
          <span
            className={cn("self-start @lg:self-auto px-5 py-2.5 text-sm font-semibold", ease)}
            style={{ background: c.onAccent, color: c.accent, borderRadius: sh.button }}
          >
            {p.bandCta}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 @lg:px-10 py-6 border-t flex items-center justify-between gap-4 text-xs" style={{ borderColor: c.border, color: c.muted }}>
        <span className="font-semibold" style={{ color: c.fg, fontFamily: f.heading.fontFamily }}>
          {brand}
        </span>
        <span>© {p.footer}</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Controls                                                            */
/* ------------------------------------------------------------------ */

// On small screens only the group of the active tab is shown; on desktop all groups are listed.
function Group({ label, active, children }: { label: string; active: boolean; children: ReactNode }) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "pb-5 lg:py-5 lg:border-t lg:border-zinc-800 lg:first:border-t-0 lg:first:pt-0",
        !active && "hidden lg:block",
      )}
    >
      <p className="mb-3 text-sm text-zinc-400">{label}</p>
      {children}
    </div>
  )
}

function Segmented({ options, value, onChange, cols }: { options: string[]; value: number; onChange: (i: number) => void; cols: string }) {
  return (
    <div className={cn("grid gap-1.5", cols)}>
      {options.map((label, i) => (
        <button
          key={label}
          type="button"
          aria-pressed={value === i}
          onClick={() => onChange(i)}
          className={cn(
            "min-h-10 py-2 px-2 rounded-xl text-sm leading-tight border transition-colors",
            value === i ? "bg-white text-zinc-950 border-white" : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export function StylePicker() {
  const { t } = useI18n()
  const s = t.styles
  const [design, setDesign] = useState<Design>(initial)
  const [mobile, setMobile] = useState(false)
  const [tab, setTab] = useState(0)
  const set = (patch: Partial<Design>) => setDesign((d) => ({ ...d, ...patch }))
  const c = palette(design)

  function shuffle() {
    const pick = (n: number) => Math.floor(Math.random() * n)
    set({
      background: pick(s.background.options.length),
      accent: accents[pick(accents.length)],
      font: pick(fonts.length),
      shape: pick(shapes.length),
      layout: pick(s.layout.options.length),
    })
  }

  function send() {
    const summary = [
      `${s.background.label}: ${s.background.options[design.background]}`,
      `${s.accent.label}: ${design.accent.toUpperCase()}`,
      `${s.font.label}: ${s.font.options[design.font]} (${fonts[design.font].name})`,
      `${s.shape.label}: ${s.shape.options[design.shape]}`,
      `${s.layout.label}: ${s.layout.options[design.layout]}`,
    ].join(" · ")
    window.dispatchEvent(new CustomEvent(STYLE_EVENT, { detail: summary }))
  }

  const cta = (
    <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <p className="text-sm text-zinc-500 max-w-sm">{s.hint}</p>
      <a href="#kontakt" onClick={send} className={buttonClasses("primary", "h-12 px-6 shrink-0")}>
        {s.cta}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )

  return (
    <section id="styl" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={s.title} sub={s.sub} />

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8 items-start">
          {/* Controls */}
          <div className="order-2 lg:order-1 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-6">
            <Group label={s.brandLabel} active>
              <input
                value={design.brand}
                onChange={(e) => set({ brand: e.target.value.slice(0, 28) })}
                placeholder={s.brandPlaceholder}
                className="w-full h-11 rounded-xl bg-zinc-950/60 border border-zinc-800 px-4 text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600 transition"
              />
            </Group>

            <div role="tablist" aria-label={s.title} className="lg:hidden grid grid-cols-4 gap-1.5 pb-4 mb-1">
              {s.tabs.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={tab === i}
                  onClick={() => setTab(i)}
                  className={cn(
                    "h-9 px-1 rounded-full text-[13px] border transition-colors",
                    tab === i ? "bg-white text-zinc-950 border-white" : "border-zinc-800 text-zinc-400",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <Group label={s.background.label} active={tab === 0}>
              <Segmented options={s.background.options} value={design.background} onChange={(i) => set({ background: i })} cols="grid-cols-4 lg:grid-cols-2" />
            </Group>

            <Group label={s.accent.label} active={tab === 0}>
              <div className="flex flex-wrap gap-2">
                {accents.map((hex) => (
                  <button
                    key={hex}
                    type="button"
                    aria-label={hex}
                    aria-pressed={design.accent === hex}
                    onClick={() => set({ accent: hex })}
                    className={cn(
                      "w-8 h-8 rounded-full ring-1 ring-white/15 transition-transform hover:scale-110",
                      design.accent === hex && "ring-2 ring-white ring-offset-2 ring-offset-zinc-900",
                    )}
                    style={{ background: hex }}
                  />
                ))}
                <label
                  title={s.accent.custom}
                  className={cn(
                    "relative w-8 h-8 rounded-full cursor-pointer ring-1 ring-white/15 overflow-hidden transition-transform hover:scale-110",
                    !accents.includes(design.accent) && "ring-2 ring-white ring-offset-2 ring-offset-zinc-900",
                  )}
                  style={{ background: "conic-gradient(#f43f5e, #f59e0b, #84cc16, #06b6d4, #6366f1, #d946ef, #f43f5e)" }}
                >
                  <span className="sr-only">{s.accent.custom}</span>
                  <input
                    type="color"
                    value={design.accent}
                    onChange={(e) => set({ accent: e.target.value })}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </label>
              </div>
            </Group>

            <Group label={s.font.label} active={tab === 1}>
              <div className="grid grid-cols-1 gap-1.5">
                {s.font.options.map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={design.font === i}
                    onClick={() => set({ font: i })}
                    className={cn(
                      "flex items-center justify-between h-11 px-4 rounded-xl border transition-colors",
                      design.font === i ? "bg-white text-zinc-950 border-white" : "border-zinc-800 text-zinc-300 hover:border-zinc-600",
                    )}
                  >
                    <span className="text-lg" style={{ ...fonts[i].heading, lineHeight: 1 }}>
                      {label}
                    </span>
                    <span className={cn("text-xs", design.font === i ? "text-zinc-500" : "text-zinc-600")}>{fonts[i].name}</span>
                  </button>
                ))}
              </div>
            </Group>

            <Group label={s.shape.label} active={tab === 2}>
              <div className="grid grid-cols-3 gap-1.5">
                {s.shape.options.map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={design.shape === i}
                    onClick={() => set({ shape: i })}
                    className={cn(
                      "flex flex-col items-center gap-2 py-3 rounded-xl text-sm border transition-colors",
                      design.shape === i ? "bg-white text-zinc-950 border-white" : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white",
                    )}
                  >
                    <span className="w-8 h-5 border-2 border-current" style={{ borderRadius: [0, 6, 999][i] }} />
                    {label}
                  </button>
                ))}
              </div>
            </Group>

            <Group label={s.layout.label} active={tab === 3}>
              <Segmented
                options={s.layout.options}
                value={design.layout}
                onChange={(i) => set({ layout: i })}
                cols="grid-cols-3 lg:grid-cols-1"
              />
            </Group>

            <div className="pt-4 lg:pt-5 border-t border-zinc-800 flex gap-2">
              <button type="button" onClick={shuffle} className={buttonClasses("outline", "flex-1 h-10 px-4 text-sm hover:[&_svg]:translate-x-0")}>
                <Shuffle className="w-4 h-4" />
                {s.shuffle}
              </button>
              <button
                type="button"
                onClick={() => setDesign(initial)}
                className={buttonClasses("ghost", "h-10 px-4 text-sm hover:[&_svg]:translate-x-0")}
              >
                <RotateCcw className="w-4 h-4" />
                {s.reset}
              </button>
            </div>
            <div className="lg:hidden">{cta}</div>
          </div>

          {/* Preview */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 min-w-0">
            <div className="hidden lg:flex items-center justify-between gap-4 mb-3">
              <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-zinc-800" role="group">
                {[Monitor, Smartphone].map((Icon, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={mobile === (i === 1)}
                    aria-label={s.device[i]}
                    onClick={() => setMobile(i === 1)}
                    className={cn(
                      "flex items-center gap-2 h-8 px-3.5 rounded-full text-sm transition-colors",
                      mobile === (i === 1) ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{s.device[i]}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {[c.bg, c.surface, c.accent, c.fg].map((col, i) => (
                  <span key={i} className="w-5 h-5 rounded-full ring-1 ring-white/20 transition-colors duration-500" style={{ background: col }} />
                ))}
              </div>
            </div>

            <div
              className={cn(
                "mx-auto rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60 transition-[max-width] duration-500 ease-out",
                mobile ? "max-w-[360px]" : "max-w-full",
              )}
            >
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div data-lenis-prevent className="h-[300px] sm:h-[460px] lg:h-[600px] overflow-y-auto overscroll-contain">
                <Preview design={design} />
              </div>
            </div>

            <div className="hidden lg:block">{cta}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
