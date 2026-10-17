"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"

export function Services() {
  const { t } = useI18n()
  const s = t.services
  const items = [s.design, s.dev, s.responsive, s.speed, s.seo, s.motion, s.care]

  return (
    <section id="sluzby" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" label={t.nav.items[0].label} title={s.title} sub={s.sub} />

        <ol className="border-b border-zinc-800">
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-zinc-800"
            >
              <a
                href="#kontakt"
                className="grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1fr_1.3fr_auto] items-baseline gap-x-4 md:gap-x-12 py-7 sm:py-8"
              >
                <span className="col-start-1 row-start-1 font-mono text-sm text-zinc-600 group-hover:text-ember transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-start-2 row-start-1 font-display text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {item.title}
                </h3>
                <p className="col-start-2 col-span-2 row-start-2 md:col-start-3 md:col-span-1 md:row-start-1 mt-2 md:mt-0 text-zinc-400 leading-relaxed text-pretty">
                  {item.text}
                </p>
                <ArrowUpRight
                  className="row-start-1 col-start-3 md:col-start-4 w-5 h-5 text-zinc-600 group-hover:text-ember transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
