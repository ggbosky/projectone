"use client"

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock, Package, ShieldCheck, Sparkles, X } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { site } from "@/lib/site"
import { buttonClasses } from "@/components/button-link"
import { cn } from "@/lib/utils"

const STEPS = 5
// Index of the "Rezervace" feature, which pushes the recommendation to Premium.
const BOOKING = 1
const CARE = 4
// Reference project per visual style (indexes into t.work.items).
const REFERENCE_BY_STYLE = [0, 2, 1]

const inputClasses =
  "w-full rounded-2xl bg-zinc-950/60 border border-zinc-800 px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600 focus:ring-4 focus:ring-ember/10 transition"

/** Start / Business / Premium (indexes into t.pricing.web) derived from the answers. */
function recommendPlan(type: number | null, features: number[]) {
  if (type === null) return null
  if (type === 2 || features.includes(BOOKING)) return 2
  if (type === 1 || type === 3 || features.some((f) => f !== CARE)) return 1
  return 0
}

function OptionCard({
  active,
  onClick,
  title,
  text,
  multi,
  badge,
}: {
  active: boolean
  onClick: () => void
  title: string
  text: string
  multi?: boolean
  badge?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "group relative w-full text-left rounded-2xl border p-4 sm:p-5 transition-all duration-300",
        active
          ? "border-ember bg-ember/[0.07] shadow-[0_12px_40px_-20px_oklch(0.7_0.2_40/0.9)]"
          : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900",
      )}
    >
      <span className="flex items-start gap-4">
        <span
          className={cn(
            "mt-0.5 shrink-0 w-5 h-5 border flex items-center justify-center transition-colors",
            multi ? "rounded-md" : "rounded-full",
            active ? "bg-ember border-ember text-zinc-950" : "border-zinc-700 group-hover:border-zinc-500",
          )}
        >
          {active && <Check className="w-3 h-3" strokeWidth={3} />}
        </span>
        <span className="min-w-0">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-display font-semibold text-white">{title}</span>
            {badge && (
              <span className="text-[11px] uppercase tracking-wider font-semibold text-ember">{badge}</span>
            )}
          </span>
          <span className="block mt-1 text-sm text-zinc-400 leading-relaxed">{text}</span>
        </span>
      </span>
    </button>
  )
}

function SummaryRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="py-4 border-t border-zinc-800 first:border-t-0 first:pt-0">
      <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1.5">{label}</p>
      <div className="text-white">{children}</div>
    </div>
  )
}

export function Concierge() {
  const { t } = useI18n()
  const c = t.concierge
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [type, setType] = useState<number | null>(null)
  const [style, setStyle] = useState<number | null>(null)
  const [features, setFeatures] = useState<number[]>([])
  const [planOverride, setPlanOverride] = useState<number | null>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const recommended = recommendPlan(type, features)
  const plan = planOverride ?? recommended
  const planData = plan !== null ? t.pricing.web[plan] : null
  const reference = t.work.items[REFERENCE_BY_STYLE[style ?? 0]]
  const canContinue = (step === 0 && type !== null) || (step === 1 && style !== null) || step === 2 || step === 3

  // Lock page scroll and close on Escape while the dialog is open.
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    const previous = html.style.overflow
    html.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    return () => {
      html.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  function close() {
    setOpen(false)
    triggerRef.current?.focus()
  }

  function go(next: number) {
    setDirection(next > step ? 1 : -1)
    setStep(next)
  }

  function reset() {
    setStep(0)
    setType(null)
    setStyle(null)
    setFeatures([])
    setPlanOverride(null)
    setStatus("idle")
  }

  function toggleFeature(index: number) {
    setPlanOverride(null)
    setFeatures((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index].sort()))
  }

  const featureList = features.map((i) => c.features[i].title)

  // Same delivery path as the contact form: FormSubmit e-mails the brief to site.email.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStatus("sending")
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `${c.form.subject} — ${data.get("name")}`,
          _template: "table",
          _captcha: "false",
          _honey: data.get("_honey") ?? "",
          [c.form.name]: data.get("name"),
          [c.form.email]: data.get("email"),
          _replyto: data.get("email"),
          [c.summary.type]: type !== null ? c.types[type].title : "—",
          [c.summary.style]: style !== null ? c.styles[style].title : "—",
          [c.summary.features]: featureList.length ? featureList.join(", ") : c.summary.none,
          [c.summary.plan]: planData?.name ?? "—",
          [c.form.note]: data.get("note") || "—",
        }),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || (result && String(result.success) === "false")) throw new Error("send failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  const current = c.steps[step]

  const summary = (
    <>
      <SummaryRow label={c.summary.plan}>
        {planData ? (
          <span className="flex items-center gap-2 font-display text-2xl font-semibold">
            {planData.name}
            {plan === recommended && <Sparkles className="w-4 h-4 text-ember" />}
          </span>
        ) : (
          <span className="text-zinc-600">{c.summary.empty}</span>
        )}
        {planData && <p className="mt-1 text-sm text-zinc-400">{planData.description}</p>}
      </SummaryRow>
      <SummaryRow label={c.summary.timeline}>
        <span className="flex items-center gap-2 font-medium">
          <Clock className="w-4 h-4 text-ember" />
          {c.summary.timelineValue}
        </span>
        <p className="mt-1 text-sm text-zinc-500">{c.summary.timelineNote}</p>
      </SummaryRow>
      <SummaryRow label={c.summary.type}>
        {type !== null ? c.types[type].title : <span className="text-zinc-600">{c.summary.empty}</span>}
      </SummaryRow>
      <SummaryRow label={c.summary.style}>
        {style !== null ? c.styles[style].title : <span className="text-zinc-600">{c.summary.empty}</span>}
      </SummaryRow>
      <SummaryRow label={c.summary.features}>
        {featureList.length ? (
          <ul className="flex flex-wrap gap-2">
            <AnimatePresence initial={false}>
              {featureList.map((f) => (
                <motion.li
                  key={f}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="px-3 py-1 rounded-full text-sm bg-zinc-800 text-zinc-200"
                >
                  {f}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        ) : (
          <span className="text-zinc-600">{c.summary.none}</span>
        )}
      </SummaryRow>
    </>
  )

  return (
    <>
      <motion.button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: open ? 0 : 1, y: open ? 20 : 0 }}
        transition={{ duration: 0.5, delay: open ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-haspopup="dialog"
        className="concierge-trigger group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 h-12 pl-4 pr-5 rounded-full bg-zinc-900/60 backdrop-blur-xl border border-white/10 text-sm font-medium text-white shadow-2xl shadow-black/50 transition-colors hover:bg-zinc-900/80"
      >
        <Sparkles className="w-4 h-4 text-ember transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
        <span className="sm:hidden">{c.triggerShort}</span>
        <span className="hidden sm:inline">{c.trigger}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="concierge"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/70 backdrop-blur-md lg:p-8"
            onMouseDown={(e) => e.target === e.currentTarget && close()}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="concierge-title"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full lg:h-[min(780px,100%)] max-w-6xl grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] overflow-hidden bg-zinc-950 lg:rounded-3xl lg:border lg:border-zinc-800 shadow-2xl shadow-black"
            >
              {/* Left: the conversation */}
              <div className="flex flex-col min-h-0">
                <header className="shrink-0 px-5 sm:px-8 pt-5 sm:pt-7 pb-5 border-b border-zinc-800/80">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="shrink-0 w-10 h-10 rounded-full bg-ember/10 border border-ember/30 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-ember" />
                      </span>
                      <div className="min-w-0">
                        <h2 id="concierge-title" className="font-display font-semibold text-white truncate">
                          {c.title}
                        </h2>
                        <p className="hidden sm:block text-sm text-zinc-500 truncate">{c.subtitle}</p>
                      </div>
                    </div>
                    <button
                      ref={closeRef}
                      type="button"
                      onClick={close}
                      aria-label={c.close}
                      className="shrink-0 w-10 h-10 rounded-full border border-zinc-800 text-zinc-400 flex items-center justify-center hover:text-white hover:border-zinc-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5" aria-hidden="true">
                    {c.steps.map((s, i) => (
                      <div key={s.label} className="flex-1 h-1 rounded-full bg-zinc-800 overflow-hidden">
                        <motion.div
                          className="h-full bg-ember"
                          initial={false}
                          animate={{ width: i <= step ? "100%" : "0%" }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-zinc-500">
                    {c.step} {step + 1} {c.of} {STEPS} · <span className="text-zinc-300">{current.label}</span>
                  </p>

                  {/* Compact live summary for small screens */}
                  <div className="lg:hidden mt-4 flex items-center gap-4 text-sm text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Package className="w-4 h-4 text-ember" />
                      <span className="text-white">{planData?.name ?? "—"}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-ember" />
                      {c.summary.timelineValue}
                    </span>
                    {features.length > 0 && <span>+{features.length}</span>}
                  </div>
                </header>

                <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 sm:px-8 py-7">
                  <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                      key={status === "sent" ? "sent" : step}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -24 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {status === "sent" ? (
                        <div className="flex flex-col items-center justify-center text-center py-16">
                          <div className="w-16 h-16 rounded-full bg-ember text-zinc-950 flex items-center justify-center mb-6">
                            <Check className="w-8 h-8" strokeWidth={2.5} />
                          </div>
                          <h3 className="font-display text-2xl font-semibold text-white mb-3">{c.form.sentTitle}</h3>
                          <p className="text-zinc-400 max-w-sm mb-8">{c.form.sentText}</p>
                          <button
                            type="button"
                            onClick={() => {
                              close()
                              reset()
                            }}
                            className={buttonClasses("outline", "h-11 px-6")}
                          >
                            {c.form.done}
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-start gap-3 mb-7">
                            <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                              <Sparkles className="w-3 h-3 text-ember" />
                            </span>
                            <div className="rounded-2xl rounded-tl-md bg-zinc-900 border border-zinc-800 px-4 py-3">
                              <p className="font-display text-lg sm:text-xl font-semibold text-white text-balance">
                                {current.question}
                              </p>
                              <p className="mt-1 text-sm text-zinc-400">{current.hint}</p>
                            </div>
                          </div>

                          {step === 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {c.types.map((o, i) => (
                                <OptionCard
                                  key={o.title}
                                  {...o}
                                  active={type === i}
                                  onClick={() => {
                                    setType(i)
                                    setPlanOverride(null)
                                  }}
                                />
                              ))}
                            </div>
                          )}

                          {step === 1 && (
                            <div className="grid grid-cols-1 gap-3">
                              {c.styles.map((o, i) => (
                                <OptionCard key={o.title} {...o} active={style === i} onClick={() => setStyle(i)} />
                              ))}
                            </div>
                          )}

                          {step === 2 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {c.features.map((o, i) => (
                                <OptionCard
                                  key={o.title}
                                  {...o}
                                  multi
                                  active={features.includes(i)}
                                  onClick={() => toggleFeature(i)}
                                />
                              ))}
                            </div>
                          )}

                          {step === 3 && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 gap-3">
                                {t.pricing.web.map((p, i) => (
                                  <OptionCard
                                    key={p.name}
                                    title={p.name}
                                    text={p.description}
                                    badge={i === recommended ? c.recommended : undefined}
                                    active={plan === i}
                                    onClick={() => setPlanOverride(i)}
                                  />
                                ))}
                              </div>

                              <a
                                href={reference.url}
                                target="_blank"
                                rel="noopener"
                                className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3 hover:border-zinc-600 transition-colors"
                              >
                                {reference.image && (
                                  <img
                                    src={reference.image}
                                    alt=""
                                    className="w-28 sm:w-36 aspect-[16/10] shrink-0 rounded-xl object-cover object-top border border-zinc-800"
                                  />
                                )}
                                <span className="min-w-0 flex-1">
                                  <span className="block text-xs uppercase tracking-wider text-zinc-500">
                                    {c.reference}
                                  </span>
                                  <span className="block mt-1 font-display font-semibold text-white truncate">
                                    {reference.url?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                                  </span>
                                  <span className="mt-1 inline-flex items-center gap-1 text-sm text-zinc-400 group-hover:text-ember transition-colors">
                                    {c.referenceCta}
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  </span>
                                </span>
                              </a>
                            </div>
                          )}

                          {step === 4 && (
                            <form id="concierge-form" onSubmit={handleSubmit} className="space-y-4">
                              <div className="lg:hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 mb-2">
                                {summary}
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="block">
                                  <span className="sr-only">{c.form.name}</span>
                                  <input
                                    name="name"
                                    required
                                    autoComplete="name"
                                    placeholder={c.form.name}
                                    className={inputClasses}
                                  />
                                </label>
                                <label className="block">
                                  <span className="sr-only">{c.form.email}</span>
                                  <input
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder={c.form.email}
                                    className={inputClasses}
                                  />
                                </label>
                              </div>
                              <label className="block">
                                <span className="sr-only">{c.form.note}</span>
                                <textarea
                                  name="note"
                                  rows={4}
                                  placeholder={c.form.note}
                                  className={cn(inputClasses, "resize-none")}
                                />
                              </label>
                              <input
                                type="text"
                                name="_honey"
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                                aria-hidden="true"
                              />
                              {status === "error" && (
                                <p role="alert" className="text-sm text-red-400">
                                  {c.form.error}{" "}
                                  <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                                    {site.email}
                                  </a>
                                </p>
                              )}
                              <p className="flex items-start gap-2 text-xs text-zinc-500 leading-relaxed">
                                <ShieldCheck className="w-4 h-4 mt-px shrink-0 text-zinc-600" />
                                <span>
                                  {t.contact.privacyNote}{" "}
                                  <a
                                    href={site.legal.privacyPath}
                                    className="text-zinc-300 underline underline-offset-4 decoration-zinc-700 hover:text-ember hover:decoration-ember transition-colors"
                                  >
                                    {t.contact.privacyLink}
                                  </a>
                                  .
                                </span>
                              </p>
                            </form>
                          )}
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {status !== "sent" && (
                  <footer className="shrink-0 flex items-center justify-between gap-3 px-5 sm:px-8 py-4 border-t border-zinc-800/80">
                    <button
                      type="button"
                      onClick={() => go(step - 1)}
                      disabled={step === 0}
                      className={buttonClasses("ghost", "h-11 px-4 hover:[&_svg]:-translate-x-1")}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      {c.back}
                    </button>
                    {step < STEPS - 1 ? (
                      <button
                        type="button"
                        onClick={() => go(step + 1)}
                        disabled={!canContinue}
                        className={buttonClasses("primary", "h-11 px-6")}
                      >
                        {c.next}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        form="concierge-form"
                        disabled={status === "sending"}
                        className={buttonClasses("accent", "h-11 px-6")}
                      >
                        {status === "sending" ? c.form.sending : c.form.send}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </footer>
                )}
              </div>

              {/* Right: live summary */}
              <aside className="hidden lg:flex flex-col min-h-0 border-l border-zinc-800 bg-zinc-900/50">
                <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-8">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500 mb-2">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-ember animate-ping opacity-60" />
                      <span className="relative w-2 h-2 rounded-full bg-ember" />
                    </span>
                    {c.summary.live}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-white mb-8">{c.summary.title}</h3>
                  {summary}
                </div>
                <p className="shrink-0 px-8 py-5 border-t border-zinc-800 text-sm text-zinc-500 leading-relaxed">
                  {c.summary.price}
                </p>
              </aside>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
