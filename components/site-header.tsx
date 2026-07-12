"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Languages, Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links = [["about", t.nav.about], ["services", t.nav.services], ["logistics", t.nav.logistics], ["leadership", t.nav.leadership], ["contact", t.nav.contact]]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const switcher = <button className="language-switch" onClick={() => setLocale(locale === "en" ? "fa" : "en")} aria-label={locale === "en" ? "نمایش فارسی" : "Show English"}><Languages aria-hidden="true" /><span>{locale === "en" ? "FA" : "EN"}</span></button>

  return <header className={`site-header ${scrolled || open ? "site-header-solid" : ""}`}>
    <div className="header-inner">
      <a href="#top" className="brand" aria-label="Piadrol home"><span className="brand-mark">P</span><span>PIADROL</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
      <div className="header-actions">{switcher}<a href="#contact" className="header-cta">{t.nav.cta}<ArrowUpRight aria-hidden="true" /></a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{links.map(([id, label]) => <a onClick={() => setOpen(false)} href={`#${id}`} key={id}>{label}</a>)}<a className="mobile-cta" onClick={() => setOpen(false)} href="#contact">{t.nav.cta}<ArrowUpRight aria-hidden="true" /></a></nav>}
  </header>
}
