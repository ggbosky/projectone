"use client"

import { motion } from "framer-motion"
import { BarChart3, CalendarCheck, Gauge, LifeBuoy, PenTool, Smartphone } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"

export function Services() {
  const { t } = useI18n()
  const s = t.services
  const items = [
    { icon: PenTool, ...s.design },
    { icon: CalendarCheck, ...s.dev },
    { icon: Smartphone, ...s.responsive },
    { icon: Gauge, ...s.speed },
    { icon: BarChart3, ...s.seo },
    { icon: LifeBuoy, ...s.care },
  ]

  return (
    <section id="sluzby" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={s.title} sub={s.sub} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="p-7 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
            >
              <Icon className="w-6 h-6 text-ember mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-zinc-400 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
