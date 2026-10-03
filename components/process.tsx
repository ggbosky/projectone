"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"

export function Process() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="proces" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t.process.title} sub={t.process.sub} />

        <div ref={ref} className="relative">
          {/* Progress line (desktop: horizontal, mobile: vertical) */}
          <div className="hidden lg:block absolute top-6 left-6 right-6 h-px bg-zinc-800">
            <motion.div style={{ scaleX: progress }} className="h-full bg-ember origin-left" />
          </div>
          <div className="lg:hidden absolute top-6 bottom-6 left-6 w-px bg-zinc-800">
            <motion.div style={{ scaleY: progress }} className="w-full h-full bg-ember origin-top" />
          </div>

          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {t.process.steps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-20 lg:pl-0"
              >
                <div className="absolute left-0 top-0 lg:static w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center font-mono text-sm text-white lg:mb-8">
                  0{index + 1}
                </div>
                <div className="lg:pr-4">
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
