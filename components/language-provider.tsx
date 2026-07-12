"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { content, type Locale } from "@/lib/site-data"

type LanguageContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (typeof content)[Locale] }
const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    const saved = window.localStorage.getItem("piadrol-language")
    if (saved === "fa" || saved === "en") setLocale(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr"
    window.localStorage.setItem("piadrol-language", locale)
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, t: content[locale] }), [locale])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider")
  return value
}
