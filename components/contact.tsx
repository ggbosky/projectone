"use client"

import { useState, type FormEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Check, Mail, Phone } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { site } from "@/lib/site"
import { buttonClasses } from "@/components/button-link"
import { cn } from "@/lib/utils"

const inputClasses =
  "w-full rounded-2xl bg-zinc-950/60 border border-zinc-800 px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600 focus:ring-4 focus:ring-ember/10 transition"

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "px-4 py-2 rounded-full text-sm border transition-colors",
        active ? "bg-white text-zinc-950 border-white" : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white",
      )}
    >
      {children}
    </button>
  )
}

export function Contact() {
  const { t } = useI18n()
  const c = t.contact
  const [types, setTypes] = useState<number[]>([])
  const [budget, setBudget] = useState<number | null>(null)
  const [sent, setSent] = useState(false)

  function toggleType(index: number) {
    setTypes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Zatím odesíláme přes mailto. Pro odesílání na server stačí nahradit tuto funkci
  // voláním API (např. Resend, Formspree nebo vlastní route handler).
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const lines = [
      `${c.name}: ${data.get("name")}`,
      `${c.email}: ${data.get("email")}`,
      data.get("company") ? `${c.company}: ${data.get("company")}` : null,
      types.length ? `${c.type} ${types.map((i) => c.types[i]).join(", ")}` : null,
      budget !== null ? `${c.budget}: ${c.budgets[budget]}` : null,
      "",
      String(data.get("message") ?? ""),
    ].filter((l) => l !== null)

    const href = `mailto:${site.email}?subject=${encodeURIComponent(`${c.subject} — ${data.get("name")}`)}&body=${encodeURIComponent(lines.join("\n"))}`
    window.location.href = href
    setSent(true)
  }

  function reset() {
    setSent(false)
    setTypes([])
    setBudget(null)
  }

  return (
    <section id="kontakt" className="relative py-24 px-4 scroll-mt-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-ember/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:pt-6"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 text-balance">
            {c.title} <span className="text-ember">{c.titleAccent}</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-md">{c.sub}</p>

          <div className="space-y-3">
            <p className="text-sm text-zinc-500">{c.direct}</p>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white hover:text-ember transition-colors w-fit">
              <span className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </span>
              <span className="font-display text-lg">{site.email}</span>
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-white hover:text-ember transition-colors w-fit"
            >
              <span className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              <span className="font-display text-lg">{site.phone}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-16 min-h-[480px]"
              >
                <div className="w-16 h-16 rounded-full bg-ember text-zinc-950 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">{c.sentTitle}</h3>
                <p className="text-zinc-400 max-w-sm mb-8">
                  {c.sentText}{" "}
                  <a href={`mailto:${site.email}`} className="text-white underline underline-offset-4">
                    {site.email}
                  </a>
                  .
                </p>
                <button type="button" onClick={reset} className={buttonClasses("outline", "h-11 px-6")}>
                  {c.again}
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="sr-only">{c.name}</span>
                    <input name="name" required autoComplete="name" placeholder={c.name} className={inputClasses} />
                  </label>
                  <label className="block">
                    <span className="sr-only">{c.email}</span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={c.email}
                      className={inputClasses}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="sr-only">{c.company}</span>
                    <input name="company" autoComplete="organization" placeholder={c.company} className={inputClasses} />
                  </label>
                </div>

                <fieldset>
                  <legend className="text-sm text-zinc-400 mb-3">{c.type}</legend>
                  <div className="flex flex-wrap gap-2">
                    {c.types.map((label, i) => (
                      <Chip key={label} active={types.includes(i)} onClick={() => toggleType(i)}>
                        {label}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-sm text-zinc-400 mb-3">{c.budget}</legend>
                  <div className="flex flex-wrap gap-2">
                    {c.budgets.map((label, i) => (
                      <Chip key={label} active={budget === i} onClick={() => setBudget(budget === i ? null : i)}>
                        {label}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="sr-only">{c.message}</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={c.message}
                    className={cn(inputClasses, "resize-none")}
                  />
                </label>

                <button type="submit" className={buttonClasses("primary", "w-full h-14 text-base")}>
                  {c.send}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
