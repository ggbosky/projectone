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
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="06" label={t.nav.items[4].label} title={t.faq.title} />

        <div className="md:ml-[calc((100%-3rem)/3+3rem)] divide-y divide-zinc-800 border-b border-zinc-800">
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
                  <Plus
                    className={cn(
                      "shrink-0 w-5 h-5 transition-all duration-300",
                      isOpen ? "rotate-45 text-ember" : "text-zinc-500 group-hover:text-white",
                    )}
                    strokeWidth={1.5}
                  />
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
