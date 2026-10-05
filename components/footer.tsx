"use client"

import { ArrowUp } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { site } from "@/lib/site"
import { Logo } from "@/components/logo"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative border-t border-zinc-800 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="inline-block mb-4" aria-label="Project One">
              <Logo />
            </a>
            <p className="text-sm text-zinc-500 max-w-xs">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.navTitle}</h4>
            <ul className="space-y-3">
              {t.nav.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="text-zinc-500 hover:text-white transition-colors break-all">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Oversized wordmark */}
        <div
          aria-hidden="true"
          className="mt-16 font-display font-semibold tracking-tighter leading-none text-[22vw] md:text-[13.5rem] text-center bg-gradient-to-b from-zinc-800 to-zinc-950 bg-clip-text text-transparent select-none"
        >
          Project One
        </div>

        <div className="mt-6 pt-8 border-t border-zinc-800 flex justify-center">
          <a
            href="#top"
            aria-label={t.footer.backTop}
            title={t.footer.backTop}
            className="group w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-950 hover:bg-ember hover:border-ember transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
