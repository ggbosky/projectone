"use client"

import { useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import type { Locale } from "@/lib/dictionary"
import { Logo } from "@/components/logo"
import { FlagCZ, FlagGB } from "@/components/flags"
import { ButtonLink } from "@/components/button-link"
import { cn } from "@/lib/utils"

const locales: { id: Locale; label: string; Flag: typeof FlagCZ }[] = [
  { id: "cs", label: "Čeština", Flag: FlagCZ },
  { id: "en", label: "English", Flag: FlagGB },
]

function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n()

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("relative inline-flex items-center p-0.5 rounded-full bg-zinc-900 border border-zinc-800", className)}
    >
      {locales.map(({ id, label, Flag }) => (
        <button
          key={id}
          type="button"
          onClick={() => setLocale(id)}
          aria-pressed={locale === id}
          aria-label={label}
          title={label}
          className="relative p-1.5 rounded-full"
        >
          {locale === id && (
            <motion.span
              layoutId="lang-toggle"
              className="absolute inset-0 bg-zinc-700 rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <Flag
            className={cn(
              "relative z-10 block w-5 h-5 rounded-full object-cover ring-1 ring-white/10 transition-all duration-300",
              locale === id ? "opacity-100" : "opacity-50 grayscale hover:opacity-90 hover:grayscale-0",
            )}
          />
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const { t } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  // Hide the navbar while scrolling down, bring it back when scrolling up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0
    const shouldHide = y > previous && y > 120
    if (shouldHide !== hidden) {
      setHidden(shouldHide)
      if (shouldHide) setMobileMenuOpen(false)
    }
  })

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={hidden ? { y: "-150%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
    >
      <nav className="relative flex items-center justify-between pl-5 pr-2 py-2 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-black/40">
        <a href="#top" aria-label="Project Two">
          <Logo />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-ember transition-colors duration-200"
            >
              {item.label}
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
                  className="px-4 py-3 text-base text-zinc-300 hover:text-ember rounded-2xl transition-colors"
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
