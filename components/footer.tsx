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
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="inline-block mb-4" aria-label="Project One">
              <Logo />
            </a>
            <p className="text-sm text-zinc-500 mb-5 max-w-xs">{t.footer.tagline}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 text-emerald-500 pulse-glow" />
              <span className="text-xs text-zinc-400">{t.footer.available}</span>
            </div>
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
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-zinc-500 hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="text-zinc-500">{site.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.socialTitle}</h4>
            <ul className="space-y-3">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
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

        <div className="mt-6 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
          <a href="#top" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
            {t.footer.backTop}
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
