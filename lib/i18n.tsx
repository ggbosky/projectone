"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import { dictionaries, type Dictionary, type Locale } from "@/lib/dictionary"

const STORAGE_KEY = "p1-locale"

type I18nContextValue = {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("cs")

  // Czech is the default; English only when the visitor picked it before.
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "en") setLocaleState("en")
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = dictionaries[locale].meta.title
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {}
  }, [])

  return <I18nContext.Provider value={{ locale, t: dictionaries[locale], setLocale }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
