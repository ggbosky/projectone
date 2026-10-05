"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"

export function Work() {
  const { t } = useI18n()

  return (
    <section id="prace" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t.work.title} sub={t.work.sub} />

        <div className="flex flex-col gap-16">
          {t.work.items.map((item) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group block"
            >
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 transition-colors duration-300 group-hover:border-zinc-700">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
                  <span className="flex gap-1.5 w-12">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </span>
                  <span className="mx-auto px-3 py-1 rounded-md bg-zinc-800/70 text-[11px] text-zinc-400 font-mono">
                    {item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                  <span className="w-12" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="mt-5 px-1">
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-ember transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">{item.type}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
