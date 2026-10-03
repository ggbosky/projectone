"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

export function Faq() {
  const { t } = useI18n()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-16">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} align="left" className="lg:sticky lg:top-32 self-start" />

        <div className="divide-y divide-zinc-800 border-y border-zinc-800">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                      isOpen ? "bg-ember border-ember text-zinc-950 rotate-45" : "border-zinc-700 text-zinc-400",
                    )}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-zinc-400 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
