"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import type { Locale } from "@/lib/dictionary"
import { Logo } from "@/components/logo"
import { ButtonLink } from "@/components/button-link"
import { cn } from "@/lib/utils"

const locales: Locale[] = ["cs", "en"]

function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n()

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("relative inline-flex items-center p-0.5 rounded-full bg-zinc-900 border border-zinc-800", className)}
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "relative px-2.5 py-1 text-xs font-semibold uppercase tracking-wide rounded-full transition-colors",
            locale === l ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-300",
          )}
        >
          {locale === l && (
            <motion.span
              layoutId="lang-toggle"
              className="absolute inset-0 bg-white rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{l}</span>
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const { t } = useI18n()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
    >
      <nav className="relative flex items-center justify-between pl-4 pr-2 py-2 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-black/40">
        <a href="#top" aria-label="Project One">
          <Logo />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {t.nav.items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-zinc-800 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <LanguageToggle />
          <ButtonLink href="#kontakt" className="h-9 px-4 text-sm">
            {t.nav.cta}
            <ArrowUpRight className="w-4 h-4" />
          </ButtonLink>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle />
          <button
            className="p-2 text-zinc-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t.nav.menu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 p-3 rounded-3xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-800"
          >
            <div className="flex flex-col gap-1">
              {t.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-2xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink href="#kontakt" className="mt-2 h-12" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.cta}
                <ArrowUpRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
