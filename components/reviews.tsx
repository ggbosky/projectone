"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"

export function Reviews() {
  const { t } = useI18n()

  return (
    <section id="recenze" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t.reviews.title} className="mb-20" />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16">
          {t.reviews.items.map((review, index) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col justify-center w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 px-8 pt-16 pb-10 text-center"
            >
              <img
                src={review.photo}
                alt={review.name}
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover object-top ring-2 ring-ember ring-offset-4 ring-offset-zinc-950"
              />
              <blockquote className="text-lg italic text-zinc-300 leading-relaxed text-balance">
                „{review.quote}“
              </blockquote>
              <figcaption className="mt-6 font-display font-semibold text-ember">
                {review.name}
                <span className="mx-2 text-zinc-600">|</span>
                {review.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
