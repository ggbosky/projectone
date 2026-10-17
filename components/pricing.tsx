"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"
import { ButtonLink } from "@/components/button-link"
import { cn } from "@/lib/utils"

type Tab = "web" | "care"

export function Pricing() {
  const { t } = useI18n()
  const [tab, setTab] = useState<Tab>("web")
  const plans = t.pricing[tab]

  return (
    <section id="cenik" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="05" label={t.nav.items[3].label} title={t.pricing.title} sub={t.pricing.sub} className="mb-10" />

        <div className="flex md:ml-[calc((100%-3rem)/3+3rem)] mb-12">
          <div className="inline-flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800">
            {(["web", "care"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                aria-pressed={tab === key}
                className={cn(
                  "relative px-6 py-2 text-sm font-medium rounded-full transition-colors",
                  tab === key ? "text-white" : "text-zinc-400 hover:text-zinc-200",
                )}
              >
                {tab === key && (
                  <motion.span
                    layoutId="pricing-toggle"
                    className="absolute inset-0 bg-zinc-800 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.pricing.tabs[key]}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {plans.map((plan) => {
              const highlighted = "highlighted" in plan && plan.highlighted
              return (
                <div
                  key={plan.name}
                  className={cn(
                    "relative flex flex-col p-7 sm:p-8 rounded-2xl border transition-colors duration-300",
                    highlighted
                      ? "bg-zinc-900 border-ember"
                      : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700",
                  )}
                >
                  {highlighted && (
                    <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-ember" aria-hidden="true" />
                  )}

                  <div className={cn("mb-6 pb-6 border-b", highlighted ? "border-ember/30" : "border-zinc-800")}>
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className={cn("font-display text-3xl font-semibold tracking-tight", highlighted ? "text-ember" : "text-white")}>
                        {plan.name}
                      </h3>
                      {highlighted && (
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ember whitespace-nowrap">
                          {t.pricing.popular}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                        <Check
                          className={cn("w-4 h-4 mt-0.5 shrink-0", highlighted ? "text-ember" : "text-zinc-500")}
                          strokeWidth={2}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href="#kontakt"
                    variant={highlighted ? "accent" : "outline"}
                    className={cn("mt-auto w-full h-11", !highlighted && "bg-zinc-800/60")}
                  >
                    {plan.cta}
                  </ButtonLink>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
