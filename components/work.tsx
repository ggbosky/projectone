"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"

// Generované náhledy projektů – nahraďte skutečnými screenshoty (např. /public/work/*.jpg).
const covers = [
  {
    bg: "bg-[radial-gradient(circle_at_20%_20%,#f5e6d3,transparent_50%),linear-gradient(135deg,#d6c4ae,#8a7660)]",
    ui: "light",
  },
  {
    bg: "bg-[radial-gradient(circle_at_70%_30%,#f97316,transparent_45%),linear-gradient(160deg,#3b1d0e,#120a06)]",
    ui: "dark",
  },
  {
    bg: "bg-[radial-gradient(circle_at_30%_70%,#34d399,transparent_45%),linear-gradient(160deg,#0c1f1a,#04100c)]",
    ui: "dark",
  },
  {
    bg: "bg-[radial-gradient(circle_at_75%_75%,#a78bfa,transparent_45%),radial-gradient(circle_at_20%_20%,#f472b6,transparent_40%),linear-gradient(160deg,#1a1033,#0a0614)]",
    ui: "dark",
  },
]

function Cover({ index, name }: { index: number; name: string }) {
  const cover = covers[index % covers.length]
  const light = cover.ui === "light"

  return (
    <div className={`absolute inset-0 ${cover.bg} transition-transform duration-700 ease-out group-hover:scale-105`}>
      <div className="absolute inset-x-8 sm:inset-x-12 top-10 sm:top-14 bottom-0 rounded-t-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 border-b-0 transition-transform duration-700 ease-out group-hover:-translate-y-2">
        <div className={light ? "h-full bg-[#faf7f2]" : "h-full bg-zinc-950/80 backdrop-blur"}>
          <div className={`flex items-center justify-between px-4 py-3 border-b ${light ? "border-black/5" : "border-white/5"}`}>
            <span className={`text-[10px] font-semibold tracking-tight ${light ? "text-zinc-900" : "text-white"}`}>{name}</span>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <span key={i} className={`h-1 w-6 rounded-full ${light ? "bg-zinc-300" : "bg-white/15"}`} />
              ))}
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className={`font-display font-semibold tracking-tight text-2xl sm:text-4xl leading-none mb-3 ${light ? "text-zinc-900" : "text-white"}`}>
              {name}
            </div>
            <div className={`h-1.5 w-2/3 rounded-full mb-1.5 ${light ? "bg-zinc-300" : "bg-white/15"}`} />
            <div className={`h-1.5 w-1/2 rounded-full mb-5 ${light ? "bg-zinc-200" : "bg-white/10"}`} />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`aspect-[4/5] rounded-lg ${light ? "bg-zinc-200" : "bg-white/5"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Real project: a screenshot inside a browser frame
function ScreenshotCover({ image, name }: { image: string; name: string }) {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,oklch(0.7_0.2_40/0.35),transparent_55%),linear-gradient(160deg,#18181b,#09090b)] transition-transform duration-700 ease-out group-hover:scale-105">
      <div className="absolute inset-x-8 sm:inset-x-12 top-10 sm:top-14 bottom-0 rounded-t-xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 border-b-0 transition-transform duration-700 ease-out group-hover:-translate-y-2">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900 border-b border-white/5">
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
        </div>
        <img src={image} alt={name} className="w-full h-full object-cover object-top" loading="lazy" />
      </div>
    </div>
  )
}

export function Work() {
  const { t } = useI18n()

  return (
    <section id="prace" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t.work.title} sub={t.work.sub} align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.work.items.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url ?? "#kontakt"}
              {...(item.url ? { target: "_blank", rel: "noopener" } : {})}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group block ${index % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
                {item.image ? (
                  <ScreenshotCover image={item.image} name={item.name} />
                ) : (
                  <Cover index={index} name={item.name} />
                )}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-zinc-950/70 backdrop-blur border border-white/10 text-xs text-white font-medium">
                  {item.result}
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                  <span className="sr-only">{t.work.view}</span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 mt-5 px-1">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-ember transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">{item.type}</p>
                </div>
                <span className="text-sm text-zinc-500 font-mono">{item.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
